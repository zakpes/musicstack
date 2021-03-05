import "../css/index.scss";
import "./cookie-index";
import $ from "jquery";
import "bootstrap";
import Flickity from "flickity";

// const $selectDesktop = $(".form-search-select-desktop");
// const $selectMobile = $(".form-search-select-mobile");

// navbar toggle hamburger btn
$("#navbarMobileToggle").click(function () {
  $(this).toggleClass("navbar-mobile-closed");
  $(this).children(".icon").toggleClass("menu").toggleClass("close");

  $("#navbarMobile").toggleClass("slide-in");
  $(".navbar-mobile-overlay").fadeToggle();
  $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  $("html").toggleClass("advanced-search-form-open");
});

$(".navbar-mobile-overlay").click(function () {
  $(this).fadeToggle();
  $("#navbarMobileToggle")
    .children(".icon")
    .toggleClass("menu")
    .toggleClass("close");
  $("#navbarMobile").toggleClass("slide-in");
  $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  $("html").toggleClass("advanced-search-form-open");
});

// flickity fix for iOS
(function () {
  var touchingCarousel = false,
    touchStartCoords;

  document.body.addEventListener("touchstart", function (e) {
    if (e.target.closest(".flickity-slider")) {
      touchingCarousel = true;
    } else {
      touchingCarousel = false;
      return;
    }

    touchStartCoords = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY,
    };
  });

  document.body.addEventListener(
    "touchmove",
    function (e) {
      if (!(touchingCarousel && e.cancelable)) {
        return;
      }

      var moveVector = {
        x: e.touches[0].pageX - touchStartCoords.x,
        y: e.touches[0].pageY - touchStartCoords.y,
      };

      if (Math.abs(moveVector.x) > 7) e.preventDefault();
    },
    { passive: false }
  );
})();

// search form border on input focus
const formSearchMain = document.querySelector("#formSearch");
const formSearchInputMain = document.querySelector("#formSearchInput");
const formSearchSelectMain = document.querySelector("#formSearchSelect");
const formSearchNav = document.querySelector("#formSearchNav");
const formSearchInputNav = document.querySelector("#formSearchInputNav");
const formSearchSelectNav = document.querySelector("#formSearchSelectNav");

formSearchInputMain.addEventListener("focus", function () {
  formSearchMain.classList.add("borders");
});

formSearchInputMain.addEventListener("blur", function () {
  formSearchMain.classList.remove("borders");
});

formSearchSelectMain.addEventListener("focus", function () {
  formSearchMain.classList.add("borders");
});

formSearchSelectMain.addEventListener("blur", function () {
  formSearchMain.classList.remove("borders");
});

formSearchSelectMain.addEventListener("change", function (e) {
    var value = document.querySelector("#formSearchSelect").value;
    document.querySelector("#formSearchSelectNav").value = value;
  });
  
formSearchSelectNav.addEventListener("change", function (e) {
    var value = document.querySelector("#formSearchSelectNav").value;
    document.querySelector("#formSearchSelect").value = value;
  });
  
formSearchInputNav.addEventListener("focus", function () {
  formSearchNav.classList.add("borders");
});

formSearchInputNav.addEventListener("blur", function () {
  formSearchNav.classList.remove("borders");
});

formSearchSelectNav.addEventListener("focus", function () {
  formSearchNav.classList.add("borders");
});

formSearchSelectNav.addEventListener("blur", function () {
  formSearchNav.classList.remove("borders");
});

// hide cookie banner
// $(".cookie-banner-btn").click(function () {
//     $(".cookie-banner").addClass("slide-out");

//     setTimeout(function() {
//         $(".cookie-banner").css("display", "none");
//     }, 500);
// });

// var $cookieBanner = $(".cookie-banner");
// var $cookieBannerBtn = $(".cookie-banner-btn");

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
      $("#msg").addClass("hide");
      $("#formSearchInputNav").focus();
      $("#formSearchContainer").addClass("hide-form");
    } else {
      $("#formSearchContainerNav").removeClass("show-form");
      $("#formSearchInput").focus();
      $("#formSearchContainer").removeClass("hide-form");
      $("#msg_nav").addClass("hide");
    }
  } else {
    $(".navbar").removeClass("navbar-shrink");
    $("#formSearchContainerNav").removeClass("show-form");
    $("#formSearchInput").focus();
    $("#formSearchContainer").removeClass("hide-form");
    $("#msg_nav").addClass("hide");
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
}

