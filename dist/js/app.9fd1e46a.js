(function(t){function e(e){for(var n,o,l=e[0],i=e[1],c=e[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"3b9d":function(t,e,a){t.exports=a.p+"img/siraphop.3875655f.png"},"56d7":function(t,e,a){"use strict";a.r(e);var n=a("2b0e"),r=a("bc3a"),s=a.n(r),o=a("5f5b"),l=(a("f9e3"),a("2dd8"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("router-view"),a("Footer",{staticClass:"footer"})],1)}),i=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("SCG Assigment")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{on:{click:function(e){return t.$router.push("/")}}},[t._v("Home")]),a("b-nav-item",{on:{click:function(e){return t.$router.push("/about")}}},[t._v("About")])],1),a("b-navbar-nav",{staticClass:"ml-auto"})],1)],1)},p=[],u={name:"NavBar"},d=u,h=a("2877"),f=Object(h["a"])(d,c,p,!1,null,"f44a8416",null),b=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:"Card Title","no-body":""}},[a("b-card-header",{attrs:{"header-tag":"nav"}},[a("b-card-text",[t._v("SCG Assigment Frontend - Siraphop 2019")])],1)],1)},v=[],m={name:"Footer"},_=m,y=Object(h["a"])(_,g,v,!1,null,null,null),x=y.exports,P={name:"App",components:{NavBar:b,Footer:x}},w=P,k=(a("034f"),Object(h["a"])(w,l,i,!1,null,null,null)),O=k.exports,j=a("8c4f"),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container-fluid mt-4"},[t.loading?a("b-spinner",{attrs:{variant:"primary",label:"Spinning"}}):t._e(),t.error?a("h4",[t._v(t._s(t.dataMessage))]):t._e(),a("b-card-group",{attrs:{deck:""}},t._l(t.places,(function(e){return a("Card",{key:e.id,staticClass:"mb-4",staticStyle:{"max-width":"400px","min-width":"300px"},attrs:{place:e},on:{openMap:t.openMap}})})),1)],1),a("div",{staticClass:"page"},[a("h5",{staticClass:"mb-2"},[t._v("Page "+t._s(t.page))]),a("span",[a("b-button",{staticClass:"mx-3 mb-3",staticStyle:{width:"80px"},attrs:{disabled:1==t.page,variant:"primary"},on:{click:function(e){return t.prevPage()}}},[t._v("Previous")]),a("b-button",{staticClass:"mx-3 mb-3",staticStyle:{width:"80px"},attrs:{disabled:3==t.page,variant:"primary"},on:{click:function(e){return t.nextPage()}}},[t._v("Next")])],1)])])},S=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{scopedSlots:t._u([{key:"footer",fn:function(){return[a("small",{staticClass:"text-muted"},[t._v("Rating "+t._s(t.place.rating))])]},proxy:!0}])},[a("b-card-title",[a("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.openMap(t.place.location)}}},[t._v(t._s(t.place.name))])]),a("b-card-text",[t._v(t._s(t.place.formatted_address))])],1)},$=[],T={props:["place"],methods:{openMap(){this.$emit("openMap",this.place.location)}}},E=T,A=Object(h["a"])(E,M,$,!1,null,null,null),F=A.exports,L={name:"home",components:{Card:F},data:()=>({places:[],allPlaces:[],loading:!0,error:!1,dataMessage:"Loading data",page:1,nextPageToken:void 0}),created(){this.initialize()},methods:{async initialize(){try{const t=await s.a.get("/findPlace");this.places=t.data.results,this.nextPageToken=t.data.next_page_token,this.dataLoaded=!0,this.allPlaces.push(this.places),console.log(this.allPlaces)}catch(t){403===t.response.status&&(this.dataMessage=t.response.data.error_message,this.error=!0),console.error(t)}finally{this.loading=!1}},openMap(t){const{lat:e,lng:a}=t,n=`https://www.google.com/maps/search/?api=1&query=${e},${a}`;window.open(n,"_blank")},async nextPage(){if(this.error=!1,this.page<this.allPlaces.length)return this.page++,this.places=this.allPlaces[this.page-1];try{this.places=[],this.loading=!0,this.page++;const t=await s.a.get(`/nextPlace/${this.nextPageToken}`);this.places=t.data.results,this.nextPageToken=t.data.next_page_token,this.allPlaces.push(this.places),this.dataLoaded=!0,console.log(this.allPlaces)}catch(t){403===t.response.status&&(this.dataMessage=t.response.data.error_message,this.error=!0),console.error(t)}finally{this.loading=!1}},prevPage(){this.error=!1,this.page--,this.places=this.allPlaces[this.page-1]}}},N=L,z=(a("cccb"),Object(h["a"])(N,C,S,!1,null,null,null)),B=z.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about my-4"},[n("img",{staticStyle:{width:"70%"},attrs:{src:a("3b9d")}})])}],R={},q=Object(h["a"])(R,G,J,!1,null,null,null),D=q.exports;n["default"].use(j["a"]);var H=new j["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:D}]}),U=a("2f62");n["default"].use(U["a"]);var I=new U["a"].Store({state:{},mutations:{},actions:{}});n["default"].use(o["a"]),n["default"].config.productionTip=!1,s.a.defaults.baseURL="https://agile-crag-49831.herokuapp.com",new n["default"]({router:H,store:I,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,a){},cccb:function(t,e,a){"use strict";var n=a("d563"),r=a.n(n);r.a},d563:function(t,e,a){}});
//# sourceMappingURL=app.9fd1e46a.js.map