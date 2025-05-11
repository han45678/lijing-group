const caseName = "春樹醴"
export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "籌備處",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園市八德區豐德二路8號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1917273405707!2d121.28340937607621!3d24.9255376426491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346818f4c9f0dbcd%3A0x15792d39fd1437be!2zMzM05qGD5ZyS5biC5YWr5b635Y2A6LGQ5b635LqM6LevOOiZnw!5e0!3m2!1szh-TW!2stw!4v1746526523136!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/hwHC6h11hjJun9Rg7",
    phone: "03-3731117",
    fbLink: "https://www.facebook.com/100063880612874/",
    fbMessage: "https://m.me/100063880612874/",
    caseName: caseName,
    caseid: "5496014a-12b3-476d-aa7a-002d9144d44a",
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
    gtmCode: ["GTM-WL7SMSBH"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
    },
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
      room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option: ["兩房", "三房"],
        bypass:false,
      },
      /*
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option: ["1000", "2000", "3000"],
        bypass:true, //必填開啟使用
      },
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
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "",
            type: 'btn'
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    */
    ],
}