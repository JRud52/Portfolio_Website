var button = document.getElementById("see_more_button");
button.addEventListener("click", toggleLangs, false);

function toggleLangs(e){
  var langSection = document.getElementById("lang_section");
  console.log(langSection.style.display);
  if (langSection.style.display == 'block'){
    langSection.style.display = 'none';
    button.innerText = "SEE MORE";
  }
  else {
    langSection.style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
    button.innerText = "SEE LESS";
  }
}
