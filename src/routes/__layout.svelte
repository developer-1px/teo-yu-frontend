<script>
import "@adorable.css"
import "../../style.css"
import {base} from "$app/paths"
import {page} from "$app/stores"

const useActive = (el) => {
  page.subscribe(page => {
    el.classList.toggle("active", location.origin + page.url.pathname === el.href)
  })
}

let scrollY = 0
let prevScrollY = 0
let isUp = false

$: if (scrollY >= 0) {
  isUp = scrollY < prevScrollY
  prevScrollY = scrollY
}
</script>

<div class="hbox font(20) p(20) gap(20) bold .isUp:sticky-top bg(#fff) z(99999)" class:isUp>
  <div>테오의 프론트엔드</div>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/" use:useActive>#Link</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk" use:useActive>#Talk</a>
  <div class="flex"></div>
  <div class="w(32) h(32) r(100%) clip cover" style="background-image:url(https://avatars.githubusercontent.com/u/66650330?s=400&u=f7e0583060061b825231e6aa0e23bcca76dc31c6&v=4)"></div>
</div>

<div class:isUp>
  <slot/>
</div>

<svelte:window bind:scrollY={scrollY}/>