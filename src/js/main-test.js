import $ from "jquery";
import "bootstrap";
import Flickity from "flickity";

const $selectDesktop = $(".form-search-select-desktop");
const $selectMobile = $(".form-search-select-mobile");

// flickity fix for iOS
(function() {
    var touchingCarousel = false,
      touchStartCoords;

    document.body.addEventListener('touchstart', function(e) {
      if (e.target.closest('.flickity-slider')) {
        touchingCarousel = true;
      } else {
        touchingCarousel = false;
        return;
      }

      touchStartCoords = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      }
    });

    document.body.addEventListener('touchmove', function(e) {
      if (!(touchingCarousel && e.cancelable)) {
        return;
      }

      var moveVector = {
        x: e.touches[0].pageX - touchStartCoords.x,
        y: e.touches[0].pageY - touchStartCoords.y
      };

      if (Math.abs(moveVector.x) > 7)
        e.preventDefault()

    }, {passive: false});
})();

// change navbar height on scroll
function navbarShrink() {

    var $window = $(window);
    var $wScroll = $window.scrollTop();
    var $windowW = $window.width();
    
    // console.log($wScroll);

    if (window.innerWidth > 767) {
        
        if ($("#hero").offset().top < $wScroll) {
            $(".navbar").addClass("navbar-shrink");
        } else if ($("#hero").offset().top > $wScroll) {
            $(".navbar").removeClass("navbar-shrink");
        }

        // show navbar search form
        if ($("#hero").offset().top + 180 < $wScroll) {
            $("#formSearchContainerNav").addClass("show-form");
            // $("#formSearchContainer").addClass("hide-form");
            $(".fsc-test").addClass("hide-form");
        } else {
            $("#formSearchContainerNav").removeClass("show-form");
            // $("#formSearchContainer").removeClass("hide-form");
            $(".fsc-test").removeClass("hide-form");
        }
    } else {
        
        $(".navbar").removeClass("navbar-shrink");
        $("#formSearchContainerNav").removeClass("show-form");
    }

    // show navbar search form

    // attach search form to navbar on scroll
    // if (window.innerWidth >= 1200) {
    //     if ($("#hero").offset().top + 200 <= $wScroll) {
    //         $("#formSearchContainer, .btn-search").addClass("navbar-fixed");
    //         $(".navbar .form-search-container").addClass("show-form");
    //     } else if ($("#hero").offset().top + 200 > $wScroll) {
    //         $("#formSearchContainer, .btn-search").removeClass("navbar-fixed");
    //         $(".navbar .form-search-container").removeClass("show-form");
    //     }
    // } else {
    //     $("#formSearchContainer, .btn-search").removeClass("navbar-fixed");
    // }
};

$(document).ready(navbarShrink);
$(window).scroll(navbarShrink);
$(window).resize(navbarShrink);

// navbar brand hover
const navbarBrand = document.querySelector(".navbar-brand");
const logoImg = document.querySelector(".img-logo-text-hover")

navbarBrand.addEventListener("mouseenter", function() {
    
    logoImg.style.opacity = "1";
});

navbarBrand.addEventListener("mouseleave", function() {
    
    logoImg.style.opacity = "0";
});

// navbar toggle hamburger btn
$('#navbarMobileToggle').click(function(){
    $(this).toggleClass("navbar-mobile-closed");
    $(this).children(".icon")
        .toggleClass('menu')
        .toggleClass('close');

    $("#navbarMobile").toggleClass("slide-in");
    $(".navbar-mobile-overlay").fadeToggle();
    $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
        // .css({position: "fixed", top: '-' + $(window).scrollTop() + 'px'});
        // console.log(window.scrollY + 'px');
    $("html").toggleClass("advanced-search-form-open");
});

$(".navbar-mobile-overlay").click(function() {
    $(this).fadeToggle();
    $('#navbarMobileToggle').children(".icon").toggleClass("menu").toggleClass("close");
    $("#navbarMobile").toggleClass("slide-in");
    $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    // .css({position: "", top: ""});
    $("html").toggleClass("advanced-search-form-open");
});

