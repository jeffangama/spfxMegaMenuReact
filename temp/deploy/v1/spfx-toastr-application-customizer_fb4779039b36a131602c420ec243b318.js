define("a861c815-e425-416d-9520-04bcdf557e27_0.0.1",["@microsoft/decorators","@microsoft/sp-application-base","@microsoft/sp-loader","jquery"],function(e,t,o,r){return function(e){function t(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,r){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,o){"use strict";var r=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])};return function(t,o){function r(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(r.prototype=o.prototype,new r)}}(),n=this&&this.__decorate||function(e,t,o,r){var n,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(s=(i<3?n(s):i>3?n(t,o,s):n(t,o))||s);return i>3&&s&&Object.defineProperty(t,o,s),s};Object.defineProperty(t,"__esModule",{value:!0});var i=o(1),s=o(2),a=o(3),l=o(4),u=o(6),c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.onInit=function(){return a.SPComponentLoader.loadCss(this.getSiteCollectionUrl()+"/Style%20Library/MIS.GlobalNavigation.Modern/css/MIS.GlobalNavigationModern.css"),this.context.placeholderProvider.changedEvent.add(this,this._renderPlaceHolders),Promise.resolve()},t.prototype.buildMegaMenu=function(){u(document).ready(function(){});new l.MISMain(this.context)},t.prototype._renderPlaceHolders=function(){var e=this;if(!this._topPlaceholder){if(this._topPlaceholder=this.context.placeholderProvider.tryCreateContent(s.PlaceholderName.Top,{onDispose:this._onDispose}),!this._topPlaceholder)return void console.error("The expected placeholder (Top) was not found.");if(this.properties){var t=this.properties.Top;t||(t="(Top property was not defined.)"),this._topPlaceholder.domElement&&(this._topPlaceholder.domElement.innerHTML='<div id="MEGAMENU" class="MEGAMENU"></div>')}}this._loadSPJSOMScripts().then(function(){e.buildMegaMenu()})},t.prototype._onDispose=function(){},t.prototype.getSiteCollectionUrl=function(){var e=window.location.protocol+"//"+window.location.host,t=window.location.pathname;return t.indexOf("/sites/")>=0&&(e+=t.substring(0,t.indexOf("/","/sites/".length))),e},t.prototype._loadSPJSOMScripts=function(){var e=this;return new Promise(function(t,o){var r=e.getSiteCollectionUrl();try{a.SPComponentLoader.loadScript(r+"/_layouts/15/init.js",{globalExportsName:"$_global_init"}).then(function(){return a.SPComponentLoader.loadScript(r+"/_layouts/15/MicrosoftAjax.js",{globalExportsName:"Sys"})}).then(function(){return a.SPComponentLoader.loadScript(r+"/_layouts/15/SP.Runtime.js",{globalExportsName:"SP"})}).then(function(){return a.SPComponentLoader.loadScript(r+"/_layouts/15/SP.js",{globalExportsName:"SP"})}).then(function(){return a.SPComponentLoader.loadScript(r+"/_layouts/15/SP.taxonomy.js",{globalExportsName:"SP"})}).then(function(){t()}).catch(function(e){t()})}catch(e){}})},n([i.override],t.prototype,"onInit",null),t}(s.BaseApplicationCustomizer);t.default=c},function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t){e.exports=o},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(5),n=function(){function e(e){this.spcontext=e,this.listGUID=null,this.navigationType=null,this.termStoreGUID=null,this.termStoreName=null,this.homeBtnTitle=null,this.homeBtnUrl=null,this.isCentralResource=null;try{this.getMenuParameters()}catch(e){"object"==typeof console||alert("$(document).ready"+e)}}return e.prototype.getMenuParameters=function(){var e=this;try{if(this.loadSessionStorage,void 0==this.termStoreGUID&&void 0==this.termStoreName){var t="/"==this.spcontext.pageContext.web.absoluteUrl?"":this.spcontext.pageContext.web.absoluteUrl;this.getSettingsData(t).then(function(){e.insertMenu()})}}catch(e){}},e.prototype.getSettingsData=function(e){var t=this;return new Promise(function(o,r){try{var n=e+"/_api/web/lists/getByTitle('GlobalNavigation')/Items?$filter=isActif eq 1",i=t;$.ajax({url:n,type:"GET",headers:{ACCEPT:"application/json;odata=verbose"},success:function(e){if(!(e.d.results.length>0))throw new Error("Cant read settings from global navigation list");i.listGUID=e.d.results[0].ListGUID,i.navigationType=e.d.results[0].NavigationType,i.termStoreName=e.d.results[0].TermStoreName,null==i.termStoreName&&console.error("ERROR, the function getSettingsData did nto return the term store name from global nav list ! Did you deploy global nav list ?"),i.termStoreGUID=e.d.results[0].TermStoreGUID,i.homeBtnTitle=e.d.results[0].HomeBtnTitle,i.homeBtnUrl=e.d.results[0].HomeBtnUrl,i.isCentralResource=e.d.results[0].CentralResource,sessionStorage.setItem("listGUID",i.listGUID),sessionStorage.setItem("navigationType",i.navigationType),sessionStorage.setItem("termStoreName",i.termStoreName),sessionStorage.setItem("termStoreGUID",i.termStoreGUID),sessionStorage.setItem("homeBtnTitle",i.homeBtnTitle),sessionStorage.setItem("homeBtnUrl",i.homeBtnUrl),sessionStorage.setItem("isCentralResource",i.isCentralResource),o()},error:function(e){o()}})}catch(e){r()}})},e.prototype.loadSessionStorage=function(){"undefined"!=typeof Storage&&(sessionStorage.termStoreGUID&&(this.termStoreGUID=sessionStorage.getItem("termStoreGUID")),sessionStorage.termStoreName&&(this.termStoreName=sessionStorage.getItem("termStoreName")),sessionStorage.navigationType&&(this.navigationType=sessionStorage.getItem("navigationType")),sessionStorage.listGUID&&(this.listGUID=sessionStorage.getItem("listGUID")),sessionStorage.homeBtnTitle&&(this.homeBtnTitle=sessionStorage.getItem("homeBtnTitle")),sessionStorage.homeBtnUrl&&(this.homeBtnUrl=sessionStorage.getItem("homeBtnUrl")),sessionStorage.isCentralResource&&(this.isCentralResource=sessionStorage.getItem("isCentralResource")))},e.prototype.insertMenu=function(){var e="";switch(e="true"==this.isCentralResource?this.homeBtnUrl:"/"==this.spcontext.pageContext.web.absoluteUrl?"":this.spcontext.pageContext.web.absoluteUrl,this.navigationType){case"Menu":new r.MISGlobalNavigation(e).init(this.spcontext,this.termStoreName,this.termStoreGUID)}},e}();t.MISMain=n},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.createDelegate=function(e,t){return function(){return t.apply(e,arguments)}},e}();t.HelperCSOM=r;var n=function(){function e(e){this.viewModelObj=new s(e)}return e.prototype.printTree=function(e,t){var o=e.children.length;switch(t){case 0:this.viewModelObj.htmlStr+="<div class='separator-megamenu mis-hidden'></div>",this.viewModelObj.htmlStr+="<div class='container-megamenu'>",this.viewModelObj.htmlStr+="<p class='menu-level1'>"+e.name,this.viewModelObj.htmlStr+="<img class='icon-level1' align='right' src='"+this.viewModelObj.siteUrl+"/Style Library/MIS.GlobalNavigation/images/icon-"+e.name.replace(/[~#%&*:<>?\/\{|}.]/g,"-")+".png'></img>",this.viewModelObj.htmlStr+="</p>",this.viewModelObj.htmlStr+="<ul class='subs mis-hidden' style='list-style: none;'>";for(var r=0;r<o;r++)this.printTree(e.children[r],t+1);this.viewModelObj.htmlStr+="</ul>",this.viewModelObj.htmlStr+="</div>";break;case 1:void 0===e.url?this.viewModelObj.htmlStr+="<li><p class='menu-level2'>"+e.name+"</p>":this.viewModelObj.htmlStr+="<li><a href='"+e.url+"'>"+e.name+"<span></span></a>",this.viewModelObj.htmlStr+="<ul style='list-style: none;'>";for(var r=0;r<o;r++)this.printTree(e.children[r],t+1);this.viewModelObj.htmlStr+="</ul>",this.viewModelObj.htmlStr+="</li>";break;case 2:this.viewModelObj.htmlStr+="<li>",void 0===e.url?this.viewModelObj.htmlStr+=e.name:this.viewModelObj.htmlStr+="<a href='"+e.url+"'>"+e.name+"</a>",this.viewModelObj.htmlStr+="</li>";break;default:this.viewModelObj.htmlStr+="\x3c!--Level: "+t+" <a href='"+e.url+"'>"+e.name+"</a>--\x3e"}},e.prototype.buildTree=function(){this.treeFromArray2(this.viewModelObj.globalMenuItems);for(var e=0;e<this.viewModelObj.treeNav.length;e++)this.printTree(this.viewModelObj.treeNav[e],0);this.viewModelObj.htmlStr+="<div class='separator-megamenu mis-hidden'></div>";var t=JSON.stringify(this.viewModelObj);sessionStorage.setItem("viewMenuModel",t)},e.prototype.treeFromArray=function(e,t,o,r){t||(t="_id"),o||(o="sonOf"),r||(r="children");var n=[],i={};$.each(e,function(e,o){i[o[t]]=o,o[r]=[]}),$.each(e,function(e,t){null!=t[o]?i[t[o]][r].push(t):n.push(t)});for(var s=0;s<n.length;s++)n[s]=this.sortTermsFromTree(n[s]);this.viewModelObj.treeNav=n},e.prototype.treeFromArray2=function(e){var t=[],o={};$.each(e,function(e,t){o[t._id]=t,t.children=[]}),$.each(e,function(e,r){null!=r.sonOf?o[r.sonOf].children.push(r):t.push(r)});for(var r=0;r<t.length;r++)t[r]=this.sortTermsFromTree(t[r]);this.viewModelObj.treeNav=t},e.prototype.sortTermsFromTree=function(e){if(e.children.length&&e.customSortOrder){var t=null;e.customSortOrder&&(t=e.customSortOrder),t?(t=t.split(":"),e.children.sort(function(e,o){var r=t.indexOf(e.guid),n=t.indexOf(o.guid);return r>n?1:r<n?-1:0})):e.children.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})}for(var o=0;o<e.children.length;o++)e.children[o]=this.sortTermsFromTree(e.children[o]);return e},e.prototype.displayMenu=function(){sessionStorage.viewMenuModel||this.buildTree();var e="<div id='nav-container'>"+this.viewModelObj.htmlStr+"</div>";$("#MEGAMENU").append(e),this.applyNavigationEvent()},e.prototype.applyNavigationEvent=function(){this.bindHoverMenu(),$("#MEGAMENU img").mouseover(function(){var e=$(this).attr("src").replace("menu.png","menuover.png");$(this).attr("src",e)}).mouseout(function(){var e=$(this).attr("src").replace("over.png",".png");$(this).attr("src",e)})},e.prototype.bindHoverMenu=function(){var e=$(".mis-hidden");$("#nav-container").hover(function(){e.removeClass("mis-hidden"),$("#nav-container").css("cursor","pointer")},function(){e.addClass("mis-hidden")})},e.prototype.getParentTerm=function(e,t){var o;if(t)o=null;else{var r=e.split(";"),n=0;r.length>1&&(n=r.length-2),o=r[n]}return o},e.prototype.loadSessionStorage=function(e){if("undefined"!=typeof Storage){if(sessionStorage.viewMenuModel){var t=sessionStorage.getItem("viewMenuModel");this.viewModelObj=JSON.parse(t)}sessionStorage.isCentralResource&&(this.viewModelObj.isCentralResource="true"==sessionStorage.getItem("isCentralResource")),sessionStorage.homeBtnUrl&&(this.viewModelObj.isCentralResource?this.viewModelObj.siteUrl=sessionStorage.getItem("homeBtnUrl"):this.viewModelObj.siteUrl="/"==e.pageContext.web.absoluteUrl?"":e.pageContext.web.absoluteUrl),sessionStorage.homeBtnTitle&&(this.viewModelObj.homeBtnTitle=sessionStorage.getItem("homeBtnTitle"))}},e.prototype.init=function(e,t,o){var r=this;this.loadSessionStorage(e),this.buildTermsModel(e,t,o).then(function(){r.displayMenu()})},e.prototype.buildTermsModel=function(e,t,o){var n=this,s=this;return new Promise(function(a,l){var u=new SP.ClientContext(e.pageContext.web.absoluteUrl),c=SP.Taxonomy.TaxonomySession.getTaxonomySession(u),h=c.get_termStores().getByName(t),d=h.getTermSet(o),m=d.getAllTerms();u.load(m),u.executeQueryAsync(r.createDelegate(n,function(e,t){var o=m.getEnumerator();for(a();o.moveNext();){var r=o.get_current(),n=r.get_isRoot(),l=this.getParentTerm(r.get_pathOfTerm(),n);s.viewModelObj.globalMenuItems.push(new i(r.get_name(),r.get_localCustomProperties()._Sys_Nav_SimpleLinkUrl,n,r.get_customSortOrder(),l,r.get_id().toString(),r.get_localCustomProperties().description))}}))})},e}();t.MISGlobalNavigation=n;var i=function(){function e(e,t,o,r,n,i,s){this.name=e,this._id=e,this.guid=i,this.url=t,this.isRoot=o,this.customSortOrder=r,this.sonOf=n,this.children=[],this.description=s}return e}();t.MenuItem=i;var s=function(){function e(e){this.htmlStr="<ul id='mis-nav'>",this.globalMenuItems=new Array,this.treeNav=new Array,this.siteUrl=e}return e}();t.ViewModel=s},function(e,t){e.exports=r}])});