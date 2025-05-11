<script setup>
import Fullview from '../components/fullview2.vue';
</script>

<template>
  <article class="s6 relative" id="s6">
    <div class="wrapper">
      <div class="title">
        <div class="title_pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img class="hidden md:block" src="./s4/title.svg" alt="title">
          <img class="block md:hidden" src="./s4/title_m.svg" alt="title">
        </div>
        <div class="title_text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div class="title_text_item"><img src="./s4/en_title.svg" alt="title"></div>
          <div class="title_text_item hidden md:block"><img src="./s4/cn_title.svg" alt="title"></div>
        </div>
        <div class="cn_title block md:hidden"><img src="./s4/cn_title.svg" alt="title"></div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s6 {
  background-color: #fff;

  .wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
      max-width: size(1470);
    }

    @import '@/assets/style/title.scss';


    // 每個寬度不一樣這邊在設定一次
    .title {
      .title_text {
        .title_text_item {
          &:nth-child(1) {
            img {
              max-width: size-m(200);

              @media screen and (min-width: 768px) {
                max-width: size(545);
              }
            }
          }

          &:nth-child(2) {
            img {
              max-width: size(895);
            }
          }
        }
      }

      .cn_title {
        img {
          max-width: size-m(310);
        }
      }
    }

    
  }


}
</style>
