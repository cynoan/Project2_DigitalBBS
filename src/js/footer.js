(function(){
    let wxImg = document.getElementById("wx_img");
    let wbImg = document.getElementById("wb_img");
    let wechatBack = document.getElementById("wechat_back");
    function fade(){
        wechatBack.style.display = "none";
        wechatBack.removeEventListener("webkitAnimationEnd",fade);
    }
    wxImg.onmouseover = ()=>{
        wechatBack.style.display = "block";
        wechatBack.style.animation = "show_ani 0.2s";
    }
    wxImg.onmouseout = ()=>{
        wechatBack.style.animation = "close_ani 0.2s";
        wechatBack.addEventListener("webkitAnimationEnd",fade);
    }
    wbImg.onclick = () =>{
        window.parent.location = "https://weibo.com/2804380715";
    }
})();