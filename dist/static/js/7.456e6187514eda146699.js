webpackJsonp([7],{Ecoy:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("NibL"),i=s("ch/2"),n=s("VU/8"),o=n(e.a,i.a,null,null,null);a.default=o.exports},NibL:function(t,a,s){"use strict";function e(t){if(Array.isArray(t)){for(var a=0,s=Array(t.length);a<t.length;a++)s[a]=t[a];return s}return Array.from(t)}var i=s("NYxO"),n=s("PKY1"),o=(s.n(n),Object.assign||function(t){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e])}return t});a.a={name:"bookContent",data:function(){return{prepage:{pages:10,keyword:""},rate:"7",favs:[],isfav:-1,ismoving:!1,ispagination:!1,total:0,paginationIndex:0}},computed:o({},s.i(i.a)({books:function(t){return t.root.books}})),methods:o({},s.i(i.b)({getBooks:"getBooks"}),{handleSizeChange:function(t){},handleCurrentChange:function(t){this.prepage.pages=t,this.getBooks(this.prepage)},search:function(){this.getBooks(this.prepage),this.ismoving=!0},fav:function(t,a){this.favs.push(t),this.favs=[].concat(e(new Set(this.favs))),localStorage.setItem("favs",JSON.stringify(this.favs)),this.isfav=a},cancelfav:function(t,a){},favorite:function(){this.$router.push({path:"/books/bookFavorite"})}}),watch:{books:function(){this.ispagination=!0,this.total=this.books.total}},created:function(){}}},"ch/2":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"nav-primary"},[s("div",{staticClass:"nav-logo"},[t._v("我要读书")]),t._v(" "),s("div",{staticClass:"nav-input"},[s("el-input",{attrs:{placeholder:"请输入书名",icon:"search","on-icon-click":t.search},model:{value:t.prepage.keyword,callback:function(a){t.prepage.keyword=a},expression:"prepage.keyword"}})],1)]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"nav-items"},[s("el-button",{attrs:{type:"primary",size:"small"}},[t._v("已读")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"},on:{click:t.favorite}},[t._v("收藏夹")]),t._v(" "),s("el-button",{attrs:{type:"primary",size:"small"}},[t._v("购物车")])],1),t._v(" "),s("h2",{directives:[{name:"show",rawName:"v-show",value:t.ismoving,expression:"ismoving"}],staticClass:"ismoving"},[t._v("你搜索的是 “"+t._s(t.prepage.keyword)+"”，一共搜索到了 "+t._s(t.books.total)+" 条记录")]),t._v(" "),s("div",{staticClass:"book-content clearFix"},t._l(t.books.books,function(a,e){return s("div",{staticClass:"book-content-con clearFix"},[s("div",{staticClass:"book-content-img"},[s("img",{attrs:{src:a.image,alt:""}})]),t._v(" "),s("div",{staticClass:"book-content-introduce"},[s("div",[s("a",{attrs:{href:a.alt}},[t._v(t._s(a.title)+t._s(e))])]),t._v(" "),s("div",{staticClass:"book-rating"},[t._v("豆瓣评分："),s("span",{staticClass:"book-rating-col"},[t._v(t._s(a.rating.average))]),t._v("分\n                    "),t._v(" "),s("span",{staticClass:"book-rating-raters"},[t._v("("+t._s(a.rating.numRaters)+"人评价)")])]),t._v(" "),s("div",{staticClass:"book-author"},[t._v(t._s(a.author[0])+"/"+t._s(a.publisher)+"/"+t._s(a.pubdate)+"/"+t._s(a.price))]),t._v(" "),t.isfav!==e?s("el-button",{attrs:{type:"success"},on:{click:function(s){t.fav(a,e)}}},[t._v("收藏")]):s("el-button",{attrs:{type:"success"},on:{click:function(s){t.cancelfav(a,e)}}},[t._v("取消收藏")])],1)])})),t._v(" "),t.ispagination?s("div",{staticClass:"book-pagination"},[s("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()])},i=[],n={render:e,staticRenderFns:i};a.a=n}});
//# sourceMappingURL=7.456e6187514eda146699.js.map