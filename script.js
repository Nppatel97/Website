//---------------- Variables --------------------------------


// --------------- 1. Scroll Animations (Definitely the craziest one!) ------------------

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    // Close menu on scroll
    if (scroll != -1) {
        $("#menuShow").slideUp();
        setTimeout(function() { $("#menu").removeClass("change"); }, 700);
    }

    // 1.1. Decrease the Introduction div's opacity as one scrolls down
    $(".iBox").css("opacity", 1 - scroll / 500);

    // Decrease the top margin and increase the opacity of the image on left in "About Me" section  
    if (window.innerWidth > 768)
        $(".myImg").css("margin-top", 50 - scroll / 5);

    //----- 1.2. This code converts the Individual Sections from card forms to full width sections and vice versa for: -----

    if (window.innerWidth > 768) {
        // Introduction Div
        if (scroll > 80) {
            $(".logoMini").slideDown();
            $(".iBox").css("width", "90%");
            $(".iBox").css("border-radius", "10px");
        } else {
            $(".logoMini").fadeOut();
            $(".iBox").css("width", "100%");
            $(".iBox").css("border-radius", "0px");
        }

        // "About Me" Section
        if (scroll > 650 && scroll < 850) {
            $(".aBox").addClass("stick");
            $(".aBox").css("width", "100%");
            $(".aBox").css("border-radius", "0px");
            $(".imgB1").css("animation", "up 3.5s ease-in-out, side 1s ease-in-out infinite alternate");
            $(".imgB2").css("animation", "up 2.6s ease-in-out, side 1s ease-in-out infinite alternate");
            $(".imgB3").css("animation", "up 3.9s ease-in-out, side 1s ease-in-out infinite alternate");
            $(".imgB4").css("animation", "up 3s ease-in-out, side 1s ease-in-out infinite alternate");
        } else {
            $(".aBox").css("width", "96%");
            $(".aBox").removeClass("stick");
            $(".aBox").css("border-radius", "10px");
        }

        // "Skills" Section
        if (scroll > 1400 && scroll < 1650) {
            $(".sBox").addClass("stick");
            $(".sBox").css("width", "100%");
            $(".sBox").css("border-radius", "0px");
        } else {
            $(".sBox").css("width", "96%");
            $(".sBox").removeClass("stick");
            $(".sBox").css("border-radius", "10px");

        }

        // "Academics" Section
        if (scroll > 2350 && scroll < 2650) {
            $(".acBox").addClass("stick");
            $(".acBox").css("width", "100%");
            $(".acBox").css("border-radius", "0px");
        } else {
            $(".acBox").css("width", "96%");
            $(".acBox").removeClass("stick");
            $(".acBox").css("border-radius", "10px");

        }
        //----- 1.2. ENDS here -----
    }

    // ----- 1.3. Menu Icon Changes (linked to 2.) -----
    // If scroll is past 500 px, then: 
    if (scroll > 500) {

        // Change the Menu Icon color from light to dark
        $(".bar1").addClass("changeColor");
        $(".bar2").addClass("changeColor");
        $(".bar3").addClass("changeColor");

        // Display the 8 images from different perspectives by Animating their X, Y or Z axes
        if (window.innerWidth > 768) {
            $(".imgDivA1").addClass("ImgAnimUp");
            $(".imgDivA2").addClass("ImgAnimRight");
            $(".imgDivA3").addClass("ImgAnimDown");
            $(".imgDivA4").addClass("ImgAnimIn");
        }

        if (window.innerWidth < 768) {
            $(".imgs").html('<div class="container-fluid"> <div class="col-xs-6 imgDivA1"><img alt="Web Designer" src="images/web_design.jpg" class="imgA1" style="border-color: lightseagreen; " /><br>Free Time? Web Design!</div> <div class="col-xs-6 imgDivA2"><img alt="Always Keep Learning" src="images/learn.jpg" class="imgA2" style="border-color: yellowgreen;" /><br>You are always a student</div><div class="col-xs-6 imgDivA3"><img alt="Android Developer" src="images/android.jpg" class="imgA3" style="border-color: greenyellow;" /><br>Started Learning Android Development</div><div class="col-xs-6 imgDivA4"><img alt="Team Work" src="images/team_work.jpg" class="imgA4" style="border-color: goldenrod;" /><br>Best way to boost productivity, Teamwork.</div></div>')
        }
    }

    // If scroll is less than 500px, then change the Menu Icon back to light
    if (scroll < 500) {
        $(".bar1").removeClass("changeColor");
        $(".bar2").removeClass("changeColor");
        $(".bar3").removeClass("changeColor");
    }
    //----- 1.3. ENDS here -----

    //----- 1.4. This code changes the text in the button and the href value in the <a> tag. (linked to 6.) -----
    // Performs changes in the Dynamic Down Button as follows:

    // If scroll is less than 500px, then the target is set to reach the "About Me" Section
    setTimeout(function() {
        if (scroll < 200) {
            $("#goDown").css("color", "seagreen");
            $("#goDown").html('About Me <span id="dArrow" class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>');
            $("#dButton").attr("href", "#aboutDiv");

            // If scroll is between 500px and 1400px, then the target is set to reach the "Skills" Section
        } else if (scroll > 300 && scroll < 400) {
            $("#goDown").css("color", "midnightblue");
            $("#goDown").html('Skills <span id="dArrow" class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>');
            $("#dButton").attr("href", "#skillsDiv");

            // If scroll is between 1400px and 2000px, then the target is set to reach the "Projects" Section
        } else if (scroll > 1000 && scroll < 1400) {
            $("#goDown").css("color", "indianred").fadeIn("fast");
            $("#goDown").html('Academics <span id="dArrow" class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>').fadeIn("slow");
            $("#dButton").attr("href", "#academicsDiv");

            // If scroll is between 2000px and 2200px, then the target is set to reach the "Academics" Section
        } else if (scroll > 2000 && scroll < 2300) {
            $("#goDown").css("color", "orange");
            $("#goDown").html('Contact Me <span id="dArrow" class="glyphicon glyphicon-menu-down" aria-hidden="true"></span>');
            $("#dButton").attr("href", "#contactDiv");

            // If scroll is more than 2500px, then the target is set to reach back to top
        } else if (scroll > 2900) {
            $("#goDown").css("color", "darkolivegreen");
            $("#goDown").html('Back To Top <span id="uArrow" class="glyphicon glyphicon-menu-up" aria-hidden="true"></span>');
            $("#dButton").attr("href", "#btt");
        }
    }, 700);

    //----- 1.4. ENDS here -----

    // 1.5. Animate the progress bars in "Skills" Section when the user scrolls past 750px
    if (scroll > 750) {
        $(".progress-bar").animate({
            width: '100%'
        }, 2000);
    }

});