// change select bg on hover
$("#formSearchSelect").hover(function () {

    if($(this).is(":focus")) {
        return;
    } else {
        $(".form-search-select-bg").toggleClass("hover-bg");
    }
});

$("#formSearchSelect").focus(function () {

    $(".form-search-select-bg").addClass("hover-bg");
}).blur(function () {

    $(".form-search-select-bg").removeClass("hover-bg");
});

// set search select options
function setSearchSelectOptions() {

    if (window.innerWidth >= 768) {
        $("#formSearchSelect option.artist, #formSearchSelectNav option.artist").text("Artist Search");
        $("#formSearchSelect option.title, #formSearchSelectNav option.title").text("Title Search");
        $("#formSearchSelect option.label, #formSearchSelectNav option.label").text("Label Search");
        $("#formSearchSelect option.catnum, #formSearchSelectNav option.catnum").text("Cat Num Search");
        $("#formSearchSelect option.barcode, #formSearchSelectNav option.barcode").text("Barcode Search");
        $("#formSearchSelect option.genre, #formSearchSelectNav option.genre").text("Genre Search");
        $("#formSearchSelect option.seller, #formSearchSelectNav option.seller").text("Seller Search");
        $("#formSearchSelect option.advanced, #formSearchSelectNav option.advanced").text("Advanced");
    } else if (window.innerWidth < 768) {
        $("#formSearchSelect option.artist").text("Artist");
        $("#formSearchSelect option.title").text("Title");
        $("#formSearchSelect option.label").text("Label");
        $("#formSearchSelect option.catnum").text("Cat Num");
        $("#formSearchSelect option.barcode").text("Barcode");
        $("#formSearchSelect option.genre").text("Genre");
        $("#formSearchSelect option.seller").text("Seller");
        $("#formSearchSelect option.advanced").text("Advanced");
    }
};

$(document).ready(setSearchSelectOptions);
$(window).resize(setSearchSelectOptions);
// $("#formSearchSelect, #formSearchSelectNav").change(setSearchSelectOptions);

// set search placeholder on load
$(document).ready(function() {
    
    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("artist")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by artist");
    }

    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("title")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by title");
    }

    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("label")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by label");
    }

    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("catnum")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by cat num");
    }

    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("barcode")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by barcode");
    }

    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("genre")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by genre");
    }

    if ($("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("seller")) {
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by seller");
    }

});

// change search select text and placeholder on change select option
var $sel = $('#formSearchSelect, #formSearchSelectNav').on('change', function(){
    if ($(this).find("option:selected").hasClass("artist")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by artist");
        $('#formSearchSelectNav').find("option:selected").text("Artist Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Artist");
        } else {
            $('#formSearchSelect').find("option:selected").text("Artist Search");
        }
        
    } else if ($(this).find("option:selected").hasClass("title")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by title");
        $('#formSearchSelectNav').find("option:selected").text("Title Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Title");
        } else {
            $('#formSearchSelect').find("option:selected").text("Title Search");
        }
    } else if ($(this).find("option:selected").hasClass("label")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by label");
        $('#formSearchSelectNav').find("option:selected").text("Label Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Label");
        } else {
            $('#formSearchSelect').find("option:selected").text("Label Search");
        }
    } else if ($(this).find("option:selected").hasClass("catnum")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by cat num");
        $('#formSearchSelectNav').find("option:selected").text("Cat Num Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Cat Num");
        } else {
            $('#formSearchSelect').find("option:selected").text("Cat Num Search");
        }
    } else if ($(this).find("option:selected").hasClass("barcode")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by barcode");
        $('#formSearchSelectNav').find("option:selected").text("Barcode Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Barcode");
        } else {
            $('#formSearchSelect').find("option:selected").text("Barcode Search");
        }
    } else if ($(this).find("option:selected").hasClass("genre")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by genre");
        $('#formSearchSelectNav').find("option:selected").text("Genre Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Genre");
        } else {
            $('#formSearchSelect').find("option:selected").text("Genre Search");
        }
    } else if ($(this).find("option:selected").hasClass("seller")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by seller");
        $('#formSearchSelectNav').find("option:selected").text("Seller Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Seller");
        } else {
            $('#formSearchSelect').find("option:selected").text("Seller Search");
        }

    } else {
        $(".form-advanced-search-container").toggleClass("slide-in");
        $(".form-advanced-search-container").addClass("fade-in");
        $(".form-advanced-overlay").fadeToggle();
        $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
        $("html").toggleClass("advanced-search-form-open");
        // reset
        $sel.val( $sel.data('currVal'));   
    }
}).on('update', function(){
    $(this).data('currVal', $(this).val())
}).trigger('update');

