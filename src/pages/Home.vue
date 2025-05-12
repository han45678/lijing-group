
<script setup>
import info from "@/info"
// import S2v from "@/section/s2v.vue"
// import S11 from "@/section/s11.vue"

import S1 from "@/section/s1.vue" 
import S2 from "@/section/s2.vue" 
import S3 from "@/section/s3.vue" 
import S4 from "@/section/s4.vue" 
import S5 from "@/section/s5.vue" 
import S6 from "@/section/s6.vue" 
import S7 from "@/section/s7.vue" 
import Order from "@/section/order.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 2000
    });
  };

})
</script>

<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
<!--
  'Noto_Serif_TC',serif
  'Noto_Sans_TC',sans-serif
  -->

  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#E0E0E0] text-[#000]">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
  <!--
    <S1new />
    <S1new2 /> -->
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an1 {
  to {
     transform:scale(1);opacity: 1;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
.home{
  position: relative;
  &::before{content: "";display: block;position: fixed;top: 0;left: 0;width: 100%;bottom: 0;right: 0;
background: url("@/section/s1/bg.webp") top center;
background-size: cover;
}
}
// 字體
/*
@font-face {
  font-family: 'com4f';
  src: local("COM4tFine"),local("COM4t Fine Regular"),
  url('@/section/form/com4f.ttf') format("opentype"),
}
  */

</style>

