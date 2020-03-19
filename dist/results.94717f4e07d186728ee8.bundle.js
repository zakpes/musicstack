/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([32,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

var c; // set cur frm cookie

for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) {
  if (!ca[i].indexOf('currency=')) {
    c = ca[i].replace('currency=', '');
    break;
  }
}

console.log("c is " + c);
var e = document.getElementById("js-selectCurrency1");
var f = document.getElementById("js-selectCurrency2");

for (var i = 0; i < e.length; i++) {
  if (e.options[i].value == c) {
    e.options[i].selected = true;
    break;
  }
}

for (var i = 0; i < f.length; i++) {
  if (f.options[i].value == c) {
    f.options[i].selected = true;
    break;
  }
} // set currency cookie


function SetCookie(cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 86400 * nDays);

  if (cookieName == 'media' && eval(cookieValue) < 200) {
    return;
  } // document.cookie = cookieName+"="+escape(cookieValue)+"; expires="+expire.toGMTString()+"; path=/; domain=musicstack.com";


  document.cookie = cookieName + "=" + escape(cookieValue) + "; expires=" + expire.toGMTString();
  console.log(cookieName, cookieValue);
}

function setCookieCur(event) {
  SetCookie('currency', this.options[this.selectedIndex].value, 9999);
  window.location.reload();
  return true;
}

document.querySelector("#js-selectCurrency1").addEventListener("change", setCookieCur);
document.querySelector("#js-selectCurrency2").addEventListener("change", setCookieCur); // set filters cookie

function setCookieFilter() {
  SetCookie('find', '', 999);
  this.form.submit();
}

var filterBtnArr = document.querySelectorAll(".filterx"); // filterBtnArr.forEach( function(filter) {
//     filter.addEventListener("click", setCookieFilter);
// });

function filterClick() {
  for (var _i = 0; _i < filterBtnArr.length; _i++) {
    filterBtnArr[_i].addEventListener("click", function () {
      setCookieFilter();
    });
  }
}

filterClick(); // set consent cookie and hide cookie banner

var cookieBanner = document.querySelector(".cookie-banner");
var cookieBannerBtn = document.querySelector(".cookie-banner-btn");

(function () {
  if (!localStorage.getItem('cookieconsent')) {
    console.log("cookie is not here");
    cookieBanner.classList.remove("hide-banner");

    cookieBannerBtn.onclick = function (e) {
      e.preventDefault();
      cookieBanner.classList.add("slide-out");
      setTimeout(function () {
        cookieBanner.style.display = "none";
      }, 500);
      localStorage.setItem('cookieconsent', true);
      console.log("cookie set!");
    };
  } else {
    console.log("cookie is here");
  }
})();

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/page-results/results.scss
var results = __webpack_require__(24);

// EXTERNAL MODULE: ./src/js/results/cookie-results.js
var cookie_results = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.js
var bootstrap = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(3);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// EXTERNAL MODULE: ./node_modules/lightgallery/dist/js/lightgallery.js
var lightgallery = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/lg-thumbnail/dist/lg-thumbnail.min.js
var lg_thumbnail_min = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/lg-pager/dist/lg-pager.min.js
var lg_pager_min = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/readmore-js/dist/readmore.js
var readmore = __webpack_require__(8);
var readmore_default = /*#__PURE__*/__webpack_require__.n(readmore);

// CONCATENATED MODULE: ./src/js/results/main-results.js


 // import Fresco from "@staaky/fresco/dist/js/fresco.min.js";




 // const $selectDesktop = $(".form-search-select-desktop");
// const $selectMobile = $(".form-search-select-mobile");
// navbar toggle hamburger btn

jquery_default()('#navbarMobileToggle').click(function () {
  jquery_default()(this).toggleClass("navbar-mobile-closed");
  jquery_default()(this).children(".icon").toggleClass('menu').toggleClass('close');
  jquery_default()("#navbarMobile").toggleClass("slide-in");
  jquery_default()(".navbar-mobile-overlay").fadeToggle();
  jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  jquery_default()("html").toggleClass("advanced-search-form-open");
});
jquery_default()(".navbar-mobile-overlay").click(function () {
  jquery_default()(this).fadeToggle();
  jquery_default()('#navbarMobileToggle').children(".icon").toggleClass("menu").toggleClass("close");
  jquery_default()("#navbarMobile").toggleClass("slide-in");
  jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  jquery_default()("html").toggleClass("advanced-search-form-open");
}); // flickity fix for iOS

