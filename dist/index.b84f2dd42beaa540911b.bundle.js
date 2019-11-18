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
/******/ 		0: 0
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
/******/ 	deferredModules.push([25,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 22:
/***/ (function(module, exports) {

function SetCookie(cookieName,cookieValue,nDays) {
 
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 86400*nDays);
    if (cookieName == 'media' && eval(cookieValue)<200) {return;} 
    document.cookie = cookieName+"="+escape(cookieValue)+"; expires="+expire.toGMTString()+"; path=/; domain=musicstack.com";

    console.log(cookieName, cookieValue);
}

function setCookieCur(event) {
    SetCookie('currency', this.options[this.selectedIndex].value, 9999);
    window.location.reload();
    return true;
}

document.querySelector("#js-selectCurrency1").addEventListener("change", setCookieCur);
document.querySelector("#js-selectCurrency2").addEventListener("change", setCookieCur);

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/page-index/index.scss
var page_index = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.js
var bootstrap = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/flickity/js/index.js
var js = __webpack_require__(5);
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// CONCATENATED MODULE: ./src/js/main.js




const $selectDesktop = jquery_default()(".form-search-select-desktop");
const $selectMobile = jquery_default()(".form-search-select-mobile");

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

    var $window = jquery_default()(window);
    var $wScroll = $window.scrollTop();
    var $windowW = $window.width();
    
    // console.log($wScroll);

    if (window.innerWidth > 767) {
        
        if (jquery_default()("#hero").offset().top < $wScroll) {
            jquery_default()(".navbar").addClass("navbar-shrink");
        } else if (jquery_default()("#hero").offset().top > $wScroll) {
            jquery_default()(".navbar").removeClass("navbar-shrink");
        }

        // show navbar search form
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

jquery_default()(window).scroll(navbarShrink);
jquery_default()(window).resize(navbarShrink);

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
jquery_default()('#navbarMobileToggle').click(function(){
    jquery_default()(this).toggleClass("navbar-mobile-closed");
    jquery_default()(this).children(".icon")
        .toggleClass('menu')
        .toggleClass('close');

    jquery_default()("#navbarMobile").toggleClass("slide-in");
    jquery_default()(".navbar-mobile-overlay").fadeToggle();
    jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
        // .css({position: "fixed", top: '-' + $(window).scrollTop() + 'px'});
        // console.log(window.scrollY + 'px');
    jquery_default()("html").toggleClass("advanced-search-form-open");
});

jquery_default()(".navbar-mobile-overlay").click(function() {
    jquery_default()(this).fadeToggle();
    jquery_default()('#navbarMobileToggle').children(".icon").toggleClass("menu").toggleClass("close");
    jquery_default()("#navbarMobile").toggleClass("slide-in");
    jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    // .css({position: "", top: ""});
    jquery_default()("html").toggleClass("advanced-search-form-open");
});

// change select bg on hover
jquery_default()("#formSearchSelect").hover(function () {

    if(jquery_default()(this).is(":focus")) {
        return;
    } else {
        jquery_default()(".form-search-select-bg").toggleClass("hover-bg");
    }
});

jquery_default()("#formSearchSelect").focus(function () {

    jquery_default()(".form-search-select-bg").addClass("hover-bg");
}).blur(function () {

    jquery_default()(".form-search-select-bg").removeClass("hover-bg");
});

// set search select options
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
};

jquery_default()(document).ready(setSearchSelectOptions);
jquery_default()(window).resize(setSearchSelectOptions);
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
jquery_default()(document).ready(function() {
    
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

});

// change search select text and placeholder on change select option
var $sel = jquery_default()('#formSearchSelect').on('change', function(){
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
        jquery_default()("html").toggleClass("advanced-search-form-open");
        // reset
        $sel.val( $sel.data('currVal'));   
    }
}).on('update', function(){
    jquery_default()(this).data('currVal', jquery_default()(this).val())
}).trigger('update');

// change search select text and placeholder on change select option on navbar form
var $selNav = jquery_default()('#formSearchSelectNav').on('change', function(){
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
        jquery_default()("html").toggleClass("advanced-search-form-open");
        // reset
        $selNav.val( $selNav.data('currVal'));   
    }
}).on('update', function(){
    jquery_default()(this).data('currVal', jquery_default()(this).val())
}).trigger('update');

// center select text by adding padding based on text length
function centerSelectTextNav() {

    const $formSelectNav = jquery_default()("#formSearchSelectNav");
    const $selectedOptionNav = jquery_default()("#formSearchSelectNav option:selected");

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
    const $formSelectNav = jquery_default()("#formSearchSelectNav");
    const $formSelect = jquery_default()("#formSearchSelect");
    const $selectedOptionNav = jquery_default()("#formSearchSelectNav option:selected");
    const $selectedOption = jquery_default()("#formSearchSelect option:selected");

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

    if (window.innerWidth < 499 && (jquery_default()("#hero").offset().top + 208) <= $wScroll || window.innerWidth < 768 && (jquery_default()("#hero").offset().top + 250) <= $wScroll) {
            console.log("YES");
            
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
        console.log("NO");
        
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

};

jquery_default()(document).ready(centerSelectText);
jquery_default()(window).resize(centerSelectText);
jquery_default()(window).scroll(centerSelectText);
jquery_default()("#formSearchSelectNav").change(centerSelectText);
jquery_default()("#formSearchSelect").change(centerSelectText);

// match input on both forms
jquery_default()("#formSearchInput, #formSearchInputNav").change(function () {

    let $inputText = jquery_default()(this).val();

    jquery_default()("#formSearchInput, #formSearchInputNav").val($inputText);
});

// record stores slider
const sliderRecordStores = document.querySelector('#sliderRecordStores');
const flkty = new js_default.a( sliderRecordStores, {
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
const flktyTrustpilot = new js_default.a( sliderTrustpilot, {
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

const $inp = jquery_default()("#formSearchInput, #formSearchInputNav");
const $inpNav = jquery_default()("#formSearchInputNav");
const $cle = jquery_default()(".form-search-reset");
  
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
jquery_default()("#btnOpenForm1").click(function() {
    jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
    jquery_default()(".form-advanced-search-container").addClass("fade-in");
    jquery_default()(".form-advanced-overlay").fadeToggle();
    jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    // $("html").toggleClass("advanced-search-form-open");
    jquery_default()(".navbar-mobile-overlay").fadeToggle();
    jquery_default()('#navbarMobileToggle').children(".icon").toggleClass("menu").toggleClass("close");
    jquery_default()("#navbarMobile").toggleClass("slide-in");
});

jquery_default()("#btnCloseForm, .form-advanced-overlay").click(function() {
    jquery_default()(".form-advanced-search-container").toggleClass("slide-in");
    jquery_default()(".form-advanced-overlay").fadeToggle();
    jquery_default()(".no-scroll-body-wrapper").toggleClass("advanced-search-form-open");
    jquery_default()("html").toggleClass("advanced-search-form-open");
});

jquery_default()(document).ready(function () {

    let $windowW = window.innerWidth;

    if ($windowW < 992) {
        jquery_default()(".form-advanced-search-container").addClass("fade-in");
    }
})

jquery_default()(window).resize(function () {
    
    let $windowW = window.innerWidth;

    if ($windowW >= 992) {
        jquery_default()(".form-advanced-search-container").removeClass("fade-in");
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

    console.log("document loaded");
    
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

    var $wScroll = jquery_default()(window).scrollTop();

    if (window.innerWidth < 499) {
        if (jquery_default()("#hero").offset().top + 208 <= $wScroll) {
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
        if (jquery_default()("#hero").offset().top + 250 <= $wScroll) {
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

jquery_default()(document).ready(formSearchSticky);
jquery_default()(window).scroll(formSearchSticky);
jquery_default()(window).resize(formSearchSticky);

// hide cookie banner
const cookieBanner = document.querySelector(".cookie-banner");
const cookieBannerBtn = document.querySelector(".cookie-banner-btn");

cookieBannerBtn.addEventListener("click", function () {
    cookieBanner.classList.add("slide-out");
});

// hide loader on window load
const loader = document.querySelector(".loader-container");

window.addEventListener("load", function() {
    loader.classList.add("hide-loader");

    setTimeout(function() {
        loader.style.display = "none";
    }, 500);
    console.log("window loaded!");
    
});
// EXTERNAL MODULE: ./src/js/cookie-cur.js
var cookie_cur = __webpack_require__(22);

// CONCATENATED MODULE: ./src/page-index/index.js




/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });