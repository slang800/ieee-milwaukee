!function(e){function t(e){d(this,e),this.assertions=[],this.testNumber=++t.count}function n(){b.autorun=!0,b.currentModule&&g("moduleDone",y,{name:b.currentModule,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all});var t,n,r=h("qunit-banner"),i=h("qunit-tests"),o=+new T-b.started,a=b.stats.all-b.stats.bad,s=["Tests completed in ",o," milliseconds.<br/>","<span class='passed'>",a,"</span> tests of <span class='total'>",b.stats.all,"</span> passed, <span class='failed'>",b.stats.bad,"</span> failed."].join("");if(r&&(r.className=b.stats.bad?"qunit-fail":"qunit-pass"),i&&(h("qunit-testresult").innerHTML=s),b.altertitle&&"undefined"!=typeof document&&document.title&&(document.title=[b.stats.bad?"✖":"✔",document.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),b.reorder&&E.sessionStorage&&0===b.stats.bad)for(t=0;t<sessionStorage.length;t++)n=sessionStorage.key(t++),0===n.indexOf("qunit-test-")&&sessionStorage.removeItem(n);e.scrollTo&&e.scrollTo(0,0),g("done",y,{failed:b.stats.bad,passed:a,total:b.stats.all,runtime:o})}function r(e){var t,n=b.filter&&b.filter.toLowerCase(),i=b.module&&b.module.toLowerCase(),o=(e.module+": "+e.testName).toLowerCase();return e.callback&&e.callback.validTest===r?(delete e.callback.validTest,!0):b.testNumber?e.testNumber===b.testNumber:!i||e.module&&e.module.toLowerCase()===i?n?(t="!"!==n.charAt(0),t||(n=n.slice(1)),-1!==o.indexOf(n)?t:!t):!0:!1}function i(e,t){t=void 0===t?3:t;var n,r,i;if(e.stacktrace)return e.stacktrace.split("\n")[t+3];if(e.stack){if(n=e.stack.split("\n"),/^error$/i.test(n[0])&&n.shift(),k){for(r=[],i=t;i<n.length&&-1==n[i].indexOf(k);i++)r.push(n[i]);if(r.length)return r.join("\n")}return n[t]}if(e.sourceURL){if(/qunit.js$/.test(e.sourceURL))return;return e.sourceURL+":"+e.line}}function o(e){try{throw new Error}catch(t){return i(t,e)}}function a(e){return e?(e+="",e.replace(/[\&<>]/g,function(e){switch(e){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";default:return e}})):""}function s(e,t){b.queue.push(e),b.autorun&&!b.blocking&&u(t)}function u(t){function r(){u(t)}var i=(new T).getTime();for(b.depth=b.depth?b.depth+1:1;b.queue.length&&!b.blocking;){if(!(!E.setTimeout||b.updateRate<=0||(new T).getTime()-i<b.updateRate)){e.setTimeout(r,13);break}b.queue.shift()()}b.depth--,!t||b.blocking||b.queue.length||0!==b.depth||n()}function l(){if(b.pollution=[],b.noglobals)for(var t in e)_.call(e,t)&&!/^qunit-test-output/.test(t)&&b.pollution.push(t)}function c(){var e,t,n=b.pollution;l(),e=f(b.pollution,n),e.length>0&&y.pushFailure("Introduced global variable(s): "+e.join(", ")),t=f(n,b.pollution),t.length>0&&y.pushFailure("Deleted global variable(s): "+t.join(", "))}function f(e,t){var n,r,i=e.slice();for(n=0;n<i.length;n++)for(r=0;r<t.length;r++)if(i[n]===t[r]){i.splice(n,1),n--;break}return i}function d(t,n){for(var r in n)void 0===n[r]?delete t[r]:("constructor"!==r||t!==e)&&(t[r]=n[r]);return t}function p(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,n):n()}function h(e){return!("undefined"==typeof document||!document||!document.getElementById)&&document.getElementById(e)}function m(e){return function(t){b[e].push(t)}}function g(e,t,n){var r,i;if(y.hasOwnProperty(e))y[e].call(t,n);else for(i=b[e],r=0;r<i.length;r++)i[r].call(t,n)}function v(e,t){if(t.indexOf)return t.indexOf(e);for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}var y,b,x,w=0,k=(o(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,""),q=Object.prototype.toString,_=Object.prototype.hasOwnProperty,T=e.Date,E={setTimeout:"undefined"!=typeof e.setTimeout,sessionStorage:function(){var e="qunit-test-string";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}()};t.count=0,t.prototype={init:function(){var e,t,n,r=h("qunit-tests");r&&(t=document.createElement("strong"),t.innerHTML=this.name,e=document.createElement("a"),e.innerHTML="Rerun",e.href=y.url({testNumber:this.testNumber}),n=document.createElement("li"),n.appendChild(t),n.appendChild(e),n.className="running",n.id=this.id="qunit-test-output"+w++,r.appendChild(n))},setup:function(){if(this.module!==b.previousModule?(b.previousModule&&g("moduleDone",y,{name:b.previousModule,failed:b.moduleStats.bad,passed:b.moduleStats.all-b.moduleStats.bad,total:b.moduleStats.all}),b.previousModule=this.module,b.moduleStats={all:0,bad:0},g("moduleStart",y,{name:this.module})):b.autorun&&g("moduleStart",y,{name:this.module}),b.current=this,this.testEnvironment=d({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),g("testStart",y,{name:this.testName,module:this.module}),y.current_testEnvironment=this.testEnvironment,b.pollution||l(),b.notrycatch)return this.testEnvironment.setup.call(this.testEnvironment),void 0;try{this.testEnvironment.setup.call(this.testEnvironment)}catch(e){y.pushFailure("Setup failed on "+this.testName+": "+e.message,i(e,1))}},run:function(){b.current=this;var e=h("qunit-testresult");if(e&&(e.innerHTML="Running: <br/>"+this.name),this.async&&y.stop(),b.notrycatch)return this.callback.call(this.testEnvironment,y.assert),void 0;try{this.callback.call(this.testEnvironment,y.assert)}catch(t){y.pushFailure("Died on test #"+(this.assertions.length+1)+" "+this.stack+": "+t.message,i(t,0)),l(),b.blocking&&y.start()}},teardown:function(){if(b.current=this,b.notrycatch)return this.testEnvironment.teardown.call(this.testEnvironment),void 0;try{this.testEnvironment.teardown.call(this.testEnvironment)}catch(e){y.pushFailure("Teardown failed on "+this.testName+": "+e.message,i(e,1))}c()},finish:function(){b.current=this,b.requireExpects&&null==this.expected?y.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!=this.expected&&this.expected!=this.assertions.length?y.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!=this.expected||this.assertions.length||y.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack);var t,n,r,i,o,a,s=this,u=0,l=0,c=h("qunit-tests");if(b.stats.all+=this.assertions.length,b.moduleStats.all+=this.assertions.length,c){for(a=document.createElement("ol"),i=0;i<this.assertions.length;i++)t=this.assertions[i],o=document.createElement("li"),o.className=t.result?"pass":"fail",o.innerHTML=t.message||(t.result?"okay":"failed"),a.appendChild(o),t.result?u++:(l++,b.stats.bad++,b.moduleStats.bad++);y.config.reorder&&E.sessionStorage&&(l?sessionStorage.setItem("qunit-test-"+this.module+"-"+this.testName,l):sessionStorage.removeItem("qunit-test-"+this.module+"-"+this.testName)),0===l&&(a.style.display="none"),r=document.createElement("strong"),r.innerHTML=this.name+" <b class='counts'>(<b class='failed'>"+l+"</b>, <b class='passed'>"+u+"</b>, "+this.assertions.length+")</b>",p(r,"click",function(){var e=r.nextSibling.nextSibling,t=e.style.display;e.style.display="none"===t?"block":"none"}),p(r,"dblclick",function(t){var n=t&&t.target?t.target:e.event.srcElement;("span"==n.nodeName.toLowerCase()||"b"==n.nodeName.toLowerCase())&&(n=n.parentNode),e.location&&"strong"===n.nodeName.toLowerCase()&&(e.location=y.url({testNumber:s.testNumber}))}),o=h(this.id),o.className=l?"fail":"pass",o.removeChild(o.firstChild),n=o.firstChild,o.appendChild(r),o.appendChild(n),o.appendChild(a)}else for(i=0;i<this.assertions.length;i++)this.assertions[i].result||(l++,b.stats.bad++,b.moduleStats.bad++);g("testDone",y,{name:this.testName,module:this.module,failed:l,passed:this.assertions.length-l,total:this.assertions.length}),y.reset(),b.current=void 0},queue:function(){function e(){s(function(){n.setup()}),s(function(){n.run()}),s(function(){n.teardown()}),s(function(){n.finish()})}var t,n=this;s(function(){n.init()}),t=y.config.reorder&&E.sessionStorage&&+sessionStorage.getItem("qunit-test-"+this.module+"-"+this.testName),t?e():s(e,!0)}},y={module:function(e,t){b.currentModule=e,b.currentModuleTestEnvironment=t,b.modules[e]=!0},asyncTest:function(e,t,n){2===arguments.length&&(n=t,t=null),y.test(e,t,n,!0)},test:function(e,n,i,s){var u,l="<span class='test-name'>"+a(e)+"</span>";2===arguments.length&&(i=n,n=null),b.currentModule&&(l="<span class='module-name'>"+b.currentModule+"</span>: "+l),u=new t({name:l,testName:e,expected:n,async:s,callback:i,module:b.currentModule,moduleTestEnvironment:b.currentModuleTestEnvironment,stack:o(2)}),r(u)&&u.queue()},expect:function(e){return 1!==arguments.length?b.current.expected:(b.current.expected=e,void 0)},start:function(t){b.semaphore-=t||1,b.semaphore>0||(b.semaphore<0&&(b.semaphore=0),E.setTimeout?e.setTimeout(function(){b.semaphore>0||(b.timeout&&clearTimeout(b.timeout),b.blocking=!1,u(!0))},13):(b.blocking=!1,u(!0)))},stop:function(t){b.semaphore+=t||1,b.blocking=!0,b.testTimeout&&E.setTimeout&&(clearTimeout(b.timeout),b.timeout=e.setTimeout(function(){y.ok(!1,"Test timed out"),b.semaphore=1,y.start()},b.testTimeout))}},y.assert={ok:function(e,t){if(!b.current)throw new Error("ok() assertion outside test context, was "+o(2));e=!!e;var n,r={module:b.current.module,name:b.current.testName,result:e,message:t};t=a(t||(e?"okay":"failed")),t="<span class='test-message'>"+t+"</span>",e||(n=o(2),n&&(r.source=n,t+="<table><tr class='test-source'><th>Source: </th><td><pre>"+a(n)+"</pre></td></tr></table>")),g("log",y,r),b.current.assertions.push({result:e,message:t})},equal:function(e,t,n){y.push(t==e,e,t,n)},notEqual:function(e,t,n){y.push(t!=e,e,t,n)},deepEqual:function(e,t,n){y.push(y.equiv(e,t),e,t,n)},notDeepEqual:function(e,t,n){y.push(!y.equiv(e,t),e,t,n)},strictEqual:function(e,t,n){y.push(t===e,e,t,n)},notStrictEqual:function(e,t,n){y.push(t!==e,e,t,n)},"throws":function(e,t,n){var r,i=!1;"string"==typeof t&&(n=t,t=null),b.current.ignoreGlobalErrors=!0;try{e.call(b.current.testEnvironment)}catch(o){r=o}b.current.ignoreGlobalErrors=!1,r?(t?"regexp"===y.objectType(t)?i=t.test(r):r instanceof t?i=!0:t.call({},r)===!0&&(i=!0):i=!0,y.push(i,r,null,n)):y.pushFailure(n,null,"No exception was thrown.")}},d(y,y.assert),y.raises=y.assert.throws,y.equals=function(){y.push(!1,!1,!1,"QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead")},y.same=function(){y.push(!1,!1,!1,"QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead")},function(){function e(){}e.prototype=y,y=new e,y.constructor=e}(),b={queue:[],blocking:!0,hidepassed:!1,reorder:!0,altertitle:!0,requireExpects:!1,urlConfig:[{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}],modules:{},begin:[],done:[],log:[],testStart:[],testDone:[],moduleStart:[],moduleDone:[]},function(){var t,n,r=e.location||{search:"",protocol:"file:"},i=r.search.slice(1).split("&"),o=i.length,a={};if(i[0])for(t=0;o>t;t++)n=i[t].split("="),n[0]=decodeURIComponent(n[0]),n[1]=n[1]?decodeURIComponent(n[1]):!0,a[n[0]]=n[1];y.urlParams=a,b.filter=a.filter,b.module=a.module,b.testNumber=parseInt(a.testNumber,10)||null,y.isLocal="file:"===r.protocol}(),"undefined"==typeof exports&&(d(e,y),e.QUnit=y),d(y,{config:b,init:function(){d(b,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+new T,updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:0});var e,t,n,r=h("qunit");r&&(r.innerHTML="<h1 id='qunit-header'>"+a(document.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar'></div><h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),e=h("qunit-tests"),t=h("qunit-banner"),n=h("qunit-testresult"),e&&(e.innerHTML=""),t&&(t.className=""),n&&n.parentNode.removeChild(n),e&&(n=document.createElement("p"),n.id="qunit-testresult",n.className="result",e.parentNode.insertBefore(n,e),n.innerHTML="Running...<br/>&nbsp;")},reset:function(){var e=h("qunit-fixture");e&&(e.innerHTML=b.fixture)},triggerEvent:function(e,t,n){document.createEvent?(n=document.createEvent("MouseEvents"),n.initMouseEvent(t,!0,!0,e.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(n)):e.fireEvent&&e.fireEvent("on"+t)},is:function(e,t){return y.objectType(t)==e},objectType:function(e){if("undefined"==typeof e)return"undefined";if(null===e)return"null";var t=q.call(e).match(/^\[object\s(.*)\]$/)[1]||"";switch(t){case"Number":return isNaN(e)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return t.toLowerCase()}return"object"==typeof e?"object":void 0},push:function(e,t,n,r){if(!b.current)throw new Error("assertion outside test context, was "+o());var i,s,u={module:b.current.module,name:b.current.testName,result:e,message:r,actual:t,expected:n};r=a(r)||(e?"okay":"failed"),r="<span class='test-message'>"+r+"</span>",i=r,e||(n=a(y.jsDump.parse(n)),t=a(y.jsDump.parse(t)),i+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+n+"</pre></td></tr>",t!=n&&(i+="<tr class='test-actual'><th>Result: </th><td><pre>"+t+"</pre></td></tr>",i+="<tr class='test-diff'><th>Diff: </th><td><pre>"+y.diff(n,t)+"</pre></td></tr>"),s=o(),s&&(u.source=s,i+="<tr class='test-source'><th>Source: </th><td><pre>"+a(s)+"</pre></td></tr>"),i+="</table>"),g("log",y,u),b.current.assertions.push({result:!!e,message:i})},pushFailure:function(e,t,n){if(!b.current)throw new Error("pushFailure() assertion outside test context, was "+o(2));var r,i={module:b.current.module,name:b.current.testName,result:!1,message:e};e=a(e)||"error",e="<span class='test-message'>"+e+"</span>",r=e,r+="<table>",n&&(r+="<tr class='test-actual'><th>Result: </th><td><pre>"+a(n)+"</pre></td></tr>"),t&&(i.source=t,r+="<tr class='test-source'><th>Source: </th><td><pre>"+a(t)+"</pre></td></tr>"),r+="</table>",g("log",y,i),b.current.assertions.push({result:!1,message:r})},url:function(t){t=d(d({},y.urlParams),t);var n,r="?";for(n in t)_.call(t,n)&&(r+=encodeURIComponent(n)+"="+encodeURIComponent(t[n])+"&");return e.location.pathname+r.slice(0,-1)},extend:d,id:h,addEvent:p}),d(y.constructor.prototype,{begin:m("begin"),done:m("done"),log:m("log"),testStart:m("testStart"),testDone:m("testDone"),moduleStart:m("moduleStart"),moduleDone:m("moduleDone")}),("undefined"==typeof document||"complete"===document.readyState)&&(b.autorun=!0),y.load=function(){g("begin",y,{});var t,n,r,i,o,a,s,u,l,c,f,m,v=0,x="",w="",k=d({},b);for(y.init(),d(b,k),b.blocking=!1,o=b.urlConfig.length,r=0;o>r;r++)c=b.urlConfig[r],"string"==typeof c&&(c={id:c,label:c,tooltip:"[no tooltip available]"}),b[c.id]=y.urlParams[c.id],w+="<input id='qunit-urlconfig-"+c.id+"' name='"+c.id+"' type='checkbox'"+(b[c.id]?" checked='checked'":"")+" title='"+c.tooltip+"'><label for='qunit-urlconfig-"+c.id+"' title='"+c.tooltip+"'>"+c.label+"</label>";x+="<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' "+(void 0===b.module?"selected":"")+">< All Modules ></option>";for(r in b.modules)b.modules.hasOwnProperty(r)&&(v+=1,x+="<option value='"+encodeURIComponent(r)+"' "+(b.module===r?"selected":"")+">"+r+"</option>");x+="</select>",l=h("qunit-userAgent"),l&&(l.innerHTML=navigator.userAgent),t=h("qunit-header"),t&&(t.innerHTML="<a href='"+y.url({filter:void 0,module:void 0,testNumber:void 0})+"'>"+t.innerHTML+"</a> "),u=h("qunit-testrunner-toolbar"),u&&(n=document.createElement("input"),n.type="checkbox",n.id="qunit-filter-pass",p(n,"click",function(){var e,t=document.getElementById("qunit-tests");n.checked?t.className=t.className+" hidepass":(e=" "+t.className.replace(/[\n\t\r]/g," ")+" ",t.className=e.replace(/ hidepass /," ")),E.sessionStorage&&(n.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))}),(b.hidepassed||E.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests"))&&(n.checked=!0,s=document.getElementById("qunit-tests"),s.className=s.className+" hidepass"),u.appendChild(n),i=document.createElement("label"),i.setAttribute("for","qunit-filter-pass"),i.setAttribute("title","Only show tests and assertons that fail. Stored in sessionStorage."),i.innerHTML="Hide passed tests",u.appendChild(i),f=document.createElement("span"),f.innerHTML=w,p(f,"change",function(t){var n={};n[t.target.name]=t.target.checked?!0:void 0,e.location=y.url(n)}),u.appendChild(f),v>1&&(m=document.createElement("span"),m.setAttribute("id","qunit-modulefilter-container"),m.innerHTML=x,p(m,"change",function(){var t=m.getElementsByTagName("select")[0],n=decodeURIComponent(t.options[t.selectedIndex].value);e.location=y.url({module:""===n?void 0:n})}),u.appendChild(m))),a=h("qunit-fixture"),a&&(b.fixture=a.innerHTML),b.autostart&&y.start()},p(e,"load",y.load),x=e.onerror,e.onerror=function(e,t,n){var i=!1;if(x&&(i=x(e,t,n)),i!==!0){if(y.config.current){if(y.config.current.ignoreGlobalErrors)return!0;y.pushFailure(e,t+":"+n)}else y.test("global failure",d(function(){y.pushFailure(e,t+":"+n)},{validTest:r}));return!1}return i},y.equiv=function(){function e(e,t,n){var r=y.objectType(e);return r?"function"===y.objectType(t[r])?t[r].apply(t,n):t[r]:void 0}var t,n=[],r=[],i=Object.getPrototypeOf||function(e){return e.__proto__},o=function(){function e(e,t){return e instanceof t.constructor||t instanceof e.constructor?t==e:t===e}return{string:e,"boolean":e,number:e,"null":e,undefined:e,nan:function(e){return isNaN(e)},date:function(e,t){return"date"===y.objectType(e)&&t.valueOf()===e.valueOf()},regexp:function(e,t){return"regexp"===y.objectType(e)&&t.source===e.source&&t.global===e.global&&t.ignoreCase===e.ignoreCase&&t.multiline===e.multiline&&t.sticky===e.sticky},"function":function(){var e=n[n.length-1];return e!==Object&&"undefined"!=typeof e},array:function(e,n){var i,o,a,s;if("array"!==y.objectType(e))return!1;if(a=n.length,a!==e.length)return!1;for(r.push(n),i=0;a>i;i++){for(s=!1,o=0;o<r.length;o++)r[o]===n[i]&&(s=!0);if(!s&&!t(n[i],e[i]))return r.pop(),!1}return r.pop(),!0},object:function(e,o){var a,s,u,l=!0,c=[],f=[];if(o.constructor!==e.constructor&&!(null===i(o)&&i(e)===Object.prototype||null===i(e)&&i(o)===Object.prototype))return!1;n.push(o.constructor),r.push(o);for(a in o){for(u=!1,s=0;s<r.length;s++)r[s]===o[a]&&(u=!0);if(c.push(a),!u&&!t(o[a],e[a])){l=!1;break}}n.pop(),r.pop();for(a in e)f.push(a);return l&&t(c.sort(),f.sort())}}}();return t=function(){var t=[].slice.apply(arguments);return t.length<2?!0:function(t,n){return t===n?!0:null===t||null===n||"undefined"==typeof t||"undefined"==typeof n||y.objectType(t)!==y.objectType(n)?!1:e(t,o,[n,t])}(t[0],t[1])&&arguments.callee.apply(this,t.splice(1,t.length-1))}}(),y.jsDump=function(){function e(e){return'"'+e.toString().replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),i=o.indent(),a=o.indent(1);return t.join&&(t=t.join(","+r+a)),t?[e,a+t,i+n].join(r):e+n}function r(e,t){var r=e.length,i=new Array(r);for(this.up();r--;)i[r]=this.parse(e[r],void 0,t);return this.down(),n("[",i,"]")}var i=/^function (\w+)/,o={parse:function(e,t,n){n=n||[];var r,i,o=this.parsers[t||this.typeOf(e)];return t=typeof o,r=v(e,n),-1!=r?"recursion("+(r-n.length)+")":"function"==t?(n.push(e),i=o.call(this,e,n),n.pop(),i):"string"==t?o:this.parsers.error},typeOf:function(e){var t;return t=null===e?"null":"undefined"==typeof e?"undefined":y.is("regexp",e)?"regexp":y.is("date",e)?"date":y.is("function",e)?"function":void 0!==typeof e.setInterval&&"undefined"!=typeof e.document&&"undefined"==typeof e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":"[object Array]"===q.call(e)||"number"==typeof e.length&&"undefined"!=typeof e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&"undefined"==typeof e[0])?"array":typeof e},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(e){if(!this.multiline)return"";var t=this.indentChar;return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),new Array(this._depth_+(e||0)).join(t)},up:function(e){this._depth_+=e||1},down:function(e){this._depth_-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null",undefined:"undefined","function":function(e){var t="function",r="name"in e?e.name:(i.exec(e)||[])[1];return r&&(t+=" "+r),t+="( ",t=[t,y.jsDump.parse(e,"functionArgs"),"){"].join(""),n(t,y.jsDump.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r,i,o,a,s=[];if(y.jsDump.up(),Object.keys)r=Object.keys(e);else{r=[];for(i in e)r.push(i)}for(r.sort(),a=0;a<r.length;a++)i=r[a],o=e[i],s.push(y.jsDump.parse(i,"key")+": "+y.jsDump.parse(o,void 0,t));return y.jsDump.down(),n("{",s,"}")},node:function(e){var t,n,r=y.jsDump.HTML?"&lt;":"<",i=y.jsDump.HTML?"&gt;":">",o=e.nodeName.toLowerCase(),a=r+o;for(t in y.jsDump.DOMAttrs)n=e[y.jsDump.DOMAttrs[t]],n&&(a+=" "+t+"="+y.jsDump.parse(n,"attribute"));return a+i+r+"/"+o+i},functionArgs:function(e){var t,n=e.length;if(!n)return"";for(t=new Array(n);n--;)t[n]=String.fromCharCode(97+n);return" "+t.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,"boolean":t},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"  ",multiline:!0};return o}(),y.diff=function(){function e(e,t){var n,r={},i={};for(n=0;n<t.length;n++)null==r[t[n]]&&(r[t[n]]={rows:[],o:null}),r[t[n]].rows.push(n);for(n=0;n<e.length;n++)null==i[e[n]]&&(i[e[n]]={rows:[],n:null}),i[e[n]].rows.push(n);for(n in r)_.call(r,n)&&1==r[n].rows.length&&"undefined"!=typeof i[n]&&1==i[n].rows.length&&(t[r[n].rows[0]]={text:t[r[n].rows[0]],row:i[n].rows[0]},e[i[n].rows[0]]={text:e[i[n].rows[0]],row:r[n].rows[0]});for(n=0;n<t.length-1;n++)null!=t[n].text&&null==t[n+1].text&&t[n].row+1<e.length&&null==e[t[n].row+1].text&&t[n+1]==e[t[n].row+1]&&(t[n+1]={text:t[n+1],row:t[n].row+1},e[t[n].row+1]={text:e[t[n].row+1],row:n+1});for(n=t.length-1;n>0;n--)null!=t[n].text&&null==t[n-1].text&&t[n].row>0&&null==e[t[n].row-1].text&&t[n-1]==e[t[n].row-1]&&(t[n-1]={text:t[n-1],row:t[n].row-1},e[t[n].row-1]={text:e[t[n].row-1],row:n-1});return{o:e,n:t}}return function(t,n){t=t.replace(/\s+$/,""),n=n.replace(/\s+$/,"");var r,i,o="",a=e(""===t?[]:t.split(/\s+/),""===n?[]:n.split(/\s+/)),s=t.match(/\s+/g),u=n.match(/\s+/g);if(null==s?s=[" "]:s.push(" "),null==u?u=[" "]:u.push(" "),0===a.n.length)for(r=0;r<a.o.length;r++)o+="<del>"+a.o[r]+s[r]+"</del>";else{if(null==a.n[0].text)for(n=0;n<a.o.length&&null==a.o[n].text;n++)o+="<del>"+a.o[n]+s[n]+"</del>";for(r=0;r<a.n.length;r++)if(null==a.n[r].text)o+="<ins>"+a.n[r]+u[r]+"</ins>";else{for(i="",n=a.n[r].row+1;n<a.o.length&&null==a.o[n].text;n++)i+="<del>"+a.o[n]+s[n]+"</del>";o+=" "+a.n[r].text+u[r]+i}}return o}}(),"undefined"!=typeof exports&&d(exports,y)}(function(){return this}.call());