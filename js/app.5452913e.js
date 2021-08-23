(function(e){function t(t){for(var r,i,a=t[0],u=t[1],l=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"00b3":function(e,t,n){var r={"./en/index.js":"5cb2","./index.js":"f1ed","./zh-cn/index.js":"bf3c"};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id="00b3"},"029f":function(e,t){e.exports="请提供一个能够重现你的问题的 GitHub 仓库。\r\n"},"06a9":function(e,t){e.exports="如果重现不需要构建工具，请提供一个尽可能精简的 [JSFiddle](https://jsfiddle.net/posva/3yq6ojLv/5), [JSBin](https://jsbin.com/) 或是 [CodePen](https://codepen.io) 链接。如果需要构建工具，可以使用 [CodeSandbox](https://codesandbox.io/s/vue-router-4-reproduction-s1sqc) 或是提供一个 GitHub 仓库的链接。\r\n"},1:function(e,t){},"15b6":function(e,t,n){},1932:function(e,t,n){"use strict";n("4fec")},2252:function(e,t){e.exports="Vue 3 相关的 bug 请尝试用 [SFC Playground](https://sfc.vuejs.org) 重现。如果无法在 Playground 中重现，则请提供一个 [CodePen](https://codepen.io)，[CodeSandbox](https://codesandbox.io/s/vue) 或是一个 GitHub 仓库的链接。\r\n"},2518:function(e,t){e.exports="If the reproduction does not need a build setup, please provide a link to a [JSFiddle](https://jsfiddle.net/posva/3yq6ojLv/5), [JSBin](https://jsbin.com/) or [CodePen](https://codepen.io). If it requires a build setup, you can use [CodeSandbox](https://codesandbox.io/s/vue-router-4-reproduction-s1sqc) or provide a GitHub repo.\r\n"},"25d7":function(e,t){e.exports="描述一下你期望这个新功能的 API 是如何使用的，并提供一些代码示例。请用 [Markdown](https://guides.github.com/features/mastering-markdown/) 格式化你的代码片段。\r\n"},"2a4f":function(e,t){e.exports="所谓『重现』，就是一段可以运行并展示一个 bug 如何发生的代码。\r\n\r\n##### 文字是不够的\r\n\r\n如果你遇到一个问题，但是只提供了一些文字描述，我们是不可能修复这个 bug 的。首先，文字在描述技术问题时的表达难度和不精确性；其次，问题的真实原因有很多可能，它完全有可能是一个你根本没有提及的因素导致的。重现是唯一能够可靠地让我们理解问题本质的方式。\r\n\r\n##### 重现必须是可运行的\r\n\r\n**截图和视频不是重现**。它们仅仅证明了 bug 的存在，但却不能提供关于 bug 是如何发生的信息。只有可运行的代码提供了完整的上下文，并让我们可以进行真正的 debug 而不是空想和猜测。当然，在提供的重现的前提下，视频或是 gif 动画可以帮助解释一些比较难用文字描述的交互行为。\r\n\r\n##### 重现应当尽量精简\r\n\r\n有些用户会直接给我们一整个项目的代码，然后希望我们帮忙找出问题所在。此类请求我们通常不予接受，因为：\r\n\r\n- 你对你的项目的代码结构可能已经非常熟悉，但我们并不是。阅读、运行、分析一个完全陌生的项目是极其耗费时间和精力的。\r\n\r\n- 由于涉及了大量业务代码，问题可能是你的代码错误，而不是 Vue 的 bug 所导致的。\r\n\r\n一个最小化的重现意味着它精确地定位了 bug 本身 - 它应当只包含能够触发 bug 的**最少量**的代码。你应当尽可能地剔除任何跟该 bug 无关的部分。\r\n\r\n##### 如何提供一个重现\r\n\r\n除非你的 bug 只有在构建工具下才能重现，否则我们建议使用诸如 [JSFiddle](https://jsfiddle.net), [JSBin](https://jsbin.com) 或是 [Codepen](https://codepen.io) 这样的在线代码服务来提供重现。如果你的 bug 必须用到构建工具，那么我们建议使用 [vue-cli](https://github.com/vuejs/vue-cli) 来搭建一个新项目，推送到 GitHub 并提供仓库的链接。\r\n"},"41b8":function(e,t,n){"use strict";n("c650")},4447:function(e,t){e.exports="For Vue 3 core reproductions, try reproducing it in [The SFC Playground](https://sfc.vuejs.org). If it is a Vue 2 bug or cannot be reproduced in the playground, you can use [CodePen](https://codepen.io/pen/), [CodeSandbox](https://codesandbox.io/s/vue) or provide a GitHub repo."},"4e46":function(e,t){e.exports="Run the following command in your project's folder in terminal:\r\n\r\n`vue info`\r\n\r\nCopy and paste the output of the command in the section above.\r\n"},"4fec":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("8e6e"),n("ac6a"),n("456d");var r=n("ade3"),s=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),o=n("2909"),i=(n("386d"),n("0e54")),a=n.n(i),u=n("f1ed"),l=n("4328"),c=n.n(l),d=function(e){e.mixin({beforeCreate:function(){if(this.$root===this){this.$locales=u["default"];var t=c.a.parse(window.location.search.slice(1));e.util.defineReactive(this,"$lang",t&&t.lang||"en")}}});var t=function(e,t){return'[i18n content not found for { lang: "'.concat(e,'", id: "').concat(t,'" }')};function n(){var e=this;Object(o["a"])(this.$el.querySelectorAll("a")).forEach((function(t){t.setAttribute("tabindex","-1");var n=t.getAttribute("href");n&&("#"!==n.charAt(0)?t.setAttribute("target","_blank"):t.addEventListener("click",(function(){e.$emit("click-modal")})))}))}e.prototype.i18n=function(e){var n=this.$root,r=n.$locales,s=n.$lang,o=r[s];return o[e]||t(s,e)},e.component("i18n",{props:{id:{type:String,required:!0}},render:function(e){var n=this.$root,r=n.$locales,s=n.$lang,o=r[s],i=o[this.id];return e("div",{domProps:{innerHTML:i?a()(i.trim()):'<div style="color:red">'.concat(t(s,this.id),"</div>")}})},mounted:n,updated:n})},p=n("39f8"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("AppHeader",{attrs:{lang:e.$lang},on:{"change-lang":e.setLang}}),n("div",{staticClass:"container"},[n("form",{staticClass:"main-form",on:{submit:function(t){return t.preventDefault(),e.generate.apply(null,arguments)}}},[n("FormIntro"),n("div",{staticClass:"common-fields vue-ui-grid col-2 default-gap"},[n("VueFormField",{staticClass:"first-row",attrs:{title:e.i18n("repo-title"),subtitle:e.i18n("repo-subtitle")}},[n("VueSelect",{model:{value:e.repo,callback:function(t){e.repo=t},expression:"repo"}},e._l(e.repos,(function(e){return n("VueSelectButton",{key:e.id,attrs:{value:e,label:e.name}})})),1)],1),n("VueFormField",{staticClass:"first-row",attrs:{title:e.i18n("type-title")}},[n("VueGroup",{staticClass:"extend",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.types,(function(t){return n("VueGroupButton",{key:t.id,attrs:{value:t.id}},[e._v("\r\n              "+e._s(t.name)+"\r\n            ")])})),1)],1),n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("title-title")}},[n("VueInput",{attrs:{required:"",autofocus:""},on:{blur:e.findIssues},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}}),n("template",{slot:"subtitle"},[e.issues.length?n("div",{staticClass:"similar-issues"},[e._v("\r\n              "+e._s(e.i18n("similar-issues"))+":\r\n\r\n              "),n("ul",e._l(e.issues,(function(t){return n("li",{key:t.id},[n("a",{staticClass:"issue",attrs:{href:t.html_url,target:"_blank",rel:"noreferrer",tabindex:"-1"}},[e._v("\r\n                    "+e._s(t.title)+"\r\n                  ")])])})),0),e.showIssueToggleControl?n("p",[e.showingAllIssues?n("span",{attrs:{role:"button"},on:{click:function(t){e.showingAllIssues=!1}}},[e._v("\r\n                  "+e._s(e.i18n("show-less"))+"\r\n                ")]):n("span",{attrs:{role:"button"},on:{click:function(t){e.showingAllIssues=!0}}},[e._v("\r\n                  "+e._s(e.i18n("show-more"))+"\r\n                ")])]):e._e()]):e._e()])],2)],1),n("keep-alive",[n(e.type,{ref:"content",tag:"component",attrs:{repo:e.repo}})],1),n("div",{staticClass:"form-actions"},[n("VueButton",{staticClass:"primary big",attrs:{type:"submit",label:e.i18n("preview")}})],1)],1),e.show?n("VueModal",{staticClass:"medium",attrs:{title:e.i18n("preview-title")},on:{close:function(t){e.show=!1}}},[n("div",{staticClass:"default-body",domProps:{innerHTML:e._s(e.generated.html)}}),n("div",{staticClass:"actions",attrs:{slot:"footer"},slot:"footer"},[n("VueButton",{staticClass:"primary big",attrs:{label:e.i18n("create")},on:{click:function(t){return e.create()}}})],1)]):e._e()],1),e._m(0)],1)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"app-footer"},[n("p",[e._v("…")]),n("small",[e._v("\r\n      Built with\r\n      "),n("a",{attrs:{href:"https://github.com/vuejs/vue-cli"}},[e._v("vue-cli")]),e._v("\r\n      ·\r\n      Check out source on "),n("a",{attrs:{href:"https://github.com/vuejs/vue-issue"}},[e._v("GitHub")])])])}],b=[{id:"vuejs/vue",name:"vue"},{id:"vuejs/vue-next",name:"vue-next",reproSubtitleId:"vue-next-repro-subtitle-links"},{id:"vuejs/vuex",name:"vuex"},{id:"vuejs/vue-router",name:"vue-router"},{id:"vuejs/vue-router-next",name:"vue-router-next",reproSubtitleId:"router-next-repro-subtitle-links"},{id:"vuejs/vue-loader",name:"vue-loader"},{id:"vuejs/vue-test-utils",name:"vue-test-utils"},{id:"vuejs/vue-cli",name:"vue-cli",reproSubtitleId:"cli-repro-subtitle-links"},{id:"vuejs/vue-devtools",name:"vue-devtools"},{id:"vuejs/rollup-plugin-vue",name:"rollup-plugin-vue"}],v=(n("a481"),n("b54a"),n("f904")),m=n.n(v);function g(e){var t="".concat(e,"\n\n\x3c!-- generated by vue-issues. DO NOT REMOVE --\x3e");m()(t);var n=new a.a.Renderer({gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),r=n.link;return n.link=function(e,t,s){var o=r.call(n,e,t,s);return o.replace(/^<a /,'<a target="_blank" rel="nofollow" ')},{markdown:t,html:a()(e,{renderer:n})}}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(){return c.a.parse(window.location.search.slice(1))}function k(e){var t=window.location.origin+"/?"+c.a.stringify(y(y({},x()),e),{encode:!1})+window.location.hash;window.history.pushState({path:t},"",t)}var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-intro"},[n("i18n",{staticClass:"intro bg-faded",attrs:{id:"intro"},on:{"click-modal":function(t){e.show=!0}}}),e.show?n("VueModal",{staticClass:"medium",attrs:{title:e.i18n("intro-modal-title")},on:{close:function(t){e.show=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"intro-modal"}})],1)]):e._e()],1)},O=[],I={watch:{show:function(e){if(!e){var t=window.location.origin+"/"+window.location.search;window.history.pushState({path:t},"",t)}}},methods:{checkModal:function(e){this.show=window.location.hash==="#".concat(e)}}},C={mixins:[I],data:function(){return{show:!1}},created:function(){this.checkModal("why-strict")}},_=C,S=(n("dc35"),n("2877")),V=Object(S["a"])(_,j,O,!1,null,"62d873ea",null),A=V.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"app-header"},[n("div",{staticClass:"container"},[e._m(0),n("ul",{staticClass:"nav"},e._l(e.$root.$locales,(function(t,r){return n("li",{key:r,staticClass:"nav-item"},[n("a",{staticClass:"nav-link",class:{active:e.lang===r},on:{click:function(t){return e.$emit("change-lang",r)}}},[e._v("\n          "+e._s(t._label)+"\n        ")])])})),0)])])},F=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{staticClass:"brand",attrs:{href:"#"}},[r("img",{staticClass:"logo",attrs:{src:n("9d64"),alt:"Vue's logo",height:"24"}}),e._v("\n      Issue Helper\n    ")])}],q={props:["lang"]},$=q,E=(n("41b8"),Object(S["a"])($,P,F,!1,null,"25a1c97a",null)),H=E.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bug-report",staticStyle:{margin:"0"}},[n("div",{staticClass:"vue-ui-grid col-2 default-gap"},[n("VueFormField",{attrs:{title:e.i18n("version-title"),subtitle:e.i18n("version-subtitle")}},[n("VueTypeAhead",{attrs:{suggestions:e.suggestions,loading:e.loadingVersion,"show-all":"","show-max":"30","restrict-choice":"",required:""},model:{value:e.attrs.version,callback:function(t){e.$set(e.attrs,"version",t)},expression:"attrs.version"}})],1),"vuejs/vue-devtools"===e.repo.id?n("VueFormField",{attrs:{title:e.i18n("browser-and-os-title")}},[n("VueInput",{attrs:{required:""},model:{value:e.attrs.browserAndOS,callback:function(t){e.$set(e.attrs,"browserAndOS",t)},expression:"attrs.browserAndOS"}}),n("i18n",{attrs:{slot:"subtitle",id:"browser-and-os-subtitle"},slot:"subtitle"})],1):[e.isCLI&&e.doesNotSupportVueInfo?n("VueFormField",{attrs:{title:e.i18n("node-and-os-title")}},[n("VueInput",{attrs:{required:""},model:{value:e.attrs.nodeAndOS,callback:function(t){e.$set(e.attrs,"nodeAndOS",t)},expression:"attrs.nodeAndOS"}}),n("i18n",{attrs:{slot:"subtitle",id:"node-and-os-subtitle"},slot:"subtitle"})],1):e.isCLI?n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("cli-envinfo-title")}},[n("VueInput",{attrs:{type:"textarea",required:""},model:{value:e.attrs.cliEnvInfo,callback:function(t){e.$set(e.attrs,"cliEnvInfo",t)},expression:"attrs.cliEnvInfo"}}),n("i18n",{attrs:{slot:"subtitle",id:"cli-envinfo-subtitle"},slot:"subtitle"})],1):e._e(),n("VueFormField",{attrs:{title:e.i18n("repro-title")}},[n("VueInput",{attrs:{type:"url",disabled:e.isCLI&&e.reproNotAvailable,required:""},model:{value:e.attrs.reproduction,callback:function(t){e.$set(e.attrs,"reproduction",t)},expression:"attrs.reproduction"}}),n("template",{slot:"subtitle"},[n("i18n",{attrs:{id:e.repo.reproSubtitleId||"repro-subtitle-links"}}),e.isCLI?n("VueSwitch",{model:{value:e.reproNotAvailable,callback:function(t){e.reproNotAvailable=t},expression:"reproNotAvailable"}},[n("i18n",{attrs:{id:"cli-no-repro"}})],1):e._e(),n("i18n",{attrs:{id:"repro-subtitle"},on:{"click-modal":function(t){e.show=!0}}})],1)],2)],n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("steps-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:""},model:{value:e.attrs.steps,callback:function(t){e.$set(e.attrs,"steps",t)},expression:"attrs.steps"}}),n("i18n",{attrs:{slot:"subtitle",id:"steps-subtitle"},slot:"subtitle"})],1),n("VueFormField",{attrs:{title:e.i18n("expected-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:""},model:{value:e.attrs.expected,callback:function(t){e.$set(e.attrs,"expected",t)},expression:"attrs.expected"}})],1),n("VueFormField",{attrs:{title:e.i18n("actual-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:""},model:{value:e.attrs.actual,callback:function(t){e.$set(e.attrs,"actual",t)},expression:"attrs.actual"}})],1),n("VueFormField",{staticClass:"span-2",attrs:{title:e.i18n("extra-title"),subtitle:e.i18n("extra-subtitle")}},[n("VueInput",{attrs:{type:"textarea",rows:"4"},model:{value:e.attrs.extra,callback:function(t){e.$set(e.attrs,"extra",t)},expression:"attrs.extra"}})],1)],2),e.show?n("VueModal",{staticClass:"medium",attrs:{title:e.i18n("repro-modal-title")},on:{close:function(t){e.show=!1}}},[n("div",{staticClass:"default-body"},[n("i18n",{attrs:{id:"repro-modal"}})],1)]):e._e()],1)},G=[],M=(n("96cf"),n("1da1")),N=(n("55dd"),n("8d61")),L={props:{repo:{type:Object,required:!0}},mixins:[I],data:function(){return{show:!1,attrs:{version:"",reproduction:"",steps:"",expected:"",actual:"",extra:"",browserAndOS:"",nodeAndOS:"",cliEnvInfo:""},versions:[],loadingVersion:!1,reproNotAvailable:!1}},computed:{suggestions:function(){return this.versions.slice().sort((function(e,t){return Object(N["gt"])(e.value,t.value)?-1:1}))},isCLI:function(){return"vuejs/vue-cli"===this.repo.id},doesNotSupportVueInfo:function(){return this.attrs.version&&Object(N["lt"])(this.attrs.version,"3.2.0")}},watch:{repo:function(){this.versions=[],this.attrs.version="",this.fetchVersions()}},created:function(){this.fetchVersions(),this.checkModal("why-repro")},methods:{fetchVersions:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){var t,n,r,s,o,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,this.loadingVersion=!0,n=this.repo.id,e.next=5,fetch("https://api.github.com/repos/".concat(n,"/releases?page=").concat(t,"&per_page=100"));case 5:return r=e.sent,e.next=8,r.json();case 8:if(s=e.sent,this.repo.id===n){e.next=11;break}return e.abrupt("return");case 11:if(s&&s instanceof Array){e.next=13;break}return e.abrupt("return",!1);case 13:if(this.versions=this.versions.concat(s.map((function(e){return{value:/^v/.test(e.tag_name)?e.tag_name.substr(1):e.tag_name}}))),o=r.headers.get("Link"),!(o&&o.indexOf('rel="next"')>-1)){e.next=20;break}return e.next=18,this.fetchVersions(t+1);case 18:e.next=21;break;case 20:this.loadingVersion=!1;case 21:this.suggestions.length&&(this.attrs.version=this.suggestions[0].value);case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),generate:function(){var e=this.attrs,t=e.version,n=e.reproduction,r=e.steps,s=e.expected,o=e.actual,i=e.extra,a=e.browserAndOS,u=e.nodeAndOS,l=e.cliEnvInfo;return g("\n### Version\n".concat(t,"\n\n").concat(n?"### Reproduction link\n[".concat(n,"](").concat(n,")"):"","\n\n").concat(a?"### Browser and OS info\n".concat(a):"","\n\n").concat(u?"### Node and OS info\n".concat(u):"","\n\n").concat(l?"### Environment info\n```\n".concat(l,"\n```\n"):"","\n\n### Steps to reproduce\n").concat(r,"\n\n### What is expected?\n").concat(s,"\n\n### What is actually happening?\n").concat(o,"\n\n").concat(i?"---\n".concat(i):"","\n  ").trim())}}},R=L,W=Object(S["a"])(R,T,G,!1,null,null,null),B=W.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"feature-request"},[n("div",{staticClass:"vue-ui-grid col-1 default-gap"},[n("VueFormField",{attrs:{title:e.i18n("rationale-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:""},model:{value:e.attrs.rationale,callback:function(t){e.$set(e.attrs,"rationale",t)},expression:"attrs.rationale"}}),n("i18n",{attrs:{slot:"subtitle",id:"rationale-subtitle"},slot:"subtitle"})],1),n("VueFormField",{attrs:{title:e.i18n("proposal-title")}},[n("VueInput",{attrs:{type:"textarea",rows:"4",required:""},model:{value:e.attrs.proposal,callback:function(t){e.$set(e.attrs,"proposal",t)},expression:"attrs.proposal"}}),n("i18n",{attrs:{slot:"subtitle",id:"proposal-subtitle"},slot:"subtitle"})],1)],1)])},J=[],U={data:function(){return{attrs:{rationale:"",proposal:""}}},methods:{generate:function(){var e=this.attrs,t=e.rationale,n=e.proposal;return g("\n### What problem does this feature solve?\n".concat(t,"\n\n### What does the proposed API look like?\n").concat(n,"\n  ").trim())}}},z=U,Y=Object(S["a"])(z,D,J,!1,null,null,null),Q=Y.exports,K=n("bc3a"),X=n.n(K),Z="https://api.github.com/search/issues";function ee(e){return Array.isArray(e)?e:[e]}var te=5,ne={data:function(){return{_issues:[],showingAllIssues:!1}},computed:{issues:{get:function(){var e=this.$data._issues;return this.showingAllIssues?e:e.slice(0,te)},set:function(e){this.$data._issues=e}},showIssueToggleControl:function(){return this.$data._issues.length>te}},methods:{fetchIssues:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(t,n){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=Object.keys(n).map((function(e){return ee(n[e]).map((function(t){return"".concat(e,":").concat(t)})).join(" ")})).join(" ")+" "+t,e.prev=1,e.next=4,X.a.get(Z,{params:{q:r}});case 4:s=e.sent,o=s.items,this.$data._issues=o||[],e.next=11;break;case 9:e.prev=9,e.t0=e["catch"](1);case 11:case"end":return e.stop()}}),e,this,[[1,9]])})));function t(t,n){return e.apply(this,arguments)}return t}()}},re={name:"App",mixins:[ne],components:{FormIntro:A,AppHeader:H,BugReport:B,FeatureRequest:Q},data(){return{title:"",generated:{markdown:"",html:""},show:!1,preview:!1,repo:null,repos:b,type:"bug-report",versions:{}}},computed:{types(){return this.$lang&&[{id:"bug-report",name:this.i18n("bug-report")},{id:"feature-request",name:this.i18n("feature-request")}]}},watch:{repo(e){e&&k({repo:e.id})},type(e){k({type:e})}},created(){const{repo:e,type:t}=x();this.repo=this.repos.find(t=>t.id===e)||this.repos[0],this.type=t||"bug-report"},methods:{setLang(e){this.$lang=e,k({lang:e})},findIssues(){this.issues=[],this.title&&this.fetchIssues(this.title,{is:"issue",repo:this.repo.id})},generate(){this.generated=this.$refs.content.generate(),this.show=!0},create(){const e=encodeURIComponent(this.title).replace(/%2B/gi,"+"),t=encodeURIComponent(this.generated.markdown).replace(/%2B/gi,"+"),n="feature-request"===this.type?"&labels=feature%20request":"";window.open(`https://github.com/2321605193/isser-helper/issues/new?title=${e}&body=${t}${n}`)}}},se=re,oe=(n("cb34"),n("1932"),Object(S["a"])(se,h,f,!1,null,"5e5202b4",null)),ie=oe.exports;function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}s["a"].use(d),s["a"].use(p["a"]),window.addEventListener("dragover",(function(e){e.preventDefault()})),window.addEventListener("drop",(function(e){e.preventDefault(),alert(le.i18n("drop-warn"))}));var le=new s["a"](ue({el:"#app"},ie))},"5cb2":function(e,t,n){"use strict";n.r(t),t["default"]={_label:"EN",intro:n("d3d1"),"intro-modal-title":"The reason behind our strict issue policy","intro-modal":n("b7e5"),"repo-title":"I am opening an issue for","repo-subtitle":"Please make sure to file the issue at appropriate repo.","type-title":"This is a","title-title":"Issue title","version-title":"Version","version-subtitle":"Check if the issue is reproducible with the latest stable version of Vue.","repro-title":"Link to minimal reproduction","repro-subtitle":n("bf5d"),"repro-subtitle-links":n("4447"),"repro-modal-title":"About Reproductions","repro-modal":n("811c"),"cli-repro-subtitle-links":n("91e9"),"cli-no-repro":"If your issue cannot be reproduced with code, check here.","router-next-repro-subtitle-links":n("2518"),"vue-next-repro-subtitle-links":n("d3d2"),"node-and-os-title":"Node, npm/yarn and OS info","node-and-os-subtitle":"Please specify node.js version, npm or yarn version, OS name & version. Example: Node 10.7.0 / yarn 1.7.0 / Windows 10","cli-envinfo-title":"Environment Info","cli-envinfo-subtitle":n("4e46"),"browser-and-os-title":"Browser and OS info","browser-and-os-subtitle":"Please specify browser name & version, OS name & version. Example: Chrome 62 / Windows 10","steps-title":"Steps to reproduce","steps-subtitle":n("9c53"),"expected-title":"What is expected?","actual-title":"What is actually happening?","extra-title":"Any additional comments? (optional)","extra-subtitle":"e.g. some background/context of how you ran into this bug.","rationale-title":"What problem does this feature solve?","rationale-subtitle":n("b4f5"),"proposal-title":"What does the proposed API look like?","proposal-subtitle":n("910f"),preview:"Preview","preview-title":"Issue Preview",create:"Create","bug-report":"Bug Report","feature-request":"Feature Request","similar-issues":"Similar issues","show-more":"Show more","show-less":"Show less","drop-warn":"Unfortunately, image drop/uploading is not supported due to GitHub API limitations. However, you can create the issue first (which will take you to GitHub) and then drop the images needed."}},6261:function(e,t,n){},"66f0":function(e,t){e.exports="打开重现后，我们需要执行哪些操作才能让 bug 出现？简洁清晰的重现步骤能够帮助我们更迅速地定位问题所在。支持使用 [Markdown](https://guides.github.com/features/mastering-markdown/) 来格式化列表或是代码片段。\r\n"},"6c57":function(e,t){e.exports="尽可能使用 [SFC Playground](https://sfc.vuejs.org) 来提供一个复现。如果重现不需要构建工具，请提供一个尽可能精简的 [JSFiddle](https://jsfiddle.net/posva/km2qpwx7/), 或是 [CodePen](https://codepen.io/pen) 链接。如果需要构建工具，可以使用 [CodeSandbox](https://codesandbox.io/s/vue-next-s3bf7) 或是提供一个 GitHub 仓库的链接。\r\n"},"811c":function(e,t){e.exports="A bug reproduction is a piece of code that can run and demonstrate how a bug can happen.\r\n\r\n##### Text is not enough\r\n\r\nIt's impossible to fix a bug from mere text descriptions. First, it's very difficult to precisely describe a technical problem while keeping it easy to follow; Second, the real cause may very well be something that you forgot to even mention. A reproduction is the only way that can reliably help us understand what is going on, so please provide one.\r\n\r\n##### A repro must be runnable\r\n\r\nScreenshots or videos are **NOT** reproductions! They only show that the bug exists, but do not provide enough information on why it happens. Only runnable code provides the most complete context and allows us to properly debug the scenario. That said, in some cases videos/gifs can help explain interaction issues that are hard to describe in text.\r\n\r\n##### A repro should be minimal\r\n\r\nSome users would give us a link to a real project and hope we can help them figure out what is wrong. We generally do not accept such requests because:\r\n\r\n- You are already familiar with your codebase, but we are not. It is extremely time-consuming to hunt a bug in a big and unfamiliar codebase.\r\n\r\n- The problematic behavior may very well be caused by your code rather than by a bug in Vue.\r\n\r\nA **minimal** reproduction means it demonstrates the bug, and the bug only. It should only contain the bare minimum amount of code that can reliably cause the bug. Try your best to get rid of anything that aren't directly related to the problem.\r\n\r\n##### How to create a repro\r\n\r\nUnless your bug can only be reproduced with a built setup, we prefer reproductions made with online coding services like [JSFiddle](https://jsfiddle.net), [JSBin](https://jsbin.com) or [Codepen](https://codepen.io). If your bug involves a build setup, you can create a project using [vue-cli](https://github.com/vuejs/vue-cli) and provide the link to a GitHub repository.\r\n"},"910f":function(e,t){e.exports="Describe how you propose to solve the problem and provide code samples of how the API would work once implemented. Note that you can use [Markdown](https://guides.github.com/features/mastering-markdown/) to format your code blocks.\r\n"},"91e9":function(e,t){e.exports="Please provide link to a GitHub repository that can reproduce the issue.\r\n"},"962d":function(e,t){e.exports="维护开源项目，尤其是流行的项目，是[非常辛苦的工作](https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/)。随着 Vue 在社区越来越受欢迎，我们每天都在收到越来越多的问题， bug 报告，功能需求和 Pull Requests。\r\n\r\n作为一个完全免费使用的开源项目，Vue 的维护人手是有限的。这意味着想要让项目长期的可持续发展，我们必须：\r\n\r\n1. 给予更具体的工作更高的优先级（比如 bug 的修复和新功能的开发）；\r\n2. 提高 issue 处理的效率。\r\n\r\n针对 (1)，我们决定将 GitHub issue 列表严格地限制用于有具体目标和内容的工作。问题和讨论应当发送到更适合它们的场合。\r\n\r\n针对 (2)，我们发现影响 issue 处理效率的最大因素是用户在开 issue 时没有提供足够的信息。这导致我们需要花费大量的时间去跟用户来回沟通，只为了获得一些基本信息好让我们对 issue 进行真正的分析。这正是我们开发这个 app 的理由：我们要确保每个新 issue 都提供了必需的信息，这样能节省维护者和开发者双方的时间。\r\n\r\n最重要的是，请明白一件事：开源项目的用户和维护者之间并不是甲方和乙方的关系，issue 也不是客服。在开 issue 的时候，请抱着一种『一起合作来解决这个问题』的心态，不要期待我们单方面地为你服务。\r\n"},"995c":function(e,t){e.exports='[什么是*最小化重现*，为什么这是必需的？](#why-repro)\r\n\r\n<span class="vue-text danger">请不要乱填一个链接，那只会让你的 issue 被直接关闭。</span>\r\n'},"9c53":function(e,t){e.exports="What do we need to do after opening your repro in order to make the bug happen? Clear and concise reproduction instructions are important for us to be\r\nable to triage your issue in a timely manner. Note that you can use\r\n[Markdown](https://guides.github.com/features/mastering-markdown/) to format lists and code.\r\n"},"9d64":function(e,t,n){e.exports=n.p+"img/logo.c2a605fb.png"},b4f5:function(e,t){e.exports="Explain your use case, context, and rationale behind this feature request. More importantly, what is the **end user experience** you are trying to build that led to the need for this feature?\r\n\r\nAn important design goal of Vue is keeping the API surface small and straightforward. In general, we only consider adding new features that solve a problem that cannot be easily dealt with using existing APIs (i.e. not just an alternative way of doing things that can already be done). The problem should also be common enough to justify the addition.\r\n"},b55d:function(e,t){e.exports="## 在你开始之前……\r\n\r\n首先，虽然我们为了中文用户的方便提供了中文的表单，但在填写时请**尽量使用英文**。Vue 的维护团队并不全是中国人，GitHub 社区也以外国用户为主。如果你想让尽可能多的人能够看懂你的 issue，就请尽量用英文。\r\n\r\n其次，Vue 的 issue 列表只接受 bug 报告或是新功能请求 (feature requests)。这意味着**我们不接受用法问题**。如果你开的 issue 不符合规定，它将会被**立刻关闭**。<br>[为什么要这么严格？](#why-strict)\r\n\r\n对于使用中遇到的问题，请使用以下资源：\r\n\r\n- 仔细阅读 [文档](https://cn.vuejs.org/v2/guide/)\r\n- 观看 [视频教程](https://laracasts.com/series/learn-vue-2-step-by-step) (英文)\r\n- 到 [官方论坛](https://forum.vuejs.org/) 提问（英文）\r\n- 在 [Stack Overflow](https://stackoverflow.com/questions/ask?tags=vue.js) (英文) 或是 [SegmentFault](https://segmentfault.com/t/vue.js)（中文）搜索和提问\r\n- 到 [中文社区](http://www.vue-js.com/) 提问（非官方）\r\n\r\n最后，在开 issue 前，可以先搜索一下以往的旧 issue - 你遇到的问题可能已经有人提了，也可能已经在最新版本中被修正。注意：如果你发现一个已经关闭的旧 issue 在最新版本中仍然存在，请不要在旧 issue 下面留言，而应该用下面的表单开一个新的 issue。\r\n"},b7e5:function(e,t){e.exports="Maintaining open source projects, especially popular ones, is [hard work](https://nolanlawson.com/2017/03/05/what-it-feels-like-to-be-an-open-source-maintainer/). As Vue's user base has grown, we are getting more and more usage questions, bug reports, feature requests and pull requests every single day.\r\n\r\nAs a free and open source project, Vue also has limited maintainer bandwidth. That means the only way to ensure the project's sustainability is to:\r\n\r\n1. Prioritize more concrete work (bug fixes and new features);\r\n2. Improve issue triaging efficiency.\r\n\r\nFor (1), we have decided to use the GitHub issue lists exclusively for work that has well-defined, actionable goals. Questions and open ended discussions should be posted to mediums that are better suited for them.\r\n\r\nFor (2), we have found that issues that do not provide proper information upfront usually results in terribly inefficient back-and-forth communication just to extract the basic information needed for actual triaging. This is exactly why we have created this app: to ensure that every issue is created with the necessary information, and to save time on both sides.\r\n"},bf3c:function(e,t,n){"use strict";n.r(t),t["default"]={_label:"中文",intro:n("b55d"),"intro-modal-title":"为什么要有这么严格的 issue 规定","intro-modal":n("962d"),"repo-title":"相关库","repo-subtitle":"请确保将 issue 发往相关的仓库。","type-title":"这是一个","title-title":"Issue 标题","version-title":"版本","version-subtitle":"请检查问题是否存在于 Vue 的最新版本中。","repro-title":"重现链接","repro-subtitle":n("995c"),"repro-subtitle-links":n("2252"),"repro-modal-title":"关于重现","repro-modal":n("2a4f"),"cli-repro-subtitle-links":n("029f"),"cli-no-repro":"如果你的问题无法用代码重现，点选这里。","router-next-repro-subtitle-links":n("06a9"),"vue-next-repro-subtitle-links":n("6c57"),"node-and-os-title":"Node.js、npm/yarn 以及操作系统信息","node-and-os-subtitle":"请写明 Node.js 版本、npm/yarn 的版本、操作系统的名称以及版本，例如: Node 10.7.0 / yarn 1.7.0 / Windows 10","cli-envinfo-title":"环境信息","cli-envinfo-subtitle":n("e79f"),"browser-and-os-title":"浏览器和操作系统信息","browser-and-os-subtitle":"请写明浏览器和操作系统的名称/版本，例如: Chrome 62 / Windows 10","steps-title":"重现步骤","steps-subtitle":n("66f0"),"expected-title":"期望的结果是什么？","actual-title":"实际的结果是什么？","extra-title":"补充说明（可选）","extra-subtitle":"比如：遇到这个 bug 的业务场景、上下文。","rationale-title":"这个功能解决了什么问题？","rationale-subtitle":n("bfdf"),"proposal-title":"你期望的 API 是怎样的？","proposal-subtitle":n("25d7"),preview:"预览","preview-title":"预览",create:"创建 Issue","bug-report":"错误报告","feature-request":"功能要求","similar-issues":"类似的 issue","show-more":"展开","show-less":"收起","drop-warn":"由于 GitHub API 的限制，这里不支持图片拖拽上传功能。但是你可以先创建 issue，然后在 GitHub 的界面中上传需要的图片。"}},bf5d:function(e,t){e.exports='[What is a _minimal reproduction_, and why is it required?](#why-repro)\r\n\r\n<span class="vue-text danger">Please do not just fill in a random link. We will close your issue if you do that.</span>\r\n'},bfdf:function(e,t){e.exports="请尽可能详尽地说明这个需求的用例和场景。最重要的是：解释清楚是怎样的**用户体验需求**催生了这个功能上的需求。\r\n\r\nVue 的一个重要设计原则是保持 API 的简洁和直接。通常来说，我们只考虑添加在现有的 API 下无法轻松实现的功能。新功能的用例也应当足够常见。\r\n"},c650:function(e,t,n){},cb34:function(e,t,n){"use strict";n("6261")},d3d1:function(e,t){e.exports="## Before You Start...\r\n\r\nThe issue list is reserved exclusively for bug reports and feature requests. That means we do not accept usage questions. If you open an issue that does not conform to the requirements, **it will be closed immediately**.<br>[Why are we so strict about this?](#why-strict)\r\n\r\nFor usage questions, please use the following resources:\r\n\r\n- Read the [docs](https://vuejs.org/guide/)\r\n- Watch [video tutorials](https://laracasts.com/series/learn-vue-2-step-by-step)\r\n- Ask on the [forums](https://forum.vuejs.org/)\r\n- Ask on the [chat](https://chat.vuejs.org)\r\n- Look for / ask questions on [Stack Overflow](https://stackoverflow.com/questions/ask?tags=vue.js)\r\n\r\nAlso try to search for your issue - it may have already been answered or even fixed in the development branch. However, if you find that an old, closed issue still persists in the latest version, you should open a new issue using the form below instead of commenting on the old issue.\r\n"},d3d2:function(e,t){e.exports="If possible, use [the SFC Playground](https://sfc.vuejs.org) to provide a reproduction. If the reproduction does not need a build setup, please provide a link to a [JSFiddle](https://jsfiddle.net/posva/km2qpwx7/), or [CodePen](https://codepen.io/pen). If it requires a build setup, you can use [CodeSandbox](https://codesandbox.io/s/vue-next-s3bf7) or provide a GitHub repo.\r\n"},dc35:function(e,t,n){"use strict";n("15b6")},e79f:function(e,t){e.exports="请使用终端命令行，在项目目录中运行以下命令：\r\n\r\n`vue info`\r\n\r\n并将运行结果复制粘贴到上面的输入框中。\r\n"},f1ed:function(e,t,n){"use strict";n.r(t);n("4917"),n("ac6a");var r=n("00b3"),s={};r.keys().forEach((function(e){var t=e.match(/^\.\/([\w-_$]+)\/index\.js$/);if(t){var n=t[1];s[n]=r(e).default}})),t["default"]=s}});
//# sourceMappingURL=app.5452913e.js.map