$(window).scroll(navbarShrink);
$(window).resize(navbarShrink);

// navbar brand hover
// const navbarBrand = document.querySelector(".navbar-brand");
// const logoImg = document.querySelector(".img-logo-text-hover")

// navbarBrand.addEventListener("mouseenter", function () {

//     logoImg.style.opacity = "1";
// });

// navbarBrand.addEventListener("mouseleave", function () {

//     logoImg.style.opacity = "0";
// });

// change select bg on hover
$("#formSearchSelect").hover(function () {
  if ($(this).is(":focus")) {
    return;
  } else {
    $(".form-search-select-bg").toggleClass("hover-bg");
  }
});

$("#formSearchSelect")
  .focus(function () {
    $(".form-search-select-bg").addClass("hover-bg");
  })
  .blur(function () {
    $(".form-search-select-bg").removeClass("hover-bg");
  });

// set search select options
function setSearchSelectOptions() {
  if (window.innerWidth >= 768) {
    $(
      "#formSearchSelect option.artist, #formSearchSelectNav option.artist"
    ).text("Artist Search");
    $("#formSearchSelect option.title, #formSearchSelectNav option.title").text(
      "Title Search"
    );
    $("#formSearchSelect option.label, #formSearchSelectNav option.label").text(
      "Label Search"
    );
    $(
      "#formSearchSelect option.catnum, #formSearchSelectNav option.catnum"
    ).text("Cat Num Search");
    $(
      "#formSearchSelect option.barcode, #formSearchSelectNav option.barcode"
    ).text("Barcode Search");
    $("#formSearchSelect option.genre, #formSearchSelectNav option.genre").text(
      "Genre Search"
    );
    $(
      "#formSearchSelect option.seller, #formSearchSelectNav option.seller"
    ).text("Seller Search");
    $(
      "#formSearchSelect option.advanced, #formSearchSelectNav option.advanced"
    ).text("Advanced");
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
}

$(document).ready(setSearchSelectOptions);
$(window).resize(setSearchSelectOptions);
// $("#formSearchSelect, #formSearchSelectNav").change(setSearchSelectOptions);

// $("#formSearchSelect").change(function () {

//     if (window.innerWidth < 768) {
//         if ($(this).val().length() == 5) {
//             this.style.paddingLeft = 22;
//             this.classList.add("monkey");

//         } else if (this.value.length == 6) {
//             this.style.paddingLeft = 18;
//             // this.classList.add("rabbit");
//             $("#formSearchSelect").addClass("rabbit");
//         } else if (this.value.length == 7) {
//             this.style.paddingLeft = 5;
//             this.classList.add("dog");
//         }
//     }
// })

// set search placeholder on load
$(document).ready(function () {
  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("artist")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by artist"
    );
  }

  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("title")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by title"
    );
  }

  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("label")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by label"
    );
  }

  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("catnum")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by cat num"
    );
  }

  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("barcode")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by barcode"
    );
  }

  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("genre")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by genre"
    );
  }

  if (
    $("#formSearchSelect, #formSearchSelectNav")
      .find("option:selected")
      .hasClass("seller")
  ) {
    $("#formSearchInput, #formSearchInputNav").attr(
      "placeholder",
      "Search by seller"
    );
  }
});

