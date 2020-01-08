(function(){
    document.getElementById("to_home").onclick = function(){
        window.parent.location = "index.html";
    };
    document.getElementById("to_news").onclick = function(){
        window.parent.location = "news.html";
    };
    document.getElementById("to_article").onclick = function(){
        window.parent.location = "article.html";
    };
    document.getElementById("to_interest").onclick = function(){
        window.parent.location = "interest.html";
    };
})();
function show_login() {
    var login_layout = document.getElementById("login_back");
    window.parent.document.body.children[0].style.height = "100%";
    login_layout.style.display = "block";
    login_layout.style.animation = "show_ani 0.2s";
}
function close_login() {
    function fun(){
        login_layout.style.display = "none"; 
        window.parent.document.body.children[0].style.height = "60px";
        uname.value = "";
        upwd.value = "";
        login_layout.removeEventListener("webkitAnimationEnd",fun);
    }
    var login_layout = document.getElementById("login_back");
    login_layout.style.animation = "close_ani 0.2s";
    login_layout.addEventListener("webkitAnimationEnd",fun);
}
function show_pwd() {
    var upwd = document.getElementById("upwd");
    upwd.setAttribute("type", "text");
    setTimeout(() => {
        upwd.setAttribute("type", "password");
    }, 1000);
}
function show_search(){
    var nav_center = document.getElementById("nav_center");
    var search_bar = document.getElementById("search_bar");
    var search_img = document.getElementById("search_img"); 
    function fun(){
        nav_center.style.display = "none";
        search_bar.style.display = "flex";
        search_bar.style.animation = "show_search 0.2s";
        nav_center.removeEventListener("webkitAnimationEnd",fun);
    }
    function fun1(){
        search_img.style.visibility = "hidden";
        search_img.removeEventListener("webkitAnimationEnd",fun1);
    }
    nav_center.style.animation = "close_ani 0.2s";
    search_img.style.animation = "close_ani 0.2s";
    nav_center.addEventListener("webkitAnimationEnd",fun)
    search_img.addEventListener("webkitAnimationEnd",fun1)
}
function close_search(){
    var search_bar = document.getElementById("search_bar"); 
    var search_img = document.getElementById("search_img"); 
    function fun(){
        search_bar.style.display = "none";
        nav_center.style.display = "flex";
        nav_center.style.animation = "show_ani 0.2s";
        document.getElementById("search").value = "";
        search_bar.removeEventListener("webkitAnimationEnd",fun);
    }
    function fun1(){
        search_img.style.visibility = "visible";
        search_img.removeEventListener("webkitAnimationEnd",fun1);
    }
    search_bar.style.animation = "close_search 0.4s";
    search_img.style.animation = "show_ani 0.4s";
    search_bar.addEventListener("webkitAnimationEnd",fun)
    search_img.addEventListener("webkitAnimationEnd",fun1)
}


function login() {
    var $uname = uname.value;
    var $upwd = upwd.value;
    if (!$uname || !$upwd) {
        alert("用户名和密码不能为空");
        return;
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var result = xhr.responseText;
            if (result == "1") {
                alert("登录成功");
            } else {
                alert("登录失败，请检查用户名和密码");
            }
        }
    };
    xhr.open("get", "/user/v1/login/" + $uname + "&" + $upwd, true);
    xhr.send();
}