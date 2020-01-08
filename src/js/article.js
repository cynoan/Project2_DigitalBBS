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
window.onload = function(){
    var header = document.getElementsByClassName("header_frame")[0].contentWindow.document;
    header.getElementById("to_article").style.fontSize = "17px";
    header.getElementById("to_article").style.color = "#fff";
};
function article_ani(innerStr) {
    function fun() {
        document.getElementsByClassName("article_list")[0].innerHTML = innerStr;
        document.getElementsByClassName("article_list")[0].style.animation = "show_ani 0.1s";
        document.getElementsByClassName("article_list")[0].removeEventListener("webkitAnimationEnd", fun);
    }
    document.getElementsByClassName("article_list")[0].style.animation = "close_ani 0.1s";
    document.getElementsByClassName("article_list")[0].addEventListener("webkitAnimationEnd", fun);
}


function allArticle() {
    var inner = `
    <div class="col" id="col1">
                <div class="article_block"">
                    <img src=" img/article/all/1.jpeg" class="block_pic">
                    <p class="block_title">徽州三日，山水入梦</p>
                    <p class="block_abstract">一眠不醒徽州梦2017年，我经历了人生中一次小小的变动。...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/5.jpeg" class="block_pic">
                    <p class="block_title">柏林2019</p>
                    <p class="block_abstract">说起来我对柏林的印象，就不得不提到一部电影，中文名是《没...</p>
                    <div class="block_user">
                        <img src="img/news/avatar1.jpg" class="block_avatar">
                        <span class="user_name">然然</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/9.jpeg" class="block_pic">
                    <p class="block_title">替你守护冬日里最后一抹温暖、日本Srue 双人四温区电热毯 深度评测</p>
                    <p class="block_abstract">一、前言每年一到冬天，就感觉今年的冬天尤为的寒冷、漫长，...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/13.jpeg" class="block_pic">
                    <p class="block_title">同步桌面、在线播放，2020 年的 OneDrive 可以用来做什么？</p>
                    <p class="block_abstract">早闻 OneDrive 的大名（那时候还是叫 SkyDr...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
            </div>
            <div class="col" id="col2">
                <div class="article_block"">
                    <img src=" img/article/all/2.jpeg" class="block_pic">
                    <p class="block_title">VIE Hotel：曼谷人气五星酒店之选</p>
                    <p class="block_abstract">索菲特美憬阁 VIE 酒店（VIE Hotel Bang...</p>
                    <div class="block_user">
                        <img src="img/news/avatar1.jpg" class="block_avatar">
                        <span class="user_name">然然</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/6.jpeg" class="block_pic">
                    <p class="block_title">适马 50-100 F/1.8，我的第一支变焦镜头轻体验</p>
                    <p class="block_abstract">▲这是第一台属于我自己的相机-富士 X100，它下面的盒...</p>
                    <div class="block_user">
                        <img src="img/news/avatar1.jpg" class="block_avatar">
                        <span class="user_name">然然</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/10.png" class="block_pic">
                    <p class="block_title">「搞机大赛」2019 年装过的十多套主机配置，总有一套适合你</p>
                    <p class="block_abstract">去年就想过把自己去年帮网友装过的一些主机配置做一个整理回...</p>
                    <div class="block_user">
                        <img src="img/news/avatar1.jpg" class="block_avatar">
                        <span class="user_name">然然</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/14.jpeg" class="block_pic">
                    <p class="block_title">199元交个朋友，高性价比动圈设计，坚果颈挂蓝牙耳机体验</p>
                    <p class="block_abstract">2019年，坚果手机历经风风雨雨，终究是挺了过去，不仅推...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
            </div>
            <div class="col" id="col3">
                <div class="article_block"">
                    <img src=" img/article/all/3.jpeg" class="block_pic">
                    <p class="block_title">外形酷炫，谱写红与黑的战歌、乔思伯MOD1全塔式机箱 评测</p>
                    <p class="block_abstract">一、前言乔思伯的MOD系列机箱外形都非常的酷炫夸张，用料...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/7.jpeg" class="block_pic">
                    <p class="block_title">2020工作计划</p>
                    <p class="block_abstract"></p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/11.jpeg" class="block_pic">
                    <p class="block_title">我的桌面配置</p>
                    <p class="block_abstract">去年8月份换了工作，搬到西安来，租了套大房子终于可以划出...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
            </div>
            <div class="col" id="col4">
                <div class="article_block"">
                    <img src=" img/article/all/4.jpeg" class="block_pic">
                    <p class="block_title">办公游戏两相宜，达尔优A918无线鼠标体验</p>
                    <p class="block_abstract">对于大多数人来说，除了手机，每天接触最多的数码产品就要属...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/8.jpeg" class="block_pic">
                    <p class="block_title">2019年终总结</p>
                    <p class="block_abstract">仪式感挺讨厌的，当你做了往年总结，每到这个时候，总会想个...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/all/12.jpeg" class="block_pic">
                    <p class="block_title">求推荐iPadU盘或U盘转接器</p>
                    <p class="block_abstract">升级iOS13后，最近笔记本直接奔溃。新老交替之间也想看...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
            </div>
    `;
    article_ani(inner);
}

