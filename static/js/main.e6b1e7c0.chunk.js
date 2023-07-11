(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},24:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(19),c(20),c(21),c(2)),s=c(8),j=c(4),i=c(1),l=(c(22),c(0)),b=function(){return Object(l.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(l.jsx)("div",{className:"Loader__content"})})};function o(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var h=c(6),d=c.n(h),O=function(e){var t=e.person;return Object(l.jsx)(a.b,{to:"/people/".concat(t.slug),className:d()({"has-text-danger":"f"===t.sex}),children:t.name})},x=function(e){var t=e.people,c=Object(r.h)().slug;return Object(l.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"Sex"}),Object(l.jsx)("th",{children:"Born"}),Object(l.jsx)("th",{children:"Died"}),Object(l.jsx)("th",{children:"Mother"}),Object(l.jsx)("th",{children:"Father"})]})}),Object(l.jsx)("tbody",{children:t.map((function(e){return Object(l.jsxs)("tr",{"data-cy":"person",className:d()({"has-background-warning":e.slug===c}),children:[Object(l.jsx)("td",{children:Object(l.jsx)(O,{person:e})}),Object(l.jsx)("td",{children:e.sex}),Object(l.jsx)("td",{children:e.born}),Object(l.jsx)("td",{children:e.died}),Object(l.jsx)("td",{children:e.mother?Object(l.jsx)(O,{person:e.mother}):e.motherName||"-"}),Object(l.jsx)("td",{children:e.father?Object(l.jsx)(O,{person:e.father}):e.fatherName||"-"})]},e.slug)}))})]})},u=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(j.a)(a,2),h=r[0],d=r[1],O=Object(i.useState)(!1),u=Object(j.a)(O,2),m=u[0],p=u[1],f=Object(i.useState)(""),g=Object(j.a)(f,2),v=g[0],N=g[1];Object(i.useEffect)((function(){d(!0),o().then((function(e){0===e.length&&(d(!0),p(!0)),d(!1),n(e)})).catch((function(){return N("Something went wrong")}))}),[]);var y=c.map((function(e){var t=c.find((function(t){return t.name===e.motherName})),n=c.find((function(t){return t.name===e.fatherName}));return Object(s.a)(Object(s.a)({},e),{},{mother:t,father:n})}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"People Page"}),Object(l.jsx)("div",{className:"block",children:Object(l.jsxs)("div",{className:"box table-container",children:[h&&Object(l.jsx)(b,{}),v&&Object(l.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:v}),m&&0===c.length?Object(l.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):0!==c.length&&Object(l.jsx)(x,{people:y})]})})]})},m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})},p=function(){return Object(l.jsx)("h1",{className:"title",children:"Home Page"})},f=function(){return Object(l.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(a.c,{className:function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(l.jsx)(a.c,{className:function(e){var t=e.isActive;return d()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},g=function(){return Object(l.jsxs)("div",{"data-cy":"app",children:[Object(l.jsx)(f,{}),Object(l.jsx)("main",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)(r.d,{children:[Object(l.jsx)(r.b,{path:"/",element:Object(l.jsx)(p,{})}),Object(l.jsxs)(r.b,{path:"people",children:[Object(l.jsx)(r.b,{index:!0,element:Object(l.jsx)(u,{})}),Object(l.jsx)(r.b,{path:":slug",element:Object(l.jsx)(u,{})})]}),Object(l.jsx)(r.b,{path:"*",element:Object(l.jsx)(m,{})}),Object(l.jsx)(r.b,{path:"home",element:Object(l.jsx)(r.a,{to:"/",replace:!0})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(g,{})}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e6b1e7c0.chunk.js.map