// 1.6 Background Scrolls slower than content

// (function() {

//     var parallax = document.querySelectorAll(".parallax"),
//         speed = 0.5;

//     window.onscroll = function() {
//         [].slice.call(parallax).forEach(function(el, i) {

//             var windowYOffset = window.pageYOffset,
//                 elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

//             el.style.backgroundPosition = elBackgrounPos;

//         });
//     };

// })();

// ------------X 1. ENDS here X----------------------------

//-------------- 2. Menu Icon Animations ------------------

// Hides the menu and changes the menu icon back to default when 
// one clicks anywhrere outside the menu
$('html').click(function() {
    $("#menuShow").slideUp();
    setTimeout(function() { $("#menu").removeClass("change"); }, 700);
});

// Toggles the menu
$("#menu").click(function() {
    event.stopPropagation();
    $("#menu").toggleClass("change");
    setTimeout(function() {
        $("#menuShow").slideToggle();
    }, 700);
});

// Closes the menu and changes the menu icon back to default when
// a menu option is chosen (clicked)
$('#menuOptions').click(function() {
    $("#menuShow").slideToggle("fast");
    setTimeout(function() { $("#menu").removeClass("change"); }, 700);
});

//--------------X 2. ENDS here X----------------------------------

//--------------- 3. Smooth scroll for sections ------------------

