<script lang="ts">
export let data = []

const byDay = []
let links = []

data.slice().reverse().forEach(row => {
  if (row.type === "(날짜)") {
    links = []
    byDay.push({
      title: row.value,
      links
    })
  }

  if (row.ogs) {
    links.push(...row.ogs
      .filter(item => item.url !== "https://developer-1px.github.io/teo-yu-frontend/" && item.url !== "https://discord.com/invite/2pwX6y9dwj")
      .filter(item => !links.find(i => i.url === item.url)))
  }
})
</script>

{#each byDay as {title, links}}
  {#if links.length}
    <div class="p(0/20) pt(60) bold">{title}</div>
    <div class="grid gap(20) m(auto) p(20)">
      {#each links as {images, title, description, url, favicons, siteName}}
        <a href={url} target="_blank" class="vbox w(~100%) h(200~) bg(#fff) b(#000.1) r(8) clip transition(.3s) hover:box-shadow(0/0/10px/#000.1) pointer">
          {#each (images ?? []).slice(0, 1) as img}
            <img class="cover h(~240)" src={img} on:error={e => e.target.style.display='none'}/>
          {/each}
          <div class="flex vbox p(16) gap(8)">
            <div class="bold">{title || url}</div>
            <div class="flex c(#999) font(13)">
              <div class="line-clamp(5)">{description || ''}</div>
            </div>
            <div class="hbox(bottom) font(10) c(#999) gap(4)">
              <div class="contain w(16) h(16)" style="background-image: url({favicons?.[0]})"/>
              <div class="flex nowrap...">{siteName ?? ''}</div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  {/if}
{/each}

<style>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}
</style>