(function () {
  var touchingCarousel = false,
      touchStartCoords;
  document.body.addEventListener('touchstart', function (e) {
    if (e.target.closest('.flickity-slider')) {
      touchingCarousel = true;
    } else {
      touchingCarousel = false;
      return;
    }

    touchStartCoords = {
      x: e.touches[0].pageX,
      y: e.touches[0].pageY
    };
  });
  document.body.addEventListener('touchmove', function (e) {
    if (!(touchingCarousel && e.cancelable)) {
      return;
    }

    var moveVector = {
      x: e.touches[0].pageX - touchStartCoords.x,
      y: e.touches[0].pageY - touchStartCoords.y
    };
    if (Math.abs(moveVector.x) > 7) e.preventDefault();
  }, {
    passive: false
  });
})(); // search form border on input focus


var formSearchMain = document.querySelector("#formSearch");
var formSearchInputMain = document.querySelector("#formSearchInput");
var formSearchSelectMain = document.querySelector("#formSearchSelect");
var formSearchNav = document.querySelector("#formSearchNav");
var formSearchInputNav = document.querySelector("#formSearchInputNav");
var formSearchSelectNav = document.querySelector("#formSearchSelectNav");
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
}); // hide cookie banner
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
  var $window = jquery_default()(window);
  var $wScroll = $window.scrollTop();
  var $windowW = $window.width(); // console.log($wScroll);

  if (window.innerWidth > 767) {
    if (jquery_default()("#hero").offset().top < $wScroll) {
      jquery_default()(".navbar").addClass("navbar-shrink");
    } else if (jquery_default()("#hero").offset().top > $wScroll) {
      jquery_default()(".navbar").removeClass("navbar-shrink");
    } // show navbar search form


    if (jquery_default()("#hero").offset().top + 180 < $wScroll) {
      jquery_default()("#formSearchContainerNav").addClass("show-form");
      jquery_default()("#formSearchContainer").addClass("hide-form");
    } else {
      jquery_default()("#formSearchContainerNav").removeClass("show-form");
      jquery_default()("#formSearchContainer").removeClass("hide-form");
    }
  } else {
    jquery_default()(".navbar").removeClass("navbar-shrink");
    jquery_default()("#formSearchContainerNav").removeClass("show-form");
    jquery_default()("#formSearchContainer").removeClass("hide-form");
  }
}

; // $(window).scroll(navbarShrink);
// $(window).resize(navbarShrink);
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

jquery_default()("#formSearchSelect").hover(function () {
  if (jquery_default()(this).is(":focus")) {
    return;
  } else {
    jquery_default()(".form-search-select-bg").toggleClass("hover-bg");
  }
});
jquery_default()("#formSearchSelect").focus(function () {
  jquery_default()(".form-search-select-bg").addClass("hover-bg");
}).blur(function () {
  jquery_default()(".form-search-select-bg").removeClass("hover-bg");
}); // set search select options

function setSearchSelectOptions() {
  if (window.innerWidth >= 768) {
    jquery_default()("#formSearchSelect option.artist, #formSearchSelectNav option.artist").text("Artist Search");
    jquery_default()("#formSearchSelect option.title, #formSearchSelectNav option.title").text("Title Search");
    jquery_default()("#formSearchSelect option.label, #formSearchSelectNav option.label").text("Label Search");
    jquery_default()("#formSearchSelect option.catnum, #formSearchSelectNav option.catnum").text("Cat Num Search");
    jquery_default()("#formSearchSelect option.barcode, #formSearchSelectNav option.barcode").text("Barcode Search");
    jquery_default()("#formSearchSelect option.genre, #formSearchSelectNav option.genre").text("Genre Search");
    jquery_default()("#formSearchSelect option.seller, #formSearchSelectNav option.seller").text("Seller Search");
    jquery_default()("#formSearchSelect option.advanced, #formSearchSelectNav option.advanced").text("Advanced");
  } else if (window.innerWidth < 768) {
    jquery_default()("#formSearchSelect option.artist").text("Artist");
    jquery_default()("#formSearchSelect option.title").text("Title");
    jquery_default()("#formSearchSelect option.label").text("Label");
    jquery_default()("#formSearchSelect option.catnum").text("Cat Num");
    jquery_default()("#formSearchSelect option.barcode").text("Barcode");
    jquery_default()("#formSearchSelect option.genre").text("Genre");
    jquery_default()("#formSearchSelect option.seller").text("Seller");
    jquery_default()("#formSearchSelect option.advanced").text("Advanced");
  }
}

