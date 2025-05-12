<script setup>
import Fullview from '../components/fullview2.vue';
</script>

<template>
  <article class="s7 relative" id="s7">
    <div class="wrapper">
      <div class="title">
        <div class="title_pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img class="hidden md:block" src="./s7/title.svg" alt="title">
          <img class="block md:hidden" src="./s7/title_m.svg" alt="title">
        </div>
        <div class="title_text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div class="title_text_item"><img src="./s7/en_title.svg" alt="title"></div>
          <div class="title_text_item hidden md:block"><img src="./s7/cn_title.svg" alt="title"></div>
        </div>
        <div class="cn_title block md:hidden"><img src="./s7/cn_title.svg" alt="title"></div>
      </div>

      <div class="text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <p class="text-[#666]">
          麗晶建設深耕南臺灣25年，匠築25座經典建築，首度進駐屏東萬丹。<br>
          秉持三大核心理念，持續為土地注入美好人居價值：<br>

          <span>一、攜手大師級建築師與資深結構技師，嚴格把關建築安全，打造堅實信賴的居住環境。</span><br>
          <span>二、嚴選當地最精華地段，兼顧保值潛力與生活便利。</span><br>
          <span>三、精選安全建材，結合資深團隊施工經驗，堅持建築品質。</span><br>

          麗晶建設堅持最嚴謹的施工標準，並提供住戶體貼的即時LINE售後服務，為這片土地帶來時尚、優雅、溫柔與安全並存的新新人居美學。
        </p>
      </div>
      <div class="pic">
        <div class="item">
          <img src="./s7/pic1.webp" alt="pic">
          <p class="text-[#666]">業績｜晶硯</p>
        </div>
        <div class="item">
          <img src="./s7/pic2.webp" alt="pic">
          <p class="text-[#666]">業績｜圓山硯</p>
        </div>
        <div class="item">
          <img src="./s7/pic3.webp" alt="pic">
          <p class="text-[#666]">業績｜森學</p>
        </div>
        <div class="item big">
          <img src="./s7/pic4.webp" alt="pic">
          <p class="text-[#666]">業績｜嶼BAYHAUS</p>
        </div>
      </div>
    </div>

    <div class="big_pic">
      <img src="./s7/pic5.webp" alt="pic">
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
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
              max-width: size-m(110);

              @media screen and (min-width: 768px) {
                max-width: size(545);
              }
            }
          }

          &:nth-child(2) {
            img {
              max-width: size(475);
            }
          }
        }
      }

      .cn_title {
        img {
          max-width: size-m(165);
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
        font-weight: 400;
        letter-spacing: 0;
        font-size: size-m(13);
        line-height: size-m(22);

        @media screen and (min-width: 768px) {
          font-size: size(25);
          line-height: size(40);
        }

        span {
          line-height: size-m(22);

          @media screen and (min-width: 768px) {
            line-height: size(52);
          }
        }
      }
    }

    .pic {
      display: flex;
      flex-wrap: wrap;
      gap: size-m(10);

      @media screen and (min-width: 768px) {
        gap: size(10);
      }

      .item {
        width: calc((100% / 3) - (size-m(20) / 3));

        @media screen and (min-width: 768px) {
          width: calc((100% / 3) - (size(20) / 3));
        }

        &.big {
          width: 100%;
          margin-top: size-m(20);
          margin-bottom: size-m(15);

          @media screen and (min-width: 768px) {
            margin-top: size(50);
            margin-bottom: size(15);
          }
        }

        img {
          width: 100%;
        }

        p {
          font-weight: 400;
          letter-spacing: 0;
          font-size: size-m(12);
          line-height: 1;
          text-align: center;
          margin-top: size-m(5);

          @media screen and (min-width: 768px) {
            font-size: size(25);
            line-height: size(52);
            text-align: left;
            margin-top: size(10);
          }
        }
      }
    }
  }

  .big_pic {
    width: 100%;

    img {
      width: 100%;
    }
  }

}
</style>
