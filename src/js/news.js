window.onload = function () {
    var header = document.getElementsByClassName("header_frame")[0].contentWindow.document;
    header.getElementById("to_news").style.fontSize = "17px";
    header.getElementById("to_news").style.color = "#fff";
    document.getElementsByClassName("line")[0].style.width = "32px";
};
function article_ani(innerStr) {
    var article_list = document.getElementsByClassName("article_list")[0];
    function fun() {
        article_list.innerHTML = innerStr;
        article_list.style.animation = "show_ani 0.1s";
        article_list.removeEventListener("webkitAnimationEnd", fun);
    }
    article_list.style.animation = "close_ani 0.1s";
    article_list.addEventListener("webkitAnimationEnd", fun);
}
function setLine(num) {
    var lines = document.getElementsByClassName("line");
    for (let line of lines) {
        line.style.width = "0px";
    }
    num == 3 ? lines[num].style.width = "64px" : lines[num].style.width = "32px";
}
function latest() {
    setLine(0);
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
    article_ani(inner);
}
function product() {
    setLine(1);
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
    article_ani(inner);
}
function flash() {
    setLine(2);
    var inner = `
    <div class="article_block"">
    <span class=" badge">快讯</span>
        <img src="img/news/flash/1.jpeg" class="block_pic">
        <p class="block_title">联通 eSIM 一号双终端业务推向全国，Apple Watch 如何开通？</p>
        <p class="block_abstract">今日，中国联通宣布将陆续开通 eSIM 一号双终端业务全...</p>
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
        <img src="img/news/flash/2.jpeg" class="block_pic">
        <p class="block_title">常程正式离职，联想 ZUK 手机你还记得多少？</p>
        <p class="block_abstract">今天，联想集团副总裁、ZUK&nbsp;CEO 常程在微...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/3.jpeg" class="block_pic">
        <p class="block_title">2020 iPad Pro 新渲染图：12.9/11 英寸，浴霸三摄</p>
        <p class="block_abstract">最近 Onleaks 发布一项报告称，2020 年即将推...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/4.jpeg" class="block_pic">
        <p class="block_title">小米有品与众筹平台 Indiegogo 达成战略合作</p>
        <p class="block_abstract">12 月 23 日，小米旗下的精品电商平台——小米有品宣...</p>
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
        <img src="img/news/flash/5.jpeg" class="block_pic">
        <p class="block_title">微信 7.0.9 iOS 版更新：加入消息引用及朋友圈表情包</p>
        <p class="block_abstract">今天上午微信发布了 7.0.9  iOS 版的更新，官方...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/6.jpeg" class="block_pic">
        <p class="block_title">LensRentals 公布 2019 年影像设备租赁榜：佳能第一，索尼第二</p>
        <p class="block_abstract">国外著名相机设备租赁网站 LensRentals 公布了...</p>
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
        <img src="img/news/flash/7.jpeg" class="block_pic">
        <p class="block_title">紫光 5G 超级 SIM 卡 12 月 23 日正式上市：通信存储二合一</p>
        <p class="block_abstract">早前，紫光发布了 5G 超级 SIM 卡，现在官方宣布这...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/8.jpeg" class="block_pic">
        <p class="block_title">PayPal 正式进入中国市场：完成对国付宝 70% 股权收购</p>
        <p class="block_abstract">12 月 19 日，PayPal 公司正式宣布，在 9 ...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/9.jpeg" class="block_pic">
        <p class="block_title">vivo X30 系列发布：首发 Exynos 980 芯片，搭载潜望式超远摄</p>
        <p class="block_abstract">12 月 16 日晚，vivo 在桂林正式发布了预热已久...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/10.jpeg" class="block_pic">
        <p class="block_title">三星 Galaxy Note 10 Lite 渲染图曝光：打孔屏/浴霸三摄</p>
        <p class="block_abstract">12 月 18 日，外媒 WinFuture 公布了疑似...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/11.jpeg" class="block_pic">
        <p class="block_title">iFixit 拆解苹果新 Mac Pro：内部精致，可修复性 9 分</p>
        <p class="block_abstract">新款 Mac Pro 发布后，因为其“高贵”的...</p>
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
    <span class=" badge">快讯</span>
        <img src="img/news/flash/12.jpeg" class="block_pic">
        <p class="block_title">《星战 9》首映礼上海迪士尼举行，吹响 42 年传奇最终章</p>
        <p class="block_abstract">要说到电影史上时间跨度最长的超级 IP，一定非《星球大战...</p>
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
    article_ani(inner);
}
function sentence() {
    setLine(3);
    var inner = `
    <div class="sentence">
    <img src="img/news/sentence/1.jpeg" id="s_back">
    <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
    <div id="s_content">
        <div id="s_date">
            <span id="day">30</span>
            <div>
                <span id="month">Dec</span>
                <span id="year">2019</span>
            </div>
        </div>
        <p id="s_title">（5G 手机）在 2020 年很难出现大规模的主动换机潮，主动的意思是，用户为了 5G 特地换手机；可能会出现被动换机潮，即消费者想更换手机时，会优先考虑 ...</p>
        <p id="s_author">—— OPPO 副总裁吴强</p>
    </div>
</div>
<div class="sentence">
    <img src="img/news/sentence/2.jpeg" id="s_back">
    <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
    <div id="s_content">
        <div id="s_date">
            <span id="day">29</span>
            <div>
                <span id="month">Dec</span>
                <span id="year">2019</span>
            </div>
        </div>
        <p id="s_title">团队扩张时，如果吸收了几名二流队员，他们就会招来更多二流队员，很快，你的团队里甚至还会出现三流队员。</p>
        <p id="s_author">—— 《史蒂夫·乔布斯传》</p>
    </div>
</div>
<div class="sentence">
    <img src="img/news/sentence/3.jpeg" id="s_back">
    <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
    <div id="s_content">
        <div id="s_date">
            <span id="day">28</span>
            <div>
                <span id="month">Dec</span>
                <span id="year">2019</span>
            </div>
        </div>
        <p id="s_title">我们的手机厂商、地图软件的制造商往往用 GPS 来指代所有卫星导航系统，其实走到今天，卫星导航已经是多系统兼容共用，包括 GPS、GlONASS、Galil...</p>
        <p id="s_author">—— 中国卫星导航系统管理办公室主任冉承其</p>
    </div>
</div>
<div class="sentence">
    <img src="img/news/sentence/4.jpeg" id="s_back">
    <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
    <div id="s_content">
        <div id="s_date">
            <span id="day">27</span>
            <div>
                <span id="month">Dec</span>
                <span id="year">2019</span>
            </div>
        </div>
        <p id="s_title">从目前的情况看，尽管公司在扩大（手机 CMOS）产能方面投入了全部预算，但是这仍可能不够。</p>
        <p id="s_author">—— 索尼半导体部门负责人清水辉</p>
    </div>
</div>
<div class="sentence">
    <img src="img/news/sentence/5.jpeg" id="s_back">
    <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
    <div id="s_content">
        <div id="s_date">
            <span id="day">26</span>
            <div>
                <span id="month">Dec</span>
                <span id="year">2019</span>
            </div>
        </div>
        <p id="s_title">早买早享受，（明年）等等党可不会有今年 4-5G 切换年这么开心。手机产品力两极分化，低售价产品抠每块看不见的成本，旗舰产品则堆足每一个细节。</p>
        <p id="s_author">—— OPPO 副总裁沈义人（微博）</p>
    </div>
</div>
<div class="sentence">
    <img src="img/news/sentence/6.jpeg" id="s_back">
    <img src="img/news/pic_mask.png" class="pic_mask" id="s_mask">
    <div id="s_content">
        <div id="s_date">
            <span id="day">25</span>
            <div>
                <span id="month">Dec</span>
                <span id="year">2019</span>
            </div>
        </div>
        <p id="s_title">2020 年我们还是希望回到「品牌优先」，可能不一定会做那么多的机型出来，但是每一款机型都是要按照精品来做，这是一个策略上的最大转变。</p>
        <p id="s_author">—— 魅族 CTO 梁东明</p>
    </div>
</div>
    `;
    article_ani(inner);
}
function wallpaper() {
    setLine(4);
    var inner = `
    <div class="sentence wallpaper" id="wallpaper1">
            <span class="badge">酷图</span>
            <p id="pic_title">设计 OS X壁纸 1080P</p>
        </div>
        <div class="sentence wallpaper" id="wallpaper2">
            <span class="badge">酷图</span>
            <p id="pic_title">风景 冰岛壁纸 1080P</p>
        </div>
        <div class="sentence wallpaper" id="wallpaper3">
            <span class="badge">酷图</span>
            <p id="pic_title">动漫 刀剑神域场景 1080P</p>
        </div>
        <div class="sentence wallpaper" id="wallpaper4">
            <span class="badge">酷图</span>
            <p id="pic_title">宠物 猫咪写真 1080P</p>
        </div>
        <div class="sentence wallpaper" id="wallpaper5">
            <span class="badge">酷图</span>
            <p id="pic_title">艺术 蓝黑3D立体方块 1080P</p>
        </div>
        <div class="sentence wallpaper" id="wallpaper6">
            <span class="badge">酷图</span>
            <p id="pic_title">宠物 黑色系狗狗壁纸 1080P</p>
        </div>
    `;
    // article_ani(inner);
    var article_list = document.getElementsByClassName("article_list")[0];
    function fun() {
        article_list.innerHTML = inner;
        article_list.style.animation = "show_ani 0.1s";
        var length = document.getElementsByClassName("wallpaper").length;
        for (var i = 0; i < length; i++) {
            document.getElementsByClassName("wallpaper")[i].style.backgroundImage = "url(img/news/wallpaper/" + (i + 1) + ".jpg)";
            article_list.removeEventListener("webkitAnimationEnd", fun);
        }
    }
    article_list.style.animation = "close_ani 0.1s";
    article_list.addEventListener("webkitAnimationEnd", fun);

}

