(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{234:function(t,e,n){t.exports=n.p+"img/sl.1c20189.png"},235:function(t,e,n){t.exports=n.p+"img/cher.c8db72d.png"},277:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-4"},[e("img",{staticClass:"w-60",attrs:{src:n(234),alt:"Secret Level"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center space-x-4 md:space-x-6 pt-6 pb-8 space-y-2 md:space-y-5"},[r("img",{staticClass:"h-16 md:h-20 w-20 md:w-20 bg-gray-100 rounded-full",attrs:{src:n(235)}}),t._v(" "),r("div",{staticClass:"flex-1 space-y-2"},[r("div",{staticClass:"text-sm md:text-md leading-tight text-gray-500"},[t._v("Меня зовут Слава Чернышёв. Я занимаюсь кибербезопасностью.")]),t._v(" "),r("div",{staticClass:"text-sm md:text-md leading-tight text-gray-500"},[t._v("\n          Присоединяйтесь: "),r("a",{staticClass:"text-indigo-600 hover:text-indigo-700",attrs:{href:"https://t.me/slavahello"}},[t._v("t.me/slavahello")])])])])}],l=n(6),c=(n(38),{asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("digests").only(["title","description","slug","createdAt","ttr"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"})}}}),d=n(37),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-16"},[n("main",{staticClass:"divide-y divide-gray-200"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",{staticClass:"divide-y divide-gray-200"},t._l(t.posts,(function(e){return n("li",{key:e.slug,staticClass:"py-12"},[n("article",{staticClass:"space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline"},[n("dl",[n("dt",{staticClass:"sr-only"},[t._v("Published on")]),t._v(" "),n("dd",{staticClass:"text-base leading-6 font-medium text-gray-500"},[n("time",{attrs:{datetime:e.createdAt}},[t._v(t._s(t.formatDate(e.createdAt)))])])]),t._v(" "),n("div",{staticClass:"space-y-5 xl:col-span-3"},[n("div",{staticClass:"space-y-6"},[n("h2",{staticClass:"text-2xl leading-8 font-bold tracking-tight"},[n("nuxt-link",{staticClass:"text-gray-900",attrs:{to:{name:"digests-slug",params:{slug:e.slug}}}},[t._v(t._s(e.title))])],1),t._v(" "),n("div",{staticClass:"prose max-w-none text-gray-500"},[n("p",[t._v(t._s(e.description))])])]),t._v(" "),n("div",{staticClass:"text-base leading-6 font-medium"},[n("nuxt-link",{staticClass:"text-indigo-600 hover:text-indigo-700",attrs:{to:{name:"digests-slug",params:{slug:e.slug}}}},[t._v("Читать дальше · "+t._s(e.ttr))])],1)])])])})),0)])])}),r,!1,null,null,null);e.default=component.exports}}]);