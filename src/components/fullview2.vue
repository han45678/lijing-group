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
    </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.viewbox {
    position: relative;
    width: 100%;
    // height: 100%;
    background: #eee;
    height: calc(100vh - 250px);

    >img {
        height: 100%;
        // max-height: calc(100vh - 250px);
        max-width: unset;
    }
}
</style>