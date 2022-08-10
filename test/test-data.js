
//global variable, for html page, refer tpsvr @ npm.
bind_set_class_frame = require("../bind-set-class-frame.js");

//test tool
function _addCssText(cssText) {
	var style = document.createElement("style");
	style.type = "text/css";

	try {
		style.appendChild(document.createTextNode(cssText));
	}
	catch (ex) {
		style.styleSheet.cssText = cssText;
	}
	document.getElementsByTagName("head")[0].appendChild(style);
};

_addCssText("\
	.ht.selected{background:lavender;}\
");

module.exports = {

	"bind_set_class_frame": function (done) {
		ht_set_class = bind_set_class_frame.bindFrame("ht");

		return "<span class='ht selected'>css .ht.selected style sample</span>" +
			"<div>" +
			"<span>111 </span><span>222 </span><span>333 </span><span>444 </span><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;ht_set_class.set([chs[0],chs[2]],this.checked?'selected':'',this.checked?'':'selected'); ht_set_class.set([chs[1],chs[3]],this.checked?'':'selected',this.checked?'selected':'');\"" +
			"></input>toggle by set()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;ht_set_class.setByElement('selected',this.checked?[chs[0],chs[2]]:[chs[1],chs[3]],this.checked?[chs[1],chs[3]]:[chs[0],chs[2]]);\"" +
			"></input>toggle by setByElement()</label><br>" +
			"<label><input type=checkbox " +
			"	onchange=\"var chs=parentNode.parentNode.childNodes;ht_set_class.setByElement('selected',null,null,[chs[0],chs[1],chs[2],chs[3]]);\"" +
			"></input>setByElement() toggle</label><br>" +
			"</div>";
	},

	"check exports": function (done) {
		for (var i in bind_set_class_frame) {
			if (typeof bind_set_class_frame[i] === "undefined") { done("undefined: " + i); return; }
		}
		done(false);

		console.log(bind_set_class_frame);
		var list = "export list: " + Object.keys(bind_set_class_frame).join(", ");
		console.log(list);
		return list;
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('bind_set_class_frame', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