// match input on both forms
$("#formSearchInput, #formSearchInputNav").change(function () {

    let $inputText = $(this).val();

    $("#formSearchInput, #formSearchInputNav").val($inputText);
});

// record stores slider
const sliderRecordStores = document.querySelector('#sliderRecordStores');
const flkty = new Flickity( sliderRecordStores, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    touchVerticalScroll: false,
    autoPlay: false,
    dragThreshold: 1
});

// trustpilot slider
const sliderTrustpilot = document.querySelector("#sliderTrustpilot");
const flktyTrustpilot = new Flickity( sliderTrustpilot, {
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    pageDots: false,
    touchVerticalScroll: false,
    autoPlay: 6000,
    dragThreshold: 1
})

//fix flickity swiping scrollng on mobile
// flkty.on( 'dragStart.flickity', function( event, pointer ) {
//     document.ontouchmove = function (e) {
//         e.preventDefault();
//     }
// });

// flkty.on( 'dragEnd.flickity', function( event, pointer ) {
//     document.ontouchmove = function (e) {
//         return true;
//     }
// });

// toggle reset btn on form focus
const advancedSearchInput = document.querySelector("#formSearchInput");
const btnReset = document.querySelector(".form-search-reset");

// advancedSearchInput.addEventListener("input", function() {
//     btnReset.classList.toggle("show-reset");
// });

/**
 * Clearable text inputs
 */

const $inp = $("#formSearchInput, #formSearchInputNav");
const $inpNav = $("#formSearchInputNav");
const $cle = $(".form-search-reset");
  
$inp.on("input", function(){
    $cle.toggle(!!this.value);
});

$cle.on("touchstart click", function(e) {
    e.preventDefault();
    $inp.val("").trigger("input");
});
  
// $inpNav.on("input", function(){
//     $cle.toggle(!!this.value);
// });

// $cle.on("touchstart click", function(e) {
//     e.preventDefault();
//     $inpNav.val("").trigger("input");
// });

// toggle advanced search form on mobile
$("#btnOpenForm1").click(function() {
    $(".form-advanced-search-container").toggleClass("slide-in");
    $(".form-advanced-search-container").addClass("fade-in");
    $(".form-advanced-overlay").fadeToggle();
    $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    // $("html").toggleClass("advanced-search-form-open");
    $(".navbar-mobile-overlay").fadeToggle();
    $('#navbarMobileToggle').children(".icon").toggleClass("menu").toggleClass("close");
    $("#navbarMobile").toggleClass("slide-in");
});

$("#btnCloseForm, .form-advanced-overlay").click(function() {
    $(".form-advanced-search-container").toggleClass("slide-in");
    $(".form-advanced-overlay").fadeToggle();
    $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    $("html").toggleClass("advanced-search-form-open");
});

$(document).ready(function () {

    let $windowW = window.innerWidth;

    if ($windowW < 992) {
        $(".form-advanced-search-container").addClass("fade-in");
    }
})

$(window).resize(function () {
    
    let $windowW = window.innerWidth;

    if ($windowW >= 992) {
        $(".form-advanced-search-container").removeClass("fade-in");
    }
});

// stick advanced search to top when scrolling on mobile
// $(window).scroll(function () {

//     let $window = $(window);
//     let $formSearch = $("#formSearchContainer");
//     let $formSearchTop = $formSearch.offset().top - $window.scrollTop();
//     let wScroll = $window.scrollTop();
//     let windowW = $window.width();
//     let $btnAdvancedSearch = $("#hero .form-search-container .advanced-search-link")

//     // console.log($formSearch.offset().top - $window.scrollTop());
    

