webpackJsonp(["film-list"],{"./pages/film-list.jsx":function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.FilmListSync=t.FilmList=t.default=void 0;var l=n("../node_modules/babel-runtime/regenerator/index.js"),r=s(l),i=n("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),a=s(i),u=n("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=s(u),d=n("../node_modules/babel-runtime/helpers/classCallCheck.js"),p=s(d),f=n("../node_modules/babel-runtime/helpers/createClass.js"),c=s(f),m=n("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=s(m),_=n("../node_modules/babel-runtime/helpers/inherits.js"),v=s(_),g=n("../node_modules/preact/dist/preact.esm.js"),y=n("../node_modules/relaks/preact.js"),b=n("./widgets/list.jsx"),j=s(b),L=n("./widgets/loading.jsx"),N=s(L),w=function(e){function t(){return(0,p.default)(this,t),(0,h.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,a.default)(r.default.mark(function e(t){var n,s,l,i;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,s=n.route,l=n.swapi,i={route:s},t.show((0,g.h)(x,i)),e.next=5,l.fetchList("/films/");case 5:return i.planets=e.sent,i.planets.more(),e.abrupt("return",(0,g.h)(x,i));case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);w.displayName="FilmList";var x=function(e){function t(){return(0,p.default)(this,t),(0,h.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.planets,n=e.route;if(!t)return(0,g.h)(N.default,null);var s={items:t,field:"title",pageName:"film-summary",route:n};return(0,g.h)("div",null,(0,g.h)("h1",null,"Films"),(0,g.h)(j.default,s))}}]),t}(g.Component);x.displayName="FilmListSync",t.default=w,t.FilmList=w,t.FilmListSync=x},"./widgets/list.jsx":function(e,t,n){"use strict";function s(e){var t=e.route,n=e.urls,s=e.items,r=e.field,i=e.pageName;return n&&("string"==typeof n?s=s?[s]:[{url:n,pending:!0}]:n instanceof Array&&(s=n.map(function(e,t){var n=s?s[t]:null;return n||(n={url:e,pending:!0}),n}))),s?0===s.length?(0,l.h)("ul",{className:"empty"},(0,l.h)("li",null,(0,l.h)("span",null,"none"))):(0,l.h)("ul",null,s.map(function(e){var n=t.extractID(e.url),s=t.find(i,{id:n}),a=e.pending?"...":e[r],u={href:s,className:e.pending?"pending":void 0};return(0,l.h)("li",null,(0,l.h)("a",u,a))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var l=n("../node_modules/preact/dist/preact.esm.js");s.defaultProps={field:"name"},s.displayName="List",t.default=s,t.List=s},"./widgets/loading.jsx":function(e,t,n){"use strict";function s(){return(0,l.h)("div",{className:"loading"},(0,l.h)("div",null,(0,l.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var l=n("../node_modules/preact/dist/preact.esm.js");s.displayName="Loading",t.default=s,t.Loading=s}});