function phone() {
    var inner = `
    <div class="col" id="col1">
        <div class="article_block"">
                    <img src=" img/article/phone/1.jpeg" class="block_pic">
                    <p class="block_title">我用 iPhone 11 Pro Max 的这些日子</p>
                    <p class="block_abstract">过去三年里，我的主力机一直都是 iPhone，这段经历我...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/phone/5.png" class="block_pic">
                    <p class="block_title">2019的消费清单</p>
                    <p class="block_abstract">买得太多，尤其是重新回到果子的坑iPhone 11 Pr...</p>
                    <div class="block_user">
                        <img src="img/news/avatar1.jpg" class="block_avatar">
                        <span class="user_name">然然</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/phone/9.jpeg" class="block_pic">
                    <p class="block_title">vivo X30 Pro 上手：这是哪儿来的远摄小王子？</p>
                    <p class="block_abstract">2019 年即将迎来大结局，在推出了一系列眼花缭乱、面对...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
                <div class="article_block"">
                    <img src=" img/article/phone/13.jpeg" class="block_pic">
                    <p class="block_title">把经典继续延续 iPhone 4</p>
                    <p class="block_abstract">历经三个小时把一台 iPhone 4 变成一堆 iPho...</p>
                    <div class="block_user">
                        <img src="img/news/avatar2.jpg" class="block_avatar">
                        <span class="user_name">小黄鸭</span>
                        <span>|</span>
                        <span class="pub_time">5分钟前</span>
                    </div>
                    <div class="block_bottom">
                        <img src="img/news/like.png">
                        <span>99+</span>
                        <img src="img/news/comment.png">
                        <span>99+</span>
                    </div>
                </div>
            </div>
<div class="col" id="col2">
    <div class="article_block"">
        <img src=" img/article/phone/2.jpeg" class="block_pic">
        <p class="block_title">纠结这个问题是换三星s10 5g还是添加一台备用机</p>
        <p class="block_abstract">纠结这个问题是换三星s10 5g还是添加一台备用机。现在...</p>
        <div class="block_user">
            <img src="img/news/avatar1.jpg" class="block_avatar">
            <span class="user_name">然然</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/6.jpeg" class="block_pic">
        <p class="block_title">实用教程：荣耀V30 PRO“大光圈”模式，轻松拍出单反级大片
        </p>
        <p class="block_abstract">【不满格评测·原创】荣耀V30 PRO已经发布1个月了，...</p>
        <div class="block_user">
            <img src="img/news/avatar1.jpg" class="block_avatar">
            <span class="user_name">然然</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/10.jpeg" class="block_pic">
        <p class="block_title">5G 风起云涌，有人已经走在了前面</p>
        <p class="block_abstract">随着国内三大运营商陆续推出 5G 商用套餐，以及各大品牌...</p>
        <div class="block_user">
            <img src="img/news/avatar1.jpg" class="block_avatar">
            <span class="user_name">然然</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
</div>
<div class="col" id="col3">
    <div class="article_block"">
        <img src=" img/article/phone/3.jpeg" class="block_pic">
        <p class="block_title">三星 note FE 又爱又恨</p>
        <p class="block_abstract">一天、突然感觉自己需要备用机然后“它”出现了 三星 n...</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/7.jpeg" class="block_pic">
        <p class="block_title">手机摄影师眼中的 OPPO Reno 3</p>
        <p class="block_abstract">Holle！我是 Minimal，一名摄影博主，很荣幸入...</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/11.jpeg" class="block_pic">
        <p class="block_title">我的前女友</p>
        <p class="block_abstract">也许每一个男子全都有过这样的两个女人。娶了...</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/14.jpeg" class="block_pic">
        <p class="block_title">iPhone 6s —— 智能手机最后的倔强</p>
        <p class="block_abstract">2019年马上要过去了，iPhone 6s本已是过时的代...</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
</div>
<div class="col" id="col4">
    <div class="article_block"">
        <img src=" img/article/phone/4.jpeg" class="block_pic">
        <p class="block_title">One Ui更新了！！！</p>
        <p class="block_abstract">S10+更新安卓10了，有更新好的小伙伴吗？说说体验咋样...</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/8.jpeg" class="block_pic">
        <p class="block_title">大学生换机</p>
        <p class="block_abstract">想体验下iOS是等等传说中的SE2还是收个XR？</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
    <div class="article_block"">
        <img src=" img/article/phone/12.jpeg" class="block_pic">
        <p class="block_title">用完这款凯夫拉全包超薄保护壳，我把官方iPhone壳扔掉了</p>
        <p class="block_abstract">花几千上万买了台苹果iPhone手机，敢裸奔（ 买AC+...</p>
        <div class="block_user">
            <img src="img/news/avatar2.jpg" class="block_avatar">
            <span class="user_name">小黄鸭</span>
            <span>|</span>
            <span class="pub_time">5分钟前</span>
        </div>
        <div class="block_bottom">
            <img src="img/news/like.png">
            <span>99+</span>
            <img src="img/news/comment.png">
            <span>99+</span>
        </div>
    </div>
</div>
    `;
    article_ani(inner);
}

