<template>
  <article class="s3 relative" id="s3">
    <div class="wrapper">
      <div class="title">
        <div class="title_pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <img class="hidden md:block" src="./s3/title.svg" alt="title">
          <img class="block md:hidden" src="./s3/title_m.svg" alt="title">
        </div>
        <div class="title_text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          <div class="title_text_item"><img src="./s3/en_title.svg" alt="title"></div>
          <div class="title_text_item hidden md:block"><img src="./s3/cn_title.svg" alt="title"></div>
        </div>
        <div class="cn_title block md:hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"><img src="./s3/cn_title.svg" alt="title"></div>
      </div>
      <div class="text font-['Noto_Sans_TC'] text-[#666]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
        屏東的未來，透過政府國土規劃，平衡區域發展，以南方半導體S廊帶，反轉南部產業；便捷快速的交通串連高、屏兩地，建構大高屏生活圈！<br>
        過去全台科學園區與高鐵站區所造就的房市效應經驗，有目共睹！而屏東科學園區＋高鐵站區的雙重價值，全台唯一，造就麗晶ONE更值得您盡快收藏！
      </div>
      <img class="pic1" src="./s3/icon.svg" alt="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
      <img class="pic2" src="./s3/icon2.svg" alt="pic" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
    </div>

    <div class="pic">
      <img src="./s3/bigPic.webp" alt="pic">
      <p class="font-['Noto_Sans_TC'] text-[#fff]">外觀3D示意圖，僅供參考，實際以完工為主</p>
    </div>

  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  background-color: #fff;

  .wrapper {
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
      max-width: size(1470);
    }

    @import '@/assets/style/title.scss';

    .text {
      margin-top: size-m(15);
      margin-bottom: size-m(30);

      font-size: size-m(12);
      line-height: size-m(22);

      font-weight: 400;
      letter-spacing: 0em;

      padding-left: size-m(30);
      padding-right: size-m(30);

      @media screen and (min-width: 768px) {
        margin-top: size(15);
        margin-bottom: size(70);
        font-size: size(25);
        line-height: size(40);
        padding-left: 0;
        padding-right: 0;
      }
    }

    .pic1 {
      width: 100%;
      max-width: size-m(315);
      margin-bottom: size-m(30);
      margin-left: auto;
      margin-right: auto;
      display: block;

      @media screen and (min-width: 768px) {
        max-width: size(1045);
        margin-bottom: size(70);
      }
    }

    .pic2 {
      width: 100%;
      margin-bottom: size-m(30);
      width: 100%;
      max-width: size-m(360);
      margin-left: auto;
      margin-right: auto;
      display: block;
      @media screen and (min-width: 768px) {
        margin-bottom: size(100);
      }
    }
  }

  .pic {
    position: relative;
    width: 100%;

    img {
      width: 100%;
    }

    p {
      position: absolute;
      bottom: size(10);
      right: size(10);
      font-weight: 400;
      font-size: size(15);
      line-height: 1;
      letter-spacing: size(0.16);
      color: #fff;
    }
  }
}
</style>
