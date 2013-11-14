(function(){var t,e=this,i=e.Backbone,n=[],r=n.push,s=n.slice,a=n.splice;t="undefined"!=typeof exports?exports:e.Backbone={},t.VERSION="1.0.0";var o=e._;o||"undefined"==typeof require||(o=require("underscore")),t.$=e.jQuery||e.Zepto||e.ender||e.$,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var u=t.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var n=this._events[t]||(this._events[t]=[]);return n.push({callback:e,context:i,ctx:i||this}),this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var n=this,r=o.once(function(){n.off(t,r),e.apply(this,arguments)});return r._callback=e,this.on(t,r,i)},off:function(t,e,i){var n,r,s,a,u,c,h,d;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i)return this._events={},this;for(a=t?[t]:o.keys(this._events),u=0,c=a.length;c>u;u++)if(t=a[u],s=this._events[t]){if(this._events[t]=n=[],e||i)for(h=0,d=s.length;d>h;h++)r=s[h],(e&&e!==r.callback&&e!==r.callback._callback||i&&i!==r.context)&&n.push(r);n.length||delete this._events[t]}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t],n=this._events.all;return i&&h(i,e),n&&h(n,arguments),this},stopListening:function(t,e,i){var n=this._listeners;if(!n)return this;var r=!e&&!i;"object"==typeof e&&(i=this),t&&((n={})[t._listenerId]=t);for(var s in n)n[s].off(e,i,this),r&&delete this._listeners[s];return this}},c=/\s+/,l=function(t,e,i,n){if(!i)return!0;if("object"==typeof i){for(var r in i)t[e].apply(t,[r,i[r]].concat(n));return!1}if(c.test(i)){for(var s=i.split(c),a=0,o=s.length;o>a;a++)t[e].apply(t,[s[a]].concat(n));return!1}return!0},h=function(t,e){var i,n=-1,r=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<r;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<r;)(i=t[n]).callback.call(i.ctx,s);return;case 2:for(;++n<r;)(i=t[n]).callback.call(i.ctx,s,a);return;case 3:for(;++n<r;)(i=t[n]).callback.call(i.ctx,s,a,o);return;default:for(;++n<r;)(i=t[n]).callback.apply(i.ctx,e)}},d={listenTo:"on",listenToOnce:"once"};o.each(d,function(t,e){u[e]=function(e,i,n){var r=this._listeners||(this._listeners={}),s=e._listenerId||(e._listenerId=o.uniqueId("l"));return r[s]=e,"object"==typeof i&&(n=this),e[t](i,n,this),this}}),u.bind=u.on,u.unbind=u.off,o.extend(t,u);var f=t.Model=function(t,e){var i,n=t||{};e||(e={}),this.cid=o.uniqueId("c"),this.attributes={},o.extend(this,o.pick(e,p)),e.parse&&(n=this.parse(n,e)||{}),(i=o.result(this,"defaults"))&&(n=o.defaults({},n,i)),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)},p=["url","urlRoot","collection"];o.extend(f.prototype,u,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return o.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return o.escape(this.get(t))},has:function(t){return null!=this.get(t)},set:function(t,e,i){var n,r,s,a,u,c,l,h;if(null==t)return this;if("object"==typeof t?(r=t,i=e):(r={})[t]=e,i||(i={}),!this._validate(r,i))return!1;s=i.unset,u=i.silent,a=[],c=this._changing,this._changing=!0,c||(this._previousAttributes=o.clone(this.attributes),this.changed={}),h=this.attributes,l=this._previousAttributes,this.idAttribute in r&&(this.id=r[this.idAttribute]);for(n in r)e=r[n],o.isEqual(h[n],e)||a.push(n),o.isEqual(l[n],e)?delete this.changed[n]:this.changed[n]=e,s?delete h[n]:h[n]=e;if(!u){a.length&&(this._pending=!0);for(var d=0,f=a.length;f>d;d++)this.trigger("change:"+a[d],this,h[a[d]],i)}if(c)return this;if(!u)for(;this._pending;)this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,o.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,o.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!o.isEmpty(this.changed):o.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?o.clone(this.changed):!1;var e,i=!1,n=this._changing?this._previousAttributes:this.attributes;for(var r in t)o.isEqual(n[r],e=t[r])||((i||(i={}))[r]=e);return i},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return o.clone(this._previousAttributes)},fetch:function(t){t=t?o.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=this,i=t.success;return t.success=function(n){return e.set(e.parse(n,t),t)?(i&&i(e,n,t),e.trigger("sync",e,n,t),void 0):!1},R(this,t),this.sync("read",this,t)},save:function(t,e,i){var n,r,s,a=this.attributes;if(null==t||"object"==typeof t?(n=t,i=e):(n={})[t]=e,!(!n||i&&i.wait||this.set(n,i)))return!1;if(i=o.extend({validate:!0},i),!this._validate(n,i))return!1;n&&i.wait&&(this.attributes=o.extend({},a,n)),void 0===i.parse&&(i.parse=!0);var u=this,c=i.success;return i.success=function(t){u.attributes=a;var e=u.parse(t,i);return i.wait&&(e=o.extend(n||{},e)),o.isObject(e)&&!u.set(e,i)?!1:(c&&c(u,t,i),u.trigger("sync",u,t,i),void 0)},R(this,i),r=this.isNew()?"create":i.patch?"patch":"update","patch"===r&&(i.attrs=n),s=this.sync(r,this,i),n&&i.wait&&(this.attributes=a),s},destroy:function(t){t=t?o.clone(t):{};var e=this,i=t.success,n=function(){e.trigger("destroy",e,e.collection,t)};if(t.success=function(r){(t.wait||e.isNew())&&n(),i&&i(e,r,t),e.isNew()||e.trigger("sync",e,r,t)},this.isNew())return t.success(),!1;R(this,t);var r=this.sync("delete",this,t);return t.wait||n(),r},url:function(){var t=o.result(this,"urlRoot")||o.result(this.collection,"url")||H();return this.isNew()?t:t+("/"===t.charAt(t.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(t){return this._validate({},o.extend(t||{},{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=o.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;return i?(this.trigger("invalid",this,i,o.extend(e||{},{validationError:i})),!1):!0}});var m=["keys","values","pairs","invert","pick","omit"];o.each(m,function(t){f.prototype[t]=function(){var e=s.call(arguments);return e.unshift(this.attributes),o[t].apply(o,e)}});var g=t.Collection=function(t,e){e||(e={}),e.url&&(this.url=e.url),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,o.extend({silent:!0},e))},v={add:!0,remove:!0,merge:!0},y={add:!0,merge:!1,remove:!1};o.extend(g.prototype,u,{model:f,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return t.sync.apply(this,arguments)},add:function(t,e){return this.set(t,o.defaults(e||{},y))},remove:function(t,e){t=o.isArray(t)?t.slice():[t],e||(e={});var i,n,r,s;for(i=0,n=t.length;n>i;i++)s=this.get(t[i]),s&&(delete this._byId[s.id],delete this._byId[s.cid],r=this.indexOf(s),this.models.splice(r,1),this.length--,e.silent||(e.index=r,s.trigger("remove",s,this,e)),this._removeReference(s));return this},set:function(t,e){e=o.defaults(e||{},v),e.parse&&(t=this.parse(t,e)),o.isArray(t)||(t=t?[t]:[]);var i,n,s,u,c,l=e.at,h=this.comparator&&null==l&&e.sort!==!1,d=o.isString(this.comparator)?this.comparator:null,f=[],p=[],m={};for(i=0,n=t.length;n>i;i++)(s=this._prepareModel(t[i],e))&&((u=this.get(s))?(e.remove&&(m[u.cid]=!0),e.merge&&(u.set(s.attributes,e),h&&!c&&u.hasChanged(d)&&(c=!0))):e.add&&(f.push(s),s.on("all",this._onModelEvent,this),this._byId[s.cid]=s,null!=s.id&&(this._byId[s.id]=s)));if(e.remove){for(i=0,n=this.length;n>i;++i)m[(s=this.models[i]).cid]||p.push(s);p.length&&this.remove(p,e)}if(f.length&&(h&&(c=!0),this.length+=f.length,null!=l?a.apply(this.models,[l,0].concat(f)):r.apply(this.models,f)),c&&this.sort({silent:!0}),e.silent)return this;for(i=0,n=f.length;n>i;i++)(s=f[i]).trigger("add",s,this,e);return c&&this.trigger("sort",this,e),this},reset:function(t,e){e||(e={});for(var i=0,n=this.models.length;n>i;i++)this._removeReference(this.models[i]);return e.previousModels=this.models,this._reset(),this.add(t,o.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),this},push:function(t,e){return t=this._prepareModel(t,e),this.add(t,o.extend({at:this.length},e)),t},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t),e},unshift:function(t,e){return t=this._prepareModel(t,e),this.add(t,o.extend({at:0},e)),t},shift:function(t){var e=this.at(0);return this.remove(e,t),e},slice:function(t,e){return this.models.slice(t,e)},get:function(t){return null==t?void 0:this._byId[null!=t.id?t.id:t.cid||t]},at:function(t){return this.models[t]},where:function(t,e){return o.isEmpty(t)?e?void 0:[]:this[e?"find":"filter"](function(e){for(var i in t)if(t[i]!==e.get(i))return!1;return!0})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),o.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(o.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},sortedIndex:function(t,e,i){e||(e=this.comparator);var n=o.isFunction(e)?e:function(t){return t.get(e)};return o.sortedIndex(this.models,t,n,i)},pluck:function(t){return o.invoke(this.models,"get",t)},fetch:function(t){t=t?o.clone(t):{},void 0===t.parse&&(t.parse=!0);var e=t.success,i=this;return t.success=function(n){var r=t.reset?"reset":"set";i[r](n,t),e&&e(i,n,t),i.trigger("sync",i,n,t)},R(this,t),this.sync("read",this,t)},create:function(t,e){if(e=e?o.clone(e):{},!(t=this._prepareModel(t,e)))return!1;e.wait||this.add(t,e);var i=this,n=e.success;return e.success=function(r){e.wait&&i.add(t,e),n&&n(t,r,e)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(t instanceof f)return t.collection||(t.collection=this),t;e||(e={}),e.collection=this;var i=new this.model(t,e);return i._validate(t,e)?i:(this.trigger("invalid",this,t,e),!1)},_removeReference:function(t){this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){("add"!==t&&"remove"!==t||i===this)&&("destroy"===t&&this.remove(e,n),e&&t==="change:"+e.idAttribute&&(delete this._byId[e.previous(e.idAttribute)],null!=e.id&&(this._byId[e.id]=e)),this.trigger.apply(this,arguments))}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];o.each(b,function(t){g.prototype[t]=function(){var e=s.call(arguments);return e.unshift(this.models),o[t].apply(o,e)}});var x=["groupBy","countBy","sortBy"];o.each(x,function(t){g.prototype[t]=function(e,i){var n=o.isFunction(e)?e:function(t){return t.get(e)};return o[t](this.models,n,i)}});var w=t.View=function(t){this.cid=o.uniqueId("view"),this._configure(t||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},_=/^(\S+)\s*(.*)$/,k=["model","collection","el","id","attributes","className","tagName","events"];o.extend(w.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,i){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],i!==!1&&this.delegateEvents(),this},delegateEvents:function(t){if(!t&&!(t=o.result(this,"events")))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(o.isFunction(i)||(i=this[t[e]]),i){var n=e.match(_),r=n[1],s=n[2];i=o.bind(i,this),r+=".delegateEvents"+this.cid,""===s?this.$el.on(r,i):this.$el.on(r,s,i)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(t){this.options&&(t=o.extend({},o.result(this,"options"),t)),o.extend(this,o.pick(t,k)),this.options=t},_ensureElement:function(){if(this.el)this.setElement(o.result(this,"el"),!1);else{var e=o.extend({},o.result(this,"attributes"));this.id&&(e.id=o.result(this,"id")),this.className&&(e["class"]=o.result(this,"className"));var i=t.$("<"+o.result(this,"tagName")+">").attr(e);this.setElement(i,!1)}}}),t.sync=function(e,i,n){var r=E[e];o.defaults(n||(n={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var s={type:r,dataType:"json"};if(n.url||(s.url=o.result(i,"url")||H()),null!=n.data||!i||"create"!==e&&"update"!==e&&"patch"!==e||(s.contentType="application/json",s.data=JSON.stringify(n.attrs||i.toJSON(n))),n.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),n.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){s.type="POST",n.emulateJSON&&(s.data._method=r);var a=n.beforeSend;n.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",r),a?a.apply(this,arguments):void 0}}"GET"===s.type||n.emulateJSON||(s.processData=!1),"PATCH"!==s.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var u=n.xhr=t.ajax(o.extend(s,n));return i.trigger("request",i,u,n),u};var E={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var $=t.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},S=/\((.*?)\)/g,T=/(\(\?)?:\w+/g,j=/\*\w+/g,q=/[\-{}\[\]+?.,\\\^$|#\s]/g;o.extend($.prototype,u,{initialize:function(){},route:function(e,i,n){o.isRegExp(e)||(e=this._routeToRegExp(e)),o.isFunction(i)&&(n=i,i=""),n||(n=this[i]);var r=this;return t.history.route(e,function(s){var a=r._extractParameters(e,s);n&&n.apply(r,a),r.trigger.apply(r,["route:"+i].concat(a)),r.trigger("route",i,a),t.history.trigger("route",r,i,a)}),this},navigate:function(e,i){return t.history.navigate(e,i),this},_bindRoutes:function(){if(this.routes){this.routes=o.result(this,"routes");for(var t,e=o.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(q,"\\$&").replace(S,"(?:$1)?").replace(T,function(t,e){return e?t:"([^/]+)"}).replace(j,"(.*?)"),new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return o.map(i,function(t){return t?decodeURIComponent(t):null})}});var A=t.History=function(){this.handlers=[],o.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},C=/^[#\/]|\s+$/g,O=/^\/+|\/+$/g,M=/msie [\w.]+/,N=/\/$/;A.started=!1,o.extend(A.prototype,u,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(N,"");t.indexOf(i)||(t=t.substr(i.length))}else t=this.getHash();return t.replace(C,"")},start:function(e){if(A.started)throw new Error("Backbone.history has already been started");A.started=!0,this.options=o.extend({},{root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var i=this.getFragment(),n=document.documentMode,r=M.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);this.root=("/"+this.root+"/").replace(O,"/"),r&&this._wantsHashChange&&(this.iframe=t.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(i)),this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=i;var s=this.location,a=s.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!a?(this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&a&&s.hash&&(this.fragment=this.getHash().replace(C,""),this.history.replaceState({},document.title,this.root+this.fragment+s.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),A.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe))),t===this.fragment?!1:(this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash()),void 0)},loadUrl:function(t){var e=this.fragment=this.getFragment(t),i=o.any(this.handlers,function(t){return t.route.test(e)?(t.callback(e),!0):void 0});return i},navigate:function(t,e){if(!A.started)return!1;if(e&&e!==!0||(e={trigger:e}),t=this.getFragment(t||""),this.fragment!==t){this.fragment=t;var i=this.root+t;if(this._hasPushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}e.trigger&&this.loadUrl(t)}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),t.history=new A;var P=function(t,e){var i,n=this;i=t&&o.has(t,"constructor")?t.constructor:function(){return n.apply(this,arguments)},o.extend(i,n,e);var r=function(){this.constructor=i};return r.prototype=n.prototype,i.prototype=new r,t&&o.extend(i.prototype,t),i.__super__=n.prototype,i};f.extend=g.extend=$.extend=w.extend=A.extend=P;var H=function(){throw new Error('A "url" property or function must be specified')},R=function(t,e){var i=e.error;e.error=function(n){i&&i(t,n,e),t.trigger("error",t,n,e)}}}).call(this);