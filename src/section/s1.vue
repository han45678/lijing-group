<template>
  <article class="s1 relative" id="s1">
    <img class="cloud" src="./s1/cloud.webp" alt="cloud">
    <div class="text">
      <img class="logo" src="./s1/logo.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <img class="text1" src="./s1/text1.svg" alt="text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
      <img class="text2" src="./s1/text2.svg" alt="text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
      <img class="logoicon" src="./s1/logoicon.svg" alt="logoicon" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';


.s1 {
  position: relative;
  // background-image: url(/section/s1/bg.webp);
  height: calc(100vh - 63px);
  min-height: size-m(604);
  max-height: size-m(750);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: size-m(32);
  line-height: 1.3;
  // overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 100vh;
    min-height: size(1080);
    max-height: size(1080);
    padding: 0;
  }
  .cloud{
    position: absolute;
    left: 0;
    right: 0;
    transition: 1s;
    animation: shake 17s infinite ease-in-out;
    max-width: 100%;
    top: size-m(55);
    @media screen and (min-width: 768px) {
      top: size(-150);
    }
  }
  .text{
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: size-m(150);
    @media screen and (min-width: 768px) {
      padding-top: size(225);
    }
    .logo{
      display: block;
      width: 100%;
      max-width: size-m(215);
      @media screen and (min-width: 768px) {
        max-width: size(615);
      }
    }
    .text1{
      display: block;
      width: 100%;
      max-width: size-m(300);
      margin-top: size-m(70);
      @media screen and (min-width: 768px) {
        max-width: size(840);
        margin-top: size(100);
      }
    }
    .text2{
      display: block;
      width: 100%;
      max-width: size-m(240);
      margin-top: size-m(15);
      @media screen and (min-width: 768px) {
        max-width: size(680);
      margin-top: size(40);
      }
    }
    .logoicon{
      display: block;
      width: 100%;
      max-width: size-m(220);
      margin-top: size-m(100);
      @media screen and (min-width: 768px) {
        max-width: size(530);
      margin-top: size(100);
      }
    }
  }
}


@keyframes shake {
  0%   { transform: translate(0, 0); }
  25%  { transform: translate(-5%, -5%); }
  50%  { transform: translate(5%, 5%); }
  75%  { transform: translate(-5%, 5%); }
  100% { transform: translate(0, 0); }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>