//     if (windowW <= 991) {
//         if ($formSearchTop + 160 <= wScroll) {
//             $formSearch.addClass("form-search-sticky").children(".form-search").addClass("width-76");
//             $btnAdvancedSearch.addClass("btn-sticky").children("svg").addClass("dark-grey");
//         } else if ($formSearchTop + 160 > wScroll) {
//             $formSearch.removeClass("form-search-sticky").children(".form-search").removeClass("width-76");
//             $btnAdvancedSearch.removeClass("btn-sticky").children("svg").removeClass("dark-grey");
//         }
//     }
// });

// intersection observer for sticky advanced search
// let observer = new IntersectionObserver(
//     (entries, observer) => {
//         entries.forEach(entry => {

//         });
//     },
//     {rootMargin: "0 0 -100px 0" }
// );

// fix flexbox last row left align
// create empty elements in the last row
const listedRecordContainer = document.querySelector(".listed-record-container");

document.addEventListener("DOMContentLoaded", createEmpty);

function createEmpty() {

    console.log("window loaded");
    
    for (let i = 0; i < 4; i++) {
        console.log("div created");
        
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "empty-space-filler";
        listedRecordContainer.append(emptyDiv);
    }
}

// intersection observer animations
const sectionTrusted = document.querySelector("#trusted");
const trustedTitle = document.querySelector(".trusted-title");
const trustedText = document.querySelector(".trusted-text");
const sectionTrustpilot = document.querySelector("#trustpilotReviews");
const formSearchContainer = document.querySelector("#formSearchContainer");
const formSearchContainerWrapper = document.querySelector(".form-search-container-wrapper");
const formSearch = document.querySelector(".form-search");
const formSearchSelect = document.querySelector("#formSearchSelect");
const formSearchInput = document.querySelector("#formSearchInput");
const formSearchBtn = document.querySelector("#formSearchBtn");
const btnAdvancedSearch = document.querySelector("#btnOpenForm");
const btnAdvancedSearchArrow = document.querySelector("#btnOpenForm svg");
const titleContainer = document.querySelector(".title-container");
const navbar = document.querySelector(".navbar");

const optionsTrusted = {
    threshold: 0.5, // 0 to 1
    // rootMargin: "-100px 100px 100px 100px"
};

const observerTrusted = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            } else {
                console.log(entry.target + "trusted observed");
                entry.target.classList.toggle("fade-in");
                trustedTitle.classList.toggle("slide-in");
                trustedText.classList.toggle("slide-in");
                observer.unobserve(entry.target);
            }
        });
}, optionsTrusted);

const observerTrustpilot = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            } else {
                console.log(entry.target + "trustpilot observed");
                sliderTrustpilot.classList.toggle("scale-up");
                observer.unobserve(entry.target);
            }
        });
}, optionsTrusted);

observerTrusted.observe(sectionTrusted);
observerTrustpilot.observe(sectionTrustpilot);

const observerFormSearch = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => {
            
            if (window.innerWidth <= 1199) {
                if (!entry.isIntersecting) {
                    // console.log("intersecting 1");
                    
                    formSearchContainer.classList.add("form-search-sticky", "show-bg");
                    formSearch.classList.add("width-76", "form-search-sticky");
                } else {
                    formSearchContainer.classList.remove("form-search-sticky", "show-bg");
                    formSearch.classList.remove("width-76", "form-search-sticky");
                }
            } else {
                formSearchContainer.classList.remove("form-search-sticky", "show-bg");
                formSearch.classList.remove("width-76", "form-search-sticky");
            }
        });
}, {rootMargin: "-62px 0px 0px 0px"});

// observerFormSearch.observe(titleContainer);

