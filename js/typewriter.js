var typewriter = document.getElementById("typewriter");
var str = typewriter.innerText;
typewriter.innerHTML = "";

for (var i = 0; i < str.length; i++) {
    setTimeout(typeLetter, i * 300 + 1000, str.charAt(i));
}
var cursor = document.getElementsByClassName('cursor')[0];
setTimeout(blink, str.length * 300 + 1000);

function typeLetter(letter) {
    typewriter.innerHTML += letter;
}

function blink() {
    cursor.className += " blinking-cursor";
    //console.log(cursor.className);
}