;
jquery_default()(document).ready(setSearchSelectOptions);
jquery_default()(window).resize(setSearchSelectOptions); // $("#formSearchSelect, #formSearchSelectNav").change(setSearchSelectOptions);
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

jquery_default()(document).ready(function () {
  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("artist")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by artist");
  }

  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("title")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by title");
  }

  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("label")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by label");
  }

  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("catnum")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by cat num");
  }

  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("barcode")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by barcode");
  }

  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("genre")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by genre");
  }

  if (jquery_default()("#formSearchSelect, #formSearchSelectNav").find("option:selected").hasClass("seller")) {
    jquery_default()("#formSearchInput, #formSearchInputNav").attr("placeholder", "Search by seller");
  }
}); // change search select text and placeholder on change select option

var $sel = jquery_default()('#formSearchSelect').on('change', function () {
  if (jquery_default()(this).find("option:selected").hasClass("artist")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by artist");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Artist");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Artist Search");
    }
  } else if (jquery_default()(this).find("option:selected").hasClass("title")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by title");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Title");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Title Search");
    }
  } else if (jquery_default()(this).find("option:selected").hasClass("label")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by label");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Label");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Label Search");
    }
  } else if (jquery_default()(this).find("option:selected").hasClass("catnum")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by cat num");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Cat Num");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Cat Num Search");
    }
  } else if (jquery_default()(this).find("option:selected").hasClass("barcode")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by barcode");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Barcode");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Barcode Search");
    }
  } else if (jquery_default()(this).find("option:selected").hasClass("genre")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by genre");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Genre");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Genre Search");
    }
  } else if (jquery_default()(this).find("option:selected").hasClass("seller")) {
    // store new value        
    $sel.trigger('update');
    jquery_default()("#formSearchInput").attr("placeholder", "Search by seller");

    if (window.innerWidth < 768) {
      jquery_default()('#formSearchSelect').find("option:selected").text("Seller");
    } else {
      jquery_default()('#formSearchSelect').find("option:selected").text("Seller Search");
    }
  } else {
    jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
    jquery_default()(".form-advanced-search-container").addClass("fade-in");
    jquery_default()(".form-advanced-overlay").fadeToggle();
    jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    jquery_default()("html").toggleClass("advanced-search-form-open"); // reset

    $sel.val($sel.data('currVal'));
  }
}).on('update', function () {
  jquery_default()(this).data('currVal', jquery_default()(this).val());
}).trigger('update'); // change search select text and placeholder on change select option on navbar form

var $selNav = jquery_default()('#formSearchSelectNav').on('change', function () {
  if (jquery_default()(this).find("option:selected").hasClass("artist")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by artist");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Artist Search");
  } else if (jquery_default()(this).find("option:selected").hasClass("title")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by title");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Title Search");
  } else if (jquery_default()(this).find("option:selected").hasClass("label")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by label");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Label Search");
  } else if (jquery_default()(this).find("option:selected").hasClass("catnum")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by cat num");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Cat Num Search");
  } else if (jquery_default()(this).find("option:selected").hasClass("barcode")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by barcode");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Barcode Search");
  } else if (jquery_default()(this).find("option:selected").hasClass("genre")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by genre");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Genre Search");
  } else if (jquery_default()(this).find("option:selected").hasClass("seller")) {
    // store new value        
    $selNav.trigger('update');
    jquery_default()("#formSearchInputNav").attr("placeholder", "Search by seller");
    jquery_default()('#formSearchSelectNav').find("option:selected").text("Seller Search");
  } else {
    jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
    jquery_default()(".form-advanced-search-container").addClass("fade-in");
    jquery_default()(".form-advanced-overlay").fadeToggle();
    jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    jquery_default()("html").toggleClass("advanced-search-form-open"); // reset

    $selNav.val($selNav.data('currVal'));
  }
}).on('update', function () {
  jquery_default()(this).data('currVal', jquery_default()(this).val());
}).trigger('update'); // center select text by adding padding based on text length

