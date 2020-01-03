(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,n){"use strict";n.r(t);n(49);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(151),l=n(158),c=n.n(l),s=n(157),f=n.n(s),d=n(260),p=n(154),m=n(266),h=n.n(m),y=n(267),g=n.n(y),b=n(268),v=n.n(b),w=n(269),S=[{title:"STM Display",description:"Display/Dashboard for formula racing car. Written in C++ and running on an STM32 chipset powered by ARM.\n    Picture shows the STM32F29 discovery board in which the display was programmed.",github:"https://github.com/SchulichRacingElectrical/STMDisplay",image:n.n(w).a},{title:"Tabletop Helper",website:"https://arhamhumayun.me/Tabletop-Helper",github:"https://github.com/arhamHumayun/Tabletop-Helper",description:"A solo side project made to help speed up TTRPG combat by providing a robust online dice roller and multiple stat generators.\n    Made with React and utilizes many components from react-bootstrap.",image:h.a},{title:"Schulich Velocity",github:"https://github.com/SchulichRacingElectrical/SchulichVelocity",image:v.a,description:"Graphing web app made with React with the purpose to view, store, and analyse data from a formula race car.\n    Developed by the Electrical/Software team in Schulich Racing. My role in the development of this app was to implement GraphJS as our\n    visualization tool, and to write the client side code for data processing."},{title:"SRVis",github:"https://github.com/SchulichRacingElectrical/SRVis",description:"Data visualization library written in Python using Pandas, NumPy, and Bokeh as our graphing solution.",image:g.a}];n.d(t,"query",function(){return E});var x=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=c()(this,"props.data.site.siteMetadata.title"),t=c()(this,"props.data.site.siteMetadata.description");return o.a.createElement(p.a,null,o.a.createElement(f.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:"Projects | "+e}),o.a.createElement("h2",null,"Project Portfolio"),o.a.createElement("br",null),o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement(d.Grid,{fluid:!0},o.a.createElement(d.Row,null,S.map(function(e){return o.a.createElement(d.Col,{xs:12,sm:12,md:6,lg:6,key:e.title},o.a.createElement(u.Link,{to:"/portfolio/view/",state:e,key:e.title},o.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},o.a.createElement("div",{style:{width:250,height:200,margin:10,background:"url("+e.image+")",backgroundSize:"cover",backgroundPosition:"center center"}}),o.a.createElement("p",null,e.title))))})))))},t}(o.a.Component),E=(t.default=x,"3998338720")},149:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return c});var a=n(155),r=n.n(a),i=n(156),o=n.n(i),u=new r.a(o.a);var l=u.rhythm,c=u.scale},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},151:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(148),l=n.n(u);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var c=n(150),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var f=n(34);n.d(t,"parsePath",function(){return f.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){"use strict";t.a={Email:"arham099@outlook.com"}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),u=n(48),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,n){"use strict";n(33);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),u=n(149),l=function(){return o.a.createElement("div",{style:{textAlign:"center"}})},c=n(151),s=(n(152),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row",justifyContent:"center"}},o.a.createElement("div",{style:{width:Object(u.a)(24),maxWidth:500,display:"flex",flexDirection:"row",justifyContent:"space-between"}},o.a.createElement(c.Link,{to:"/"},"Home"),o.a.createElement(c.Link,{to:"/portfolio"},"Projects"),o.a.createElement("a",{href:"https://github.com/arhamHumayun",target:"_new"},"Github"),o.a.createElement(c.Link,{to:"/contact"},"Contact")))},t}(i.Component)),f={rootContainer:{display:"flex",flexDirection:"row",justifyContent:"center",fontSize:10,textTransform:"uppercase",letterSpacing:2,color:"gray",paddingTop:15}},d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:f.rootContainer},"Built with ",o.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank"},"GatsbyJS"))},t}(i.Component),p=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children,t=this.props.style,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(32),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)},a=Object.assign({},n,t);return o.a.createElement("div",{style:a},o.a.createElement(l,null),o.a.createElement(s,null),o.a.createElement("br",null),e,o.a.createElement(d,null))},t}(o.a.Component);t.a=p},168:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return i.default&&i.default[e]?i.default[e]:e};var a,r=n(262),i=(a=r)&&a.__esModule?a:{default:a}},169:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a={};Object.keys(t).filter(function(t){return"children"===t||!e[t]}).forEach(function(e){return a[e]=t[e]});var r=n.filter(function(e){return e}).join(" ");return Object.assign({},a,{className:r})}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ViewportSizeType=t.ColumnSizeType=void 0;var a,r=n(4),i=(a=r)&&a.__esModule?a:{default:a};t.ColumnSizeType=i.default.oneOfType([i.default.number,i.default.bool]),t.ViewportSizeType=i.default.oneOf(["xs","sm","md","lg","xl"])},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColumnProps=t.Col=t.getRowProps=t.Row=t.Grid=void 0;var a=n(261);Object.defineProperty(t,"getRowProps",{enumerable:!0,get:function(){return a.getRowProps}});var r=n(264);Object.defineProperty(t,"getColumnProps",{enumerable:!0,get:function(){return r.getColumnProps}});var i=l(n(265)),o=l(a),u=l(r);function l(e){return e&&e.__esModule?e:{default:e}}t.Grid=i.default,t.Row=o.default,t.Col=u.default},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getRowProps=f,t.default=d;var a=l(n(168)),r=l(n(0)),i=l(n(4)),o=l(n(169)),u=n(175);function l(e){return e&&e.__esModule?e:{default:e}}var c=["start","center","end","top","middle","bottom","around","between"],s={reverse:i.default.bool,start:u.ViewportSizeType,center:u.ViewportSizeType,end:u.ViewportSizeType,top:u.ViewportSizeType,middle:u.ViewportSizeType,bottom:u.ViewportSizeType,around:u.ViewportSizeType,between:u.ViewportSizeType,className:i.default.string,tagName:i.default.string,children:i.default.node};function f(e){return(0,o.default)(s,e,function(e){for(var t=[e.className,(0,a.default)("row")],n=0;n<c.length;++n){var r=c[n],i=e[r];i&&t.push((0,a.default)(r+"-"+i))}return e.reverse&&t.push((0,a.default)("reverse")),t}(e))}function d(e){return r.default.createElement(e.tagName||"div",f(e))}d.propTypes=s},262:function(e,t,n){},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getColumnProps=d,t.default=p;var a=l(n(0)),r=l(n(4)),i=l(n(169)),o=l(n(168)),u=n(175);function l(e){return e&&e.__esModule?e:{default:e}}var c={xs:u.ColumnSizeType,sm:u.ColumnSizeType,md:u.ColumnSizeType,lg:u.ColumnSizeType,xl:u.ColumnSizeType,xsOffset:r.default.number,smOffset:r.default.number,mdOffset:r.default.number,lgOffset:r.default.number,xlOffset:r.default.number,first:u.ViewportSizeType,last:u.ViewportSizeType,className:r.default.string,tagName:r.default.string,children:r.default.node},s={xs:"col-xs",sm:"col-sm",md:"col-md",lg:"col-lg",xl:"col-xl",xsOffset:"col-xs-offset",smOffset:"col-sm-offset",mdOffset:"col-md-offset",lgOffset:"col-lg-offset",xlOffset:"col-xl-offset"};function f(e){var t=[];return e.className&&t.push(e.className),e.first&&t.push((0,o.default)("first-"+e.first)),e.last&&t.push((0,o.default)("last-"+e.last)),Object.keys(e).filter(function(e){return s[e]}).map(function(t){return(0,o.default)("number"==typeof(n=e[t])&&isFinite(n)&&Math.floor(n)===n?s[t]+"-"+e[t]:s[t]);var n}).concat(t)}function d(e){return(0,i.default)(c,e,f(e))}function p(e){var t=e.tagName,n=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["tagName"]);return a.default.createElement(t||"div",d(n))}p.propTypes=c},265:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var a=u(n(0)),r=u(n(4)),i=u(n(169)),o=u(n(168));function u(e){return e&&e.__esModule?e:{default:e}}var l={fluid:r.default.bool,className:r.default.string,tagName:r.default.string,children:r.default.node};function c(e){var t=(0,o.default)(e.fluid?"container-fluid":"container"),n=[e.className,t];return a.default.createElement(e.tagName||"div",(0,i.default)(l,e,n))}c.propTypes=l},266:function(e,t,n){e.exports=n.p+"static/tthScreenshot-96b6a3119891f24d9c54275dfa9fdf1f.png"},267:function(e,t,n){e.exports=n.p+"static/srvisScreenshot-65f1a6d7a928859b24bf7ba04dcae413.png"},268:function(e,t,n){e.exports=n.p+"static/schulichVelocityScreenshot-6c6bbacab453b86a674423fea916461b.png"},269:function(e,t,n){e.exports=n.p+"static/stm32picture-4e0f085601ec5c3adcc6928d2feb5f63.jpg"}}]);
//# sourceMappingURL=component---src-pages-portfolio-index-js-570fd54da9735e3b26ea.js.map