<template>
    <div class="thanks">
        <img src="https://bcp.crwdcntrl.net/5/c=13578/b=78113418" width="1" height="1" />
        <a href="/">
            <img src="//h35.banner.tw/img//thank-img.png" alt="thank" class="img">
            <img src="//h35.banner.tw/img//thank-img-hover.png" alt="thank" class="img-hover">
        </a>
    </div>
</template>
<style lang="scss" scoped>
.thanks {
    width: 100vw;
    height: 100vh;
    background: url('//h35.banner.tw/img//thank_bg.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
        .img {
            position: absolute;
            opacity: 1;
        }

        .img-hover {
            opacity: 0;
        }

        &:hover {
            .img {
                opacity: 0;
            }

            .img-hover {
                opacity: 1;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .thanks {
        a {

            .img,
            .img-hover {
                width: 90vw;
            }
        }
    }
}
</style>

<script>
export default {
    name: 'formThanks',
    components: {},
    methods: {},
}
import axios from "axios";

axios.post("https://hook.us1.make.com/fdod6r53f2m0vgp9qjqvpc86xl5sbflc", {
  orderId: "123456",
  status: "success"
}).then(response => {
  console.log("Webhook Sent:", response.data);
}).catch(error => {
  console.error("Error:", error);
});
</script>