function centerSelectTextNav() {
  var $formSelectNav = jquery_default()("#formSearchSelectNav");
  var $selectedOptionNav = jquery_default()("#formSearchSelectNav option:selected");

  if ($selectedOptionNav.hasClass("artist") || $selectedOptionNav.hasClass("label")) {
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
  var $wScroll = jquery_default()(window).scrollTop();
  var $formSelectNav = jquery_default()("#formSearchSelectNav");
  var $formSelect = jquery_default()("#formSearchSelect");
  var $selectedOptionNav = jquery_default()("#formSearchSelectNav option:selected");
  var $selectedOption = jquery_default()("#formSearchSelect option:selected");

  if ($selectedOptionNav.hasClass("artist") || $selectedOptionNav.hasClass("label")) {
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

  if (window.innerWidth < 768) {
    // console.log("YES");
    if ($selectedOption.hasClass("artist") || $selectedOption.hasClass("label")) {
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
    // console.log("NO");
    if (window.innerWidth < 415) {
      if ($selectedOption.hasClass("artist") || $selectedOption.hasClass("label")) {
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
      if ($selectedOption.hasClass("artist") || $selectedOption.hasClass("label")) {
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
      console.log(window.innerWidth);

      if ($selectedOption.hasClass("artist") || $selectedOption.hasClass("label")) {
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
      if ($selectedOption.hasClass("artist") || $selectedOption.hasClass("label")) {
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
      if ($selectedOption.hasClass("artist") || $selectedOption.hasClass("label")) {
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

;
jquery_default()(document).ready(centerSelectText);
jquery_default()(window).resize(centerSelectText);
jquery_default()(window).scroll(centerSelectText);
jquery_default()("#formSearchSelectNav").change(centerSelectText);
jquery_default()("#formSearchSelect").change(centerSelectText); // match input on both forms

jquery_default()("#formSearchInput, #formSearchInputNav").change(function () {
  var $inputText = jquery_default()(this).val();
  jquery_default()("#formSearchInput, #formSearchInputNav").val($inputText);
}); // lightgallery lightbox

jquery_default()(document).ready(function () {
  jquery_default()('#sliderArtistInfo').lightGallery({
    selector: '.lg-item',
    controls: true,
    thumbnail: true,
    download: false,
    exThumbImage: 'data-thumbimg'
  });
}); // artist info slider

var sliderArtistInfo = document.querySelector("#sliderArtistInfo");
var flktyArtistInfo = new js_default.a(sliderArtistInfo, {
  // options
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  pageDots: true,
  touchVerticalScroll: false,
  // autoPlay: 6000,
  dragThreshold: 1
}); //fix flickity swiping scrollng on mobile
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

var advancedSearchInput = document.querySelector("#formSearchInput");
var btnReset = document.querySelector(".form-search-reset"); // advancedSearchInput.addEventListener("input", function() {
//     btnReset.classList.toggle("show-reset");
// });

/**
 * Clearable text inputs
 */

var $inp = jquery_default()("#formSearchInput, #formSearchInputNav");
var $inpNav = jquery_default()("#formSearchInputNav");
var $cle = jquery_default()(".form-search-reset");
$inp.on("input", function () {
  $cle.toggle(!!this.value);
});
$cle.on("touchstart click", function (e) {
  e.preventDefault();
  $inp.val("").trigger("input");
}); // $inpNav.on("input", function(){
//     $cle.toggle(!!this.value);
// });
// $cle.on("touchstart click", function(e) {
//     e.preventDefault();
//     $inpNav.val("").trigger("input");
// });
// toggle advanced search form on mobile

jquery_default()("#btnOpenForm1").click(function () {
  jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
  jquery_default()(".form-advanced-search-container").addClass("fade-in");
  jquery_default()(".form-advanced-overlay").fadeToggle(); // $(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  // $("html").toggleClass("advanced-search-form-open");

  jquery_default()(".navbar-mobile-overlay").fadeToggle();
  jquery_default()('#navbarMobileToggle').children(".icon").toggleClass("menu").toggleClass("close");
  jquery_default()("#navbarMobile").toggleClass("slide-in");
});
jquery_default()("#btnOpenForm4").click(function () {
  jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
  jquery_default()(".form-advanced-search-container").addClass("fade-in");
  jquery_default()(".form-advanced-overlay").fadeToggle();
  jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  jquery_default()("html").toggleClass("advanced-search-form-open");
});
jquery_default()("#btnCloseForm, .form-advanced-overlay").click(function () {
  jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
  jquery_default()(".form-advanced-overlay").fadeToggle();
  jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
  jquery_default()("html").toggleClass("advanced-search-form-open");
});
jquery_default()(document).ready(function () {
  if (window.innerWidth < 992) {
    jquery_default()(".form-advanced-search-container").addClass("fade-in");
  }
});
jquery_default()(window).resize(function () {
  if (window.innerWidth >= 992) {
    jquery_default()(".form-advanced-search-container").removeClass("fade-in");
  }
}); // stick advanced search to top when scrolling on mobile
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
// search form sticky on scroll

function formSearchSticky() {
  var $wScroll = jquery_default()(window).scrollTop();

  if (window.innerWidth < 499) {
    if (jquery_default()("#hero").offset().top + 208 <= $wScroll) {
      // console.log("intersecting 1");
      formSearchContainer.classList.add("form-search-sticky", "show-bg");
      formSearchSelect.classList.add("form-sticky");
      formSearchInput.classList.add("form-sticky");
      formSearchBtn.classList.add("form-sticky"); // formSearch.classList.add("width-76", "form-search-sticky");
    } else {
      formSearchContainer.classList.remove("form-search-sticky", "show-bg");
      formSearchSelect.classList.remove("form-sticky");
      formSearchInput.classList.remove("form-sticky");
      formSearchBtn.classList.remove("form-sticky"); // formSearch.classList.remove("width-76", "form-search-sticky");
    }
  } else if (window.innerWidth < 768) {
    if (jquery_default()("#hero").offset().top + 250 <= $wScroll) {
      // console.log("intersecting 1");
      formSearchContainer.classList.add("form-search-sticky", "show-bg");
      formSearchSelect.classList.add("form-sticky");
      formSearchInput.classList.add("form-sticky");
      formSearchBtn.classList.add("form-sticky"); // formSearch.classList.add("width-76", "form-search-sticky");
    } else {
      formSearchContainer.classList.remove("form-search-sticky", "show-bg");
      formSearchSelect.classList.remove("form-sticky");
      formSearchInput.classList.remove("form-sticky");
      formSearchBtn.classList.remove("form-sticky"); // formSearch.classList.remove("width-76", "form-search-sticky");
    }
  } else {
    formSearchContainer.classList.remove("form-search-sticky", "show-bg"); // formSearch.classList.remove("width-76", "form-search-sticky");
  }
} // filter items bg color on hover


var $filterX = jquery_default()(".filterx");
var $filterItem = jquery_default()(".filter-item");
var $clearFilters = jquery_default()(".clear-filters");
var $btnOpenForm = jquery_default()(".btn-open-advanced-form");
$filterItem.not($clearFilters).not($btnOpenForm).hover(function () {
  jquery_default()(this).toggleClass("bg-grey");
});
$filterX.hover(function () {
  jquery_default()(this).toggleClass("bg-red");
  jquery_default()(this).parent().toggleClass("bg-red");
});
$clearFilters.hover(function () {
  $filterItem.not($clearFilters).not($btnOpenForm).toggleClass("bg-red");
  $filterX.toggleClass("bg-red");
});
$filterX.click(function () {
  jquery_default()(this).parent(".filter").addClass("hide");
});
$clearFilters.click(function () {
  $filterItem.addClass("hide");
}); // hide slider arrows on mobile

function hideArrowOnMobile() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector(".flickity-prev-next-button.next").classList.add("mobile");
    document.querySelector(".flickity-prev-next-button.previous").classList.add("mobile");
  } else {
    document.querySelector(".flickity-prev-next-button.next").classList.remove("mobile");
    document.querySelector(".flickity-prev-next-button.previous").classList.remove("mobile");
  }
}

hideArrowOnMobile(); // add .disabled to prev page btn
// $("input[name='page_jump']").change(function () {
//     if ($(this).val(1)) {
//         $("a.link-prev").addClass("disabled");
//     } else {
//         $("a.link-prev").removeClass("disabled");
//     }
// });
// control prev/next page buttons with keyboard arrows

jquery_default()(document).keypress(function (event) {
  if (event.keyCode == 37) {
    event.preventDefault();
    jquery_default()("#jsPrevPage").click();
    console.log("Key pressed: " + event.keyCode);
  }

  if (event.keyCode == 39) {
    event.preventDefault();
    jquery_default()("#jsNextPage").click();
    console.log("Key pressed: " + event.keyCode);
  }
}); // $(document).ready(formSearchSticky);
// $(window).scroll(formSearchSticky);
// $(window).resize(formSearchSticky);
// intersection observer animations

var formSearchContainer = document.querySelector("#formSearchContainer");
var formSearchContainerWrapper = document.querySelector(".form-search-container-wrapper");
var formSearch = document.querySelector(".form-search");
var formSearchSelect = document.querySelector("#formSearchSelect");
var formSearchInput = document.querySelector("#formSearchInput");
var formSearchBtn = document.querySelector("#formSearchBtn");
var btnAdvancedSearch = document.querySelector("#btnOpenForm");
var btnAdvancedSearchArrow = document.querySelector("#btnOpenForm svg");
var titleContainer = document.querySelector(".title-container");
var navbar = document.querySelector(".navbar"); // const optionsTrusted = {
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
// const isElementXPercentInViewport = function (el, percentVisible) {
//     let
//         rect = el.getBoundingClientRect(),
//         windowHeight = (window.innerHeight || document.documentElement.clientHeight);
//     return !(
//         Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-(rect.height / 1)) * 100)) < percentVisible ||
//         Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
//     )
// };
// read more button

new readmore_default.a("#artistInfoText", {
  speed: 200,
  collapsedHeight: "auto",
  embedCSS: false,
  moreLink: '<a href="#" class="read-more-link" id="readMoreLink">... Read More</a>',
  lessLink: '<a href="#" class="read-less-link">Read Less</a>',
  beforeToggle: function beforeToggle(trigger, element, expanded) {
    if (!expanded) {
      jquery_default()("#artistInfoText").addClass("overflow-visible");
    } else {
      jquery_default()("#artistInfoText").removeClass("overflow-visible");
    }
  } // blockProcessed: function (element, collapsible) {
  //     collapsible: false
  // }

});
var infoBox = document.getElementById("artistInfoText");
var expandedHeight = parseInt(infoBox.getBoundingClientRect().height, 10);
var cssMaxHeight = parseInt(window.getComputedStyle(infoBox).minHeight, 10); // import bigger from 'readmore-js/dist/readmore';

function hideReadMoreBtn() {
  // var artistInfoHeight = $(".artist-info-text").height();
  // if (artistInfoHeight >= 288) {
  //     $(".read-more-link").addClass("hide");
  // } else {
  //     $(".read-more-link").removeClass("hide");
  // }
  // console.log(artistInfoHeight);
  if (window.innerWidth <= 992) {
    jquery_default()(".read-more-link").removeClass("hide");
  } else {
    jquery_default()(".read-more-link").addClass("hide");
  }
}

window.addEventListener('load', hideReadMoreBtn);
window.addEventListener('resize', hideReadMoreBtn);
// CONCATENATED MODULE: ./src/page-results/results.js


 // import "../js/find";

/***/ })

/******/ });