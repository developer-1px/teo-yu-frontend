<script lang="ts">
import "@adorable.css"
import "../../style.css"
import {base} from "$app/paths"
import {page} from "$app/stores"

const indexs = Array(14).fill(0).map((_, index) => index + 1).reverse()

const useActive = (el) => {
  page.subscribe(page => {
    el.classList.toggle("active", location.origin + page.url.pathname === el.href)
  })
}

let scrollY = 0
let prevScrollY = 0
let isDown = false

$: if (scrollY >= 0) {
  isDown = scrollY > prevScrollY
  prevScrollY = scrollY
}
</script>


<div class="hbox font(14) 300 p(20) gap(20) fixed top(0) bg(--bg) z(99999) w(100%) h(60) .isDown:none scroll-x" class:isDown>
  <div class="font(16) bold">테오의 프론트엔드</div>
  {#each indexs as index}
    <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk{index}" use:useActive>#Talk{index}</a>
  {/each}
  {#each indexs as index}
    <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link{index}" use:useActive>#Link{index}</a>
  {/each}
  <div class="flex"></div>
  <a href="https://github.com/developer-1px/teo-yu-frontend" target="_blank" class="w(32) h(32) r(100%) clip cover" style="background-image:url(https://avatars.githubusercontent.com/u/66650330?s=400&u=f7e0583060061b825231e6aa0e23bcca76dc31c6&v=4)"></a>
</div>

<div class="h(60)"></div>

<div class:isDown>
  <slot/>
</div>

<svelte:window bind:scrollY={scrollY}/>