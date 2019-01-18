webpackJsonp(["character-list"],{"./pages/character-list.jsx":function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CharacterListSync=t.CharacterList=t.default=void 0;var r=a("../node_modules/babel-runtime/regenerator/index.js"),l=n(r),u=a("../node_modules/babel-runtime/helpers/asyncToGenerator.js"),s=n(u),d=a("../node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=n(d),o=a("../node_modules/babel-runtime/helpers/classCallCheck.js"),c=n(o),f=a("../node_modules/babel-runtime/helpers/createClass.js"),p=n(f),m=a("../node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=n(m),_=a("../node_modules/babel-runtime/helpers/inherits.js"),v=n(_),y=a("../node_modules/react/index.js"),b=n(y),g=a("../node_modules/relaks/index.js"),j=a("./widgets/list.jsx"),E=n(j),L=a("./widgets/loading.jsx"),x=n(L),C=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,s.default)(l.default.mark(function e(t){var a,n,r,u;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props,n=a.route,r=a.swapi,u={route:n},t.show(b.default.createElement(N,u)),e.next=5,r.fetchList("/people/");case 5:return u.people=e.sent,u.people.more(),e.abrupt("return",b.default.createElement(N,u));case 8:case"end":return e.stop()}},e,this)}));return e}()}]),t}(g.AsyncComponent);C.displayName="CharacterList";var N=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.people,a=e.route;if(!t)return b.default.createElement(x.default,null);var n={items:t,field:"name",pageName:"character-summary",route:a};return b.default.createElement("div",null,b.default.createElement("h1",null,"Characters"),b.default.createElement(E.default,n))}}]),t}(y.PureComponent);N.displayName="CharacterListSync",t.default=C,t.CharacterList=C,t.CharacterListSync=N},"./widgets/list.jsx":function(e,t,a){"use strict";function n(e){var t=e.route,a=e.urls,n=e.items,r=e.field,u=e.pageName;return a&&("string"==typeof a&&(a=[a],n=[n]),n=a.map(function(e,t){var a=n?n[t]:null;return a||(a={url:e,pending:!0}),a})),n?0===n.length?l.default.createElement("ul",{className:"empty"},l.default.createElement("li",null,l.default.createElement("span",null,"none"))):l.default.createElement("ul",null,n.map(function(e){var a=t.extractID(e.url),n=t.find(u,{id:a}),s=e.pending?"...":e[r],d={href:n,className:e.pending?"pending":void 0};return l.default.createElement("li",{key:a},l.default.createElement("a",d,s))})):null}Object.defineProperty(t,"__esModule",{value:!0}),t.List=t.default=void 0;var r=a("../node_modules/react/index.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(r);n.defaultProps={field:"name"},n.displayName="List",t.default=n,t.List=n},"./widgets/loading.jsx":function(e,t,a){"use strict";function n(){return l.default.createElement("div",{className:"loading"},l.default.createElement("div",null,l.default.createElement("i",{className:"fab fa-empire fa-spin"})," Loading"))}Object.defineProperty(t,"__esModule",{value:!0}),t.Loading=t.default=void 0;var r=a("../node_modules/react/index.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(r);n.displayName="Loading",t.default=n,t.Loading=n}});