function formSearchSticky() {

    var $wScroll = $(window).scrollTop();

    if (window.innerWidth < 499) {
        if ($("#hero").offset().top + 205 <= $wScroll) {
            // console.log("intersecting 1");
            
            formSearchContainer.classList.add("form-search-sticky", "show-bg");
            formSearchSelect.classList.add("form-sticky");
            formSearchInput.classList.add("form-sticky");
            formSearchBtn.classList.add("form-sticky");
            // formSearch.classList.add("width-76", "form-search-sticky");
        } else {
            formSearchContainer.classList.remove("form-search-sticky", "show-bg");
            formSearchSelect.classList.remove("form-sticky");
            formSearchInput.classList.remove("form-sticky");
            formSearchBtn.classList.remove("form-sticky");
            // formSearch.classList.remove("width-76", "form-search-sticky");
        }
        
    } else if (window.innerWidth < 768) {
        if ($("#hero").offset().top + 247 <= $wScroll) {
            // console.log("intersecting 1");
            
            formSearchContainer.classList.add("form-search-sticky", "show-bg");
            formSearchSelect.classList.add("form-sticky");
            formSearchInput.classList.add("form-sticky");
            formSearchBtn.classList.add("form-sticky");
            // formSearch.classList.add("width-76", "form-search-sticky");
        } else {
            formSearchContainer.classList.remove("form-search-sticky", "show-bg");
            formSearchSelect.classList.remove("form-sticky");
            formSearchInput.classList.remove("form-sticky");
            formSearchBtn.classList.remove("form-sticky");
            // formSearch.classList.remove("width-76", "form-search-sticky");
        }
    } else {
        formSearchContainer.classList.remove("form-search-sticky", "show-bg");
        // formSearch.classList.remove("width-76", "form-search-sticky");
    }
}

$(window).scroll(formSearchSticky);
$(window).resize(formSearchSticky);

// hide loader on window load
const loader = document.querySelector(".loader-container");

window.onload = function() {
    loader.classList.add("hide-loader");

    setTimeout(function() {
        loader.style.display = "none";
    }, 500);
};


// old function that matches select text and placeholder on both forms
// change search select text and placeholder on change select option
var $sel = $('#formSearchSelect, #formSearchSelectNav').on('change', function(){
    if ($(this).find("option:selected").hasClass("artist")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by artist");
        $('#formSearchSelectNav').find("option:selected").text("Artist Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Artist");
        } else {
            $('#formSearchSelect').find("option:selected").text("Artist Search");
        }
        
    } else if ($(this).find("option:selected").hasClass("title")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by title");
        $('#formSearchSelectNav').find("option:selected").text("Title Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Title");
        } else {
            $('#formSearchSelect').find("option:selected").text("Title Search");
        }
    } else if ($(this).find("option:selected").hasClass("label")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by label");
        $('#formSearchSelectNav').find("option:selected").text("Label Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Label");
        } else {
            $('#formSearchSelect').find("option:selected").text("Label Search");
        }
    } else if ($(this).find("option:selected").hasClass("catnum")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by cat num");
        $('#formSearchSelectNav').find("option:selected").text("Cat Num Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Cat Num");
        } else {
            $('#formSearchSelect').find("option:selected").text("Cat Num Search");
        }
    } else if ($(this).find("option:selected").hasClass("barcode")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by barcode");
        $('#formSearchSelectNav').find("option:selected").text("Barcode Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Barcode");
        } else {
            $('#formSearchSelect').find("option:selected").text("Barcode Search");
        }
    } else if ($(this).find("option:selected").hasClass("genre")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by genre");
        $('#formSearchSelectNav').find("option:selected").text("Genre Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Genre");
        } else {
            $('#formSearchSelect').find("option:selected").text("Genre Search");
        }
    } else if ($(this).find("option:selected").hasClass("seller")) {
        // store new value        
        $sel.trigger('update');
        $("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by seller");
        $('#formSearchSelectNav').find("option:selected").text("Seller Search");

        if (window.innerWidth < 768) {
            $('#formSearchSelect').find("option:selected").text("Seller");
        } else {
            $('#formSearchSelect').find("option:selected").text("Seller Search");
        }

    } else {
        $(".form-advanced-search-container").toggleClass("slide-in");
        $(".form-advanced-search-container").addClass("fade-in");
        $(".form-advanced-overlay").fadeToggle();
        $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
        $("html").toggleClass("advanced-search-form-open");
        // reset
        $sel.val( $sel.data('currVal'));   
    }
}).on('update', function(){
    $(this).data('currVal', $(this).val())
}).trigger('update');