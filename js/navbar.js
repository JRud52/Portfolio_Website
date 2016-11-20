var nav = document.getElementsByClassName("nav")[0];
var header = document.getElementsByClassName("header")[0];
var header_height = getComputedStyle(header).height.split('px')[0];

function solidScroll(e) {
    console.log(header_height);
    if (window.pageYOffset > 700) {
        nav.className = "nav nav-solid";
    } else {
        nav.className = "nav";
    }
}

window.addEventListener('scroll', solidScroll, false);
