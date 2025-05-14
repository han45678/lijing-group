const caseName = "麗晶ONE"

export default {
    caseid: "14595822-3c40-440a-be3c-0386aadeff96",
    case_code: "lijing-group",
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "萬丹 大憲街117巷·大憲街口",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.793199954623!2d120.4849539758723!3d22.58683663244733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e19f08bb47123%3A0xca7aae91a10cc210!2z6bqX5pm2T05FIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1747205586763!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/KMQHhvMDxSqZC7XW8",
    phone: "08-777-8868",
    fbLink: "https://www.facebook.com/61574819932514/",
    fbMessage: "https://m.me/61574819932514/",
    caseName: caseName,
    houseInfos: [
        /*
        ["空間設計", "相即空間設計"],
        ["企劃銷售", "低碳健康樂活行銷"],
        ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
        ["經紀人", "(91)北市經證字第00692號 陳子瑞"], 
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],
        */
    ],
     gtmCode: ["GTM-M5S6GXCX"], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        //room_type: {
        //  title: "需求房型",
        //  hold: "請選擇房型",
        //  option: ["兩房", "三房"],
        //  bypass:false,
        //},
        //budget: {
        //  title: "購屋預算",
        //  hold: "請選擇區間",
        //  option: ["1000", "2000", "3000"],
        //  bypass:true, //必填開啟使用
        //},
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  },

    navList: [
        /*
        {
            name: "雙核心地段",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通中軸",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        }
    */
    ],
}