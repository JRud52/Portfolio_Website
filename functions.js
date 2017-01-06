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
}

function submit_form(e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&message=' + message;

    if (name == '' || email == '' || message == '') {
        if (name == '') {
            $('.success').fadeOut(200).hide();
            $('.send_error').fadeOut(200).hide();
            $('.name_error').fadeIn(200).show();
        }
        if (email == '') {
            $('.success').fadeOut(200).hide();
            $('.send_error').fadeOut(200).hide();
            $('.email_error').fadeIn(200).show();
        }
        if (message == '') {
            $('.success').fadeOut(200).hide();
            $('.send_error').fadeOut(200).hide();
            $('.message_error').fadeIn(200).show();
        }

    } else {
        $.ajax({
            type: "POST",
            url: "contact.php",
            data: dataString,
            success: function() {
                $('.success').fadeIn(200).show();
                $('.name_error').fadeOut(200).hide();
                $('.email_error').fadeOut(200).hide();
                $('.message_error').fadeOut(200).hide();
                $('.send_error').fadeOut(200).hide();

            },
            error: function() {
                $('.success').fadeOut(200).hide();
                $('.name_error').fadeOut(200).hide();
                $('.email_error').fadeOut(200).hide();
                $('.message_error').fadeOut(200).hide();
                $('.send_error').fadeIn(200).show();
            }
        });
    }
    return false;
}