// "About Me" Section
$(".aBox, #aboutOpt").click(function() {
    $('html, body').animate({
        scrollTop: $("#aboutDiv").offset().top
    }, 700);
});

// "Skills" Section
$(".sBox, #skillsOpt").click(function() {
    $('html, body').animate({
        scrollTop: $("#skillsDiv").offset().top
    }, 700);
});

// "Academics" Section
$(".acBox, #academicsOpt").click(function() {
    $('html, body').animate({
        scrollTop: $("#academicsDiv").offset().top
    }, 700);
});

// "Contacts" Section
$(".cBox, #contactOpt").click(function() {
    $('html, body').animate({
        scrollTop: $("#contactDiv").offset().top
    }, 700);
});

// "Back to Top" Button
$(" .logoLayer, #bttOpt").click(function() {
    $('html, body').animate({
        scrollTop: $("#btt").offset().top
    }, 700);
});

// ------------X 3. ENDS here X--------------------------------------------------

//-------------- 4. Code for SlideShow (Still incomplete) -----------------------

// Variables
var courseNames = ["ALGORITHMS", "HCI", "THEORY", "OS", "DBMS", "ANALYSIS"];
var backImgs = ["images/ss1.jpg", "images/ss2.jpg", "images/ss3.jpg", "images/ss4.jpg", "images/ss5.jpg", "images/ss6.jpg"];
var contents = ["#algo", "#hci", "#theory", "#os", "#dbms", "#analysis"];
var i = 0;
var x = contents.length;

// SlideShow Animation
$('#right').click(function(event) {

    // Animations to go away
    i++;
    $("#slideName").slideUp("fast");

    $(".layer2").css("transform", "translateX(-20px)");
    $(".layer2").css("opacity", "0");


    setTimeout(function() {
        $("#backImg").css("opacity", "0");
    }, 300);

    if (i >= courseNames.length)
        i = 0;

    $(contents[x - 1]).css("display", "none");
    var c1 = courseNames[i];
    var b1 = backImgs[i];

    // Changes in the content are made here
    setTimeout(function() {
        $("#slideName").html(c1);
        $("#backImg").attr("src", b1);
    }, 700);

    setTimeout(function() {
        $(contents[i - 1]).css("display", "none");
        $(contents[i]).fadeIn("slow");
    }, 50);

    setTimeout(function() {
        $(".layer2").css("transform", "translateX(30px)");
    }, 200);

    //Animations to make stuff re appear
    setTimeout(function() {
        $("#backImg").css("opacity", "1");
        $("#backImg").css("transition", "0.3s ease");
    }, 800);

    $("#slideName").delay(1000).slideDown("fast");

    setTimeout(function() {
        $(".layer2").css("transform", "translateX(0px)");
        $(".layer2").css("opacity", "1");

    }, 700);
});

// Same as above but for "Previous" button
$('#left').click(function(event) {
    $("#slideName").slideUp("fast");
    $(".layer2").css("transform", "translateX(20px)");
    $(".layer2").css("opacity", "0");
    i--;
    setTimeout(function() {
        $("#backImg").css("opacity", "0");
    }, 300);

    if (i <= -1)
        i = courseNames.length;

    $(contents[0]).css("display", "none");
    var c1 = courseNames[i];
    var b1 = backImgs[i];


    setTimeout(function() {
        $("#slideName").html(c1);
        $("#backImg").attr("src", b1);
    }, 700);

    setTimeout(function() {
        $(contents[i + 1]).css("display", "none");
        $(contents[i]).fadeIn("slow");
    }, 50);

    setTimeout(function() {
        $(".layer2").css("transform", "translateX(-30px)");
    }, 200);

    setTimeout(function() {
        $("#backImg").css("opacity", "1");
        $("#backImg").css("transition", "0.3s ease");
    }, 800);

    $("#slideName").delay(1000).slideDown("fast");

    setTimeout(function() {
        $(".layer2").css("transform", "translateX(0px)");
        $(".layer2").css("opacity", "1");

    }, 700);
});

// Fades out the slideshow image box
$('#close').click(function(event) {
    $("#slideShow").removeClass("ImgAnimIn").fadeOut("slow");
    $(".layer").fadeIn("fast").addClass("ImgAnimOut");
});