function pad(){
    var inner = `
    <div class="col" id="col1">
            <div class="article_block"">
                <img src=" img/article/pad/1.jpeg" class="block_pic">
                <p class="block_title">更成熟的 Fyde OS，itNT X 二合一平板电脑体验评测</p>
                <p class="block_abstract">距离笔者上次写关于 Fyde OS 的文章已经过去大半年...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/5.jpg" class="block_pic">
                <p class="block_title">依旧映红了归家的路途</p>
                <p class="block_abstract">　晚霞破月的天际，依旧映红了归家的路途，流浪了好久的笔调...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/9.jpeg" class="block_pic">
                <p class="block_title">iPad pro开箱</p>
                <p class="block_abstract">入手iPad pro，买了笔和外壳，键盘是罗技380。不...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="article_block"">
                <img src=" img/article/pad/2.jpeg" class="block_pic">
                <p class="block_title">iPad Pro2 10.5</p>
                <p class="block_abstract">说下使用iPad Pro2的感受吧 18年的买Pro2...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/6.jpeg" class="block_pic">
                <p class="block_title">Procreate 头像绘制指南</p>
                <p class="block_abstract">iPad是生产力还是爱奇艺？随着iPad的更新迭代，越来...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/10.png" class="block_pic">
                <p class="block_title">聊聊 2019 款 iPad</p>
                <p class="block_abstract">我第一台iPad 是12年的时候——第一代iPad mi...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col3">
            <div class="article_block"">
                <img src=" img/article/pad/3.jpeg" class="block_pic">
                <p class="block_title">牛听听读书牛礼盒装来了，给宝宝绘本阅读的教育好物</p>
                <p class="block_abstract">对于喜欢数码产品的我，自从家里闹爷出生后就开始关注这一块...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/7.jpeg" class="block_pic">
                <p class="block_title">iPad时隔多年的更新……</p>
                <p class="block_abstract">初代机皇iPad 16G+3G 现行款iPad Pro...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/11.jpg" class="block_pic">
                <p class="block_title">就算是煮火锅排奶茶赶飞机也不要忘记码字哦——来自你的 iPad 2019</p>
                <p class="block_abstract">我今天在星巴克看到一个人 / 没有手机 / 没有平板 ...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            
        </div>
        <div class="col" id="col4">
            <div class="article_block"">
                <img src=" img/article/pad/4.jpeg" class="block_pic">
                <p class="block_title">让iPad回归初始定位的iPad OS</p>
                <p class="block_abstract">感谢数字尾巴测评提供的测评机会，第一次做这样...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/8.png" class="block_pic">
                <p class="block_title">MatePad Pro 发布后，华为终于成了中国的“苹果”</p>
                <p class="block_abstract">关于平板，来句不好听的，说只存在 iPad 和其他电子垃...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/pad/12.jpeg" class="block_pic">
                <p class="block_title">​iPad 终极选购指南 2019 —— 双十一特刊</p>
                <p class="block_abstract">时间很快，2019 年很快就来到了最后两个月。如果这一年...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
    `;
    article_ani(inner);
}

