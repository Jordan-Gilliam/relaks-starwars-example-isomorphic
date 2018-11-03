webpackJsonp(["species-list"],{"./pages/species-list.jsx":function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.SpeciesListSync=t.SpeciesList=t.default=void 0;var r=s("../node_modules/babel-runtime/regenerator/index.js"),i=n(r),a=s("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),u=n(a),l=s("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n(l),d=s("../node_modules/babel-runtime/helpers/classCallCheck.js"),p=n(d),c=s("../node_modules/babel-runtime/helpers/createClass.js"),f=n(c),m=s("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=n(m),_=s("../node_modules/babel-runtime/helpers/inherits.js"),v=n(_),g=s("../node_modules/preact/dist/preact.esm.js"),y=s("../node_modules/relaks/preact.js"),b=s("./widgets/list.jsx"),j=n(b),L=s("./widgets/loading.jsx"),N=n(L),S=function(e){function t(){return(0,p.default)(this,t),(0,h.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,u.default)(i.default.mark(function e(t){var s,n,r,a;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.props,n=s.route,r=s.swapi,a={route:n},t.show((0,g.h)(w,a)),e.next=5,r.fetchList("/species/");case 5:return a.species=e.sent,a.species.more(),e.abrupt("return",(0,g.h)(w,a));case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(y.AsyncComponent);S.displayName="SpeciesList";var w=function(e){function t(){return(0,p.default)(this,t),(0,h.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.species,s=e.route;if(!t)return(0,g.h)(N.default,null);var n={items:t,pageName:"species-summary",route:s};return(0,g.h)("div",null,(0,g.h)("h1",null,"Species"),(0,g.h)(j.default,n))}}]),t}(g.Component);w.displayName="SpeciesListSync",t.default=S,t.SpeciesList=S,t.SpeciesListSync=w},"./widgets/list.jsx":function(e,t,s){"use strict";function n(e){var t=e.route,s=e.urls,n=e.items,i=e.field,a=e.pageName;return s&&("string"==typeof s?n=n?[n]:[{url:s,pending:!0}]:s instanceof Array&&(n=s.map(function(e,t){var s=n?n[t]:null;return s||(s={url:e,pending:!0}),s}))),n?0===n.length?(0,r.h)("ul",{className:"empty"},(0,r.h)("li",null,(0,r.h)("span",null,"none"))):(0,r.h)("ul",null,n.map(function(e){var s=t.extractID(e.url),n=t.find(a,{id:s}),u=e.pending?"...":e[i],l={href:n,className:e.pending?"pending":void 0};return(0,r.h)("li",null,(0,r.h)("a",l,u))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var r=s("../node_modules/preact/dist/preact.esm.js");n.defaultProps={field:"name"},n.displayName="List",t.default=n,t.List=n},"./widgets/loading.jsx":function(e,t,s){"use strict";function n(){return(0,r.h)("div",{className:"loading"},(0,r.h)("div",null,(0,r.h)("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var r=s("../node_modules/preact/dist/preact.esm.js");n.displayName="Loading",t.default=n,t.Loading=n}});