(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bbe4a2a"],{"41d0":function(t,e,i){},ce06:function(t,e,i){"use strict";i("41d0")},d7e2:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",staticStyle:{margin:"0 5%"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.flag_scroll,expression:"flag_scroll"}],staticStyle:{width:"30px",height:"30px",position:"fixed",right:"13px",bottom:"70px",background:"rgb(214 225 199 / 40%)","border-radius":"50%","line-height":"30px"},on:{click:t.backTop}},[t._m(0)]),i("div",{staticStyle:{"margin-bottom":"10px"}},[t.SelectTopList.length>0?i("div",{staticClass:"firstSelect"},[i("p",{class:{activeCss:0==t.firstActive},on:{click:function(e){return t.sortV(0,1)}}},[t._v(" "+t._s(t.SelectTopList[0][0].name)+" ")]),i("p",[t._v("|")]),i("p",{class:{activeCss:1==t.firstActive},on:{click:function(e){return t.sortV(1,3)}}},[t._v(" "+t._s(t.SelectTopList[0][1].name)+" ")]),t.popupShow?i("div",{staticClass:"selectButton",on:{click:t.showPopup}},[t._v("▲筛选")]):i("div",{staticClass:"selectButton",on:{click:t.showPopup}},[t._v(" ▼筛选 ")])]):t._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:t.popupShow,expression:"popupShow"}],staticClass:"selectPopup"},[i("div",{staticClass:"twoSelect"},t._l(t.SelectBottomList[0],(function(e,o){return i("div",{key:o},[i("p",{class:{activeCss:t.twoActive==o},on:{click:function(i){return t.twoV(o,e.value)}}},[t._v(" "+t._s(e.name)+" ")])])})),0),t.SelectBottomList[1]?i("div",{staticClass:"threeSelect"},t._l(t.SelectBottomList[1],(function(e,o){return i("div",{key:o},[i("p",{class:{activeCss:t.threeActive==o},on:{click:function(i){return t.threeV(o,e.value)}}},[t._v(" "+t._s(e.name)+" ")])])})),0):t._e(),t.SelectBottomList[2]?i("div",{staticClass:"fourSelect"},t._l(t.SelectBottomList[2],(function(e,o){return i("div",{key:o},[i("p",{class:{activeCss:t.fourActive==o},on:{click:function(i){return t.fourV(o,e.value)}}},[t._v(" "+t._s(e.name)+" ")])])})),0):t._e()])]),i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[t.nullStatus2?i("van-empty",{attrs:{description:"没有找到你想要的内容"}}):t._e(),i("van-row",{staticStyle:{padding:"0 5%",display:"flex","flex-wrap":"wrap","justify-content":"space-between"},attrs:{gutter:"20"}},[t._l(t.bookList,(function(e,o){return i("van-col",{key:o,staticStyle:{"margin-bottom":"10px",width:"30%"},attrs:{span:"8"},on:{click:function(i){return t.enterBookDetail(e.id)}}},[i("img",{attrs:{width:"100%",src:e.cover+"?imageView&thumbnail=240y336"},on:{error:t.errorImg}}),i("p",{staticStyle:{"text-align":"left","font-size":"14px","margin-top":"10px",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2",overflow:"hidden"}},[t._v(" "+t._s(e.title)+" ")]),i("p",{staticStyle:{"text-align":"left","font-size":"14px",color:"gray",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":"2",overflow:"hidden"}},[t._v(" "+t._s(e.author)+" ")])])})),i("van-col",{staticStyle:{"margin-bottom":"10px",width:"30%"},attrs:{span:"8"}})],2)],1),i("div",{staticClass:"bottom_trim",staticStyle:{"margin-top":"50px"}})],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticStyle:{"font-size":"20px",color:"#308ae3"}},[i("i",{staticClass:"iconfont icon-dingbu"})])}],a=i("2909"),n=i("5530"),c=(i("d3b7"),i("159b"),i("99af"),i("2f62")),l={data:function(){return{SelectTopList:[],SelectBottomList:[],firstActive:0,twoActive:0,threeActive:0,fourActive:0,popupShow:!1,loading:!1,finished:!1,pageValue:1,bookList:[],nullStatus:!0,nullStatus2:!1,payValue:0,sortValue:1,flag_scroll:!1}},computed:Object(n["a"])({},Object(c["c"])(["publishUrl"])),created:function(){var t=this;this.bookList=[],this.axios.get("https://apis.netstart.cn/yunyuedu/source/v2/cat.json?catId=".concat(this.publishUrl)).then((function(e){t.$nextTick((function(){console.log(e.data.categories),e.data.categories.forEach((function(e){console.log(e),e.isTop?t.SelectTopList.push(e.catArray):t.SelectBottomList.push(e.catArray)}))}))}))},methods:{changeSelect:function(){var t=this;this.axios.get("https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=".concat(this.publishUrl,"&pay=").concat(this.payValue,"&sort=").concat(this.sortValue,"&page=").concat(this.pageValue)).then((function(e){return[t.$nextTick((function(){var i;e.data.list?((i=t.bookList).push.apply(i,Object(a["a"])(e.data.list)),t.pageValue++,t.loading=!1):(t.loading=!1,t.finished=!0)}))]}))},onLoad:function(){var t=this;this.axios.get("https://apis.netstart.cn/yunyuedu/source/v2/searchBook.json?catId=".concat(this.publishUrl,"&pay=").concat(this.payValue,"&sort=").concat(this.sortValue,"&page=").concat(this.pageValue)).then((function(e){t.$nextTick((function(){var i;e.data.list&&((i=t.bookList).push.apply(i,Object(a["a"])(e.data.list)),t.pageValue++,t.loading=!1);null!=e.data.list&&void 0!=e.data.list||(t.loading=!1,t.finished=!0)}))}))},backTop:function(){window.scrollTo(0,0)},errorImg:function(t){var e=t.srcElement;e.src=i("bb62"),e.onerror=null},enterBookDetail:function(t){this.$router.push({name:"bookdetail",query:{id:t}})},showPopup:function(){this.popupShow=!this.popupShow},sortV:function(t,e){this.firstActive!=t&&(this.firstActive=t,this.sortValue=e,this.pageValue=1,this.finished=!1,this.bookList=[],this.changeSelect())},twoV:function(t,e){this.twoActive!=t&&(this.twoActive=t,this.$store.dispatch("getPublishUrl",e),this.pageValue=1,this.finished=!1,this.bookList=[],this.changeSelect())},threeV:function(t,e){this.threeActive!==t&&(this.threeActive=t,this.payValue=e,this.pageValue=1,this.finished=!1,this.bookList=[],this.changeSelect())},handleScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.flag_scroll=t>700}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},r=l,u=(i("ce06"),i("2877")),p=Object(u["a"])(r,o,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-5bbe4a2a.0e0b470a.js.map