// change search select text and placeholder on change select option
var $sel = $("#formSearchSelect")
  .on("change", function () {
    if ($(this).find("option:selected").hasClass("artist")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by artist");
      $("#formSearchInputNav").attr("placeholder", "Search by artist");
 
      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Artist");
      } else {
        $("#formSearchSelect").find("option:selected").text("Artist Search");
      }
    } else if ($(this).find("option:selected").hasClass("title")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by title");
      $("#formSearchInputNav").attr("placeholder", "Search by title");

      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Title");
      } else {
        $("#formSearchSelect").find("option:selected").text("Title Search");
      }
    } else if ($(this).find("option:selected").hasClass("label")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by label");
      $("#formSearchInputNav").attr("placeholder", "Search by label");

      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Label");
      } else {
        $("#formSearchSelect").find("option:selected").text("Label Search");
      }
    } else if ($(this).find("option:selected").hasClass("catnum")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by cat num");
      $("#formSearchInputNav").attr("placeholder", "Search by cat num");

      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Cat Num");
      } else {
        $("#formSearchSelect").find("option:selected").text("Cat Num Search");
      }
    } else if ($(this).find("option:selected").hasClass("barcode")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by barcode");
      $("#formSearchInputNav").attr("placeholder", "Search by barcode");

      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Barcode");
      } else {
        $("#formSearchSelect").find("option:selected").text("Barcode Search");
      }
    } else if ($(this).find("option:selected").hasClass("genre")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by genre");
      $("#formSearchInputNav").attr("placeholder", "Search by genre");

      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Genre");
      } else {
        $("#formSearchSelect").find("option:selected").text("Genre Search");
      }
    } else if ($(this).find("option:selected").hasClass("seller")) {
      // store new value
      $sel.trigger("update");
      $("#formSearchInput").attr("placeholder", "Search by seller");
      $("#formSearchInputNav").attr("placeholder", "Search by seller");

      if (window.innerWidth < 768) {
        $("#formSearchSelect").find("option:selected").text("Seller");
      } else {
        $("#formSearchSelect").find("option:selected").text("Seller Search");
      }
    } else {
      $(".form-advanced-search-container").toggleClass("slide-in");
      $(".form-advanced-search-container").addClass("fade-in");
      $(".form-advanced-overlay").fadeToggle();
      $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
      $("html").toggleClass("advanced-search-form-open");
      // reset
      $sel.val($sel.data("currVal"));
    }
  })
  .on("update", function () {
    $(this).data("currVal", $(this).val());
  })
  .trigger("update");

// change search select text and placeholder on change select option on navbar form
var $selNav = $("#formSearchSelectNav")
  .on("change", function () {
    if ($(this).find("option:selected").hasClass("artist")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by artist");
      $("#formSearchInput").attr("placeholder", "Search by artist");
      $("#formSearchSelectNav").find("option:selected").text("Artist Search");
    } else if ($(this).find("option:selected").hasClass("title")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by title");
      $("#formSearchInput").attr("placeholder", "Search by title");
      $("#formSearchSelectNav").find("option:selected").text("Title Search");
    } else if ($(this).find("option:selected").hasClass("label")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by label");
      $("#formSearchInput").attr("placeholder", "Search by label");
      $("#formSearchSelectNav").find("option:selected").text("Label Search");
    } else if ($(this).find("option:selected").hasClass("catnum")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by cat num");
      $("#formSearchInput").attr("placeholder", "Search by cat num");
      $("#formSearchSelectNav").find("option:selected").text("Cat Num Search");
    } else if ($(this).find("option:selected").hasClass("barcode")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by barcode");
      $("#formSearchInput").attr("placeholder", "Search by barcode");
      $("#formSearchSelectNav").find("option:selected").text("Barcode Search");
    } else if ($(this).find("option:selected").hasClass("genre")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by genre");
      $("#formSearchInput").attr("placeholder", "Search by genre");
      $("#formSearchSelectNav").find("option:selected").text("Genre Search");
    } else if ($(this).find("option:selected").hasClass("seller")) {
      // store new value
      $selNav.trigger("update");
      $("#formSearchInputNav").attr("placeholder", "Search by seller");
      $("#formSearchInput").attr("placeholder", "Search by seller");
      $("#formSearchSelectNav").find("option:selected").text("Seller Search");
    } else {
      $(".form-advanced-search-container").toggleClass("slide-in");
      $(".form-advanced-search-container").addClass("fade-in");
      $(".form-advanced-overlay").fadeToggle();
      $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
      $("html").toggleClass("advanced-search-form-open");
      // reset
      $selNav.val($selNav.data("currVal"));
    }
  })
  .on("update", function () {
    $(this).data("currVal", $(this).val());
  })
  .trigger("update");

