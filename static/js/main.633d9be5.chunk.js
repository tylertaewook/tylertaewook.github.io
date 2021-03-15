(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),s=(t(83),t(50)),i=t(6),o=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Tyler",middleName:"",lastName:"Kim",message:" Making cool things since 2015\ud83d\ude0e.",icons:[{image:"fa-github",url:"https://github.com/tylertaewook"},{image:"fa-facebook",url:"https://www.facebook.com/tyler.kim.338211"},{image:"fa-instagram",url:"https://www.instagram.com/tylr.kim/"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/tylertaewook/"},{image:"fa-twitter",url:"https://www.twitter.com/tylertaewook/"}]},u={show:!0,heading:"About Me",imageLink:t(84),imageSize:375,message:"My name is Tyler Kim. I'm an incoming freshman for Columbia University who is motivated, initiative, and open to trying new things including but not limited to Data Analysis, Computer Science, and Machine Learning. ",resume:t(56)},d={show:!0,heading:"Featured Projects",gitHubUsername:"tylertaewook",reposLength:0,specificRepos:["project-orbitron","sstp-hist-cnn","arduino-turret","chisktale"]},p={show:!0,heading:"Featured",message:"Throughout my high school career, I've been extremely grateful to have opportunities to lead my peers and make an impact in the Kent community. In my role as the\xa0President of Kent Coding Club, I initiated and led a STEM outreach program where members taught local students programming and robotics using mBots. During weekdays, I assisted my peers to understand concepts easily in math/science as Peer Tutor. In addition, I proposed and implemented a demo chatbot application to make the peer tutor signup process much easier.",images:[{img:t(85),label:"Coding Club",paragraph:"Teaching how to use foldscopes"},{img:t(86),label:"Coding Club",paragraph:"Presenting how to program mBots"},{img:t(87),label:"Coding Club",paragraph:"Presenting how to program mBots"}],imageSize:{width:"615",height:"450"}},g={show:!1,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:75},{name:"Data Structures",value:85},{name:"C/C++",value:65},{name:"JavaScript",value:90},{name:"React",value:65},{name:"HTML/CSS",value:55},{name:"C#",value:80}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:75},{name:"Empathy",value:90},{name:"Organization",value:70},{name:"Creativity",value:90}]},f=!0,h="Get In Touch",b="If you have any questions, or if you just want to say hi, please feel free to email me at",E="tylertaewook@gmail.com",v={show:!0,heading:"Publications",data:[{role:"Intuitive Control Algorithm Development of 4WIS/4WID Using a SpaceMouse",company:"Kent School Guild",date:"Jan 2018 \u2013 June 2020",desc:"Independent research project done as part of the Kent School Guild",descBullets:["Built a vehicle with a spherical wheel that implements a 4 wheel independent steering/driving system with Arduino and C# Winform Application.","Developed a unique control algorithm in Mathematica and wrote/presented a paper in front of school body; Accepted as one of three members in Kent Guild; Won 7 awards at CT Science Fair; patent-pending (Application Number: KR 10-2019-0087022)"]},{role:"Histogram Layer for Texture Classification",company:"UF SSTP",date:"June 2019 \u2013 Aug 2019",desc:"Paper written and presented as part of the 61st Annual UF SSTP; Assisted ML texture analysis research in Professor Alina Zare\u2019s Machine Learning and Sensing Lab by implementing deep network models in PyTorch and conducted various experiments with different parameters",descBullets:["We propose a hybrid model that incorporates a stackable, localized histogram layer on convolutional neural network (CNN) for texture analysis applications.","Instead of using standard histogram operation, we used RBF (Radial Basis Function) to perform a localized binning operation without binning constraints."]}]},w=t(68),k=t.n(w),y=t(24),N=t(38),x=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(N.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(y.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(k.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg ",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me")))})),S=t(17),j=t.n(S),C=t(25),_=t(8),O=(t(56),t(21)),T=t.n(O),P=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),R=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),i=Object(_.a)(s,2),o=i[0],m=i[1],u=r.a.useState(Boolean(n)),d=Object(_.a)(u,2),p=d[0],g=d[1];r.a.useEffect((function(){n&&!P.test(n)?f():m(n)}),[n]);var f=function(){var e=Object(C.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,T.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),g(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},p&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:o,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(p?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},z=t(69),L=t(77),I=t(33),A=t(32),B=t(37),M=t(30),F=t.n(M),K=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},W=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(_.a)(l,2),s=c[0],i=c[1],o=Object(n.useCallback)(Object(C.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get(a);case 3:return t=e.sent,e.abrupt("return",i(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){o()}),[o]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},D=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(_.a)(c,2),i=s[0],o=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return o("just now");var n=1===t?"hour":"hours";return o("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",i))},U=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,i=a.pushed_at;return r.a.createElement(A.a,{md:6},r.a.createElement(B.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(B.a.Body,null,r.a.createElement(B.a.Title,{as:"h5"},t||r.a.createElement(F.a,null)," "),r.a.createElement(B.a.Text,null,n?n||r.a.createElement(F.a,{count:3}):""," "),l?r.a.createElement(K,{svn_url:l}):r.a.createElement(F.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(W,{languages_url:s,repo_url:l}):r.a.createElement(F.a,{count:3}),a?r.a.createElement(D,{star_count:c,repo_url:l,pushed_at:i}):r.a.createElement(F.a,null))))},G={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},H="https://api.github.com",J=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(H,"/users/").concat(t,"/repos?sort=updated&direction=desc"),i="".concat(H,"/repos/").concat(t),o=new Array(l+c.length).fill(G),m=Object(n.useState)([]),u=Object(_.a)(m,2),d=u[0],p=u[1],g=Object(n.useCallback)(Object(C.a)(j.a.mark((function e(){var a,t,n,r,o,m;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,T.a.get(s);case 4:t=e.sent,a=Object(L.a)(t.data.slice(0,l)),e.prev=6,n=Object(z.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=14,T.a.get("".concat(i,"/").concat(o));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:p(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[s,l,c,i]);return Object(n.useEffect)((function(){g()}),[g]),r.a.createElement(N.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(y.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(I.a,null,d.length?d.map((function(e,a){return r.a.createElement(U,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):o.map((function(e,a){return r.a.createElement(U,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},q=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(y.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/tylertaewook","aria-label":"My GitHub"},"Tyler Kim")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}))))},Z="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,Q="undefined"!==typeof window;function V(e){var a=e.element,t=e.useWindow;if(!Q)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function X(e,a,t,r,l){var c=Object(n.useRef)(V({useWindow:r})),s=null,i=function(){var a=V({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};Z((function(){if(Q){var e=function(){l?null===s&&(s=setTimeout(i,l)):i()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}X.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var Y=function(e){var a=r.a.useState(null),t=Object(_.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},$=t(36),ee=t(20),ae=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(_.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(0),o=Object(_.a)(i,2),p=o[0],f=o[1],h=r.a.useRef(),b=Y(h),E=b?b.bottom:0;return X((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),f(t.y))}),[E]),r.a.useEffect((function(){b&&(E-p>=a.current.offsetTop?s(!1):s(!0))}),[E,b,a,p]),r.a.createElement($.a,{ref:h,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement($.a.Brand,{className:"brand",href:"/#home"},"<".concat(m.firstName," />")),r.a.createElement($.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement($.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ee.a,{className:"mr-auto"},d.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#projects"},"Projects"),r.a.createElement(ee.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),u.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#aboutme"},"About"),g.show&&r.a.createElement(ee.a.Link,{className:"nav-link lead",href:"/#skills"},"Skills"))))})),te=t(51),ne=t(74),re=t(73);var le=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(re.a,{className:n?" progress-bar-animation":"progress",now:t}))};function ce(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(le,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var se=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{xs:12,md:6},r.a.createElement(ce,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(A.a,{xs:12,md:6},r.a.createElement(ce,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var ie=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(_.a)(c,2),i=s[0],o=s[1];return X((function(e){e.prevPos;var a=e.currPos;!i&&a.y-400<0&&o(!0)}),[],l),r.a.createElement(N.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(y.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(ne.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(I.a,{className:"pt-3 px-1"},r.a.createElement(se,{skills:t,isScrolled:i}))),r.a.createElement(te.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(I.a,{className:"pt-3 px-1"},r.a.createElement(se,{skills:n,isScrolled:i}))))))},oe=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},me=t(47),ue=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(me.a,null,n.map((function(e,a){return r.a.createElement(me.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(me.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},de=function(e){var a=e.data;return r.a.createElement(A.a,{lg:"6"},r.a.createElement(B.a,{className:"shadow-lg--hover shadow border-0 text-center rounded my-2"},r.a.createElement(B.a.Header,null,r.a.createElement("h5",null,a.company)),r.a.createElement(B.a.Body,{className:"py-5"},r.a.createElement(B.a.Img,{className:" bg-white rounded-circle mb-3 img-center img-fluid shadow-lg",src:a.companylogo,style:{width:"100px"},alt:""}),r.a.createElement(B.a.Title,{tag:"h5"},a.role),r.a.createElement(B.a.Subtitle,null,a.date),r.a.createElement(B.a.Text,{className:"my-3 text-left"},a.desc),r.a.createElement("ul",{className:"text-left"},a.descBullets?a.descBullets.map((function(e){return r.a.createElement("li",{key:e},e)})):null),r.a.createElement("div",null))))},pe=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(y.a,null,r.a.createElement(N.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(I.a,null,a.data.map((function(e){return r.a.createElement(de,{key:e.company,data:e})}))))))},ge=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(R,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),v.show&&r.a.createElement(pe,{experiences:v}),d.show&&r.a.createElement(J,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),p.show&&r.a.createElement(ue,{heading:p.heading,message:p.message,img:p.images,imageSize:p.imageSize}),g.show&&r.a.createElement(ie,{heading:g.heading,hardSkills:g.hardSkills,softSkills:g.softSkills}))})),fe=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/"},o&&r.a.createElement(ae,{ref:e}),r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(ge,{ref:e})}}),r.a.createElement(q,null,f&&r.a.createElement(oe,{heading:h,message:b,email:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},56:function(e,a,t){e.exports=t.p+"static/media/resume.0508e1ae.pdf"},78:function(e,a,t){e.exports=t(116)},83:function(e,a,t){},84:function(e,a,t){e.exports=t.p+"static/media/tylerkim.2cfad6da.png"},85:function(e,a,t){e.exports=t.p+"static/media/cc1.4111f7a7.jpeg"},86:function(e,a,t){e.exports=t.p+"static/media/cc2.a388ffe6.jpeg"},87:function(e,a,t){e.exports=t.p+"static/media/kentgenomebox.bf0d69fe.jpeg"}},[[78,1,2]]]);
//# sourceMappingURL=main.633d9be5.chunk.js.map