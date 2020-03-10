
var c; // set cur frm cookie
for (var ca = document.cookie.split(/;\s*/), i = ca.length - 1; i >= 0; i--) {
    if (!ca[i].indexOf('currency=')) {c=ca[i].replace('currency=', '');break}
    
}
console.log("c is "+c);

var e = document.getElementById("js-selectCurrency1");
var f = document.getElementById("js-selectCurrency2");

for ( var i = 0; i < e.length; i++ ) {
 if ( e.options[i].value == c ) {
          
      e.options[i].selected=true;break;
 }
}

for ( var i = 0; i < f.length; i++ ) {
 if ( f.options[i].value == c ) {
          
      f.options[i].selected=true;break;
 }
}

// set currency cookie
function SetCookie(cookieName,cookieValue,nDays) {
 
    var today = new Date();
    var expire = new Date();
    if (nDays==null || nDays==0) nDays=1;
    expire.setTime(today.getTime() + 86400*nDays);
    if (cookieName == 'media' && eval(cookieValue)<200) {return;} 
    // document.cookie = cookieName+"="+escape(cookieValue)+"; expires="+expire.toGMTString()+"; path=/; domain=musicstack.com";
    document.cookie = cookieName+"="+escape(cookieValue)+"; expires="+expire.toGMTString();

    console.log(cookieName, cookieValue);
}

function setCookieCur(event) {
    SetCookie('currency', this.options[this.selectedIndex].value, 9999);
    window.location.reload();
    return true;
}

document.querySelector("#js-selectCurrency1").addEventListener("change", setCookieCur);
document.querySelector("#js-selectCurrency2").addEventListener("change", setCookieCur);

// set consent cookie and hide cookie banner
const cookieBanner = document.querySelector(".cookie-banner");
const cookieBannerBtn = document.querySelector(".cookie-banner-btn");

(function() {
	if (!localStorage.getItem('cookieconsent')) {

        console.log("cookie is not here");
        cookieBanner.classList.remove("hide-banner");
		
		cookieBannerBtn.onclick = function(e) {

			e.preventDefault();
            cookieBanner.classList.add("slide-out");

            setTimeout(function() {
                cookieBanner.style.display = "none";
            }, 500);

            localStorage.setItem('cookieconsent', true);
            console.log("cookie set!");
            
		};
	} else {
        console.log("cookie is here");
        
    }
})();