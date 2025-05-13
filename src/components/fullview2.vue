
<script setup>
import BScroll from '@better-scroll/core';
import { onMounted, ref, computed, getCurrentInstance } from 'vue';

const viewbox = ref();
const viewImg = ref();
const swiped = ref(false);
const offsetRatio = 1.85;

const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());

onMounted(() => {
    viewImg.value.addEventListener('load', () => {
        if (isMobile.value) {
            let scroll = new BScroll(viewbox.value, {
                probeType: 2,
                scrollX: true,
                scrollY: true,
                disableTouch: false,
                disableMouse: false,
                bindToWrapper: true,
                eventPassthrough: "vertical",
                bounce: false,
            });

            scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);
            setTimeout(() => {
                scroll.on("scroll", () => {
                    swiped.value = true;
                });
            }, 1000);
        }
    });
});
</script>

<template>
    <div class="viewbox" ref="viewbox">
        <img ref="viewImg" src="@/section/s4/map.webp" alt="" srcset="">
        <div class="mask" v-bind:class="{ hide: swiped }" v-if="$isMobile()">
            <img src="@/components/fullview/finger.png" alt="" srcset="">
        </div>
        <!-- <p class="font-['Noto_Sans_TC'] text-[#fff]">環境示意圖，僅供參考</p> -->
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox {
    position: relative;
    width: 100%;
    height: 100%;
    background: #eee;

    >img {
        height: 100%;
        max-width: unset;
        //    background:url("@/section/s3/view.jpg") 50%;
        //    background-size: 100% auto;
    }
    // p{
    //     background-color: #000;
    //     font-weight: 400;
    //     line-height: 1;
    //     font-size: size-m(12);
    //     letter-spacing: size-m(0.16);
    //     padding: size-m(5) size-m(10);
    // }
}

// @media screen and (max-width: 767px) {
//     .viewbox {
//         height: 100%;
//         overflow: hidden;

//         img {
//             height: 100%;
//         }

//         .mask {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             left: 0;
//             top: 0;
//             z-index: 3;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             pointer-events: none;
//             opacity: 1;
//             transition: all 1s;
//             background-color: rgba($color: #008DD5, $alpha: 0.5);

//             img {
//                 height: 47px;
//             }

//             &.hide {
//                 opacity: 0;
//             }
//         }
//         p{
//         font-size: size(15);
//         letter-spacing: size(0.16);
//     }
//     }
// }
</style>