//////////////////////////////////////////////Play video
$("#click_firstVideo").click(function () {
    $(this).hide();
    $('#video_first_img').hide();
    $('#video_first').show();
    $('#video_first').trigger('play');
 
});

$("#click_firstVideo_mob").click(function () {
    $(this).hide();
    $('#video_first_img_mob').hide();
    $('#video_first_mob').show();
    $('#video_first_mob').trigger('play');
    $('#btn_video').hide();
 
});
$("#btn_video").click(function () {
    $("#click_firstVideo_mob").click();
 
});

$("#play_video").click(function () {
    $('#video').trigger('play');
    $(this).hide();
});
///////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////

//////////////////terms//////////////
$('.terms_modal_open').on('click', function () {
    $('#modal_terms').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#modal_terms').hide();
    $('html').css('overflow', 'auto');
});

//////////////////privacy policy//////////////
$('.privacyPolicy_modal_open').on('click', function () {
    $('#modal_terms').hide();
    $('#modal_privacyPolicy').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#modal_privacyPolicy').hide();
    $('html').css('overflow', 'auto');
});

/////////////////Spam Disclaimer//////////////
$('.spam_modal_open').on('click', function () {
    $('#modal_terms').hide();
    $('#modal_spam').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#modal_spam').hide();
    $('html').css('overflow', 'auto');
});

/////////////////Report Abuse//////////////
$('.reportAbuse_modal_open').on('click', function () {
    $('#modal_terms').hide();
    $('#modal_reportAbuse').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#modal_reportAbuse').hide();
    $('html').css('overflow', 'auto');
});

/////////////////contactUs//////////////
$('.contactUs_modal_open').on('click', function () {
    $('#modal_terms').hide();
    $('#modal_contactUs').show();
    $('html').css('overflow', 'hidden');
});
$('.close').on('click', function () {
    $('#modal_contactUs').hide();
    $('html').css('overflow', 'auto');
});

//////////////////modal block//////////

// $(document).mouseleave(function (e) {
//     if (e.clientY < 10) {
//         $(".exitblock").addClass("active");
//     }
// });
// /////////////open modal without action on page
// let timeout = 15000;
// let lastActiveTimestamp = 0;
// let userIsActive = false;

// window.addEventListener('mousemove', active);
// window.addEventListener('keypress', active);
// window.addEventListener('click', active);
// window.addEventListener('scroll', active);

// setInterval(checkUserIsActive, 1000)
// active();

// function checkUserIsActive() {
//     if (userIsActive && new Date().getTime() - lastActiveTimestamp > timeout) {
//         $(".exitblock").addClass("active");
//         userIsActive = false;
//     }
// }

// function active() {
//     lastActiveTimestamp = new Date().getTime();
//     if (!userIsActive) { userIsActive = true; }
// }

/////////////////////////////////////////////////////////////

$(document).click(function (e) {
    if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
        $(".exitblock").removeClass("active");
    }  
});


/////////////////////////////////////////////////////////// 
////////////////////////////////
$('#reg_btn').click(function(e) {
    e.stopPropagation(); // stops the event to bubble up to the parent element.
    $(".exitblock").addClass("active");
  });

//////////////// hubmurgerMenu/////////////////////////////////
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header_menu = document.querySelector(".header_menu");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header_menu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");


const button = document.querySelector('#nav-logo');

button.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header_menu.classList.remove("active");
});






navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header_menu.classList.remove("active");
}



