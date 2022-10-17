import {promises as fs} from "fs"
import path from "path"
import {getLinkPreview} from "link-preview-js"

const __dirname = path.resolve()

/// Tokenizer
const lex = [["(날짜)", /(\d{4}년 \d{1,2}월 \d{1,2}일 .요일\s*)/], ["(작성일자)", /(\d{4}\. \d{1,2}\. \d{1,2}\. (?:오전|오후) \d{1,2}:\d{1,2})/], ["(operator)", /([,:] )/], ["(url)", /((?:http|https):\/\/(?:\w+:{0,1}\w*@)?\S+(?::[0-9]+)?(?:\/|\/[\w#!:.?+=&%@!\-\/])?)/], ["(unknown)", /(\s|.)/]]

const regex = new RegExp(lex.map(v => v[1].source).join("|"), "g")

let tokens = []
let token
let index = 0

const next = (id) => {
  if (id && token && token.id && token.id !== id) {
    throw new Error("Unexpected token: " + token.id + " expected: " + id)
  }

  const t = token
  token = tokens[index++]
  return t
}

const tokenize = (script) => {
  tokens = []
  index = 0

  script.replace(regex, (value, ...args) => {
    const index = args[args.length - 2]
    const type = lex[args.findIndex(v => v !== undefined)][0]
    const id = type === "(operator)" ? value : type
    tokens.push({type, id, value, index})
    return value
  })
  next()
}

const until = (...ids) => {
  const expr = []
  const push = (v) => expr.push(v)

  while (token) {
    if (ids.includes(token.id)) {
      break
    }
    push(next())
  }

  return expr
}

const encodedStr = (rawStr) => rawStr.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
  return "&#" + i.charCodeAt(0) + ";"
})

const parse = (data) => {
  tokenize(data)

  const stmt = []
  const push = (v) => stmt.push(v)

  while (token) {
    if (token.type === "(날짜)") {
      push(next())
      continue
    }

    if (token.type === "(작성일자)") {
      const t = next()

      let nickname = ""
      let text = ""
      let link = []

      const parsed = t.value.split(/(오전|오후)/)
      const created_at = [parsed[0].trim(), [parsed[1], parsed[2]].join("").trim()]

      while (token) {
        if (token.id === ", ") {
          next()
          nickname = until(": ").map(t => t.value).join("").trim()
          continue
        }

        if (token.id === ": ") {
          next()
          const parsed = until("(작성일자)", "(날짜)")
          link = parsed.filter(t => t.type === "(url)").map(v => v.value)
          text = parsed.map(t => t.type === "(url)" ? `<a href='${t.value}' target="_blank">${t.value}</a>` : encodedStr(t.value)).join("").trim()
          continue
        }

        if (token.id === "(작성일자)" || token.id === "(날짜)") {
          break
        }
        next()
      }

      t.nickname = nickname
      t.link = link
      t.text = text
      t.created_at = created_at
      push(t)
      continue
    }
    next()
  }
  return stmt
}

const getPreview = (link) => {
  return getLinkPreview(link, {
    headers: {"user-agent": "Twitterbot/1.0"}, timeout: 5 * 1000
  })
}

const run = async () => {
  const fileName = "/opentalk/Talk-14.txt"
  const data = await fs.readFile(__dirname + fileName, "utf8")
  const ret = parse(data)

  const r = ret.map(async value => {
    if (!value.link) return value
    return {
      ...value, ogs: await Promise.all(value.link.map(link => getPreview(link)
        // .then(data => data.title === "Just a moment..." ? getPreview(link) : data, e => getPreview(link))
        .catch(e => ({url: link}))))
    }
  })

  const res = await Promise.all(r).then(res => JSON.stringify(res, null, 2))

  console.log(res)

  await fs.writeFile(__dirname + fileName + ".json", res)

  console.log("done!!")
}

run()