function photo(){
    var inner = `
    <div class="col" id="col1">
            <div class="article_block"">
                <img src=" img/article/photo/1.jpeg" class="block_pic">
                <p class="block_title">富士 Fuji X100t 拍过的照片</p>
                <p class="block_abstract">关于这台相机，第一眼就喜欢上。所以当时买了两台，因为真的...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/5.jpeg" class="block_pic">
                <p class="block_title">分享一组图片</p>
                <p class="block_abstract"></p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/9.jpeg" class="block_pic">
                <p class="block_title">温州公园角落随拍</p>
                <p class="block_abstract">闲暇无事时，与妻携游温州各大公园广场，用我的战斗工具Ip...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="article_block"">
                <img src=" img/article/photo/2.jpeg" class="block_pic">
                <p class="block_title">适马 50-100 F/1.8，我的第一支变焦镜头轻体验</p>
                <p class="block_abstract">▲这是第一台属于我自己的相机-富士 X100，它下面的盒...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/6.jpeg" class="block_pic">
                <p class="block_title">「2019 摄影征文」在那遥远的地方（中）</p>
                <p class="block_abstract">在新疆，晚饭时间是晚上9点多。你以为天黑了吗？然而并么有...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/10.jpeg" class="block_pic">
                <p class="block_title">「2019 摄影征文」2019，生活，即影即有</p>
                <p class="block_abstract">回顾 2019，这是让我快速成长的一年，忙碌而充满挑战，...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col3">
            <div class="article_block"">
                <img src=" img/article/photo/3.jpeg" class="block_pic">
                <p class="block_title">[2019摄影征文]和摄影的又一年</p>
                <p class="block_abstract">16岁的那个生日我开始会为了一次日出会为了领略大漠孤烟直...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/7.jpeg" class="block_pic">
                <p class="block_title">「2019 摄影征文」努力付出就会有收获</p>
                <p class="block_abstract">不知不觉明天就是 2019 最后的一天了，在感叹时间过得...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/11.jpeg" class="block_pic">
                <p class="block_title">「2019 摄影征文」在那遥远的地方（上）</p>
                <p class="block_abstract">新疆，可能在很多人的认知里是干旱，沙漠，炎热，荒凉的地方...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            
        </div>
        <div class="col" id="col4">
            <div class="article_block"">
                <img src=" img/article/photo/4.jpeg" class="block_pic">
                <p class="block_title">硬核多面手，飞宇G6Max四合一稳定器</p>
                <p class="block_abstract">本文分为5部分1、说在评测之前的话：这个...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/8.jpeg" class="block_pic">
                <p class="block_title">「2019 摄影征文」在那遥远的地方（下）</p>
                <p class="block_abstract">回到乌鲁木齐之后第一顿晚饭我们来到了著名的五一星光夜市。...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/photo/12.jpeg" class="block_pic">
                <p class="block_title">​飞宇G6 MAX稳不稳？新手需要注意哪些问题？</p>
                <p class="block_abstract">在体验两周后，本人列出了新手在选择和使用飞宇G6 MAX...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
    `;
    article_ani(inner)
}

