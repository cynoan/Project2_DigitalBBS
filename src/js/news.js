function toTop() {
    if (document.body.scrollTop != 0) {
        if (document.body.scrollTop > 2000) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 500;
                }
            }, 1);
        } else if (document.body.scrollTop > 1000) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 125;
                }
            }, 1);
        } else if (document.body.scrollTop > 500) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 25;
                }
            }, 1);
        } else if (document.body.scrollTop > 300) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 10;
                }
            }, 1);
        } else if (document.body.scrollTop > 200) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 8;
                }
            }, 1);
        }
    }
    if (document.documentElement.scrollTop != 0) {
        if (document.documentElement.scrollTop > 2000) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 500;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 1000) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 125;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 500) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 25;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 300) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 10;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 200) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 8;
                }
            }, 1);
        }
    }
}

function product() {
    var inner = `
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/1.jpeg" class="block_pic">
            <p class="block_title">米家即热饮水机 C1 开启众筹：三档水温/三秒速热/199 元</p>
            <p class="block_abstract">近日小米官方宣布，米家即热饮水机 C1 将于 12 月 ...</p>
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
        <span class=" badge">产品</span>
            <img src="img/news/product/4.jpeg" class="block_pic">
            <p class="block_title">一款想做台灯的扫描仪，在这个时代还会是好的扫描仪吗？</p>
            <p class="block_abstract">这是一台扫描仪，也是一盏智能台灯。当我第一次看到这台轻办...</p>
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
        <span class=" badge">产品</span>
            <img src="img/news/product/5.jpeg" class="block_pic">
            <p class="block_title">799 元，微软 Xbox 无障碍控制器国行版发售</p>
            <p class="block_abstract">去年 5 月，微软曾为残障人士专门推出了一款 Xbox ...</p>
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
        <span class=" badge">产品</span>
            <img src="img/news/product/3.jpeg" class="block_pic">
            <p class="block_title">OPPO Reno 3 系列发布：3399 元起</p>
            <p class="block_abstract">今天下午，OPPO 在杭州举行了 Reno 3 系列的新...</p>
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
        <span class=" badge">产品</span>
            <img src="img/news/product/6.jpeg" class="block_pic">
            <p class="block_title">索尼发布新一代 h.ear 时尚系列耳机</p>
            <p class="block_abstract">索尼今天发布了新一代 h.ear 时尚系列耳机，包括头戴...</p>
            <div class="block_user">
                <img src="img/news/avatar2.jpg" class="block_avatar">
                <span class="user_name">小黄鸭</span>
                <span>|</span>
                <span class="pub_time">1小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/7.jpeg" class="block_pic">
            <p class="block_title">这家公司想让无人机飞久一点，飞多久？50 分钟吧</p>
            <p class="block_abstract">在莱特兄弟初次飞行后的一段时间里，留空飞行时间是各位飞行...</p>
            <div class="block_user">
                <img src="img/news/avatar1.jpg" class="block_avatar">
                <span class="user_name">然然</span>
                <span>|</span>
                <span class="pub_time">1小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/2.jpeg" class="block_pic">
            <p class="block_title">从「菱感美学」中走出的 vivo S5</p>
            <p class="block_abstract">vivo 前不久发布了一款新机 S5，说起这款 S5，除...</p>
            <div class="block_user">
                <img src="img/news/avatar2.jpg" class="block_avatar">
                <span class="user_name">小黄鸭</span>
                <span>|</span>
                <span class="pub_time">1小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/8.jpeg" class="block_pic">
            <p class="block_title">这款扩展坞想做 MacBook 的好搭档</p>
            <p class="block_abstract">在 Type-C 接口的配件一统天下之前，插上一个扩展坞...</p>
            <div class="block_user">
                <img src="img/news/avatar1.jpg" class="block_avatar">
                <span class="user_name">然然</span>
                <span>|</span>
                <span class="pub_time">2小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/9.jpeg" class="block_pic">
            <p class="block_title">联发科 5G 时代的首款 SoC，一出手就把规格拉到了顶尖</p>
            <p class="block_abstract">作为一家常年活跃在手机 SoC 领域的芯片设计公司，4G...</p>
            <div class="block_user">
                <img src="img/news/avatar2.jpg" class="block_avatar">
                <span class="user_name">小黄鸭</span>
                <span>|</span>
                <span class="pub_time">3小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/10.jpeg" class="block_pic">
            <p class="block_title">八位堂上架 Zero 2 手柄：仅重 20 克，兼容 Switch</p>
            <p class="block_abstract">专注于各种游戏手柄的八位堂曾推出过一款小巧的 Zero ...</p>
            <div class="block_user">
                <img src="img/news/avatar1.jpg" class="block_avatar">
                <span class="user_name">然然</span>
                <span>|</span>
                <span class="pub_time">3小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/11.jpeg" class="block_pic">
            <p class="block_title">捷波朗新耳机 Elite 75t 发布：真无线/降噪/高音质</p>
            <p class="block_abstract">作为专注消费级、企业级音频解决方案的老牌厂商 ，Jabr...</p>
            <div class="block_user">
                <img src="img/news/avatar1.jpg" class="block_avatar">
                <span class="user_name">然然</span>
                <span>|</span>
                <span class="pub_time">4小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
        <div class="article_block"">
        <span class=" badge">产品</span>
            <img src="img/news/product/8.jpeg" class="block_pic">
            <p class="block_title">Amazfit 智能手表 2 复联限量版上手图赏</p>
            <p class="block_abstract">与领域外的品牌或文化 IP 联合推出定制款产品已经是包括...</p>
            <div class="block_user">
                <img src="img/news/avatar2.jpg" class="block_avatar">
                <span class="user_name">小黄鸭</span>
                <span>|</span>
                <span class="pub_time">4小时前</span>
            </div>
            <div class="block_bottom">
                <img src="img/news/like.png">
                <span>99+</span>
                <img src="img/news/comment.png">
                <span>99+</span>
            </div>
        </div>
    `;
    document.getElementsByClassName("article_list")[0].style.animation = "close_sec 0.2s";
    setTimeout(() => {
        document.getElementsByClassName("article_list")[0].style.animation = "show_sec 0.2s";
        document.getElementsByClassName("article_list")[0].innerHTML = inner;
    }, 190);
}

