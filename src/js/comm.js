window.onscroll = function () {
    var btn = document.getElementById("to_top");
    var timer = "";
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        btn.style.animation = "show_ani 0.2s";
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}
