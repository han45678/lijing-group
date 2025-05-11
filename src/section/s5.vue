<script setup>
import Fullview from '../components/fullview2.vue';
</script>

<template>
  <article class="s5 relative" id="s5">
    <div class="wrapper">
      <div class="title">
        <div class="title_pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img class="hidden md:block" src="./s5/title.svg" alt="title">
          <img class="block md:hidden" src="./s5/title_m.svg" alt="title">
        </div>
        <div class="title_text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div class="title_text_item"><img src="./s5/en_title.svg" alt="title"></div>
          <div class="title_text_item hidden md:block"><img src="./s5/cn_title.svg" alt="title"></div>
        </div>
        <div class="cn_title block md:hidden"><img src="./s5/cn_title.svg" alt="title"></div>
      </div>
      <div class="logo"></div>
      <div class="text">
        麗晶相信“建材”是日常觸感的核心，【麗晶ONE】嚴選世界級精品建材，透過高品質設備，實現安全、舒適又高效的居住空間，本案採用WAFERLOCK華豐安鎖系統，開門更省力省時。衛浴設備嚴選TOTO、Villeroy & Boch、GROHE，觸感細緻、材質高級，兼具美觀、易清潔與耐用性，為生活添增質感。
      </div>
      <div class="pic">
        <div class="item">
          <img src="./s5/pic1.webp" alt="pic">
          <p>建材示意圖，僅供參考</p>
        </div>
        <div class="item">
          <img src="./s5/pic2.webp" alt="pic">
          <p>建材示意圖，僅供參考</p>
        </div>
        <div class="item">
          <img src="./s5/pic3.webp" alt="pic">
          <p>建材示意圖，僅供參考</p>
        </div>
      </div>
      <div class="author">
        <img src="./s5/author.jpg" alt="author">
        <div class="author_content">
          <div class="awards">

          </div>
          <div class="author_text"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
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
