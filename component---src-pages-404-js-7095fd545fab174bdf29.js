(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(141),c=a.n(s);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var u=a(144),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Ray Masiclat"}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(51),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(152),u=a.n(c),l=a(142);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var p="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Ray Masiclat",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"Ray Masiclat"}}}}},151:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(142),u=a(145),l=function(e){var t=e.siteTitle;return i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",backgroundColor:"White"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{display:"flex",justifyContent:"center",color:"Black",textDecoration:"none",textAlign:"center",fontFamily:"Alegreya",src:"url('https://fonts.googleapis.com/css?family=Alegreya')"}},t)))};l.propTypes={siteTitle:s.a.string},l.defaultProps={siteTitle:""};var d=l,p=(a(148),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{id:"outer-container"},i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(u.slide,{pageWrapId:"page-wrap",outerContainerId:"outer-container"},i.a.createElement("a",{id:"home",className:"menu-item",href:"/"},"Home"),i.a.createElement("a",{id:"software",className:"menu-item",href:"/about"},"Software"),i.a.createElement("a",{id:"photography",className:"menu-item",href:"/contact"},"Photography"),i.a.createElement("a",{id:"about",className:"menu-item",href:"/contact"},"About")),i.a.createElement("div",{id:"page-wrap"},t))},data:n})});p.propTypes={children:s.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-7095fd545fab174bdf29.js.map