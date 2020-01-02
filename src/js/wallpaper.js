(function(){
    var length = document.getElementsByClassName("wallpaper").length;
    for(var i=0;i<length;i++){
        document.getElementsByClassName("wallpaper")[i].style.background = `url("../img/news/latest/wallpaper"+${i+1}+".jpg")`;
    }
})();