// -------------------X 4. ENDS here X------------------------------------------

//--------------------- 5. Animation to display name at the top ----------------

$(function() {
    $("#sliderHider").css("width", "0px");
    setTimeout(function() {
        $("#sliderHider").css("height", "0px");
        $("#sliderHider").css("transition", "2s ease");
        $("#sliderHider").fadeOut(1700);
    }, 2200);
});

// Same as above but for the subtext below name
$(function() {
    $("#sliderHider2").css("width", "0px");
    setTimeout(function() {
        $("#sliderHider2").css("height", "0px");
        $("#sliderHider2").css("transition", "2s ease");
        $("#sliderHider2").fadeOut(1700);
    }, 2200);
});

//-----------------X 5. ENDS here X---------------------------------------------

//------------------ 6. Smooth Scroll for the dynamic down button --------------

$("#goDown").click(function() {
    // Check if the href value for <a> is #aboutDiv
    if ($("#dButton").attr("href") == "#aboutDiv") {
        $('html, body').animate({
            // Scroll to the "About Me" section
            scrollTop: $("#aboutDiv").offset().top
        }, 700);
        // Check if the href value for <a> is #skillsDiv
    } else if ($("#dButton").attr("href") == "#skillsDiv") {
        $('html, body').animate({
            // Scroll to the "Skills" section
            scrollTop: $("#skillsDiv").offset().top
        }, 700);
        // Check if the href value for <a> is #projectsDiv
    } else if ($("#dButton").attr("href") == "#academicsDiv") {
        $('html, body').animate({
            // Scroll to the "Projects" section
            scrollTop: $("#academicsDiv").offset().top
        }, 700);
    } else if ($("#dButton").attr("href") == "#contactDiv") {
        $('html, body').animate({
            // Scroll to the "Projects" section
            scrollTop: $("#contactDiv").offset().top
        }, 700);
    } else if ($("#dButton").attr("href") == "#btt") {
        $('html, body').animate({
            // Scroll to the "Projects" section
            scrollTop: $("#btt").offset().top
        }, 700);
    }
});

// -------------------X 6. ENDS here X-----------------

//------------------ 6. Smooth Scroll for the dynamic down button --------------

$(".fa-facebook").mouseenter(function() {
    $(".paraBox").html("Check out my social life! It's mostly profile pictures tho'")
        .css("color", "white");
    $(".cBox").css("background", "#3B5998");
    $(".rightBox, #contactDiv").css("color", "white");
});

$(".fa-linkedin").mouseenter(function() {
    $(".paraBox").html("Check this out if you plan to hire me! ;)")
        .css("color", "white");
    $(".cBox").css("background", "#0077B5");
    $(".rightBox, #contactDiv").css("color", "white");

});

$(".fa-github").mouseenter(function() {
    $(".paraBox").html("Code Code Code! Check out how neatly I write my code")
        .css("color", "white");
    $(".cBox").css("background", "#323131");
    $(".rightBox, #contactDiv").css("color", "white");

});

$(".fa-google-plus").mouseenter(function() {
    $(".paraBox").html("¯\\_(ツ)_/¯")
        .css("color", "white");
    $(".cBox").css("background", "#DC4A38");
    $(".rightBox, #contactDiv").css("color", "white");

});

$(".resume").mouseenter(function() {
    $(".paraBox").html("Yay I'm being hired! I am, right?")
        .css("color", "white");
    $(".cBox").css("background", "seagreen");
    $(".rightBox, #contactDiv").css("color", "white");

});

$(".paraBox, .cBox").mouseenter(function() {
    $(".paraBox").html("Social Media").css("color", "black");
    $(".cBox").css("background", "white");
    $("#contactDiv").css("color", "orange");
    $(".rightBox").css("color", "black");

});

$(".changeBackClr, .resume").mouseleave(function() {
    $(".paraBox").html("Social Media").css("color", "black");
    $(".cBox").css("background", "white");
    $("#contactDiv").css("color", "orange");
    $(".rightBox").css("color", "black");


});

// -------------------X 6. ENDS here X-----------------