(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{235:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(37),r(38),r(123),{data:function(){return{searchQuery:"",posts:[]}},watch:{searchQuery:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e){r.next=3;break}return t.posts=[],r.abrupt("return");case 3:return r.next=5,t.$content("posts").limit(10).search(e).fetch();case 5:t.posts=r.sent;case 6:case"end":return r.stop()}}),r)})))()}}}),c=r(41),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],attrs:{type:"search",autocomplete:"off",placeholder:"Поиск..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),e.posts.length?r("ul",e._l(e.posts,(function(t){return r("li",{key:t.slug},[r("nuxt-link",{attrs:{to:{name:"posts-slug",params:{slug:t.slug}}}},[e._v(e._s(t.title))])],1)})),0):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);