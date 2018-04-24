function navFunction() {
    var x = document.getElementById("nav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
};

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function validate() {
    var resAlder = $("#resultalder");
    var resEmail = $("#resultemail");
    var resPsw = $("#resultpsw");
    var navn = $("#navn").val();
    var email = $("#email").val();
    var alder = $("#alder").val();
    var psw = $("#psw").val();
    var repsw = $("#pswrepeat").val();
    var error = false;

    if (alder >= 18) {
        resAlder.text("");
    } else {
        resAlder.text("Det skal være et tal (Du skal være over 18)");
        resAlder.css("color", "red");
        error = true;
    }

    if (validateEmail(email)) {
        resEmail.text("");
    } else {
        resEmail.text(email + " er ikke en rigtig email");
        resEmail.css("color", "red");
        error = true;
    }

    if (psw == repsw) {
        resPsw.text("");
    } else {
        resPsw.text("Stemmer ikke overens med dit password");
        resPsw.css("color", "red");
        error = true;
    }

    if (!error) {
        alert(navn + "(" + alder + ") er nu blevet medlem!")
        
    }

    return false;
};

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}