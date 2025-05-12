<script setup>
import Fullview from '../components/fullview2.vue';
</script>

<template>
  <article class="s6 relative" id="s6">
    <div class="wrapper">
      <div class="title">
        <div class="title_pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img class="hidden md:block" src="./s6/title.svg" alt="title">
          <img class="block md:hidden" src="./s6/title_m.svg" alt="title">
        </div>
        <div class="title_text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div class="title_text_item"><img src="./s6/en_title.svg" alt="title"></div>
          <div class="title_text_item hidden md:block"><img src="./s6/cn_title.svg" alt="title"></div>
        </div>
        <div class="cn_title block md:hidden"><img src="./s6/cn_title.svg" alt="title"></div>
      </div>
      <div class="text">
        <p class="text-[#666]">林子森建築師於1983年創立「林子森建築師事務所」，迄今累積超過40年的建築實務經驗，他堅信建築須經得起時間的考驗，從設計之初即注重安全、美觀與長久價值的融合。</p>

        <p class="text-[#666]">
          在其專業歷程中，獲獎無數，屢獲肯定：<br>
          ·2023第十二屆高雄厝綠建築大獎--榮獲三項大獎<br>
          ·2022園冶獎（高雄市大樓建築景觀類）--榮獲兩項<br>
          ·2021第十屆高雄厝綠建築大獎--榮獲四項殊榮<br>
          這些榮譽不僅代表建築師的設計實力與專業聲望，更彰顯其作品深獲業界與使用者的高度肯定。
        </p>
      </div>
    </div>
    <div class="pic">
      <img class="main_pic" src="./s6/pic.webp" alt="pic">
      <p><img src="./s6/txt.svg" alt="pic"></p>
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
              max-width: size-m(130);

              @media screen and (min-width: 768px) {
                max-width: size(325);
              }
            }
          }

          &:nth-child(2) {
            img {
              max-width: size(675);
            }
          }
        }
      }

      .cn_title {
        img {
          max-width: size-m(225);
        }
      }
    }

    .text {
      padding-left: size-m(30);
      padding-right: size-m(30);
      margin-top: size-m(30);
      margin-bottom: size-m(30);

      @media screen and (min-width: 768px) {
        margin-top: size(70);
        margin-bottom: size(70);
        padding-left: 0;
        padding-right: 0;
      }

      p {
        letter-spacing: 0;
        font-weight: 400;
        font-size: size-m(13);
        line-height: size-m(22);

        @media screen and (min-width: 768px) {
          font-size: size(25);
          line-height: size(40);
        }

        &:last-child {
          margin-top: size-m(15);

          @media screen and (min-width: 768px) {
            margin-top: size(30);
          }
        }
      }
    }

  }

  .pic {
    width: 100%;
    position: relative;


    .main_pic {
      width: 100%;
    }

    p {
      position: absolute;
      left: size-m(30);
      right: 0;
      bottom: size-m(20);
      margin: auto;
      img{
        width: size-m(100);
      }

      @media screen and (min-width: 768px) {
        max-width: size(1470);
        left: 0;
        bottom: size(50);
        img{
          width: size(330);
        }
      }
    }
  }
}
</style>
