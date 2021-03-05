// set cart count from "cart_items" cookie
//SetCookie("cart_items", '2', -1);
var cart_count = ReadCookie("cart_items");
if (cart_count === undefined || cart_count.length < 1) {
  document.getElementById("items-in-cart").style.display = "none";
  console.log("cart count set to zero. Red dot hidden");
} else {
  document.getElementById("items-in-cart").style.display = "";
  document.getElementById("items-in-cart").innerHTML = cart_count;
  console.log("cart count set to " + cart_count);
}

// set currency on dropdowns from "currency" cookie
var c = ReadCookie("currency");
console.log("currency cookie is set to " + c);
if (c !== undefined) {
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
  }
}
// set media dropdown if media cookie there
var c = ReadCookie("media");
if (c !== undefined) {
  console.log("Media cookie is set to " + c);
  var e = document.getElementById("selectFormat");

  for (var i = 0; i < e.length; i++) {
    if (e.options[i].value == c) {
      e.options[i].selected = true;
      e.style.backgroundColor = "#fec9c9";
      break;
    }
  }
}
// set Seller Locations dropdown if seller_country cookie there
var c = ReadCookie("seller_country");
if (c !== undefined) {
  console.log("Seller Country cookie is set to " + c);
  var e = document.getElementById("inputSellersCountry");

  for (var i = 0; i < e.length; i++) {
    if (e.options[i].value == c) {
      e.options[i].selected = true;
      e.style.backgroundColor = "#fec9c9";
      break;
    }
  }
}
// set Star Rating dropdown if rate cookie there
var c = ReadCookie("rate");
if (c !== undefined) {
  console.log("Seller rate cookie is set to " + c);
  var e = document.getElementById("inputSellersRating");

  for (var i = 0; i < e.length; i++) {
    if (e.options[i].value == c) {
      e.options[i].selected = true;
      e.style.backgroundColor = "#fec9c9";
      break;
    }
  }
}

var c = ReadCookie("price_min");
var d = ReadCookie("price_max");
if (c !== undefined && d !== undefined && c != null && d != null) {
  var e = document.getElementById("priceInputMin");
  var f = document.getElementById("priceInputMax");
  e.value = c;
  f.value = d;
  e.style.backgroundColor = "#fec9c9";
  f.style.backgroundColor = "#fec9c9";
}

function setCookieCur(event) {
  SetCookie("currency", this.options[this.selectedIndex].value, 9999);
  window.location.reload();
  return true;
}

document
  .querySelector("#js-selectCurrency1")
  .addEventListener("change", setCookieCur);
document
  .querySelector("#js-selectCurrency2")
  .addEventListener("change", setCookieCur);

function ReadCookie(name) {
  name += "=";
  for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--)
    if (!ca[i].indexOf(name)) return ca[i].replace(name, "");
}

function SetCookie (cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;
  expire.setTime(today.getTime() + 86400 * nDays);
  if (cookieName == "media" && eval(cookieValue) < 200) {
    return;
  }
  document.cookie =
    cookieName +
    "=" +
    escape(cookieValue) +
    "; expires=" +
    expire.toGMTString() +
    "; path=/; domain=musicstack.com";
  //    document.cookie =
  //      cookieName +
  //      "=" +
  //      escape(cookieValue) +
  //      "; expires=" +
  //      expire.toGMTString();
  console.log(cookieName, cookieValue);
}
window.SetCookie=SetCookie; // make function global 

function setPerPage(event) {
  SetCookie("per_page", this.options[this.selectedIndex].value, 9999);
  this.form.submit();
  //    window.location.reload();
  return true;
}

var elem1 = document.querySelector("#js-selectResultsPerPage1");
var elem2 = document.querySelector("#js-selectResultsPerPage2");

if (elem1) {
  // only do if element is there
  document
    .querySelector("#js-selectResultsPerPage1")
    .addEventListener("change", setPerPage);
}

if (elem2) {
  document
    .querySelector("#js-selectResultsPerPage2")
    .addEventListener("change", setPerPage);
}

// set filters cookie
function setCookieFilter() {
  SetCookie("find", "", 999);
  this.form.submit();
}
window.setCookieFilter=setCookieFilter; // make function global


const filterBtnArr = document.querySelectorAll(".filterx");

// filterBtnArr.forEach( function(filter) {
//     filter.addEventListener("click", setCookieFilter);
// });

function filterClick() {
  for (let i = 0; i < filterBtnArr.length; i++) {
    filterBtnArr[i].addEventListener("click", function () {
      setCookieFilter();
    });
  }
}

filterClick();

// set consent cookie and hide cookie banner
const cookieBanner = document.querySelector(".cookie-banner");
const cookieBannerBtn = document.querySelector(".cookie-banner-btn");

(function () {
  if (!localStorage.getItem("cookieconsent")) {
    console.log("cookie is not here");
    cookieBanner.classList.remove("hide-banner");

    cookieBannerBtn.onclick = function (e) {
      e.preventDefault();
      cookieBanner.classList.add("slide-out");

      setTimeout(function () {
        cookieBanner.style.display = "none";
      }, 500);

      localStorage.setItem("cookieconsent", true);
      console.log("cookie set!");
    };
  } else {
    console.log("cookie is here");
  }
})();
