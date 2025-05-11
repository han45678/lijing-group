<template>
    <div class="nav fixed z-[100]"
        v-bind:class="{ 'r16-9': higherScreen }">
        <!-- <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div> -->
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"  v-if="$isMobile()"
            v-bind:class="{ 'open': menuOpen }">
            <!-- <p class="uppercase text-color2 z-10">menu</p> -->
            <div class="bar"></div>
        </div>
        <div class="menu flex items-center justify-center" v-bind:class="{ open: menuOpen }">
            <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div>
            <template v-for="item, i in info.navList">
            <div class="menu-item cursor-pointer text-white font-['noto_sans_tc'] " v-bind:class="{ btn2: item.type }"
                @click="scrollTo(item.target,$isMobile()?item.offsetmo?item.offsetmo:item.offset:item.offset)" v-if="!(item.name === '地圖導航' && !info.address)&&!(item.name === '立即來電' && !info.phone)">
                <span>{{ item.name }}</span>
            </div>
            </template>
            <div class="close" @click="menuOpen = !menuOpen"  v-if="$isMobile()">
            </div>
        </div>
    </div>
    <div class="gotop fixed z-[98] cursor-pointer" v-bind:class="{ show: scrollPos > 100 }" @click="scrollTo('.s1')">
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {
    right: size(114);
    top: size(51);
    .logo {
        width: size(145);
        height: size(50);
        position: absolute;
        left:1em;
    }

    .menu-btn {
        background-color: transparent;
        height: size(40);
        width: size(41.43);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

        p {
            transition: all .5s;
            font-size: size(20);
        }

        .bar {
            width: size(41.43);
            height: 3px;
            background-color: currentColor;
            position: relative;
            transition: all .5s;
            color: #fff;
            box-shadow: 0 3px 0 #0366;

            &::after {
                content: '';
                width: 100%;
                height: 3px;
                bottom: -#{size(10)};
                position: absolute;
                background-color: currentColor;
            box-shadow: 0 3px 0 #0366;
                //transform: translateX(-10%);
            }

            &::before {
                content: '';
                width: 100%;
                height: 3px;
                top: -#{size(10)};
                position: absolute;
                background-color: currentColor;
            box-shadow: 0 3px 0 #0366;
                //transform: translateX(-10%);
            }
        }

        &:hover {
            &::after {
                box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: .1);
            }

            .bar {
                &::after {
                    transform: translateX(0%);
                    box-shadow: 3px 3px 5px rgba($color: #000000, $alpha: .1);
                }

                &::before {
                    transform: translateX(0%);
                }
            }
        }

        &.open {
            transition: all .5s;
            background-color: transparent;
            width: 0;

            &::after {
                content: '';
                background-color: transparent;
                box-shadow: unset;
                width: 0%;
            }

            p {
                color: #fff;
            }
        }
    }

    .menu {
        position: fixed;
        flex-direction: row;
        top: 0;
        right: 0;
        background: #032763cc;
        width:100%;
        height: size(60);
        z-index: 5;
        padding: 0;
        font-size: size(16);
        gap: 2em;
        padding: 0 3em 0 0;
        font-weight: 700;
        backdrop-filter: blur(2px);
        justify-content:flex-end;

        .menu-item {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            // gap: size(10);
            letter-spacing: 0.1em;
            white-space: nowrap;

            img {
                width: size(43);
            }

            &:after {
                content: '';
                position: absolute;
                bottom: -5px;
                width: 0%;
                height: size(2);
                background-color: #fff;
                transition: all .35s;
            }

            &:hover {

                &:after {
                    width: 100%;
                }
            }
            &.btn2{
                background:#EF8200;
;
                border-radius: 2em;
                margin-right:-1em;
                padding:.7em 1.5em;

                &:hover {
                    background:#df6400;
                    &:after {
                        width:0;
                    }
                }
            }

        }

        &.open {
            transform: translateX(0);
        }

        .close {
            position: absolute;
            top: size(77);
            left: 50%;
            transform: translateX(-50%);
            width: size(44);
            height: size(44);
            cursor: pointer;

            img {
                width: 100%;
            }
        }

        .decor {
            position: absolute;
            width: size(330);
            top: -#{size(170)};
            left: size(22);
            z-index: 1;
            animation: rotate 10s infinite linear;

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        }

    }
}

.gotop {
    width: size(49.4);
    height: size(49.4);
    right: size(20);
    bottom: size(50);
    background-image: url('@/assets/top.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(200%);
    transition: all .5s;

    &.show {
        transform: translateY(0%);
    }
}

@media screen and (max-width:768px) {

    .gotop {
        width: size-m(34.24);
        height: size-m(34.24);
        right: size-m(20);
        bottom: size-m(80);
    }

    .nav {
        // width: size-m(350);
        right:0;
        top:0;
        // padding: 0 size-m(8);
        height:auto;
        border-radius: 9999px;

        .logo {
            width: size-m(80);
            height: size-m(42);
            transition: all .2s;
            top: size-m(13);
            left:size-m(10);

            &.open {
              //  filter: brightness(0) invert(1);
            }
        }

        .menu-btn {
            width: size-m(40);
            height: size-m(40);
            padding:0;
            font-size: size-m(20);
            margin: size-m(10);

            p {
                font-size: size-m(14);
                font-weight: 100;
            }

            .bar {
                width: size-m(32);

                &::after {
                    bottom: -#{size-m(10)};
                }

                &::before {
                    top: -#{size-m(10)};
                }
            }

            &.open {
                display: none;
                p {
                    color: #fff;
                }

                .bar {
                    height: 0;

                    &::after {
                        content: '';
                        width: 100%;
                        height: 2px;
                        bottom: 50%;
                        margin-bottom: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(135deg);
                    }

                    &::before {
                        content: '';
                        width: 100%;
                        height: 2px;
                        top: 50%;
                        margin-top: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(-135deg);
                    }
                }
            }
        }

        .menu {
            height: 100%;
          //  z-index: 0;
            transform: translateX(150%);
            transition: all .5s;
           // padding: 0;
           font-size: size-m(18);
            gap: size-m(23);
            justify-content: center;
            flex-direction: column;
        padding: 0;
          //  background-image: url('@/section/menubgm.png');

            .menu-item {

                img {
                    width: size-m(30);
                }
            &.btn2{
                margin:0 auto -.5em auto;
                padding: 0.4em 4em;
            }

            }

            &.open {
                transform: translateX(0);
                left: unset;
            }

            .decor {
                width: 30vh;
                left: 50%;
                margin-left: -15vh;
                top: -15vh;
                animation: rotate 10s infinite linear;
            }

            .close {
                position: absolute;
                left: unset;
                bottom: 0;
                transform: translateX(0);
                top: size-m(10);right: size-m(10);
                width: size-m(44);
                height: size-m(44);
                cursor: pointer;
                margin:0;
                display:flex;
                flex-direction: column;
                justify-content: center;
                align-items:center;
                &::before,&::after{content:"";background: #FFF;height: 2px;width: 100%;display: block;}
                &::before{transform: rotate(45deg);margin-bottom:-2px;}
                &::after{transform: rotate(-45deg);}
            }
        }
    }
}
</style>

<script setup>
import { inject,computed, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

const menuOpen = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const higherScreen = ref(true)

const scrollPos = ref(0)

onMounted(() => {
    const ratio = window.innerHeight / window.innerWidth

    // if (!globals.$isMobile() && ratio > 0.46875) {
    //     higherScreen.value = true
    // }

    window.addEventListener('scroll', (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollPos.value = scroll
    });
})


const smoothScroll = inject('smoothScroll')
const scrollTo = (el, offset) => {
    const targetElement = document.querySelector(el);
    if (targetElement) {
        const numericOffset = parseInt(offset) ? parseInt(offset) : 0;
        const elementRect = targetElement.getBoundingClientRect();
        const topPosition = window.pageYOffset + elementRect.top + numericOffset;

        smoothScroll({
            scrollTo: topPosition
        });
    }
    menuOpen.value = false;
}
</script>