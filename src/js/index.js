(function () {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed: 500, //速度
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 2500,//时间 毫秒
            disableOnInteraction: false,//用户操作之后是否停止自动轮播默认true 
        }
    });
})();

(function () {
    var news = document.getElementById("news").getElementsByClassName("block_pic");
    for (var i = 0; i < news.length; i++) {
        news[i].style.background = `url(img/news/latest/${i + 2}.jpeg)`;
    }
    var art = document.getElementById("article").getElementsByClassName("block_pic");
    for (var i = 0; i < art.length; i++) {
        art[i].style.background = `url(img/article/all/${i + 1}.jpeg)`;
    }
    var interest = document.getElementById("interest").getElementsByClassName("block_pic");
    for (var i = 0; i < interest.length; i++) {
        interest[i].style.background = `url(img/interest/list/pic${i + 1}.jpeg)`;
    }
    
})();

window.onload = function () {
    var header = document.getElementsByClassName("header_frame")[0].contentWindow.document;
    header.getElementsByTagName("nav")[0].style.background = "transparent";
    header.getElementById("login_back").style.top = "0";
    header.getElementById("login").style.marginTop = "-250px";
    header.getElementById("to_home").style.fontSize = "17px";
    header.getElementById("to_home").style.color = "#fff";

    var article1 = document.querySelectorAll("#news .article_block")[0];
    article1.onclick = ()=>{
        this.location = "news_content.html";
    }
};

window.onscroll = function () {
    var btn = document.getElementById("to_top");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        btn.style.animation = "show_ani 0.2s";
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
    if (document.documentElement.scrollTop <= 520) {
        document.getElementsByClassName("header_placeholder")[0].style.opacity = document.documentElement.scrollTop / 400;
        document.getElementById("banner_back").style.opacity = 1 - document.documentElement.scrollTop / 520;
    } else {
        document.getElementsByClassName("header_placeholder")[0].style.opacity = 1;
        document.getElementById("banner_back").style.opacity = 0;
    }
}