function latest() {
    var inner = `
    <div class="sentence">
                <img src="img/news/latest/1.jpeg" id="s_back">
                <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
                <div id="s_content">
                    <div id="s_date">
                        <span id="day">30</span>
                        <div>
                            <span id="month">Dec</span>
                            <span id="year">2019</span>
                        </div>
                    </div>
                    <p id="s_title">（5G 手机）在 2020 年很难出现大规模的主动换机潮...</p>
                    <p id="s_author">—— OPPO 副总裁吴强</p>
                </div>
            </div>
            <div class="sentence" id="wallpaper">
                <span class="badge">酷图</span>
                <p id="pic_title">OS X 原生壁纸1080P</p>
            </div>
            <div class="article_block"">
                <span class=" badge">快讯</span>
                <img src="img/news/latest/2.jpeg" class="block_pic">
                <p class="block_title">2020 iPad Pro 新渲染图：12.9/11 英寸，浴霸三摄</p>
                <p class="block_abstract">最近 Onleaks 发布一项报告称，2020 年即将推...</p>
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
                <span class=" badge">产品</span>
                <img src="img/news/latest/4.jpeg" class="block_pic">
                <p class="block_title">一款想做台灯的扫描仪，在这个时代还会是好的扫描仪吗？</p>
                <p class="block_abstract">这是一台扫描仪，也是一盏智能台灯。当我第一次看到这台轻办...</p>
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
                <span class=" badge">产品</span>
                <img src="img/news/latest/5.jpeg" class="block_pic">
                <p class="block_title">799 元，微软 Xbox 无障碍控制器国行版发售</p>
                <p class="block_abstract">去年 5 月，微软曾为残障人士专门推出了一款 Xbox ...</p>
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
                <span class=" badge">产品</span>
                <img src="img/news/latest/3.jpeg" class="block_pic">
                <p class="block_title">OPPO Reno 3 系列发布：3399 元起</p>
                <p class="block_abstract">今天下午，OPPO 在杭州举行了 Reno 3 系列的新...</p>
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
                <span class=" badge">快讯</span>
                <img src="img/news/latest/6.jpeg" class="block_pic">
                <p class="block_title">LensRentals 公布 2019 年影像设备租赁榜：佳能第一，索尼第二</p>
                <p class="block_abstract">国外著名相机设备租赁网站 LensRentals 公布了...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">1小时前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <span class=" badge">产品</span>
                <img src="img/news/latest/7.jpeg" class="block_pic">
                <p class="block_title">这家公司想让无人机飞久一点，飞多久？50 分钟吧</p>
                <p class="block_abstract">在莱特兄弟初次飞行后的一段时间里，留空飞行时间是各位飞行...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">1小时前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <span class=" badge">快讯</span>
                <img src="img/news/latest/8.jpeg" class="block_pic">
                <p class="block_title">vivo X30 系列发布：首发 Exynos 980 芯片，搭载潜望式超远摄</p>
                <p class="block_abstract">12 月 16 日晚，vivo 在桂林正式发布了预热已久...</p>
                <div class="block_user">
                    <img src="img/news/avatar2.jpg" class="block_avatar">
                    <span class="user_name">小黄鸭</span>
                    <span>|</span>
                    <span class="pub_time">1小时前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
            <div class="article_block"">
                <span class=" badge">产品</span>
                <img src="img/news/latest/9.jpeg" class="block_pic">
                <p class="block_title">这款扩展坞想做 MacBook 的好搭档</p>
                <p class="block_abstract">在 Type-C 接口的配件一统天下之前，插上一个扩展坞...</p>
                <div class="block_user">
                    <img src="img/news/avatar1.jpg" class="block_avatar">
                    <span class="user_name">然然</span>
                    <span>|</span>
                    <span class="pub_time">2小时前</span>
                </div>
                <div class="block_bottom">
                    <img src="img/news/like.png">
                    <span>99+</span>
                    <img src="img/news/comment.png">
                    <span>99+</span>
                </div>
            </div>
    `;
    document.getElementsByClassName("article_list")[0].style.animation = "close_sec 0.2s";
    setTimeout(() => {
        document.getElementsByClassName("article_list")[0].style.animation = "show_sec 0.2s";
        document.getElementsByClassName("article_list")[0].innerHTML = inner;
    }, 190);
}