function show_login() {
    var login_layout = document.getElementById("login_back");
    window.parent.document.body.children[0].style.height = "100%";
    login_layout.style.display = "block";
    login_layout.style.animation = "show_ani 0.2s";
}
function close_login() {
    var login_layout = document.getElementById("login_back");
    
    login_layout.style.animation = "close_ani 0.2s";
    setTimeout(() => { 
        login_layout.style.display = "none"; 
        window.parent.document.body.children[0].style.height = "60px";
    },150);
    uname.value = "";
    upwd.value = "";
}
function show_pwd() {
    var upwd = document.getElementById("upwd");
    upwd.setAttribute("type", "text");
    setTimeout(() => {
        upwd.setAttribute("type", "password");
    }, 1000);
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