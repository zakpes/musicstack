function FloatingDivUnder(element, id, defaultClassName, appendForVisibility) {
    this.vis = appendForVisibility;
    this.div = document.createElement('div');
    this.div.className = this.invis = defaultClassName;
    if (element)
    this.AlignTo(element);
    this.div.id = id;
}

FloatingDivUnder.prototype.AlignTo = function (element) {
    var pos = this.FindPos(element);
    this.div.style.left = pos[0] + "px";
    this.div.style.top = pos[1] + "px";
};

FloatingDivUnder.prototype.FindPos = function (obj) {
    var curleft = 0, curtop = obj.offsetHeight + 1; do {
        curleft += obj.offsetLeft; curtop += obj.offsetTop;
    } while (obj = obj.offsetParent); return [curleft, curtop];
};

FloatingDivUnder.prototype.AppendToDocument = function () {
    document.getElementsByTagName('body')[0].appendChild(this.div); return this;
};

FloatingDivUnder.prototype.Update = function (text) {
    this.div.innerHTML = text; return this;
};

FloatingDivUnder.prototype.Div = function () {
    return this.div;
};

FloatingDivUnder.prototype.Show = function () {
    this.div.className = this.invis + " " + this.vis; return this;
};

FloatingDivUnder.prototype.Hide = function () {
    this.div.className = this.invis; return this;
};

var xmlHttp;
// window.setInterval("checkInput();", 100);
// var url = "https://www.musicstack.com/ajax/find.php";
var url = "";
var oCount = 0;
var lastSearch = '';
var lastQ = '';
var done = 0;
var msg_div = new FloatingDivUnder(null, 'msg', 'invisibleFloater', 'makeItVisible');

function initiate_floater() {
    msg_div.AlignTo(document.getElementById('formSearchInput'));
    msg_div.AppendToDocument();
}

window.addEventListener("load", initiate_floater);

function GetXmlHttpObject() {
    if (document.getElementById("find_focus").value == '0') { return true; }
    var xmlHttp = null;
    try { xmlHttp = new XMLHttpRequest(); }
    catch (e) {
        try { xmlHttp = new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) { xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); }
    }
    return xmlHttp;
}

function stateChanged() {
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.responseText == false)
        msg_div.Update('').Hide(); else
        msg_div.Update(xmlHttp.responseText).Show();
    }
}

function getElementsByClass(searchClass, node, tag) {
    var classElements = new Array();
    if (node == null)
        node = document; if (tag == null)
        tag = '*'; var els = node.getElementsByTagName(tag); var elsLen = els.length; var pattern = new RegExp('(^|\\\\s)' + searchClass + '(\\\\s|$)'); for (i = 0, j = 0; i < elsLen; i++) { if (pattern.test(els[i].className)) { classElements[j] = els[i]; j++; } }
    return classElements;
}

function mousedOver() {
    oLinkArr = document.getElementById("msg").getElementsByTagName("a"); for (var i = 0; i < oLinkArr.length; i++) { oLinkArr[i].className = "unHighLighted"; }
}

function clicked(str) {
    msg_div.Update('').Hide(); flip(0); document.getElementById("formSearchInput").value = str; document.search.submit();
}

document.onkeydown = function (e) {
    var evnt = (window.event) ? window.event : e; var KeyID = evnt.keyCode; var oLink = msg_div.Div().getElementsByTagName("a"); var oLinkArr = new Array(); for (var i = 0; i < oLink.length; i++) { oLinkArr[i] = oLink[i]; }
    oLinkArr.unshift("adsf");
    var mainCount = oLinkArr.length;
    if (mainCount != 0) {
        if (oCount == 0) { oCount = oLinkArr.length; }
        if (document.search.find_focus.value == 0) { return true; }
        switch (KeyID) {
            case 38: oCount -= 1; break; case 40: oCount += 1; break; case 13: var elementValue = getElementsByClass('highLighted', msg_div.Div(), 'a'); if (elementValue[0])
                strippedElementValue = stripUnwanted(elementValue[0].getAttribute("value"), mainCount); else strippedElementValue = document.getElementById('formSearchInput').value; clicked(strippedElementValue); break;
        }
        oCount %= mainCount; for (var i = 0; i < oLinkArr.length; i++) { oLinkArr[i].className = "unHighLighted"; }
        oLinkArr[oCount].className = "highLighted";
    }
    if (KeyID == 38 || KeyID == 40 || KeyID == 13)
        return false; return true;
}

function addslashes(str) {
    str = str.replace(/\\/g, '\\\\'); str = str.replace(/\'/g, '\\\'');
    str = str.replace(/\"/g, '\\"'); str = str.replace(/\0/g, '\\0'); return str;
}

function stripslashes(str) {
    str = str.replace(/\\'/g, '\'');
    str = str.replace(/\\"/g, '"');
    str = str.replace(/\\\\/g, '\\');
    str = str.replace(/\\0/g, '\0');
    return str;
}

function stripUnwanted(str, numCount) {
    for (i = 0; i < numCount; i++) { str = str.replace('(' + i + ')', ''); }
    str = str.replace('<b>', ''); str = str.replace('</b>', ''); return str;
}

function checkInput() {
    if (document.getElementById("formSearchSelect").value != 'artist') { return false; }
    if (done == 1) { alert("done=1"); return false; }
    strData = document.getElementById("formSearchInput").value; if (lastQ != strData) { allowSearch = false; lastQ = strData; return; }
    if (strData.length == 0) { msg_div.Update('').Hide(); allowSearch = false; lastQ = strData; return; }
    allowSearch = true; strData = addslashes(strData); setTimeout("returnData('" + strData + "');", 250);
}

function returnData(str) {
    if (!allowSearch)
        return; if (lastSearch == str)
        return; lastSearch = str; xmlHttp = GetXmlHttpObject(); if (str.length == 0)
        msg_div.Hide(); else {
        if (xmlHttp == null) { alert("Your browser does not support ajax."); }
        else {
            except = "mode=search&term=" + stripslashes(str);
            xmlHttp.onreadystatechange = stateChanged;
            xmlHttp.open("POST", url, 1);
            xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlHttp.send(except);
        }
    }
}

function mouseOff() {
    msg_div.Update('').Hide();
}

function flip(f) {
    document.search.find_focus.value = f;
    return true;
}

function ck(form) {
    mouseOff();
    if (form.find.value == "" || form.find.value == null) {
        return false;
    } else {
        return true;
    }
}