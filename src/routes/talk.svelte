<script lang="ts">
import data1 from "../../opentalk/Talk_2022.2.1 16:35-1.txt.json"
import data2 from "../../opentalk/Talk-2.txt.json"

const data = [...data1, ...data2]
const dates = data.filter(t => t.type === "(날짜)").reverse()
</script>

<div class="flex bg(#fff) hbox gap(10) p(20) scroll-x font(10) .isUp:fixed top(70) w(100%)">
  {#each dates as date}
    <a href={'#'+date.value.trim()} class="r(100) bg(#f1f1f1) pointer p(10)">{date.value}</a>
  {/each}
</div>

<div class="hbox(top+center) m(auto)">
  <div class="w(800) w(~100%) p(10)">
    {#each data as row, index}
      {#if row.type === "(날짜)"}
        <div id={row.value.trim()} class="p(20/0) font(24) bold pt(100)">{row.value}</div>
      {/if}

      {#if row.text && data[index - 1]?.nickname === row.nickname}
        <div class="hbox(top) gap(10) mt(8)">
          <div class="flex pl(40)">
            <div class="hbox(bottom) gap(4)">
              <p class="p(12/16) font(16) bg(#f1f1f1) r(10) pre w(~100%-50px) >>a:color(#4f80ff) >>a:hover:underline">{@html row.text}</p>
              <div class="font(10) c(#888)">{row.created_at?.[1]}</div>
            </div>
          </div>
        </div>
      {:else if row.text}
        <div class="hbox(top) gap(10) mt(24)">
          <div class="w(32) h(32) bg(hsl(100,75%,75%)) r(2) pack font(12) nowrap">•‿•</div>
          <div class="flex">
            <div class="font(11)">{row.nickname}</div>
            <div class="hbox(bottom) gap(4)">
              <p class="p(12/16) font(16) bg(#f1f1f1) r(10) rtl(0) pre w(~100%-50px) >>a:color(#4f80ff) >>a:hover:underline">{@html row.text}</p>
              <div class="font(10) c(#888)">{row.created_at?.[1]}</div>
            </div>
          </div>
        </div>
      {/if}

      {#if row?.ogs?.filter(Boolean).length}
        <div class="pl(40)">
          {#each (row?.ogs?.filter(Boolean) || []) as {images, title, description, url}}
            <a href={url} target="_blank" class="vbox mt(8) w(600) w(~100%) h(200~) bg(#fff) b(#000.1) r(8) clip transition(.3s) hover:box-shadow(0/0/10px/#000.1) pointer">
              {#each (images ?? []).slice(0, 1) as img}
                <img class="cover h(~480)" src={img} on:error={e => e.target.style.display='none'}/>
              {/each}
              <div class="p(16)">
                <div class="bold">{title || url}</div>
                <div class="c(#999) font(13)">
                  <div>{description || ''}</div>
                </div>
              </div>
            </a>
          {/each}
        </div>
      {/if}
    {/each}
  </div>
</div>

<style global>
</style>