function life(){
    var inner = `
    <div class="col" id="col1">
            <div class="article_block"">
                <img src=" img/article/life/1.jpeg" class="block_pic">
                <p class="block_title">2019年终总结</p>
                <p class="block_abstract">仪式感挺讨厌的，当你做了往年总结，每到这个时候，总会想个...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/5.jpeg" class="block_pic">
                <p class="block_title">鹿客OJJ X1 | 你对我有多重要，失去后才知道</p>
                <p class="block_abstract">19的夏天我从深圳搬来北京生活了。这个开头我已经在很多文...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/9.jpeg" class="block_pic">
                <p class="block_title">新的一年，穷且益坚吧</p>
                <p class="block_abstract">photo by RX100m3，咔哒一键。</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="article_block"">
                <img src=" img/article/life/2.jpeg" class="block_pic">
                <p class="block_title">明天开始展会了</p>
                <p class="block_abstract">一年一度年终美妆展，㊗自己好运！准备很多样品派发希望得到...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/6.jpeg" class="block_pic">
                <p class="block_title">2019：少了远方，多了生活</p>
                <p class="block_abstract">2020年了，到了回顾2019年的时候了。这一年照片拍的...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/10.jpeg" class="block_pic">
                <p class="block_title">得到与失去</p>
                <p class="block_abstract">序章我一直在想，2019 年到底应该用得到还是失去来形容...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col3">
            <div class="article_block"">
                <img src=" img/article/life/3.jpeg" class="block_pic">
                <p class="block_title">一名普通工科研究生的大学宿舍与生活</p>
                <p class="block_abstract">电脑桌：1.台灯：某宝买的，不是什么大牌子。平时特别喜欢...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/7.jpeg" class="block_pic">
                <p class="block_title">2020慢慢来</p>
                <p class="block_abstract">2020第一个工作日，又是一年，终于站在20-30的分水...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/11.jpeg" class="block_pic">
                <p class="block_title">元旦周边出游</p>
                <p class="block_abstract">终于可以休一天假了。带老婆出门湖边逛逛。拍摄：RX1, ...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            
        </div>
        <div class="col" id="col4">
            <div class="article_block"">
                <img src=" img/article/life/4.jpeg" class="block_pic">
                <p class="block_title">人生第一套乐高</p>
                <p class="block_abstract">人生第一套乐高…给宝贝丫头…五周岁的丫头一直喜欢冰雪奇缘...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/8.jpeg" class="block_pic">
                <p class="block_title">新年做的第一顿饭</p>
                <p class="block_abstract">不说告别，依旧（19）爱你（20）！2020年如期而至，...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/life/12.jpeg" class="block_pic">
                <p class="block_title">​当背起背包的时候，包里面都有什么东西。</p>
                <p class="block_abstract">首先，这不是一篇 EDC，因为这么多东西天天出门就背着，...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
    `;
    article_ani(inner)
}

function other(){
    var inner = `
    <div class="col" id="col1">
            <div class="article_block"">
                <img src=" img/article/other/1.jpeg" class="block_pic">
                <p class="block_title">又一款实力派，利民风灵TS120 plus单塔风冷</p>
                <p class="block_abstract">热管回流焊、全体镀镍、镜面底座、附带高导热率的硅脂、二次...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/5.jpeg" class="block_pic">
                <p class="block_title">洁癖鸡·JPG·PIC 2019年自制壁纸年底汇总</p>
                <p class="block_abstract">辞旧迎新 / 万事胜意首先祝大家新年快乐。做个简单的自我...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/9.jpeg" class="block_pic">
                <p class="block_title">2019总结</p>
                <p class="block_abstract">上半年：工作忙成狗，产检也是越来越频繁。下半年：2019...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
        <div class="col" id="col2">
            <div class="article_block"">
                <img src=" img/article/other/2.jpeg" class="block_pic">
                <p class="block_title">2020工作计划</p>
                <p class="block_abstract"></p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/6.png" class="block_pic">
                <p class="block_title">巴尼乔生 12 月壁纸分享</p>
                <p class="block_abstract">11 月的壁纸汇总分享壁纸支持 PC、Pad、手机三分辨...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            
        </div>
        <div class="col" id="col3">
            <div class="article_block"">
                <img src=" img/article/other/3.jpeg" class="block_pic">
                <p class="block_title">朋友找你装电脑怎么办，帮他DIY一台？老司机告诉你当然是买品牌电脑...</p>
                <p class="block_abstract">前几天，我一同事找我买电脑，又来？我顿时想起前些天给女同...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/7.jpeg" class="block_pic">
                <p class="block_title">「2019摄影征文」我与我的眼</p>
                <p class="block_abstract">大概是十一岁的某天下午，夏日的燥热、漫长暑假的无聊...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/11.jpeg" class="block_pic">
                <p class="block_title">以用户体验先行，双模技术创享会</p>
                <p class="block_abstract">12月20日，“智无止境 驭车有道 2019比亚迪技术体...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            
        </div>
        <div class="col" id="col4">
            <div class="article_block"">
                <img src=" img/article/other/4.jpeg" class="block_pic">
                <p class="block_title">福特</p>
                <p class="block_abstract">我想，在我40岁前把这个开回家，40岁前的梦想。</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/8.png" class="block_pic">
                <p class="block_title">谁是下一代“智能偶像”？逍客、探歌、WEY VV5纷纷前来炫技</p>
                <p class="block_abstract">在“黑科技”如雨后春笋般冒出的今日，越来越多的年轻人被科...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <img src=" img/article/other/10.jpeg" class="block_pic">
                <p class="block_title">做梦之一:做一个兼容苹果软件的操作系统</p>
                <p class="block_abstract">我孤陋寡闻，异想天开，很多人都想超越苹果，把苹果和安卓比...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">5分钟前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
        </div>
    `;
    article_ani(inner)
}