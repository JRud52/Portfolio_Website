document.addEventListener('scroll', do_scroll, false);
//var header = document.getElementById("header");

function do_scroll(e){
  if(window.scrollY == 0){
    header.class += "header-collapsed";
  }
  else {
    header.class += "header-collapsed";
  }
}
