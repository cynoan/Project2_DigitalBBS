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
        if (document.body.scrollTop > 2100) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 50;
                }
            }, 1);
        } else if (document.body.scrollTop > 1600 && document.body.scrollTop <= 2100) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 20;
                }
            }, 1);
        } else if (document.body.scrollTop > 1100 && document.body.scrollTop <= 1600) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 10;
                }
            }, 1);
        } else if (document.body.scrollTop > 700 && document.body.scrollTop <= 1100) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 8;
                }
            }, 1);
        } else if (document.body.scrollTop > 400
            && document.body.scrollTop <= 700) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 6;
                }
            }, 1);
        } else if (document.body.scrollTop > 200
            && document.body.scrollTop <= 400) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 2;
                }
            }, 1);
        } else if (document.body.scrollTop > 0 && document.body.scrollTop <= 200) {
            var timer = setInterval(() => {
                if (document.body.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.body.scrollTop != 0) {
                    document.body.scrollTop -= 1;
                }
            }, 1);
        }
    }

    if (document.documentElement.scrollTop != 0) {
        if (document.documentElement.scrollTop > 2100) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 50;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 1600 && document.documentElement.scrollTop <= 2100) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 20;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 1100 && document.documentElement.scrollTop <= 1600) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 10;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 700 && document.documentElement.scrollTop <= 1100) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 8;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 400
            && document.documentElement.scrollTop <= 700) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 6;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 200
            && document.documentElement.scrollTop <= 400) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 2;
                }
            }, 1);
        } else if (document.documentElement.scrollTop > 0 && document.documentElement.scrollTop <= 200) {
            var timer = setInterval(() => {
                if (document.documentElement.scrollTop == 0) {
                    clearInterval(timer);
                }
                if (document.documentElement.scrollTop != 0) {
                    document.documentElement.scrollTop -= 1;
                }
            }, 1);
        }
    }
}
