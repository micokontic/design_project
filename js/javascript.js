var titles = ['Bookmark in one click', 'Intelligent search', 'Share your bookmarks'];
var text = ['Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    'Easily share your bookmarks and collections with others. Create a shareble link that you can send at the click of a button.'
];
var image = ['images/illustration-features-tab-1.svg',
    'images/illustration-features-tab-2.svg',
    'images/illustration-features-tab-3.svg'
];
var buttonIds = ['#redbox1', '#redbox2', '#redbox3'];
var btnIds = ['#btn-1', '#btn-2', '#btn-3'];
var questionImgIds = ['#question1-img', '#question2-img', '#question3-img', '#question4-img']


// NAV FUNCTIONS
var navInd = 0;
const navSlide = () => {

    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if (navInd == 0) {
            $("#img-logo").fadeTo(400, 0.30, function () {
                $("#img-logo").attr("src", '../images/logo-bookmark-nav-active.svg');
            }).fadeTo(100, 1);
            $("#img-burger").fadeTo(100, 0.30, function () {
                $("#img-burger").attr("src", '../images/icon-close.svg');
            }).fadeTo(400, 1);

            navInd = 1;
        } else {
            console.log('odje sam!');
            $("#img-logo").fadeTo(100, 0.30, function () {
                $("#img-logo").attr("src", '../images/logo-bookmark.svg');
            }).fadeTo(400, 1);

            $("#img-burger").fadeTo(400, 0.30, function () {
                $("#img-burger").attr("src", '../images/icon-hamburger.svg');
            }).fadeTo(100, 1);
            navInd = 0;
        }

    })

}





$(document).ready(function () {
    navSlide();

    $('#button-1').click(function () {
        changeText(0);
    });
    $('#button-2').click(function () {
        changeText(1);
    });
    $('#button-3').click(function () {
        changeText(2);
    });
    $('#question1').click(function () {
        ChangeArrow($(this), 0)
    })
    $('#question2').click(function () {
        ChangeArrow($(this), 1)
    })
    $('#question3').click(function () {
        ChangeArrow($(this), 2)
    })
    $('#question4').click(function () {
        ChangeArrow($(this), 3)
    })

    // blue background
    var image1 = document.getElementById('image1').style.height;
    document.getElementById('img-background1').style.height = image1;

});

function ChangeArrow(elem, num) {
    if (($(elem)).attr('aria-expanded') === "true") {

        for (var i = 0; i < 4; i++) {
            $(questionImgIds[i]).attr("src", '../images/icon-arrow.svg');
        }

        $(questionImgIds[num]).attr("src", '../images/icon-arrow.svg');

    } else {
        for (var i = 0; i < 4; i++) {
            $(questionImgIds[i]).attr("src", '../images/icon-arrow.svg');
        }

        $(questionImgIds[num]).attr("src", '../images/icon-arrow-red.svg');
    }
}


function changeText(num) {
    $('#redbox1').css("background-color", "white");
    $('#redbox2').css("background-color", "white");
    $('#redbox3').css("background-color", "white");

    for (i = 0; i < 3; i++) {
        $(btnIds[i]).css("color", "grey");
    }

    $(buttonIds[num]).css("background-color", "red");;
    $(btnIds[num]).css("color", "black");
    $('#changable-title').html(titles[num]);
    $('#changable-text').html(text[num]);
    $("#image-change").attr("src", image[num]);

}

//EMAIL CHECK

var error = "<i>Whoops, make sure it's an email</i>"

function emailCheck() {

    var ind = 1;
    var email = document.getElementById("email").value;
    var element = document.getElementById("email");
    var errorMessage = document.getElementById("emailNotOk");
    // errorMessage.innerHTML = ".";

    if (!isEmpty(email)) {
        if (!email.includes('.com')) {
            ind = 0;
            setInValid(element);
            errorMessage.innerHTML = error;

        }
        if (!email.includes('@')) {
            setInValid(element);
            if (ind == 1) {
                errorMessage.innerHTML = error;
            } else {
                errorMessage.innerHTML = error;
            }
            ind = 0;

        }
        if (email.length > 50) {
            setInValid(element);
            if (ind == 1) {
                errorMessage.innerHTML = error;
            } else {
                errorMessage.innerHTML = error;
            }
            ind = 0;

        }
        if (ind === 1) {
            setValid(element);
        }
    } else {
        setInValid(element);
        ind = 0;

        errorMessage.innerHTML = "";
        errorMessage.innerHTML = error;
    }
    return ind;
}

function isEmpty(elem) {
    if (elem === "") {
        return 1;
    } else {
        return 0;
    }
}

function setValid(element) {
    element.classList.remove("is-invalid");
    element.classList.add("is-valid");
    $('#emailNotOk').css("background-color", "transparent");
    $('#email-div').css("background-color", "transparent");

    var errorMessage = document.getElementById("emailNotOk");
    errorMessage.innerHTML = "";
}

function setInValid(element) {
    element.classList.remove("is-valid");
    element.classList.add("is-invalid");
    $('#emailNotOk').css("background-color", "rgb(251, 88, 89)");
    $('#email-div').css("background-color", "rgb(251, 88, 89)");




}