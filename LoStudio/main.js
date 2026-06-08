AOS.init({
    once: true, duration: 1000, delay: 100, throttleDelay: 99, offset: 120, once: false, mirror: false, anchorPlacement: 'top-bottom',
});

// scroll change color
const className = "inverted";
const scrollTrigger = 60;

window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".headerDiv").classList.add(className);
    } else {
        document.querySelector(".headerDiv").classList.remove(className);
    }
};

window.onload = function () {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.querySelector(".headerDiv").classList.add(className);
    } else {
        document.querySelector(".headerDiv").classList.remove(className);
    }
};

const { ref } = Vue
const productionRow = {
    setup() {
        const contentItems = new ref([
            {
                id: 1,
                href: "/lostudio/service/cf/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "商業廣告",
                subtitle: "Commercial Flim"
            },
            {
                id: 2,
                href: "/lostudio/service/MV/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "MV微電影製作",
                subtitle: "Music Video & Micro Film"
            },
            {
                id: 3,
                href: "/lostudio/service/record/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "活動紀錄",
                subtitle: "Acitivity Record Film"
            },
            {
                id: 4,
                href: "/lostudio/service/Wedding/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "婚禮紀錄",
                subtitle: "Wedding Record Film"
            },
            {
                id: 5,
                href: "/lostudio/service/MG/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "MG 動畫剪輯",
                subtitle: "Motion Graphic & Editing"
            },
            {
                id: 6,
                href: "/lostudio/service/Behind/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "花絮記錄製作",
                subtitle: "Behind the Scenes"
            },
            {
                id: 7,
                href: "/lostudio/service/Portrait/",
                imgSrc: "/lostudio//photo/DSC02122-scaled.jpg",
                title: "人像攝影",
                subtitle: "Portrait Photography"
            },
            {
                id: 8,
                href: "/lostudio/service/Product/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "商品攝影",
                subtitle: "Product Photography"
            },
            {
                id: 9,
                href: "/lostudio/service/another/",
                imgSrc: "/lostudio/photo/DSC02122-scaled.jpg",
                title: "其他形式合作",
                subtitle: "Any forms of cooperation"
            },
        ])

        return {
            contentItems,
        };
    }
}

Vue.createApp(productionRow).mount('#productionRow')
Vue.createApp(productionRow).mount('#productionNav')

const Test = {
    template() {
        "<p>測試測試</p>"
    }
}


