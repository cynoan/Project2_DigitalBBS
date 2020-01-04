function switchTo(i,which) {
    function fun2() {
        document.getElementsByClassName("head_r")[i].style.display = "none";
        document.getElementsByClassName("head_f")[i].style.display = "flex";
        document.getElementsByClassName("head_f")[i].style.animation = "show_btn 0.2s";
        document.getElementsByClassName("head_r")[i].removeEventListener("webkitAnimationEnd", fun2);
    }
    function fun1() {
        document.getElementsByClassName("head_f")[i].style.display = "none";
        document.getElementsByClassName("head_r")[i].style.display = "flex";
        document.getElementsByClassName("head_r")[i].style.animation = "show_btn 0.2s";
        document.getElementsByClassName("head_f")[i].removeEventListener("webkitAnimationEnd", fun1);
    }
    
    if (which == "f") {
        document.getElementsByClassName("head_f")[i].style.animation = "close_btn 0.2s";
        document.getElementsByClassName("head_f")[i].addEventListener("webkitAnimationEnd", fun1);
    } else if (which == "r") {
        document.getElementsByClassName("head_r")[i].style.animation = "close_btn 0.2s";
        document.getElementsByClassName("head_r")[i].addEventListener("webkitAnimationEnd", fun2);
    }
}

