(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){e.exports={title:"BlogPostLayout_title__15Bnq",header:"BlogPostLayout_header__3vH2M",footer:"BlogPostLayout_footer__1lt81",bio:"BlogPostLayout_bio__3xLZg",links:"BlogPostLayout_links__D2bm2",next:"BlogPostLayout_next__lv6ju",content:"BlogPostLayout_content__2UzW5"}},,,,function(e,t,a){e.exports={Pagination:"Pagination_Pagination__2pkLW",previous:"Pagination_previous__hyO_x",next:"Pagination_next__10BnO"}},,function(e,t,a){"use strict";var n=a(6),r=a(0),o=a.n(r),c=a(3);let l=["January","February","March","April","May","June","July","August","September","October","November","December"];var i=a(12),s=a.n(i);t.a=function({blogRoot:e,meta:t,readingTime:a}){let r;if(a){let e=Math.max(Math.round(a.minutes),1),t=Math.round(e/5);r=o.a.createElement(o.a.Fragment,null," ","\u2022"," ",o.a.createElement("span",{className:s.a.readingTime},new Array(t||1).fill("\u2615\ufe0f").join("")," ",e," min read"))}return o.a.createElement("small",{className:s.a.ArticleMeta},o.a.createElement("time",{dateTime:t.date.toUTCString()},function(e){let t=new Date(e),a=l[t.getMonth()],n=t.getDate(),r=t.getFullYear();return"".concat(a," ").concat(n,", ").concat(r)}(t.date)),t.tags&&t.tags.length&&o.a.createElement(o.a.Fragment,null," ","\u2022"," ",o.a.createElement("ul",{className:s.a.tags},t.tags.map(t=>o.a.createElement("li",{key:t},o.a.createElement(c.Link,{href:Object(n.join)(e,"tags",t)},t))))),r||null)}},function(e,t,a){e.exports={tags:"ArticleMeta_tags__3uNHD"}},function(e,t,a){e.exports={title:"BlogIndexPage_title__1RUjs",articlesList:"BlogIndexPage_articlesList__3yCRZ",footer:"BlogIndexPage_footer__3WkOw"}},,function(e,t,a){"use strict";var n=a(8),r=a(4),o=a.n(r),c=a(7),l=a(1),i=a(0),s=a.n(i),u=a(6),m=a(10),g=a(3),p={title:"Adam Saenzpardo's Blog on Tech and Life",author:"J. Adam Saenzpardo",description:"My Struggles With Turning a Hobby Into a Career",indexPageSize:10},d=a(22),b=a(27),f=a.n(b),h=a(28),E=a.n(h);var _=function(e){let t=function({email:e,size:t,defaultURL:a="identicon"}){let n=E()(e.toLowerCase().trim());return"https://www.gravatar.com/avatar/".concat(n,".jpg?s=").concat(t,"&d=").concat(encodeURIComponent(a))}({email:"saenzpardoa@gmail.com",size:56});return s.a.createElement("div",{className:"\n      ".concat(f.a.Bio,"\n      ").concat(e.className||"","\n    ")},s.a.createElement("img",{src:t,alt:"Me"}),s.a.createElement("p",null,"This is my first attempt at creating a place to document my thoughts.",s.a.createElement("br",null),"\"I'm new and I don't know what to do with my hands!!\"",s.a.createElement("br",null),"Let me know what you think."))},j=a(9),v=a.n(j);var O=function({blogRoot:e,pageCount:t,pageNumber:a}){return s.a.createElement("small",{className:v.a.Pagination},1!==a&&s.a.createElement(g.Link,{className:v.a.previous,href:Object(u.join)(e,"page",String(a-1))},"\u2190 Previous"),s.a.createElement("span",{className:v.a.pages}," ","Page ",s.a.createElement("span",{className:v.a.current},a),"/",s.a.createElement("span",{className:v.a.count},t)," "),a<t&&s.a.createElement(g.Link,{className:v.a.next,href:Object(u.join)(e,"page",String(a+1))},"Next \u2192"))},x=a(13),w=a.n(x);var y=function({blogRoot:e,pageCount:t,pageNumber:a,postRoutes:n}){return s.a.createElement("div",null,s.a.createElement("header",null,s.a.createElement("h1",{className:w.a.title},s.a.createElement(g.Link,{href:e},p.title)),s.a.createElement(_,null)),s.a.createElement("ul",{className:w.a.articlesList},n.map(t=>s.a.createElement("li",{key:t.url.href},s.a.createElement(d.a,{blogRoot:e,route:t})))),t>1&&s.a.createElement(O,{blogRoot:e,pageCount:t,pageNumber:a}),s.a.createElement("footer",{className:w.a.footer},s.a.createElement("div",null,s.a.createElement("a",{href:"/rss.xml",target:"_blank",style:{float:"right"}},"RSS"),s.a.createElement(g.Link,{href:"/about"},"About")," \u2022 ",s.a.createElement(g.Link,{href:"/tags"},"Tags")," ","\u2022"," ",s.a.createElement("a",{href:"https://github.com/saenzpardo"},"My GitHub"))))},L=a(29),N=a.n(L);var k=function(){return s.a.createElement("div",{className:N.a.NotFound},s.a.createElement("h1",null,"404 - Not Found"))},R=a(18),P=a.n(R);var B=function({active:e,className:t,style:a}){return s.a.createElement("div",{className:"\n        ".concat(P.a.LoadingIndicator,"\n        ").concat(e?P.a.active:"","\n        ").concat(t,"\n      "),style:a})},D=a(19),I=a.n(D);var S=function({blogRoot:e,isViewingIndex:t}){let a=Object(g.useLoadingRoute)();return s.a.createElement("div",{className:I.a.container},s.a.createElement(B,{active:!!a}),!t&&s.a.createElement("header",null,s.a.createElement("h3",{className:I.a.title},s.a.createElement(g.Link,{href:e},p.title))),s.a.createElement("main",null,s.a.createElement(g.NotFoundBoundary,{render:()=>s.a.createElement(k,null)},s.a.createElement(g.View,null))))},A=a(20),C=a(11),M=a(5),z=a.n(M);var T=function({blogRoot:e}){let t=Object(g.useCurrentRoute)(),a=t.title,n=t.data,r=t.url,o=Object(g.useView)(),c=o.connect,l=o.content,i=o.head,u=l.MDXComponent,m=l.readingTime;return c(s.a.createElement(s.a.Fragment,null,i,s.a.createElement("article",{className:z.a.container},s.a.createElement("header",{className:z.a.header},s.a.createElement("h1",{className:z.a.title},s.a.createElement(g.Link,{href:r.pathname},a)),s.a.createElement(C.a,{blogRoot:e,meta:n,readingTime:m})),s.a.createElement(A.a,{components:{a:g.Link,wrapper:({children:e})=>s.a.createElement("div",{className:z.a.content},e)}},s.a.createElement(u,null)),s.a.createElement("footer",{className:z.a.footer},s.a.createElement("h3",{className:z.a.title},s.a.createElement(g.Link,{href:e},p.title)),s.a.createElement(_,{className:z.a.bio}),s.a.createElement("section",{className:z.a.links},n.previousDetails&&s.a.createElement(g.Link,{className:z.a.previous,href:n.previousDetails.href},"\u2190 ",n.previousDetails.title),n.nextDetails&&s.a.createElement(g.Link,{className:z.a.next,href:n.nextDetails.href},n.nextDetails.title," \u2192"))))))},F=a(14),$=a(30),H=a.n($);const J={"./2020-07-30-first-post/post.js":function(){return a.e(8).then(a.bind(null,59))},"./2020-08-03-strings/post.js":function(){return a.e(9).then(a.bind(null,60))}},W=e=>J[e](),U=Object.keys(J),V=/^((\d{1,4})-(\d{1,4})-(\d{1,4}))[/-]/;let X=U.map(e=>{let t,a=H()(e.replace(/post.jsx?$/,"").replace(/(\d)\/(\d)/,"$1-$2")).replace(/^[-.]+|[.-]+$/g,"").replace(V,"$1/"),n=a.match(V);return n&&(t=new Date(n[2],parseInt(n[3])-1,n[4])),{slug:a,pathname:e,date:t}});var Z=(X=Object(m.sortBy)(X,["slug"]).reverse()).map(({slug:e,pathname:t,date:a},r)=>({getPage:l.h(Object(c.a)(o.a.mark(function i(){var s,m,g,p,d,b,f,h,E,_,j;return o.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,W(t);case 2:if(s=i.sent,m=s.default,g=m.title,p=m.getContent,d=Object(F.a)(m,["title","getContent"]),0===r){i.next=11;break}return _=X[r-1],i.next=9,W(_.pathname);case 9:f=i.sent.default,b=_.slug;case 11:if(!(r+1<X.length)){i.next=17;break}return j=X[r+1],i.next=15,W(j.pathname);case 15:E=i.sent.default,h=j.slug;case 17:return i.abrupt("return",l.m({title:g,getData:(r,o)=>Object(n.a)({date:a,pathname:t,slug:e,previousDetails:f&&{title:f.title,href:Object(u.join)(o.blogRoot,"posts",b)},nextDetails:E&&{title:E.title,href:Object(u.join)(o.blogRoot,"posts",h)}},d),getView:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return t=e.sent,a=t.default,r=Object(F.a)(t,["default"]),e.abrupt("return",Object(n.a)({MDXComponent:a},r));case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()}));case 18:case"end":return i.stop()}},i)}))),slug:e}));let q=Object(m.chunk)(Z,p.indexPageSize),G=q.map((e,t)=>["/"+(t+1),Object(l.h)(function(){var a=Object(c.a)(o.a.mark(function a(n,r){var i,m;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("HEAD"!==n.method){a.next=2;break}return a.abrupt("return",Object(l.m)());case 2:return a.next=4,Promise.all(e.map(function(){var e=Object(c.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(u.join)(r.blogRoot,"posts",t.slug),e.next=3,Object(l.l)({method:"HEAD",routes:Y,url:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 4:return i=a.sent,m=p.title,t>0&&(m+=" \u2013 page ".concat(t+1)),a.abrupt("return",Object(l.m)({title:m,view:s.a.createElement(y,{blogRoot:r.blogRoot,pageNumber:t+1,pageCount:q.length,postRoutes:i})}));case 8:case"end":return a.stop()}},a)}));return function(e,t){return a.apply(this,arguments)}}())]);const Y=Object(l.b)(Object(l.n)((e,t)=>Object(n.a)(Object(n.a)({},t),{},{blogRoot:e.mountpath||"/"})),Object(l.p)((e,t)=>{let a="/"===e.path||/^\/page\/\d+$/.test(e.path);return s.a.createElement(S,{blogRoot:t.blogRoot,isViewingIndex:a})}),Object(l.j)({"/":G.shift()[1],"/page":Object(l.j)(Object(n.a)({"/1":Object(l.k)((e,t)=>t.blogRoot)},Object(m.fromPairs)(G))),"/posts":Object(l.b)(Object(l.p)((e,t)=>s.a.createElement(T,{blogRoot:t.blogRoot})),Object(l.j)(Object(m.fromPairs)(Z.map(e=>["/"+e.slug,e.getPage])))),"/tags":Object(l.g)(()=>a.e(3).then(a.bind(null,61))),"/about":Object(l.g)(()=>a.e(7).then(a.bind(null,58))),"/rss":Object(l.m)()}));t.a=Y},,,function(e,t,a){e.exports={LoadingIndicator:"LoadingIndicator_LoadingIndicator__BXz9Z",active:"LoadingIndicator_active__1OwxD","LoadingIndicator-animation":"LoadingIndicator_LoadingIndicator-animation__25awj"}},function(e,t,a){e.exports={container:"BlogLayout_container__32Xhe",title:"BlogLayout_title__2palc"}},,,function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(3),c=a(11),l=a(26),i=a.n(l);t.a=function({blogRoot:e,route:t}){return r.a.createElement("article",{className:i.a.ArticleSummary},r.a.createElement("h2",null,r.a.createElement(o.Link,{href:t.url.href},t.title)),r.a.createElement(c.a,{blogRoot:e,meta:t.data}),r.a.createElement("p",null,t.data.spoiler))}},,,,function(e,t,a){e.exports={ArticleSummary:"ArticleSummary_ArticleSummary__Dy8Xa"}},function(e,t,a){e.exports={Bio:"Bio_Bio__3OPvt"}},,function(e,t,a){},,,function(e,t,a){e.exports=a(44)},,,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(4),r=a.n(n),o=a(7),c=a(23),l=a(1),i=a(0),s=a.n(i),u=a(16),m=a.n(u),g=a(3),p=a(31),d=(a(40),a(15));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(c.a)({routes:d.a,main:()=>Object(o.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.d)({routes:d.a}),e.next=3,t.getRoute();case 3:!0,(0,m.a.hydrate)(s.a.createElement(p.a,null,s.a.createElement(g.Router,{navigation:t})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()});case 7:case"end":return e.stop()}},e)}))()})}],[[32,1,2]]]);
//# sourceMappingURL=main.2953b59e.chunk.js.map