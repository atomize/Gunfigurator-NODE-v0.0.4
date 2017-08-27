!function(e,t){"undefined"!=typeof exports&&"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.form2js=t()}(this,function(){"use strict";function e(e,t,n){var r,u,a,o,f,i,l,s,c,p,d,g,h={},m={};for(r=0;r<e.length;r++)if(f=e[r].value,!t||""!==f&&null!==f){for(g=e[r].name.split(n),i=[],l=h,s="",u=0;u<g.length;u++)if((d=g[u].split("][")).length>1)for(a=0;a<d.length;a++)if(0==a?d[a]=d[a]+"]":a==d.length-1?d[a]="["+d[a]:d[a]="["+d[a]+"]",p=d[a].match(/([a-z_]+)?\[([a-z_][a-z0-9_]+?)\]/i))for(o=1;o<p.length;o++)p[o]&&i.push(p[o]);else i.push(d[a]);else i=i.concat(d);for(u=0;u<i.length;u++)(d=i[u]).indexOf("[]")>-1&&u==i.length-1?(s+=c=d.substr(0,d.indexOf("[")),l[c]||(l[c]=[]),l[c].push(f)):d.indexOf("[")>-1?(m[s+="_"+(c=d.substr(0,d.indexOf("[")))+"_"+(p=d.replace(/(^([a-z_]+)?\[)|(\]$)/gi,""))]||(m[s]={}),""==c||l[c]||(l[c]=[]),u==i.length-1?""==c?(l.push(f),m[s][p]=l[l.length-1]):(l[c].push(f),m[s][p]=l[c][l[c].length-1]):m[s][p]||(/^[0-9a-z_]+\[?/i.test(i[u+1])?l[c].push({}):l[c].push([]),m[s][p]=l[c][l[c].length-1]),l=m[s][p]):(s+=d,u<i.length-1?(l[d]||(l[d]={}),l=l[d]):l[d]=f)}return h}function t(e,t,u,a){var o=r(e,t,u,a);return o.length>0?o:n(e,t,u,a)}function n(e,t,n,u){for(var a=[],o=e.firstChild;o;)a=a.concat(r(o,t,n,u)),o=o.nextSibling;return a}function r(e,t,r,o){if(e.disabled&&!o)return[];var f,i,l,s=u(e,r);return f=t&&t(e),f&&f.name?l=[f]:""!=s&&e.nodeName.match(/INPUT|TEXTAREA/i)?l=null===(i=a(e,o))?[]:[{name:s,value:i}]:""!=s&&e.nodeName.match(/SELECT/i)?(i=a(e,o),l=[{name:s.replace(/\[\]$/,""),value:i}]):l=n(e,t,r,o),l}function u(e,t){return e.name&&""!=e.name?e.name:t&&e.id&&""!=e.id?e.id:""}function a(e,t){if(e.disabled&&!t)return null;switch(e.nodeName){case"INPUT":case"TEXTAREA":switch(e.type.toLowerCase()){case"radio":if(e.checked&&"false"===e.value)return!1;case"checkbox":if(e.checked&&"true"===e.value)return!0;if(!e.checked&&"true"===e.value)return!1;if(e.checked)return e.value;break;case"button":case"reset":case"submit":case"image":return"";default:return e.value}break;case"SELECT":return o(e)}return null}function o(e){var t,n,r,u=[];if(!e.multiple)return e.value;for(n=0,r=(t=e.getElementsByTagName("option")).length;r>n;n++)t[n].selected&&u.push(t[n].value);return u}return function(n,r,u,a,o,f){f=!!f,void 0!==u&&null!=u||(u=!0),void 0!==r&&null!=r||(r="."),arguments.length<5&&(o=!1);var i,l=[],s=0;if((n="string"==typeof n?document.getElementById(n):n).constructor==Array||"undefined"!=typeof NodeList&&n.constructor==NodeList)for(;i=n[s++];)l=l.concat(t(i,a,o,f));else l=t(n,a,o,f);return e(l,u,r)}}),this.JSON||(this.JSON={}),function(){function f(e){return 10>e?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,u,a,o,f=gap,i=t[e];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(e)),"function"==typeof rep&&(i=rep.call(t,e,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,o=[],"[object Array]"===Object.prototype.toString.apply(i)){for(a=i.length,n=0;a>n;n+=1)o[n]=str(n,i)||"null";return u=0===o.length?"[]":gap?"[\n"+gap+o.join(",\n"+gap)+"\n"+f+"]":"["+o.join(",")+"]",gap=f,u}if(rep&&"object"==typeof rep)for(a=rep.length,n=0;a>n;n+=1)"string"==typeof(r=rep[n])&&(u=str(r,i))&&o.push(quote(r)+(gap?": ":":")+u);else for(r in i)Object.hasOwnProperty.call(i,r)&&(u=str(r,i))&&o.push(quote(r)+(gap?": ":":")+u);return u=0===o.length?"{}":gap?"{\n"+gap+o.join(",\n"+gap)+"\n"+f+"}":"{"+o.join(",")+"}",gap=f,u}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,n){var r;if(gap="",indent="","number"==typeof n)for(r=0;n>r;r+=1)indent+=" ";else"string"==typeof n&&(indent=n);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,u=e[t];if(u&&"object"==typeof u)for(n in u)Object.hasOwnProperty.call(u,n)&&(void 0!==(r=walk(u,n))?u[n]=r:delete u[n]);return reviver.call(e,t,u)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),function(e,t){"undefined"!=typeof exports&&"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.js2form=t()}(this,function(){"use strict";function e(e,r,a,o,f){arguments.length<3&&(a="."),arguments.length<4&&(o=null),arguments.length<5&&(f=!1),e="string"==typeof e?document.getElementById(e):e;var l,s;l=u(r),s=n(e,f,a,{},!0);for(var c=0;c<l.length;c++){var p=l[c].name,d=l[c].value;"undefined"!=typeof s[p]?t(s[p],d):"undefined"!=typeof s[p.replace(i,"[]")]?t(s[p.replace(i,"[]")],d):"undefined"!=typeof s[p.replace(i,"")]&&t(s[p.replace(i,"")],d)}}function t(e,t){var n,r,u;if(e instanceof Array)for(r=0;r<e.length;r++)(e[r].value==t||t===!0)&&(e[r].checked=!0);else if(c.test(e.nodeName))e.value=t;else if(/SELECT/i.test(e.nodeName))for(n=e.getElementsByTagName("option"),r=0,u=n.length;u>r;r++)if(n[r].value==t){if(n[r].selected=!0,e.multiple)break}else e.multiple||(n[r].selected=!1)}function n(e,t,u,a,o){arguments.length<4&&(a={});for(var f,l,s,c,p,d,g,h={},m=e.firstChild;m;){if(f="",m.name&&""!=m.name?f=m.name:t&&m.id&&""!=m.id&&(f=m.id),""==f){var y=n(m,t,u,a,o);for(s in y)if("undefined"==typeof h[s])h[s]=y[s];else for(c=0;c<y[s].length;c++)h[s].push(y[s][c])}else if(/SELECT/i.test(m.nodeName))for(p=0,g=m.getElementsByTagName("option"),d=g.length;d>p;p++)o&&(g[p].selected=!1),l=r(f,u,a),h[l]=m;else/INPUT/i.test(m.nodeName)&&/CHECKBOX|RADIO/i.test(m.type)?(o&&(m.checked=!1),l=r(f,u,a),l=l.replace(i,"[]"),h[l]||(h[l]=[]),h[l].push(m)):(o&&(m.value=""),l=r(f,u,a),h[l]=m);m=m.nextSibling}return h}function r(e,t,n){var r,u,a,o,f,i,c=[],p=e.split(t);for(e=e.replace(s,"[$1].[$2]"),i=0;i<p.length;i++)r=p[i],c.push(r),u=r.match(l),null!=u&&(a=c.join(t),o=a.replace(l,"$3"),a=a.replace(l,"$1"),"undefined"==typeof n[a]&&(n[a]={lastIndex:-1,indexes:{}}),(""==o||"undefined"==typeof n[a].indexes[o])&&(n[a].lastIndex++,n[a].indexes[o]=n[a].lastIndex),f=n[a].indexes[o],c[c.length-1]=r.replace(l,"$1$2"+f+"$4"));return a=c.join(t),a=a.replace("].[","][")}function u(e,t){var n,r,u=[];if(1==arguments.length&&(t=0),null==e)u=[{name:"",value:null}];else if("string"==typeof e||"number"==typeof e||"date"==typeof e||"boolean"==typeof e)u=[{name:"",value:e}];else if(e instanceof Array)for(n=0;n<e.length;n++)r="["+n+"]",u=u.concat(a(e[n],r,t+1));else for(n in e)r=n,u=u.concat(a(e[n],r,t+1));return u}function a(e,t,n){var r,a,i,l=[],s=u(e,n+1);for(a=0;a<s.length;a++)r=t,o.test(s[a].name)?r+=s[a].name:f.test(s[a].name)&&(r+="."+s[a].name),i={name:r,value:s[a].value},l.push(i);return l}var o=/^\[\d+?\]/,f=/^[a-zA-Z_][a-zA-Z_0-9]*/,i=/\[[0-9]+?\]$/,l=/(.*)(\[)([0-9]*)(\])$/,s=/\[([0-9]+)\]\[([0-9]+)\]/g,c=/INPUT|TEXTAREA/i;return e});

	var loaderModal = document.getElementById('loadingModal');
	loaderModal.style.display = "block";

	function showPage() {
	  loaderModal.style.display = "none";
	}
	(async() => {

	  let plnx = new ccxt.poloniex({
	    verbose: false
	  }) // log HTTP requests
	  let btrx = new ccxt.bittrex({
	    verbose: false
	  }) // log HTTP requests
	  let krkn = new ccxt.kraken({
	    verbose: false
	  })
	  let cpia = new ccxt.cryptopia({
	    verbose: false
	  }) // log HTTP requests
	  
	  plnx.proxy = 'https://cors-anywhere.herokuapp.com/'
	  btrx.proxy = 'https://cors-anywhere.herokuapp.com/'
	  krkn.proxy = 'https://cors-anywhere.herokuapp.com/'
	  cpia.proxy = 'https://cors-anywhere.herokuapp.com/'
	  
	  await plnx.load_markets() // request markets
	  await btrx.load_markets()
	  await krkn.load_markets()
	  await cpia.load_markets()



	  var firstel = document.createElement("option");
	  firstel.textContent = "Select a pair...";
	  firstel.value = firstel.textContent;
	  var poloniex = document.querySelector(".selectNumber");
	  var bittrex = document.getElementById("selectNumber2");
	  var kraken = document.getElementById("fillKraken");
	  var cryptopia = document.getElementById("fillCryp");
	  poloniex.appendChild(firstel);
	  bittrex.appendChild(firstel);
	  kraken.appendChild(firstel);
	  cryptopia.appendChild(firstel);


	  function listPairs(exchange) {
	    var ex_pairs = Object.keys(exchange.markets);
	    for (var pairs in ex_pairs) {
	      var ids = ex_pairs[pairs];
	      switch (exchange.id) {
	        case 'poloniex':
	          var poloniex = document.querySelector(".selectNumber");
	          var opt = exchange.markets[ids].id;
	          var el = document.createElement("option");
	          el.textContent = opt;
	          el.value = opt;
	          poloniex.appendChild(el);
	          break;
	        case 'bittrex':
	          var bittrex = document.getElementById("selectNumber2");
	          var opt = exchange.markets[ids].id;
	          var el = document.createElement("option");
	          el.textContent = opt;
	          el.value = opt;
	          bittrex.appendChild(el);
	          break;
	        case 'kraken':
	          var kraken = document.getElementById("fillKraken");
	          var opt = exchange.markets[ids].id;
	          var el = document.createElement("option");
	          el.textContent = opt;
	          el.value = opt;
	          kraken.appendChild(el);
	          break;
	        case 'cryptopia':
	          var cryptopia = document.getElementById("fillCryp");
	          var opt = exchange.markets[ids].quote + "_" + exchange.markets[ids].base;
	          var el = document.createElement("option");
	          el.textContent = opt;
	          el.value = opt;
	          cryptopia.appendChild(el);
	      }
	    }
	  }
	  listPairs(plnx);
	  listPairs(btrx);
	  listPairs(krkn);
	  listPairs(cpia);
	  initalize(showPage);
	})()

	function extend() {
	  for (var i = 1; i < arguments.length; i++)
	    for (var key in arguments[i])
	      if (arguments[i].hasOwnProperty(key)) {
	        if (typeof arguments[0][key] === 'object' &&
	          typeof arguments[i][key] === 'object')
	          extend(arguments[0][key], arguments[i][key]);
	        else
	          arguments[0][key] = arguments[i][key];
	      }
	  return arguments[0];
	}

	function modalUp() {
	  var modal = document.getElementById('successModal');
	  var span = document.getElementsByClassName("close")[0];
	  modal.style.display = "block";
	  span.onclick = function() {
	    modal.style.display = "none";
	  }
	  window.onclick = function(event) {
	    if (event.target == modal) {
	      modal.style.display = "none";
	    }
	  }
	}

	function postConfig(json, modal) {
	  var xmlHttp = new XMLHttpRequest();
	  xmlHttp.onreadystatechange = function() {
	    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
	      //  console.log(xmlHttp.responseText);
	      if (modal !== undefined) {

	        modalUp();
	      }
	    }
	  }
	  xmlHttp.open("post", "/form");
	  xmlHttp.send(json);
	}

	function precise(elem) {
	  elem.value = Number(elem.value).toFixed(8);
	}

	function gunfigure(useModal) {
	  var formData = form2js('globalForm', '.', true);
	  var formData2 = form2js('poloniexForm', '.', true);
	  var formData3 = form2js('bittrexForm', '.', true);
	  var formData4 = form2js('krakenForm', '.', true);
	  var formData5 = form2js('cryptopiaForm', '.', true);
	  var pairs = extend(formData2, formData3, formData4, formData5)
	  var jsontosend = JSON.stringify(extend(pairs, formData), null, '\t').replace(/"(-?(\d+\.?\d*|\.\d+))"/g, "$1").replace(/"(-?(true|false))"/g, "$1");
	  document.getElementById('testArea').innerHTML = jsontosend;
	  storeValues();
	  if (useModal === true) {
	    postConfig(jsontosend, 'true');
	  } else {
	    postConfig(jsontosend);
	  }
	}



	function getNearestTableAncestor(htmlElementNode) {
	  while (htmlElementNode) {
	    htmlElementNode = htmlElementNode.parentNode;
	    if (htmlElementNode.tagName.toLowerCase() === 'tr') {
	      return htmlElementNode;
	    }
	  }
	  return undefined;
	}

	function setClassForPair(selector, exchange) {
	  var row = selector.parentElement;
	  var thisrow = getNearestTableAncestor(row);
	  var pair = thisrow.cells[1].childNodes[0].value;
	  var strategy = thisrow.cells[2].childNodes[0].value;
	  var strategyInput = thisrow.cells[2].childNodes[0];
	  var pairInput = thisrow.cells[1].childNodes[0];
	  strategyInput.name = "pairs." + exchange + "." + pair + ".strategy";
	  pairInput.id = pair;
	}

	function addRow(tableID) {
	  var table = document.getElementById(tableID);
	  var rowCount = table.rows.length;
	  var row = table.insertRow(rowCount);
	  var colCount = table.rows[0].cells.length;
	  for (var i = 0; i < colCount; i++) {
	    var newcell = row.insertCell(i);
	    newcell.innerHTML = table.rows[1].cells[i].innerHTML;

	  }
	}

	function deleteRow(tableID) {
	  try {
	    var table = document.getElementById(tableID);
	    var rowCount = table.rows.length;
	    for (var i = 0; i < rowCount; i++) {
	      var row = table.rows[i];
	      var chkbox = row.cells[0].childNodes[0];
	      if (null != chkbox && true == chkbox.checked) {
	        if (rowCount <= 2) {
	          alert("Cannot delete all the rows.");
	          break;
	        }
	        table.deleteRow(i);
	        rowCount--;
	        i--;
	      }
	    }
	  } catch (e) {
	    alert(e);
	  }
	}

	function addRowClass(selector, exchange, pair, strategy) {
	  var classtoadd = selector.value;
	  selector.parentElement.parentElement.className = classtoadd;
	}

	function addOverride(selector) {
	  var row = selector.parentElement;
	  var thisrow = getNearestTableAncestor(row);
	  var exchange = thisrow.parentElement.parentElement.id;
	  console.log(exchange);
	  var pair = thisrow.cells[1].childNodes[0].value;
	  var newcellnum = thisrow.cells.length;
	  var newcell = thisrow.insertCell(newcellnum);
	  newcell.innerHTML = " <input onchange='setID(this)'name='pairs." + exchange + "." + pair + ".[override][" + selector.value + "]' type='text'></input>  " + selector.value + "<a style='cursor:pointer'onclick='removeOverride(this)'>  (-)</a>";
	}

	function removeOverride(cell) {
	  var cellNumber = cell.parentElement.cellIndex;
	  var row = cell.parentElement;
	  var thisrow = getNearestTableAncestor(row);
	  thisrow.deleteCell(cellNumber);
	  var colCount = thisrow.parentElement.rows[1].cells.length;

	}

	function storeValues() {
	  var configFile = document.getElementById('testArea').innerHTML;
	  localStorage.setItem("configFile", configFile);
	}

	function loadValues() {
	  var data = JSON.parse(localStorage.getItem("configFile"));
	  js2form(document.getElementById('globalForm'), data);
	  loadConfig();
	  var y = document.getElementById('globalForm').querySelectorAll('input[name*="AVGMINIMUM"]');
	  var z = document.getElementById('globalForm').querySelectorAll('input[name*="PP_BUY"]');
	  var i;
	  for (i = 0; i < y.length; i++) {
	    y[i].addEventListener('input', precise(y[i]), false);
	  }
	  for (i = 0; i < z.length; i++) {
	    z[i].addEventListener('input', precise(z[i]), false);
	  }
	  gunfigure();
	}

	function buildTableRow(exchange, pair, strategy, override) { //overrides is is an array value
	  var table = document.getElementById(exchange);
	  var rowCount = table.rows.length;
	  var colCount = table.rows[0].cells.length;
	  var row = table.insertRow(rowCount);
	  var thisRow = table.rows[rowCount];
	  for (var i = 0; i < colCount; i++) {
	    var newcell = row.insertCell(i);
	    newcell.innerHTML = table.rows[1].cells[i].innerHTML;
	  }
	  var cc = row.cells[1].childNodes[0];
	  for (var i = 0; i < cc.length; i++) {
	    if (cc.options[i].text === pair) { //note here i matched the TEXT of the pairs options list
	      cc.selectedIndex = i;
	      break;
	    }
	  }
	  var dd = row.cells[2].childNodes[0];
	  for (var i = 0; i < dd.length; i++) {
	    if (dd.options[i].value === strategy) { //note here i matched the VALUES because the info passed doesn't match the TEXT which is made in this case for humans to read
	      dd.selectedIndex = i;
	      break;
	    }
	  }
	  var evt = document.createEvent("HTMLEvents");
	  evt.initEvent("change", false, true);
	  dd.dispatchEvent(evt);
	  if (override !== undefined) {
	    for (var i = 0; i < Object.keys(override).length; i++) {
	      var newcell = row.insertCell(colCount + i);
	      var newInput = document.createElement("INPUT");
	      var paramName = document.createTextNode(Object.keys(override)[i]);
	      var textname = "pairs." + exchange + "." + pair + ".[override][" + Object.keys(override)[i] + "]"
	      newInput.name = textname;
	      var removeOverrideText = document.createTextNode("   (-)");
	      var clearspace = document.createTextNode(" ");
	      for (var parameters in override) {
	        newInput.setAttribute("type", "text");
	        newcell.appendChild(newInput).value = Object.values(override)[i];
	      }
	      var newElem = document.createElement('a');
	      newElem.id = ('takeaway');
	      newElem.setAttribute("onclick", "removeOverride(this)");
	      newElem.style.cursor = "pointer";
	      newcell.appendChild(clearspace);
	      newcell.appendChild(paramName);
	      newElem.appendChild(removeOverrideText)
	      newcell.appendChild(newElem);
	      var removers = document.getElementById('takeaway');
	    }
	  }
	}

	function loadConfig() {
	  var config = JSON.parse(localStorage.getItem("configFile"));
	  for (var exchanges in config.pairs) {
	    if (config.pairs.hasOwnProperty(exchanges)) {
	      for (var pairs in config.pairs[exchanges]) {
	        if (config.pairs[exchanges].hasOwnProperty(pairs)) {
	          buildTableRow(exchanges, pairs, config.pairs[exchanges][pairs].strategy, config.pairs[exchanges][pairs].override);
	        }
	      }
	    }
	  }
	}

	document.getElementById('fileinput').addEventListener('change', loadFile, false);

	function loadFile() {
	  var input, file, fr;

	  if (typeof window.FileReader !== 'function') {
	    alert("The file API isn't supported on this browser yet.");
	    return;
	  }

	  input = document.getElementById('fileinput');
	  if (!input) {
	    alert("Um, couldn't find the fileinput element.");
	  } else if (!input.files) {
	    alert("This browser doesn't seem to support the `files` property of file inputs.");
	  } else if (!input.files[0]) {
	    alert("Please select a file before clicking 'Load'");
	  } else {
	    file = input.files[0];
	    fr = new FileReader();
	    fr.onload = receivedText;
	    fr.readAsText(file);
	  }

	  function receivedText(e) {
	    lines = e.target.result;
	    var newArr = JSON.parse(lines);
	    document.getElementById('testArea').innerHTML = JSON.stringify(newArr, null, 4);
	    storeValues();
	    loadValues();
	  }

	}

	//if (localStorage.getItem("configFile") !== undefined){
	//	loadValues();
	//	}

	function loadJSON(callback) {
	  var xobj = new XMLHttpRequest();
	  xobj.overrideMimeType("application/json");
	  xobj.open('GET', '../config.js', true);
	  xobj.onreadystatechange = function() {
	    if (xobj.readyState == 4 && xobj.status == "200") {
	      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
	      callback(xobj.responseText);
	    }
	  };
	  xobj.send(null);
	}

	function initalize(callback) {
	  loadJSON(function(response) {
	    var actual_JSON = JSON.parse(response);
	    document.getElementById('testArea').innerHTML = JSON.stringify(actual_JSON, null, 4);
	    storeValues();
	    loadValues();
	  });
	  callback();
	}

