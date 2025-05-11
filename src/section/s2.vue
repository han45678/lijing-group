<template>
  <article class="s2" id="s2">
    <Fullview />
    <div class="text">環境空拍經電腦合成示意圖，僅供參考</div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s2 {
  @apply relative overflow-hidden bg-[#008DD5];
  width: 100%;
  height: size(1194);
  padding-top: 0;
  font-size: size(18);
  position: relative;
  @media screen and (max-width: 767px) {
    height: size-m(667);
    font-size: size-m(14);
    .caption {
      font-size: size-m(12);
    }
  }
  .text {
    width: size-m(225);
    height: size-m(30);
    font-weight: 400;
    font-size: size-m(12);
    line-height: 1;
    letter-spacing: size-m(0.16);
    background-color: #000;
    color: #fff;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
      width: size(295);
      height: size(40);
      font-size: size(15);
      letter-spacing: size(0.16);
    }
  }

}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue';
import Fullview from '../components/fullview.vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());
</script>