window.onscroll = function () {
    var btn = document.getElementById("to_top");
    if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
        btn.style.animation = "show_ani 0.2s";
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

function toTop() {
    if (document.body.scrollTop != 0) {
        var timer = setInterval(() => {
            if (document.body.scrollTop <= 0) {
                clearInterval(timer);
            }
            if (document.body.scrollTop != 0) {
                document.body.scrollTop -= document.body.scrollTop / 25;
            }
        }, 1);
    }
    if (document.documentElement.scrollTop != 0) {
        var timer = setInterval(() => {
            if (document.documentElement.scrollTop <= 0) {
                clearInterval(timer);
            }
            if (document.documentElement.scrollTop != 0) {
                document.documentElement.scrollTop -= document.documentElement.scrollTop / 25;
            }
        }, 1);
    }
}