// center select text by adding padding based on text length
function centerSelectTextNav() {
  const $formSelectNav = $("#formSearchSelectNav");
  const $selectedOptionNav = $("#formSearchSelectNav option:selected");

  if (
    $selectedOptionNav.hasClass("artist") ||
    $selectedOptionNav.hasClass("label")
  ) {
    $formSelectNav.css("padding-left", "20px");
  } else if ($selectedOptionNav.hasClass("title")) {
    $formSelectNav.css("padding-left", "22px");
  } else if ($selectedOptionNav.hasClass("catnum")) {
    $formSelectNav.css("padding-left", "6px");
  } else if ($selectedOptionNav.hasClass("barcode")) {
    $formSelecNavt.css("padding-left", "9px");
  } else if ($selectedOptionNav.hasClass("genre")) {
    $formSelectNav.css("padding-left", "16px");
  } else if ($selectedOptionNav.hasClass("seller")) {
    $formSelectNav.css("padding-left", "19px");
  }
}

function centerSelectText() {
  var $wScroll = $(window).scrollTop();
  const $formSelectNav = $("#formSearchSelectNav");
  const $formSelect = $("#formSearchSelect");
  const $selectedOptionNav = $("#formSearchSelectNav option:selected");
  const $selectedOption = $("#formSearchSelect option:selected");

  if (
    $selectedOptionNav.hasClass("artist") ||
    $selectedOptionNav.hasClass("label")
  ) {
    $formSelectNav.css("padding-left", "20px");
  } else if ($selectedOptionNav.hasClass("title")) {
    $formSelectNav.css("padding-left", "22px");
  } else if ($selectedOptionNav.hasClass("catnum")) {
    $formSelectNav.css("padding-left", "6px");
  } else if ($selectedOptionNav.hasClass("barcode")) {
    $formSelectNav.css("padding-left", "9px");
  } else if ($selectedOptionNav.hasClass("genre")) {
    $formSelectNav.css("padding-left", "16px");
  } else if ($selectedOptionNav.hasClass("seller")) {
    $formSelectNav.css("padding-left", "19px");
  }

  if (
    (window.innerWidth < 499 && $("#hero").offset().top + 208 <= $wScroll) ||
    (window.innerWidth < 768 && $("#hero").offset().top + 250 <= $wScroll)
  ) {
    console.log("YES");

    if (
      $selectedOption.hasClass("artist") ||
      $selectedOption.hasClass("label")
    ) {
      $formSelect.css("padding-left", "22px");
    } else if ($selectedOption.hasClass("title")) {
      $formSelect.css("padding-left", "26px");
    } else if ($selectedOption.hasClass("catnum")) {
      $formSelect.css("padding-left", "9px");
    } else if ($selectedOption.hasClass("barcode")) {
      $formSelect.css("padding-left", "12px");
    } else if ($selectedOption.hasClass("genre")) {
      $formSelect.css("padding-left", "20px");
    } else if ($selectedOption.hasClass("seller")) {
      $formSelect.css("padding-left", "21px");
    }
  } else {
    console.log("NO");

    if (window.innerWidth < 415) {
      if (
        $selectedOption.hasClass("artist") ||
        $selectedOption.hasClass("label")
      ) {
        $formSelect.css("padding-left", "16px");
      } else if ($selectedOption.hasClass("title")) {
        $formSelect.css("padding-left", "20px");
      } else if ($selectedOption.hasClass("catnum")) {
        $formSelect.css("padding-left", "4px");
      } else if ($selectedOption.hasClass("barcode")) {
        $formSelect.css("padding-left", "7px");
      } else if ($selectedOption.hasClass("genre")) {
        $formSelect.css("padding-left", "14px");
      } else if ($selectedOption.hasClass("seller")) {
        $formSelect.css("padding-left", "15px");
      }
    } else if (window.innerWidth < 481) {
      if (
        $selectedOption.hasClass("artist") ||
        $selectedOption.hasClass("label")
      ) {
        $formSelect.css("padding-left", "26px");
      } else if ($selectedOption.hasClass("title")) {
        $formSelect.css("padding-left", "28px");
      } else if ($selectedOption.hasClass("catnum")) {
        $formSelect.css("padding-left", "12px");
      } else if ($selectedOption.hasClass("barcode")) {
        $formSelect.css("padding-left", "15px");
      } else if ($selectedOption.hasClass("genre")) {
        $formSelect.css("padding-left", "22px");
      } else if ($selectedOption.hasClass("seller")) {
        $formSelect.css("padding-left", "25px");
      }
    } else if (window.innerWidth < 768) {
      if (
        $selectedOption.hasClass("artist") ||
        $selectedOption.hasClass("label")
      ) {
        $formSelect.css("padding-left", "34px");
      } else if ($selectedOption.hasClass("title")) {
        $formSelect.css("padding-left", "36px");
      } else if ($selectedOption.hasClass("catnum")) {
        $formSelect.css("padding-left", "20px");
      } else if ($selectedOption.hasClass("barcode")) {
        $formSelect.css("padding-left", "23px");
      } else if ($selectedOption.hasClass("genre")) {
        $formSelect.css("padding-left", "30px");
      } else if ($selectedOption.hasClass("seller")) {
        $formSelect.css("padding-left", "33px");
      }
    } else if (window.innerWidth < 992) {
      if (
        $selectedOption.hasClass("artist") ||
        $selectedOption.hasClass("label")
      ) {
        $formSelect.css("padding-left", "28px");
      } else if ($selectedOption.hasClass("title")) {
        $formSelect.css("padding-left", "32px");
      } else if ($selectedOption.hasClass("catnum")) {
        $formSelect.css("padding-left", "16px");
      } else if ($selectedOption.hasClass("barcode")) {
        $formSelect.css("padding-left", "19px");
      } else if ($selectedOption.hasClass("genre")) {
        $formSelect.css("padding-left", "24px");
      } else if ($selectedOption.hasClass("seller")) {
        $formSelect.css("padding-left", "27px");
      }
    } else if (window.innerWidth >= 992) {
      if (
        $selectedOption.hasClass("artist") ||
        $selectedOption.hasClass("label")
      ) {
        $formSelect.css("padding-left", "32px");
      } else if ($selectedOption.hasClass("title")) {
        $formSelect.css("padding-left", "36px");
      } else if ($selectedOption.hasClass("catnum")) {
        $formSelect.css("padding-left", "20px");
      } else if ($selectedOption.hasClass("barcode")) {
        $formSelect.css("padding-left", "23px");
      } else if ($selectedOption.hasClass("genre")) {
        $formSelect.css("padding-left", "28px");
      } else if ($selectedOption.hasClass("seller")) {
        $formSelect.css("padding-left", "31px");
      }
    }
  }
}

