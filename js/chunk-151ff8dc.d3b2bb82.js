(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-151ff8dc"],{"0081":function(t,e,i){},"045d":function(t,e,i){},"1e3e":function(t,e,i){"use strict";var n=i("7a23"),o=Object(n["O"])("data-v-5a520035");Object(n["x"])("data-v-5a520035");var r={key:0,class:"popup"},c={class:"popup-wrapper"},s={key:0,class:"popup-title"};Object(n["v"])();var a=o((function(t,e,i,a,l,u){return l.showVisible?(Object(n["u"])(),Object(n["g"])("div",r,[Object(n["j"])(n["c"],{name:"fade"},{default:o((function(){return[Object(n["L"])(Object(n["j"])("div",{class:"popup-bg",onClick:e[1]||(e[1]=Object(n["N"])((function(){return u.onclick&&u.onclick.apply(u,arguments)}),["stop","prevent"]))},null,512),[[n["J"],l.showVisible]])]})),_:1}),Object(n["j"])(n["c"],{name:"popup-slide-up"},{default:o((function(){return[Object(n["L"])(Object(n["j"])("div",c,[i.title&&i.title.length>0?(Object(n["u"])(),Object(n["g"])("div",s,Object(n["G"])(i.title),1)):Object(n["h"])("",!0),(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(i.btn,(function(t,e){return Object(n["u"])(),Object(n["g"])("div",{class:["popup-btn",{danger:"danger"===t.type}],key:e,onClick:t.click},Object(n["G"])(t.text),11,["onClick"])})),128))],512),[[n["J"],l.visible]])]})),_:1})])):Object(n["h"])("",!0)})),l={name:"popup",props:{title:String,btn:Array},data:function(){return{showVisible:!1,visible:!1}},methods:{show:function(){var t=this;this.showVisible=!0,setTimeout((function(){t.visible=!0}),200)},hide:function(){var t=this;this.visible=!1,setTimeout((function(){t.showVisible=!1}),200)},onclick:function(){this.$emit("hide")}}};i("1e3e1");l.render=a,l.__scopeId="data-v-5a520035";e["a"]=l},"1e3e1":function(t,e,i){"use strict";i("2cb6")},"2c28":function(t,e,i){"use strict";i("d3e9")},"2cb6":function(t,e,i){},3200:function(t,e,i){"use strict";i("cb3a")},"40a1":function(t,e,i){},"4d82":function(t,e,i){"use strict";var n=i("7a23"),o=Object(n["O"])("data-v-01a1eeb6");Object(n["x"])("data-v-01a1eeb6");var r={class:"shelf-item-title-wrapper"},c={class:"shelf-list-title title-small"};Object(n["v"])();var s=o((function(t,e,i,s,a,l){var u=Object(n["C"])("shelf-item");return Object(n["u"])(),Object(n["g"])("div",{class:"shelf-list",style:{top:l.shelfListTop}},[Object(n["j"])(n["d"],{name:"list",tag:"div",id:"shelf-list"},{default:o((function(){return[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(i.data,(function(t){return Object(n["u"])(),Object(n["g"])("div",{class:"shelf-list-item-wrapper",key:t.id},[Object(n["j"])(u,{data:t,style:{height:l.itemHeight}},null,8,["data","style"]),Object(n["j"])("div",r,[Object(n["j"])("span",c,Object(n["G"])(t.title),1)])])})),128))]})),_:1})],4)})),a=(i("a9e3"),i("ac0d")),l=Object(n["O"])("data-v-2dfc613a"),u=l((function(t,e,i,o,r,c){return Object(n["u"])(),Object(n["g"])("div",{class:["shelf-item",{"shelf-item-shadow":1===i.data.type||2===i.data.type}],onClick:e[1]||(e[1]=function(){return c.onItemClick&&c.onItemClick.apply(c,arguments)})},[(Object(n["u"])(),Object(n["g"])(Object(n["E"])(c.item),{data:i.data,class:["shelf-item-comp",{"is-edit":t.isEditMode&&2===i.data.type}]},null,8,["data","class"])),Object(n["L"])(Object(n["j"])("div",{class:["icon-selected",{"is-selected":i.data.selected}]},null,2),[[n["J"],t.isEditMode&&1===i.data.type]])],2)})),h=(i("d81d"),i("4de4"),Object(n["O"])("data-v-095903e3"));Object(n["x"])("data-v-095903e3");var f={class:"shelf-item-book"},d={class:"private-wrapper"},p={class:"private-icon-wrapper"},b=Object(n["j"])("span",{class:"icon-private"},null,-1);Object(n["v"])();var v=h((function(t,e,i,o,r,c){return Object(n["u"])(),Object(n["g"])("div",f,[Object(n["j"])("img",{class:"shelf-item-book-cover",src:i.data.cover},null,8,["src"]),Object(n["L"])(Object(n["j"])("div",d,null,512),[[n["J"],i.data.private]]),Object(n["L"])(Object(n["j"])("div",p,[b],512),[[n["J"],i.data.private]])])})),j={props:{data:Object}};i("52bb");j.render=v,j.__scopeId="data-v-095903e3";var O=j,m=Object(n["O"])("data-v-4b946b37");Object(n["x"])("data-v-4b946b37");var g={class:"shelf-item-category"},w={key:0,class:"shelf-item-category-list"},y={key:1,class:"shelf-item-category-bg"},k=Object(n["j"])("span",{class:"icon-book2"},null,-1);Object(n["v"])();var S=m((function(t,e,i,o,r,c){return Object(n["u"])(),Object(n["g"])("div",g,[i.data.itemList.length>0?(Object(n["u"])(),Object(n["g"])("div",w,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(i.data.itemList,(function(t,e){return Object(n["u"])(),Object(n["g"])("div",{class:"shelf-item-category-item",key:e},[Object(n["j"])("img",{class:"shelf-item-category-img",src:t.cover},null,8,["src"])])})),128))])):(Object(n["u"])(),Object(n["g"])("div",y,[k]))])})),x={mixins:[a["c"]],props:{data:Object}};i("b131");x.render=S,x.__scopeId="data-v-4b946b37";var L=x,G=Object(n["O"])("data-v-1f57df0b");Object(n["x"])("data-v-1f57df0b");var $={class:"shelf-item-add"},C=Object(n["j"])("span",{class:"icon-add"},null,-1);Object(n["v"])();var P=G((function(t,e,i,o,r,c){return Object(n["u"])(),Object(n["g"])("div",$,[C])})),E={mixins:[a["c"]]};i("2c28");E.render=P,E.__scopeId="data-v-1f57df0b";var N=E,_=i("da6f"),T={mixins:[a["c"]],props:{data:Object},components:{shelfBook:O,shelfCategory:L,shelfAdd:N},computed:{item:function(){return 1===this.data.type?this.book:2===this.data.type?this.category:this.add}},data:function(){return{book:"shelfBook",category:"shelfCategory",add:"shelfAdd"}},methods:{onItemClick:function(){var t=this;if(this.isEditMode){if(1===this.data.type){var e=this.shelfList.map((function(e){return 1===e.type&&e.id===t.data.id?e.selected=!t.data.selected:e.itemList&&e.itemList.map((function(e){return e.id===t.data.id&&(e.selected=!t.data.selected),e})),e}));this.setShelfList(e).then((function(){t.data.selected?t.shelfSelected.pushWithoutDuplicate(t.data):t.setShelfSelected(t.shelfSelected.filter((function(e){return e.id!==t.data.id})))}))}}else 1===this.data.type?this.showBookDetail(this.data):2===this.data.type?this.$router.push({path:"/store/category",query:{title:this.data.title}}):Object(_["i"])(this)}}};i("71e2");T.render=u,T.__scopeId="data-v-2dfc613a";var B=T,I=i("fa7d"),F={mixins:[a["c"]],props:{top:{type:Number,default:94},data:Array},components:{shelfItem:B},computed:{itemHeight:function(){return(window.innerWidth-Object(I["b"])(120))/3/250*350+"px"},shelfListTop:function(){return Object(I["a"])(this.top)+"rem"}}};i("b503");F.render=s,F.__scopeId="data-v-01a1eeb6";e["a"]=F},"52bb":function(t,e,i){"use strict";i("e112")},"5cb7":function(t,e,i){"use strict";i("eb81")},"71e2":function(t,e,i){"use strict";i("40a1")},9050:function(t,e,i){"use strict";var n=i("7a23"),o=Object(n["O"])("data-v-47a6fd2c");Object(n["x"])("data-v-47a6fd2c");var r={key:0,class:"dialog-list-wrapper"},c={class:"dialog-list-item-text"},s={key:0,class:"dialog-list-icon-wrapper"},a=Object(n["j"])("span",{class:"icon-check"},null,-1),l={key:1,class:"dialog-new-group-wrapper"},u={class:"dialog-input-title-wrapper"},h={class:"dialog-input-title"},f={class:"dialog-input-wrapper"},d={class:"dialog-input-inner-wrapper"},p=Object(n["j"])("span",{class:"icon-close-circle-fill"},null,-1),b={class:"group-dialog-btn-wrapper"};Object(n["v"])();var v=o((function(t,e,i,v,j,O){var m=Object(n["C"])("ebook-dialog");return Object(n["u"])(),Object(n["g"])(m,{title:O.title,ref:"dialog"},{btn:o((function(){return[Object(n["j"])("div",b,[Object(n["j"])("div",{class:"dialog-btn",onClick:e[3]||(e[3]=function(){return O.hide&&O.hide.apply(O,arguments)})},Object(n["G"])(t.$t("shelf.cancel")),1),j.ifNewGroup?(Object(n["u"])(),Object(n["g"])("div",{key:0,class:["dialog-btn",{"is-empty":!(j.newGroupName&&j.newGroupName.length>0)}],onClick:e[4]||(e[4]=function(){return O.createNewGroup&&O.createNewGroup.apply(O,arguments)})},Object(n["G"])(t.$t("shelf.confirm")),3)):Object(n["h"])("",!0)])]})),default:o((function(){return[j.ifNewGroup?(Object(n["u"])(),Object(n["g"])("div",l,[Object(n["j"])("div",u,[Object(n["j"])("span",h,Object(n["G"])(t.$t("shelf.groupName")),1)]),Object(n["j"])("div",f,[Object(n["j"])("div",d,[Object(n["L"])(Object(n["j"])("input",{type:"text",class:"dialog-input","onUpdate:modelValue":e[1]||(e[1]=function(t){return j.newGroupName=t}),ref:"dialogInput"},null,512),[[n["I"],j.newGroupName]]),Object(n["L"])(Object(n["j"])("div",{class:"dialog-input-clear-wrapper",onClick:e[2]||(e[2]=function(){return O.clear&&O.clear.apply(O,arguments)})},[p],512),[[n["J"],j.newGroupName&&j.newGroupName.length>0]])])])])):(Object(n["u"])(),Object(n["g"])("div",r,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(O.categoryList,(function(e,i){return Object(n["u"])(),Object(n["g"])("div",{key:i},[2===e.edit&&O.isInGroup||2!==e.edit||!e.edit?(Object(n["u"])(),Object(n["g"])("div",{key:0,class:["dialog-list-item",{"is-add":!!e.edit&&1===e.edit}],onClick:function(t){return O.onGroupClick(e)}},[Object(n["j"])("div",c,Object(n["G"])(e.title),1),O.isInGroup&&t.shelfCategory&&t.shelfCategory.id===e.id?(Object(n["u"])(),Object(n["g"])("div",s,[a])):Object(n["h"])("",!0)],10,["onClick"])):Object(n["h"])("",!0)])})),128))]))]})),_:1},8,["title"])})),j=i("2909"),O=(i("4de4"),i("99af"),i("159b"),i("ac1f"),i("5319"),Object(n["O"])("data-v-53899776"));Object(n["x"])("data-v-53899776");var m={class:"dialog"},g={class:"dialog-wrapper"},w={class:"dialog-title-wrapper"},y={class:"dialog-title-text"},k={class:"dialog-btn-wrapper"},S={class:"dialog-btn"};Object(n["v"])();var x=O((function(t,e,i,o,r,c){return Object(n["u"])(),Object(n["g"])(n["c"],{name:"fade"},{default:O((function(){return[Object(n["L"])(Object(n["j"])("div",m,[Object(n["j"])("div",g,[Object(n["j"])("div",w,[Object(n["j"])("span",y,Object(n["G"])(i.title),1)]),Object(n["B"])(t.$slots,"default",{},void 0,!0),Object(n["j"])("div",k,[Object(n["B"])(t.$slots,"btn",{},(function(){return[Object(n["j"])("div",{class:"dialog-btn",onClick:e[1]||(e[1]=function(){return c.hide&&c.hide.apply(c,arguments)})},Object(n["G"])(t.$t("shelf.cancel")),1),Object(n["j"])("div",S,Object(n["G"])(t.$t("shelf.confirm")),1)]}),{},!0)])])],512),[[n["J"],r.visible]])]})),_:3})})),L={props:{title:String},data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1}}};i("b4b5");L.render=x,L.__scopeId="data-v-53899776";var G=L,$=i("ac0d"),C=i("2f32"),P=i("e8ec"),E=i("da6f"),N={name:"grouo-dialog",mixins:[$["c"]],components:{EbookDialog:G},data:function(){return{ifNewGroup:!1,newGroupName:""}},computed:{defaultCategory:function(){return[{title:this.$t("shelf.newGroup"),edit:1},{title:this.$t("shelf.groupOut"),edit:2}]},isInGroup:function(){return 2===this.currentType},category:function(){return this.shelfList.filter((function(t){return 2===t.type}))},categoryList:function(){return[].concat(Object(j["a"])(this.defaultCategory),Object(j["a"])(this.category))},title:function(){return this.ifNewGroup?this.$t("shelf.newGroup"):this.$t("shelf.moveBook")}},methods:{show:function(){this.ifNewGroup=this.dialogProps.showNewGroup,this.newGroupName=this.dialogProps.groupName,this.$refs.dialog.show()},hide:function(){var t=this;this.$refs.dialog.hide(),setTimeout((function(){t.ifNewGroup=!1,t.setDialogProps({showNewGroup:!1,groupName:""})}),200)},clear:function(){this.newGroupName=""},onGroupClick:function(t){t.edit&&1===t.edit?this.ifNewGroup=!0:t.edit&&2===t.edit?this.moveOutFromGroup(t):this.moveToGroup(t)},onComplete:function(){Object(P["k"])(this.shelfList),this.hide(),this.setIsEditMode(!1)},moveOutFromGroup:function(){this.moveOutOfGroup(this.onComplete)},moveToGroup:function(t){var e=this;this.setShelfList(this.shelfList.filter((function(t){return t.itemList&&(t.itemList=t.itemList.filter((function(t){return e.shelfSelected.indexOf(t)<0}))),e.shelfSelected.indexOf(t)<0}))).then((function(){t&&t.itemList&&(t.itemList=[].concat(Object(j["a"])(t.itemList),Object(j["a"])(e.shelfSelected))),t.itemList.forEach((function(t,e){t.id=e+1}));var i=new C["a"](e.$t("shelf.moveBookInSuccess").replace("$1",t.title));i.setTimeUnmount(1e3),e.onComplete()}))},createNewGroup:function(){var t=this;if(this.newGroupName||0!==this.newGroupName.length)if(this.dialogProps.showNewGroup)this.shelfCategory.title=this.newGroupName,this.onComplete();else{var e={id:this.shelfList[this.shelfList.length-2].id+1,itemList:[],selected:!1,title:this.newGroupName,type:2},i=Object(E["j"])(this.shelfList);i.push(e),i=Object(E["b"])(i),this.setShelfList(i).then((function(){t.moveToGroup(t.shelfList[t.shelfList.length-2]),t.onComplete()}))}}}};i("3200");N.render=v,N.__scopeId="data-v-47a6fd2c";e["a"]=N},9666:function(t,e,i){},"96cf":function(t,e,i){var n=function(t){"use strict";var e,i=Object.prototype,n=i.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function a(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(N){a=function(t,e,i){return t[e]=i}}function l(t,e,i,n){var o=e&&e.prototype instanceof v?e:v,r=Object.create(o.prototype),c=new C(n||[]);return r._invoke=x(t,i,c),r}function u(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(N){return{type:"throw",arg:N}}}t.wrap=l;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",b={};function v(){}function j(){}function O(){}var m={};m[r]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(P([])));w&&w!==i&&n.call(w,r)&&(m=w);var y=O.prototype=v.prototype=Object.create(m);function k(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function i(o,r,c,s){var a=u(t[o],t,r);if("throw"!==a.type){var l=a.arg,h=l.value;return h&&"object"===typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,c,s)}),(function(t){i("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,s)}))}s(a.arg)}var o;function r(t,n){function r(){return new e((function(e,o){i(t,n,e,o)}))}return o=o?o.then(r,r):r()}this._invoke=r}function x(t,e,i){var n=h;return function(o,r){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw r;return E()}i.method=o,i.arg=r;while(1){var c=i.delegate;if(c){var s=L(c,i);if(s){if(s===b)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(n===h)throw n=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);n=d;var a=u(t,e,i);if("normal"===a.type){if(n=i.done?p:f,a.arg===b)continue;return{value:a.arg,done:i.done}}"throw"===a.type&&(n=p,i.method="throw",i.arg=a.arg)}}}function L(t,i){var n=t.iterator[i.method];if(n===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,L(t,i),"throw"===i.method))return b;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=u(n,t.iterator,i.arg);if("throw"===o.type)return i.method="throw",i.arg=o.arg,i.delegate=null,b;var r=o.arg;return r?r.done?(i[t.resultName]=r.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,b):r:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,b)}function G(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(G,this),this.reset(!0)}function P(t){if(t){var i=t[r];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function i(){while(++o<t.length)if(n.call(t,o))return i.value=t[o],i.done=!1,i;return i.value=e,i.done=!0,i};return c.next=c}}return{next:E}}function E(){return{value:e,done:!0}}return j.prototype=y.constructor=O,O.constructor=j,j.displayName=a(O,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===j||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,O):(t.__proto__=O,a(t,s,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},k(S.prototype),S.prototype[c]=function(){return this},t.AsyncIterator=S,t.async=function(e,i,n,o,r){void 0===r&&(r=Promise);var c=new S(l(e,i,n,o),r);return t.isGeneratorFunction(i)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},k(y),a(y,s,"Generator"),y[r]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var n=e.pop();if(n in t)return i.value=n,i.done=!1,i}return i.done=!0,i}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach($),!t)for(var i in this)"t"===i.charAt(0)&&n.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function o(n,o){return s.type="throw",s.arg=t,i.next=n,o&&(i.method="next",i.arg=e),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r],s=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var a=n.call(c,"catchLoc"),l=n.call(c,"finallyLoc");if(a&&l){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var c=r?r.completion:{};return c.type=t,c.arg=e,r?(this.method="next",this.next=r.finallyLoc,b):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),$(i),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var n=i.completion;if("throw"===n.type){var o=n.arg;$(i)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,n){return this.delegate={iterator:P(t),resultName:i,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},b131:function(t,e,i){"use strict";i("0081")},b4b5:function(t,e,i){"use strict";i("045d")},b503:function(t,e,i){"use strict";i("9666")},c447:function(t,e,i){"use strict";var n=i("7a23"),o=Object(n["O"])("data-v-abcc9f96");Object(n["x"])("data-v-abcc9f96");var r={class:"shelf-footer"},c={key:0,class:"icon-private tab-icon"},s={key:1,class:"icon-private-see tab-icon"},a={key:2,class:"icon-download tab-icon"},l={key:3,class:"icon-download-remove tab-icon"},u={key:4,class:"icon-move tab-icon"},h={key:5,class:"icon-shelf tab-icon"};Object(n["v"])();var f=o((function(t,e,i,o,f,d){return Object(n["L"])((Object(n["u"])(),Object(n["g"])("div",r,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(d.tabs,(function(t){return Object(n["u"])(),Object(n["g"])("div",{class:"shelf-footer-tab-wrapper",key:t.index,onClick:function(e){return d.onTabClick(t)}},[Object(n["j"])("div",{class:["shelf-footer-tab",{"is-selected":d.isSelected}]},[1!==t.index||d.isPrivate?Object(n["h"])("",!0):(Object(n["u"])(),Object(n["g"])("div",c)),1===t.index&&d.isPrivate?(Object(n["u"])(),Object(n["g"])("div",s)):Object(n["h"])("",!0),2!==t.index||d.isDownload?Object(n["h"])("",!0):(Object(n["u"])(),Object(n["g"])("div",a)),2===t.index&&d.isDownload?(Object(n["u"])(),Object(n["g"])("div",l)):Object(n["h"])("",!0),3===t.index?(Object(n["u"])(),Object(n["g"])("div",u)):Object(n["h"])("",!0),4===t.index?(Object(n["u"])(),Object(n["g"])("div",h)):Object(n["h"])("",!0),Object(n["j"])("div",{class:["tab-text",{"remove-text":4===t.index}]},Object(n["G"])(d.label(t)),3)],2)],8,["onClick"])})),128))],512)),[[n["J"],t.isEditMode]])}));i("d3b7");function d(t,e,i,n,o,r,c){try{var s=t[r](c),a=s.value}catch(l){return void i(l)}s.done?e(a):Promise.resolve(a).then(n,o)}function p(t){return function(){var e=this,i=arguments;return new Promise((function(n,o){var r=t.apply(e,i);function c(t){d(r,n,o,c,s,"next",t)}function s(t){d(r,n,o,c,s,"throw",t)}c(void 0)}))}}i("96cf"),i("ac1f"),i("5319"),i("99af"),i("3ca3"),i("ddb0"),i("d81d"),i("159b"),i("4de4");var b=i("e8ec"),v=i("ac0d"),j=i("73f5"),O=i("2f32"),m=i("101f"),g={mixins:[v["c"]],computed:{isSelected:function(){return this.shelfSelected&&this.shelfSelected.length>0},tabs:function(){return[{label:this.$t("shelf.private"),label2:this.$t("shelf.noPrivate"),index:1},{label:this.$t("shelf.download"),label2:this.$t("shelf.delete"),index:2},{label:this.$t("shelf.move"),index:3},{label:this.$t("shelf.remove"),index:4}]},isPrivate:function(){return!!this.isSelected&&this.shelfSelected.every((function(t){return t.private}))},isDownload:function(){return!!this.isSelected&&this.shelfSelected.every((function(t){return t.cache}))}},methods:{omComplete:function(){this.setShelfFooterShowVisible(!1),this.setIsEditMode(!1),Object(b["k"])(this.shelfList)},downloadBook:function(t){var e=this,i=new O["a"]("等待下载中....");return new Promise((function(n,o){Object(j["b"])(t,(function(t){i.setTimeUnmount(1e3),n(t)}),o,(function(n){var o=Math.floor(n.loaded/n.total*100)+"%",r=e.$t("shelf.progressDownload").replace("$1","".concat(t.fileName,".epub(").concat(o,")"));i.myUnmount(),i=new O["a"](r)}))}))},downloadSelectedBook:function(){var t=this;return p(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<t.shelfSelected.length)){e.next=7;break}return e.next=4,t.downloadBook(t.shelfSelected[i]).then((function(t){t.cache=!0}));case 4:i++,e.next=1;break;case 7:case"end":return e.stop()}}),e)})))()},removeSelectedBook:function(){var t=this;Promise.all(this.shelfSelected.map((function(e){return t.removeBook(e)}))).then((function(e){e.map((function(t){t.cache=!1})),Object(b["k"])(t.shelfList)}))},removeBook:function(t){var e=this;return new Promise((function(i,n){Object(b["j"])("".concat(t.categoryText,"/$t{book.fileName}-info")),Object(m["c"])("".concat(t.fileName)),i(t);var o=new O["a"](e.$t("shelf.removeDownloadSuccess"));o.setTimeUnmount(1e3)}))},setPrivate:function(){var t;t=!this.isPrivate,this.shelfSelected.forEach((function(e){e.private=t})),this.omComplete(),t?this.$emit("showToast",this.$t("shelf.setPrivateSuccess")):this.$emit("showToast",this.$t("shelf.closePrivateSuccess"))},setDownload:function(){var t=this;return p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.omComplete(),!t.isDownload){e.next=5;break}t.removeSelectedBook(),e.next=9;break;case 5:return e.next=7,t.downloadSelectedBook();case 7:Object(b["k"])(t.shelfList),setTimeout((function(){var e=new O["a"](t.$t("shelf.setDownloadSuccess"));e.setTimeUnmount(1e3)}),1500);case 9:case"end":return e.stop()}}),e)})))()},removeSelected:function(){var t=this;this.shelfSelected.forEach((function(e){t.setShelfList(t.shelfList.filter((function(t){return 2===t.type?(t.itemList=t.itemList.filter((function(t){return t!==e})),!0):t!==e})))})),this.setShelfSelected([]),this.omComplete()},showPrivate:function(){var t=this;this.setShelfFooterPopupProps({title:this.isPrivate?this.$t("shelf.closePrivateTitle"):this.$t("shelf.setPrivateTitle"),btn:[{text:this.isPrivate?this.$t("shelf.close"):this.$t("shelf.open"),click:function(){t.setPrivate()}},{text:this.$t("shelf.cancel"),click:function(){t.setShelfFooterShowVisible(!1)}}]}),this.setShelfFooterShowVisible(!0)},showDownload:function(){var t=this;this.setShelfFooterPopupProps({title:this.isDownload?this.$t("shelf.removeDownloadTitle"):this.$t("shelf.setDownloadTitle"),btn:[{text:this.isDownload?this.$t("shelf.delete"):this.$t("shelf.open"),click:function(){t.setDownload()}},{text:this.$t("shelf.cancel"),click:function(){t.setShelfFooterShowVisible(!1)}}]}),this.setShelfFooterShowVisible(!0)},showRmove:function(){var t,e=this;t=1===this.shelfSelected.length?this.$t("shelf.removeBookTitle").replace("$1","《".concat(this.shelfSelected[0].title,"》")):this.$t("shelf.removeBookTitle").replace("$1",this.$t("shelf.selectedBooks")),this.setShelfFooterPopupProps({title:t,btn:[{text:this.$t("shelf.removeBook"),type:"danger",click:function(){e.removeSelected()}},{text:this.$t("shelf.cancel"),click:function(){e.setShelfFooterShowVisible(!1)}}]}),this.setShelfFooterShowVisible(!0)},onTabClick:function(t){if(this.isSelected)switch(t.index){case 1:this.showPrivate();break;case 2:this.showDownload();break;case 3:this.$emit("showDialog");break;case 4:this.showRmove();break;default:break}},label:function(t){switch(t.index){case 1:return this.isPrivate?t.label2:t.label;case 2:return this.isDownload?t.label2:t.label;default:return t.label}}}};i("df0d");g.render=f,g.__scopeId="data-v-abcc9f96";e["a"]=g},cb3a:function(t,e,i){},d3e9:function(t,e,i){},da9b:function(t,e,i){},df0d:function(t,e,i){"use strict";i("da9b")},e112:function(t,e,i){},eb81:function(t,e,i){},ebe4:function(t,e,i){"use strict";var n=i("7a23"),o=Object(n["O"])("data-v-0615ea46");Object(n["x"])("data-v-0615ea46");var r={class:"shelf-title-text-wrapper"},c={class:"shelf-title-text"},s={key:0,class:"shelf-titlbe-btn-wrapper shelf-title-left"},a={key:1,class:"shelf-titlbe-btn-wrapper shelf-title-right"},l={key:2,class:"shelf-titlbe-btn-wrapper shelf-title-left"},u={class:"shelf-title-btn-text"};Object(n["v"])();var h=o((function(t,e,i,h,f,d){return Object(n["u"])(),Object(n["g"])(n["c"],{name:"fade"},{default:o((function(){return[Object(n["L"])(Object(n["j"])("div",{class:["shelf-title",{"hide-shadow":f.ifHideShadow}]},[Object(n["j"])("div",r,[Object(n["j"])("span",c,Object(n["G"])(i.title),1),Object(n["L"])(Object(n["j"])("span",{class:"shelf-title-sub-text"},Object(n["G"])(d.selectedText),513),[[n["J"],t.isEditMode]])]),d.showClear?(Object(n["u"])(),Object(n["g"])("div",s,[Object(n["j"])("span",{class:"shelf-title-btn-text",onClick:e[1]||(e[1]=function(){return d.clearCache&&d.clearCache.apply(d,arguments)})},Object(n["G"])(t.$t("shelf.clearCache")),1)])):Object(n["h"])("",!0),d.showEdit?(Object(n["u"])(),Object(n["g"])("div",a,[Object(n["j"])("span",{class:"shelf-title-btn-text",onClick:e[2]||(e[2]=function(){return d.onEditClick&&d.onEditClick.apply(d,arguments)})},Object(n["G"])(t.isEditMode?t.$t("shelf.cancel"):t.$t("shelf.edit")),1)])):Object(n["h"])("",!0),d.showBack?(Object(n["u"])(),Object(n["g"])("div",l,[Object(n["j"])("span",{class:"icon-back",onClick:e[3]||(e[3]=function(){return d.back&&d.back.apply(d,arguments)})})])):Object(n["h"])("",!0),d.showChangeGroup?(Object(n["u"])(),Object(n["g"])("div",{key:3,class:["shelf-titlbe-btn-wrapper",{"shelf-title-left":d.changeGroupLeft,"shelf-title-right":d.changeGroupRight}],onClick:e[4]||(e[4]=function(){return d.changeGroup&&d.changeGroup.apply(d,arguments)})},[Object(n["j"])("span",u,Object(n["G"])(t.$t("shelf.editGroup")),1)],2)):Object(n["h"])("",!0)],2),[[n["J"],t.shelfTitleVisible]])]})),_:1})})),f=(i("ac1f"),i("5319"),i("4de4"),i("d81d"),i("101f")),d=i("e8ec"),p=i("ac0d"),b=i("2f32"),v={mixins:[p["c"]],props:{title:String},data:function(){return{ifHideShadow:!0}},computed:{emptyCategory:function(){return!this.shelfCategory||!this.shelfCategory.itemList||0===this.shelfCategory.itemList.length},showEdit:function(){return 1===this.currentType||!this.emptyCategory},showClear:function(){return 1===this.currentType},showBack:function(){return 2===this.currentType&&!this.isEditMode},showChangeGroup:function(){return 2===this.currentType&&(this.isEditMode||this.emptyCategory)},changeGroupLeft:function(){return!this.emptyCategory},changeGroupRight:function(){return this.emptyCategory},selectedText:function(){var t=this.shelfSelected?this.shelfSelected.length:0;return t<=0?this.$t("shelf.selectBook"):1===t?this.$t("shelf.haveSelectedBook").replace("$1",t):this.$t("shelf.haveSelectedBooks").replace("$1",t)}},methods:{changeGroupName:function(){var t=this;this.setShelfFooterShowVisible(!1),this.setDialogProps({showNewGroup:!0,groupName:this.title}).then((function(){t.$emit("showDialog")}))},onComplete:function(){var t=this;this.setShelfFooterShowVisible(!1),this.setShelfList(this.shelfList.filter((function(e){return e.id!==t.shelfCategory.id}))).then((function(){Object(d["k"])(t.shelfList),t.setIsEditMode(!1),t.$router.go(-1)}))},deleteGroup:function(){this.emptyCategory?this.onComplete():(this.setShelfSelected(this.shelfCategory.itemList),this.moveOutOfGroup(this.onComplete))},showDeleteGroup:function(){var t=this;this.setShelfFooterShowVisible(!1).then((function(){setTimeout((function(){t.setShelfFooterPopupProps({title:t.$t("shelf.deleteGroupTitle"),btn:[t.createPopupBtn(t.$t("shelf.confirm"),(function(){t.deleteGroup()}),"danger"),t.createPopupBtn(t.$t("shelf.cancel"),(function(){t.setShelfFooterShowVisible(!1)}))]}).then((function(){t.setShelfFooterShowVisible(!0)}))}),200)}))},createPopupBtn:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"normal";return{text:t,type:i,click:e}},changeGroup:function(){var t=this,e=[this.createPopupBtn(this.$t("shelf.editGroupName"),(function(){t.changeGroupName()})),this.createPopupBtn(this.$t("shelf.deleteGroup"),(function(){t.showDeleteGroup()}),"danger"),this.createPopupBtn(this.$t("shelf.cancel"),(function(){t.setShelfFooterShowVisible(!1)}))];this.setShelfFooterPopupProps({title:this.$t("shelf.editGroup"),btn:e}).then((function(){t.setShelfFooterShowVisible(!0)}))},back:function(){this.$router.go(-1),this.setIsEditMode(!1)},onEditClick:function(){if(!this.isEditMode){this.setShelfSelected([]);var t=this.shelfList.map((function(t){return t.selected=!1,t.itemList&&t.itemList.map((function(t){return t.selected=!1,t})),t}));this.setShelfList(t)}this.setIsEditMode(!this.isEditMode)},clearCache:function(){Object(d["a"])(),Object(f["a"])(),this.setShelfList([]),this.setShelfSelected([]),this.getShelfList();var t=new b["a"](this.$t("shelf.clearCacheSuccess"));t.setTimeUnmount(500)}},watch:{offsetY:function(t){this.ifHideShadow=!(t>0)}}};i("5cb7");v.render=h,v.__scopeId="data-v-0615ea46";e["a"]=v}}]);
//# sourceMappingURL=chunk-151ff8dc.d3b2bb82.js.map