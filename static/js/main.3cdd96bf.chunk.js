(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(3),s=n.n(c),o=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))},a=(n(12),n(4)),i=n(5),h=n(7),l=n(6),b=n(0),u=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:" tc bg-light-green dib br3 ma2 spa3 grow bw-2 shadow-5",children:[Object(b.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h2",{children:[" ",t," "]}),Object(b.jsxs)("p",{children:[" ",n," "]})]})]})},d=function(e){var t=e.robots;return Object(b.jsx)("div",{children:t.map((function(e,n){return Object(b.jsx)(u,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},j=function(e){var t=e.searchChange;return Object(b.jsx)("div",{className:"pa2",children:Object(b.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"text",placeholder:"serach robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"1px solid blue",height:"500px"},children:e.children})},g=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{className:"f1",children:" RoboFriends "}),Object(b.jsx)(j,{searchChange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(d,{robots:r})})]}):Object(b.jsx)("h1",{className:"f1 tc",children:" Loading "})}}]),n}(r.Component));n(15);s.a.render(Object(b.jsx)(g,{}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.3cdd96bf.chunk.js.map