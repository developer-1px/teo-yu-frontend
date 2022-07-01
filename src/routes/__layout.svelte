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
let isUp = true

$: if (scrollY >= 0) {
  isUp = scrollY < prevScrollY
  prevScrollY = scrollY
}
</script>


<div class="hbox font(20) p(20) gap(20) bold fixed top(0) bg(#fff) z(99999) w(100%) h(60) none .isUp:hbox! scroll-x" class:isUp>
  <div>테오의 프론트엔드</div>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/" use:useActive>#Talk6</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk5" use:useActive>#Talk5</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk4" use:useActive>#Talk4</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk3" use:useActive>#Talk3</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk2" use:useActive>#Talk2</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/talk1" use:useActive>#Talk1</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link6" use:useActive>#Link6</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link5" use:useActive>#Link5</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link4" use:useActive>#Link4</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link3" use:useActive>#Link3</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link2" use:useActive>#Link2</a>
  <a class="hover:underline pointer .active:bb(4px/hsl(100,75%,75%))" href="{base}/link1" use:useActive>#Link1</a>
  <div class="flex"></div>
  <a href="https://github.com/developer-1px/teo-yu-frontend" target="_blank" class="w(32) h(32) r(100%) clip cover" style="background-image:url(https://avatars.githubusercontent.com/u/66650330?s=400&u=f7e0583060061b825231e6aa0e23bcca76dc31c6&v=4)"></a>
</div>

<div class="h(60)"></div>

<div class:isUp>
  <slot/>
</div>

<svelte:window bind:scrollY={scrollY}/>