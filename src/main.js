import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style/tailwind.css"
import "./assets/style/custom-aos.scss"
import router from "./router.js"

import info from "@/info"

import VueMobileDetection from "vue-mobile-detection"

import VueSplide from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css/core"

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import VueLazyload from "vue-lazyload"

import "aos/dist/aos.css"

import VueSmoothScroll from "vue3-smooth-scroll"

import Vue3TouchEvents from "vue3-touch-events";


const toastOptions = {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,
}

import { createGtm } from '@gtm-support/vue-gtm';

const app = createApp(App)
    .use(Toast, toastOptions)
    .use(VueMobileDetection)
    .use(VueSmoothScroll)
    .use(VueSplide)
    .use(router)
    .use(Vue3TouchEvents)
    .use(VueLazyload, {
        preLoad: 2,
        lazyComponent: true,
        attempt: 1,
    });

if (info.gtmCode) {
    app.use(
        createGtm({
            id: info.gtmCode,
            defer: false,
            compatibility: true,
            enabled: true,
            debug: true,
            loadScript: true,
            vueRouter: router,
            trackOnNextTick: false,
        })
    );
}

app.mount('#app');