$(document).ready(centerSelectText);
$(window).resize(centerSelectText);
$(window).scroll(centerSelectText);
$("#formSearchSelectNav").change(centerSelectText);
$("#formSearchSelect").change(centerSelectText);

// match input on both forms
$("#formSearchInput, #formSearchInputNav").change(function () {
  let $inputText = $(this).val();

  $("#formSearchInput, #formSearchInputNav").val($inputText);
});

// record stores slider
const sliderRecordStores = document.querySelector("#sliderRecordStores");
const flkty = new Flickity(sliderRecordStores, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  pageDots: false,
  touchVerticalScroll: false,
  autoPlay: false,
  dragThreshold: 1,
});

// trustpilot slider
const sliderTrustpilot = document.querySelector("#sliderTrustpilot");
const flktyTrustpilot = new Flickity(sliderTrustpilot, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  pageDots: false,
  touchVerticalScroll: false,
  autoPlay: 6000,
  dragThreshold: 1,
});

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

$inp.on("input", function () {
  $cle.toggle(!!this.value);
});

$cle.on("touchstart click", function (e) {
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
$("#btnOpenForm1").click(function () {
  $(".form-advanced-search-container").toggleClass("slide-in");
  $(".form-advanced-search-container").addClass("fade-in");
  $(".form-advanced-overlay").fadeToggle();
  // $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  // $("html").toggleClass("advanced-search-form-open");
  $(".navbar-mobile-overlay").fadeToggle();
  $("#navbarMobileToggle")
    .children(".icon")
    .toggleClass("menu")
    .toggleClass("close");
  $("#navbarMobile").toggleClass("slide-in");
});

$("#btnCloseForm, .form-advanced-overlay").click(function () {
  $(".form-advanced-search-container").toggleClass("slide-in");
  $(".form-advanced-overlay").fadeToggle();
  $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  $("html").toggleClass("advanced-search-form-open");
});

$(document).ready(function () {
  if (window.innerWidth < 992) {
    $(".form-advanced-search-container").addClass("fade-in");
  }
});

$(window).resize(function () {
  if (window.innerWidth >= 992) {
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
const listedRecordContainer = document.querySelector(
  ".listed-record-container"
);

document.addEventListener("DOMContentLoaded", createEmpty);

function createEmpty() {
  console.log("document loaded");

  for (let i = 0; i < 4; i++) {
    console.log("div created");

    let emptyDiv = document.createElement("div");
    emptyDiv.className = "empty-space-filler";
    listedRecordContainer.append(emptyDiv);
  }
}

// search form sticky on scroll
function formSearchSticky() {
  var $wScroll = $(window).scrollTop();

  if (window.innerWidth < 499) {
    if ($("#hero").offset().top + 208 <= $wScroll) {
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
    if ($("#hero").offset().top + 250 <= $wScroll) {
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

$(document).ready(formSearchSticky);
$(window).scroll(formSearchSticky);
$(window).resize(formSearchSticky);

// intersection observer animations
const formSearchContainer = document.querySelector("#formSearchContainer");
const formSearchContainerWrapper = document.querySelector(
  ".form-search-container-wrapper"
);
const formSearch = document.querySelector(".form-search");
const formSearchSelect = document.querySelector("#formSearchSelect");
const formSearchInput = document.querySelector("#formSearchInput");
const formSearchBtn = document.querySelector("#formSearchBtn");
const btnAdvancedSearch = document.querySelector("#btnOpenForm");
const btnAdvancedSearchArrow = document.querySelector("#btnOpenForm svg");
const titleContainer = document.querySelector(".title-container");
const navbar = document.querySelector(".navbar");

// const optionsTrusted = {
//     threshold: 0.5
// };

// const observerTrusted = new IntersectionObserver(function
//     (entries, observer) {
//         entries.forEach(entry => {

//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 console.log(entry.target + "trusted observed");
//                 entry.target.classList.toggle("fade-in");
//                 trustedTitle.classList.toggle("slide-in");
//                 trustedText.classList.toggle("slide-in");
//                 observer.unobserve(entry.target);
//             }
//         });
// }, optionsTrusted);

// const observerTrustpilot = new IntersectionObserver(function
//     (entries, observer) {
//         entries.forEach(entry => {

//             if (!entry.isIntersecting) {
//                 return;
//             } else {
//                 console.log(entry.target + "trustpilot observed");
//                 sliderTrustpilot.classList.toggle("scale-up");
//                 observer.unobserve(entry.target);
//             }
//         });
// }, optionsTrusted);

// detect if element is in viewport
const isElementXPercentInViewport = function (el, percentVisible) {
  let rect = el.getBoundingClientRect(),
    windowHeight = window.innerHeight || document.documentElement.clientHeight;

  return !(
    Math.floor(
      100 - ((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100
    ) < percentVisible ||
    Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) <
      percentVisible
  );
};

// section trusted slide in
const sectionTrusted = document.querySelector("#trusted");
const trustedTitle = document.querySelector(".trusted-title");
const trustedText = document.querySelector(".trusted-text");

function trustedSlideIn() {
  if (isElementXPercentInViewport(sectionTrusted, 50)) {
    console.log("trusted observed");
    sectionTrusted.classList.add("fade-in");
    trustedTitle.classList.add("slide-in");
    trustedText.classList.add("slide-in");
  }
}

// slider trustpilot show
const sectionTrustpilot = document.querySelector("#trustpilotReviews");

function trustpilotShow() {
  if (isElementXPercentInViewport(sectionTrustpilot, 50)) {
    console.log("trustpilot observed");
    sliderTrustpilot.classList.add("scale-up");
  }
}

$(document).ready(() => {
  trustedSlideIn();
  trustpilotShow();
});

$(window).scroll(() => {
  trustedSlideIn();
  trustpilotShow();
});

// observerTrusted.observe(sectionTrusted);
// observerTrustpilot.observe(sectionTrustpilot);

const observerFormSearch = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
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
  },
  { rootMargin: "-62px 0px 0px 0px" }
);

// observerFormSearch.observe(titleContainer);
