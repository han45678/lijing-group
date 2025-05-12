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
      <div class="logo">
        <img src="./s5/logo1.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        <img src="./s5/logo2.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <img src="./s5/logo3.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
        <img src="./s5/logo4.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
        <img src="./s5/logo5.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
        <img src="./s5/logo6.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img src="./s5/logo7.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1100">
        <img src="./s5/logo8.svg" alt="logo" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
      </div>
      <div class="text">
        麗晶相信“建材”是日常觸感的核心，【麗晶ONE】嚴選世界級精品建材，透過高品質設備，實現安全、舒適又高效的居住空間，本案採用WAFERLOCK華豐安鎖系統，開門更省力省時。衛浴設備嚴選TOTO、Villeroy &
        Boch、GROHE，觸感細緻、材質高級，兼具美觀、易清潔與耐用性，為生活添增質感。
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

    </div>
    <div class="author">

      <img class="author_pic hidden md:block" src="./s5/author.webp" alt="author">
      <img class="author_pic block md:hidden" src="./s5/author-m.webp" alt="author">

      <div class="author_content">

        <div class="awards hidden md:block">
          <img src="./s5/awards.webp" alt="author">
        </div>

        <div class="author_text">
          <p class="text-[#fff]">建築師</p>
          <h2 class="font-['Noto_Serif_TC'] text-[#D46856]">林子森 <span>Tzu-Sen Lin</span></h2>
          <ul>
            <li class="text-[#fff]">成功大學建築學士</li>
            <li class="text-[#fff]">成功大學建築碩士</li>
            <li class="text-[#fff]">台灣註冊建築師</li>
          </ul>
        </div>
      </div>

      <div class="awards-m block md:hidden">
          <img src="./s5/awards-m.webp" alt="author">
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
                max-width: size(440);
              }
            }
          }

          &:nth-child(2) {
            img {
              max-width: size(435);
            }
          }
        }
      }

      .cn_title {
        img {
          max-width: size-m(150);
        }
      }
    }

    .logo {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      margin-top: size-m(30);
      margin-bottom: size-m(30);
      padding-left: size-m(30);
      padding-right: size-m(30);

      @media screen and (min-width: 768px) {
        margin-top: size(150);
        margin-bottom: size(30);
        padding-left: 0;
        padding-right: 0;
        justify-content: space-between;
      }

      img {
        margin: size-m(15);
        max-width: calc(33.333333% - size-m(30));

        @media screen and (min-width: 768px) {
          margin: 0;
          max-width: unset;
        }
      }
    }

    .text {
      font-weight: 400;
      letter-spacing: 0%;
      color: #666666;
      font-size: size-m(13);
      line-height: size-m(22);
      margin-bottom: size-m(30);
      padding-left: size-m(30);
      padding-right: size-m(30);

      @media screen and (min-width: 768px) {
        font-size: size(25);
        line-height: size(40);
        margin-bottom: size(30);
        padding-left: 0;
        padding-right: 0;
      }
    }

    .pic {
      display: flex;
      gap: size-m(5);
      margin-bottom: size-m(70);

      @media screen and (min-width: 768px) {
        gap: size(5);
        margin-bottom: size(100);
      }

      .item {
        width: calc(100% - (size-m(10) / 3));
        position: relative;

        @media screen and (min-width: 768px) {
          width: calc(100% - (size(10) / 3));
        }

        img {
          width: 100%;
        }

        p {
          position: absolute;
          left: 0;
          right: 0;
          margin: auto;
          bottom: size-m(5);
          letter-spacing: size-m(0.16);
          font-size: size-m(8);
          line-height: 100%;
          font-weight: 400;
          text-align: center;
          color: #fff;

          @media screen and (min-width: 768px) {
            bottom: size(10);
            letter-spacing: size(0.16);
            font-size: size(15);
          }
        }
      }
    }
  }

  .author {
    position: relative;
    display: flex;
    align-items: flex-end;
    background-color: #0c0c0c;
    height: size-m(330);

    @media screen and (min-width: 768px) {
      height: auto;
    }

    .author_pic {
      width: 100%;

    }

    .author_content {
      left: size-m(30);
      top: size-m(15);
      z-index: 1;
      position: absolute;
      display: flex;
      align-items: flex-end;

      @media screen and (min-width: 768px) {
        left: size(730);
        bottom: size(100);
      }

      .awards {
        margin-right: size(30);
        width: size(360);

        img {
          width: 100%;
        }
      }

      .author_text {
        display: flex;
        flex-wrap: wrap;
        @media screen and (min-width: 768px) {
          display: block;
        }
        p {
          font-weight: 400;
          letter-spacing: 0%;
          font-size: size-m(15);
          line-height: 1;
          width:size-m(60);
          margin-top: size-m(10);
          
          @media screen and (min-width: 768px) {
            margin-top: 0;
            font-size: size(23);
            line-height: size(40);
            width:100%;
          }
        }

        h2 {
          font-weight: 700;
          letter-spacing: 0%;
          font-size: size-m(30);
          line-height: 1;
          width: calc(100% - size-m(60));
          @media screen and (min-width: 768px) {
            font-size: size(73);
            width: 100%;
          }

          span {
            font-weight: 700;
            font-size: size-m(20);
            line-height: 1;
            letter-spacing: 0%;
            width: 100%;

            @media screen and (min-width: 768px) {
              font-size: size(33);
            }
          }
        }

        ul {
          margin-top: size-m(20);
          width: 100%;
          @media screen and (min-width: 768px) {
            margin-top: size(100);
          }

          li {
            font-weight: 400;
            letter-spacing: 0;
            font-size: size-m(15);
            line-height: size-m(27);

            @media screen and (min-width: 768px) {
              font-size: size(30);
              line-height: size(67);
            }
          }
        }
      }
    }
    
  }
  .awards-m{
      position: absolute;
      width: size-m(90);
      left: size-m(150);
      bottom: size-m(15);
      img{
        width: 100%;
      }
    }
}
</style>
