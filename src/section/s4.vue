<script setup>
import Fullview from '../components/fullview2.vue';
</script>

<template>
  <article class="s4 relative" id="s4">
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
        <div class="cn_title block md:hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><img src="./s4/cn_title.svg" alt="title"></div>
      </div>

      <div class="content">
        <div class="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img src="./s4/pic01.webp" alt="pic">
          <p class="font-['Noto_Sans_TC'] text-[#fff]">萬丹路商圈</p>
        </div>
        <div class="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img src="./s4/pic02.webp" alt="pic">
          <p class="font-['Noto_Sans_TC'] text-[#fff]">萬丹夜市</p>
        </div>
        <div class="text font-['Noto_Sans_TC'] text-[#666]" data-aos="fade-up" data-aos-duration="1000"
          data-aos-delay="500">
          【麗晶ONE】位處大高屏核心地段，近享產業園區就業之便、逕取百業匯聚繁華之利、靜擁大面積豪景自然植感，最適居的環境、最優質的品牌、最值得您珍藏的臨路電梯名墅，進階人生就趁現在！
        </div>
        <div class="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img src="./s4/pic03.webp" alt="pic">
          <p class="font-['Noto_Sans_TC'] text-[#fff]">萬丹公園</p>
        </div>
        <div class="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img src="./s4/pic04.webp" alt="pic">
          <p class="font-['Noto_Sans_TC'] text-[#fff]">萬丹運動休閒公園</p>
        </div>
      </div>

      <!-- 引用元件 -->
      <div class="map">
        <div class="map_title block md:hidden font-['Noto_Serif_TC'] text-[#7D272B]">
          左右滑動可看全圖
        </div>
        <Fullview class="block md:hidden" />
        <img class="pc_pic hidden md:block" src="./s4/map.webp" alt="pic">
        <p class="font-['Noto_Sans_TC'] text-[#fff]">環境示意圖，僅供參考</p>
      </div>

    </div>

    <!--div class="pic_content">
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img src="./s4/img01.webp" alt="pic">
        <p class="font-['Noto_Sans_TC'] text-[#fff]">建材示意圖，僅供參考</p>
      </div>
      <div class="item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img src="./s4/img02.webp" alt="pic">
        <p class="font-['Noto_Sans_TC'] text-[#fff]">建材示意圖，僅供參考</p>
      </div>
    </div-->

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
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

    .content {
      display: flex;
      flex-wrap: wrap;
      gap: size-m(5);
      padding-top: size-m(30);

      @media screen and (min-width: 768px) {
        gap: size(15);
        padding-top: size(50);
      }

      .pic {
        width: calc(50% - size-m(2.5));
        position: relative;

        @media screen and (min-width: 768px) {
          width: calc(50% - size(7.5));
        }

        p {
          position: absolute;
          left: size-m(5);
          bottom: size-m(5);
          font-weight: 400;
          font-size: size-m(15);
          line-height: 1;
          letter-spacing: size-m(0.16);
          color: #fff;

          @media screen and (min-width: 768px) {
            left: size(15);
            bottom: size(15);
            font-size: size(15);
            letter-spacing: size(0.16);
          }
        }

        img {
          width: 100%;
        }
      }

      .text {
        width: 100%;
        font-weight: 400;
        padding-top: size-m(15);
        padding-bottom: size-m(15);
        padding-left: size-m(30);
        padding-right: size-m(30);
        font-size: size-m(13);
        line-height: size-m(22);

        @media screen and (min-width: 768px) {
          font-size: size(25);
          line-height: size(40);
          letter-spacing: 0%;
          padding-top: size(30);
          padding-bottom: size(50);
          padding-left: 0;
          padding-right: 0;
        }
      }
    }

    .map {
      position: relative;
      margin-top: size-m(10);

      @media screen and (min-width: 768px) {
        margin-top: size(15);
      }

      p {
        background-color: #000;
        font-weight: 400;
        line-height: 1;
        font-size: size-m(12);
        letter-spacing: size-m(0.16);
        padding: size-m(5) size-m(10);
        position: absolute;
        right: 0;
        bottom: 0;
        z-index: 2;

        @media screen and (min-width: 768px) {
          font-size: size(15);
          letter-spacing: size(0.16);
          padding: size(5) size(10);
        }
      }

      .map_title {
        margin-bottom: size-m(15);
        text-align: center;
        font-weight: 700;
        font-size: size-m(18);
        line-height: 1;
        letter-spacing: 0;
      }

      .pc_pic {
        width: 100%;
      }
    }
  }

  .pic_content {
    width: 100%;
    display: flex;
    gap: size-m(5);
    margin-top: size-m(50);

    @media screen and (min-width: 768px) {
      gap: size(15);
      margin-top: size(70);
    }

    .item {
      width: calc(50% - size-m(2.5));
      position: relative;

      @media screen and (min-width: 768px) {
        width: calc(50% - size(7.5));
      }

      p {
        position: absolute;
        color: #fff;
        font-weight: 400;
        line-height: 1;

        bottom: size-m(5);
        right: size-m(5);
        font-size: size-m(10);
        letter-spacing: size-m(0.16);

        @media screen and (min-width: 768px) {
          bottom: size(10);
          right: size(10);
          font-size: size(15);
          letter-spacing: size(0.16);
        }

      }

      img {
        width: 100%;
      }
    }
  }

}
</style>
