(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{363:function(e,t,n){e.exports=n(484)},484:function(e,t,n){"use strict";n.r(t);var a=n(25),r=n(0),i=n.n(r),c=n(33),o=n.n(c),l=n(493),u=n(495),s=n(494),m=n(17),d=n(95),p=n.n(d),g=n(96),f=n.n(g),h=n(83),b=n.n(h),E=Object(m.createMuiTheme)({palette:{primary:{light:p.a[300],main:p.a[500],dark:p.a[700]},secondary:{light:f.a[300],main:f.a[500],dark:f.a[700]}},typography:{useNextVariants:!0}});var v=function(e){return function(t){return i.a.createElement(m.MuiThemeProvider,{theme:E},i.a.createElement(b.a,null),i.a.createElement(e,t))}},O=n(36),x=n(84),y=n.n(x),j=n(85),w=n.n(j),N=n(181),_=n.n(N),C=n(22),I=n.n(C),S=Object(r.createContext)({currentUser:null,isAuth:!1,draft:null,pins:[],currentPin:null}),k=n(91),T=n(180),A=n.n(T),D=Object(m.withStyles)({root:{cursor:"pointer",display:"flex"},buttonText:{color:"orange"},buttonIcon:{marginLeft:"5px",color:"orange"}})(function(e){var t=e.classes,n=Object(r.useContext)(S).dispatch,a=Object(O.unstable_useMediaQuery)("(max-width: 650px)");return i.a.createElement(k.GoogleLogout,{onLogoutSuccess:function(){n({type:"SIGNOUT_USER"})},buttonText:"Signout",render:function(e){var n=e.onClick;return i.a.createElement("span",{className:t.root,onClick:n},!a&&i.a.createElement(I.a,{variant:"body1",className:t.buttonText},"Signout"),i.a.createElement(A.a,{className:t.buttonIcon}))}})}),L=Object(m.withStyles)(function(e){return{root:{flexGrow:1},grow:{flexGrow:1,display:"flex",alignItems:"center"},icon:{marginRight:e.spacing.unit,color:"green",fontSize:45},mobile:{display:"none"},picture:{height:"50px",borderRadius:"90%",marginRight:2*e.spacing.unit}}})(function(e){var t=e.classes,n=Object(r.useContext)(S).state,a=Object(O.unstable_useMediaQuery)("(max-width: 650px)"),c=n.currentUser;return i.a.createElement("div",{className:t.root},i.a.createElement(y.a,{position:"static"},i.a.createElement(w.a,null,i.a.createElement("div",{className:t.grow},i.a.createElement(_.a,{className:t.icon}),i.a.createElement(I.a,{className:a?t.mobile:"",component:"h1",variant:"h6",color:"inherit",noWrap:!0},"Geo pins")),c&&i.a.createElement("div",{className:t.grow},i.a.createElement("img",{className:t.picture,src:c.picture,alt:c.name}),i.a.createElement(I.a,{className:a?t.mobile:"",variant:"h5",color:"inherit",noWrap:!0},c.name)),i.a.createElement(D,null))))}),P=n(26),R=n.n(P),F=n(37),G=n(29),M=n(54),$=n(47),U=n(183),z=n.n(U),B=n(184),W=n.n(B),q=function(e){var t=e.size,n=e.color,a=e.onClick;return i.a.createElement(W.a,{onClick:a,style:{fontSize:t,color:n}})},Q=n(131),Y=n(185),J=n.n(Y),V=Object(m.withStyles)(function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center"},icon:{margin:e.spacing.unit,fontSize:"80px"}}})(function(e){var t=e.classes;return i.a.createElement("div",{className:t.root},i.a.createElement(J.a,{className:t.icon}),i.a.createElement(I.a,{noWrap:!0,component:"h2",variant:"h6",align:"center",color:"textPrimary",gutterBottom:!0},"Click on the map to add pin"))}),H=n(186),Z=n.n(H),X=n(76),K=n.n(X),ee=n(43),te=n.n(ee),ne=n(188),ae=n.n(ne),re=n(187),ie=n.n(re),ce=n(93),oe=n.n(ce),le=n(189),ue=n.n(le),se=n(92),me=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)(function(){var e=window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;i(e)},[]),new se.GraphQLClient("/graphql",{headers:{authorization:n}})},de=Object(m.withStyles)(function(e){return{form:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:e.spacing.unit},contentField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,width:"95%"},input:{display:"none"},alignCenter:{display:"flex",alignItems:"center"},iconLarge:{fontSize:40,marginRight:e.spacing.unit},leftIcon:{fontSize:20,marginRight:e.spacing.unit},rightIcon:{fontSize:20,marginLeft:e.spacing.unit},button:{marginTop:2*e.spacing.unit,marginBottom:2*e.spacing.unit,marginRight:e.spacing.unit,marginLeft:0}}})(function(e){var t=e.classes,n=me(),c=Object(O.unstable_useMediaQuery)("(max-width: 650px)"),o=Object(r.useContext)(S),l=o.state,u=o.dispatch,s=Object(r.useState)(""),m=Object(a.a)(s,2),d=m[0],p=m[1],g=Object(r.useState)(""),f=Object(a.a)(g,2),h=f[0],b=f[1],E=Object(r.useState)(""),v=Object(a.a)(E,2),x=v[0],y=v[1],j=Object(r.useState)(!1),w=Object(a.a)(j,2),N=w[0],_=w[1],C=function(){p(""),b(""),y(""),u({type:"DELETE_DRAFT"})},k=function(){var e=Object(F.a)(R.a.mark(function e(){var t,n;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(t=new FormData).append("file",h),t.append("upload_preset","geopins"),t.append("cloud_name","dtmt9wiwn"),e.next=7,Z.a.post("https://api.cloudinary.com/v1_1/dtmt9wiwn/image/upload",t);case 7:return n=e.sent,e.abrupt("return",n.data.url);case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(F.a)(R.a.mark(function e(t){var a,r,i,c,o;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),t.preventDefault(),e.next=5,k();case 5:return a=e.sent,r=l.draft,i=r.latitude,c=r.longitude,o={title:d,image:a,content:x,latitude:i,longitude:c},e.next=10,n.request("\nmutation($title: String!, $image: String!, $content: String!, $latitude: Float!, $longitude: Float!){\n    createPin(input: {\n        title: $title,\n        image: $image,\n        content: $content,\n        latitude: $latitude,\n        longitude: $longitude\n    }) {\n        _id\n        createdAt\n        title\n        image\n        content\n        latitude\n        longitude\n        author {\n            _id\n            name\n            email\n            picture\n        }\n    }\n}\n",o);case 10:_(!1),C(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(0),_(!1),console.error(e.t0);case 18:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("form",{className:t.form},i.a.createElement(I.a,{color:"secondary",component:"h2",variant:"h4",className:t.alignCenter},i.a.createElement(ie.a,{className:t.iconLarge})," Pin Location"),i.a.createElement("div",null,i.a.createElement(K.a,{onChange:function(e){return p(e.target.value)},name:"title",label:"Title",placeholder:"Insert pin title"}),i.a.createElement("input",{onChange:function(e){return b(e.target.files[0])},accept:"image/*",id:"image",type:"file",className:t.input}),i.a.createElement("label",{htmlFor:"image"},i.a.createElement(te.a,{style:{color:h&&"green"},component:"span",size:"small",className:t.button},i.a.createElement(ae.a,null)))),i.a.createElement("div",{className:t.contentField},i.a.createElement(K.a,{onChange:function(e){return y(e.target.value)},name:"content",label:"Content",multiline:!0,rows:c?"3":"6",margin:"normal",fullWidth:!0,variant:"outlined"})),i.a.createElement("div",null,i.a.createElement(te.a,{onClick:C,className:t.button,variant:"contained",color:"primary"},i.a.createElement(oe.a,{className:t.leftIcon}),"Discard"),i.a.createElement(te.a,{onClick:T,disabled:!d.trim()||!x.trim()||!h||N,type:"submit",className:t.button,variant:"contained",color:"secondary"},"Submit",i.a.createElement(ue.a,{className:t.rightIcon}))))}),pe=n(194),ge=n.n(pe),fe=n(193),he=n.n(fe),be=n(190),Ee=n.n(be),ve=n(44),Oe=n.n(ve),xe=n(77),ye=n.n(xe),je=n(191),we=n.n(je),Ne=n(86),_e=n.n(Ne),Ce=Object(m.withStyles)(function(e){return{form:{display:"flex",alignItems:"center"},input:{marginLeft:8,flex:1},clearButton:{padding:0,color:"red"},sendButton:{padding:0,color:e.palette.secondary.dark}}})(function(e){var t=e.classes,n=me(),c=Object(r.useContext)(S),o=c.state,l=(c.dispatch,Object(r.useState)("")),u=Object(a.a)(l,2),s=u[0],m=u[1],d=function(){var e=Object(F.a)(R.a.mark(function e(){var t;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={pinId:o.currentPin._id,text:s},e.next=3,n.request("\nmutation($pinId: ID!, $text: String!) {\n    createComment(pinId: $pinId, text: $text){\n        _id\n        createdAt\n        title\n        content\n        image\n        latitude\n        longitude\n        author {\n            _id\n            name\n        }\n        comments {\n            text\n            createdAt\n            author {\n                name\n                picture\n            }\n        }\n    }\n}\n",t);case 3:m("");case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{className:t.form},i.a.createElement(ye.a,{onClick:function(){return m("")},disabled:!s.trim(),className:t.clearButton},i.a.createElement(oe.a,null)),i.a.createElement(Oe.a,{className:t.input,onChange:function(e){return m(e.target.value)},value:s,multiline:!0,placeholder:"Add Comment"}),i.a.createElement(ye.a,{onClick:d,disabled:!s.trim(),className:t.sendButton},i.a.createElement(we.a,null))),i.a.createElement(_e.a,null))}),Ie=n(75),Se=n.n(Ie),ke=n(87),Te=n.n(ke),Ae=n(90),De=n.n(Ae),Le=n(88),Pe=n.n(Le),Re=n(89),Fe=n.n(Re),Ge=n(192),Me=n.n(Ge),$e=Object(m.withStyles)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}})(function(e){var t=e.classes,n=e.comments;return i.a.createElement(Se.a,{className:t.root},n.map(function(e,n){return i.a.createElement(Te.a,{key:n,alignItems:"flex-start"},i.a.createElement(Pe.a,null,i.a.createElement(Fe.a,{src:e.author.picture,alt:e.author.name})),i.a.createElement(De.a,{primary:e.text,secondary:i.a.createElement(i.a.Fragment,null,i.a.createElement(I.a,{className:t.inline,component:"span",color:"textPrimary"},e.author.name)," ",Me()(Number(e.createdAt))," ago")}))}))}),Ue=Object(m.withStyles)(function(e){return{root:{padding:"1em 0.5em",textAlign:"center",width:"100%"},icon:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},text:{display:"flex",alignItems:"center",justifyContent:"center"}}})(function(e){var t=e.classes,n=Object(r.useContext)(S).state.currentPin,a=n.title,c=n.content,o=n.author,l=n.createdAt,u=n.comments;return i.a.createElement("div",{className:t.root},i.a.createElement(I.a,{component:"h2",variant:"h4",color:"primary",gutterBottom:!0},a),i.a.createElement(I.a,{className:t.text,component:"h3",variant:"h6",color:"inherit",gutterBottom:!0},i.a.createElement(he.a,{className:t.icon})," ",o.name),i.a.createElement(I.a,{className:t.text,variant:"subtitle2",color:"inherit",gutterBottom:!0},i.a.createElement(ge.a,{className:t.icon}),Ee()(Number(l),"MMM Do, YYYY")),i.a.createElement(I.a,{variant:"subtitle1",gutterBottom:!0},c),i.a.createElement(Ce,null),i.a.createElement($e,{comments:u}))}),ze=Object(m.withStyles)({root:{minWidth:350,maxWidth:400,maxHeight:"calc(100vh - 64px)",overflowY:"scroll",display:"flex",justifyContent:"center"},rootMobile:{maxWidth:"100%",maxHeight:300,overflowX:"hidden",overflowY:"scroll"}})(function(e){var t,n=e.classes,a=Object(O.unstable_useMediaQuery)("(max-width: 650px)"),c=Object(r.useContext)(S).state,o=c.draft,l=c.currentPin;return o||l?o&&!l?t=de:!o&&l&&(t=Ue):t=V,i.a.createElement(Q.a,{className:a?n.rootMobile:n.root},i.a.createElement(t,null))}),Be=n(98),We=n(99),qe=n.n(We);function Qe(){var e=Object(Be.a)(["\n    subscription {\n        pinDeleted {\n            _id\n        }\n    }\n\n"]);return Qe=function(){return e},e}function Ye(){var e=Object(Be.a)(["\n    subscription {\n        pinUpdated {\n            _id\n             createdAt\n            title\n            content\n            image\n            latitude\n            longitude\n            author {\n                _id\n                name\n            }\n            comments {\n                text\n                createdAt\n                author {\n                    name\n                    picture\n                }\n            }\n        }\n    }\n\n"]);return Ye=function(){return e},e}function Je(){var e=Object(Be.a)(["\n    subscription {\n        pinAdded {\n            _id\n            createdAt\n             title\n            image\n            content\n            latitude\n            longitude\n            author {\n                _id\n                name\n                email\n                picture\n            }\n            comments {\n                text\n                createdAt\n                author {\n                    name\n                    picture\n                }\n            }\n        }\n    }\n"]);return Je=function(){return e},e}var Ve=qe()(Je()),He=qe()(Ye()),Ze=qe()(Qe()),Xe=n(195),Ke=n.n(Xe),et={latitude:30.698972,longitude:76.843102,zoom:13},tt=Object(m.withStyles)({root:{display:"flex"},rootMobile:{display:"flex",flexDirection:"column-reverse"},navigationControl:{position:"absolute",top:0,left:0,margin:"1em"},deleteIcon:{color:"red"},popupImage:{padding:"0.4em",height:200,width:200,objectFit:"cover"},popupTab:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}})(function(e){var t=e.classes,n=me(),c=Object(O.unstable_useMediaQuery)("(max-width: 650px)"),o=Object(r.useContext)(S),l=o.state,u=o.dispatch;Object(r.useEffect)(function(){w()},[]);var s=Object(r.useState)(et),m=Object(a.a)(s,2),d=m[0],p=m[1],g=Object(r.useState)(null),f=Object(a.a)(g,2),h=f[0],b=f[1];Object(r.useEffect)(function(){j()},[]);var E=Object(r.useState)(null),v=Object(a.a)(E,2),x=v[0],y=v[1];console.log({userPosition:h}),console.log({draft:l.draft});var j=function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(function(e){var t=e.coords,n=t.latitude,a=t.longitude;p(Object(G.a)({},d,{latitude:n,longitude:a})),b({latitude:n,longitude:a})})},w=function(){var e=Object(F.a)(R.a.mark(function e(){var t,a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.request("\n{\n  getPins {\n    _id\n    createdAt\n    title\n    image\n    content\n    latitude\n    longitude \n    author {\n      _id\n      name\n      email\n      picture\n    }\n    comments {\n      text\n      createdAt\n      author {\n        _id\n        name\n        picture\n      }\n    }\n  }\n}\n\n");case 2:t=e.sent,a=t.getPins,u({type:"GET_PINS",payload:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),N=function(e){return z()(Date.now(),Number(e.createdAt))<=30?"limegreen":"darkblue"},_=function(){var e=Object(F.a)(R.a.mark(function e(t){var a;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t._id),a={pinId:t._id},e.next=4,n.request("\nmutation($pinId: ID!) {\n    deletePin(pinId: $pinId){\n        _id\n    }\n}\n",a);case 4:y(null);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:c?t.rootMobile:t.root},i.a.createElement($.d,Object.assign({width:"100vw",height:"calc(100vh - 64px)",mapStyle:"mapbox://styles/mapbox/streets-v9",scrollZoom:!c,mapboxApiAccessToken:"pk.eyJ1Ijoic2FybWFkMTk5NSIsImEiOiJjanN4aHRueGYwaTh3NDNvc2kyYXRsZmJhIn0.fub__v2FeOYzQPLVZ6EN8Q",onViewportChange:function(e){return p(e)},onClick:function(e){var t=e.lngLat,n=e.leftButton;if(console.log("clicked"),n){l.draft||u({type:"CREATE_DRAFT"});var r=Object(a.a)(t,2),i=r[0],c=r[1];u({type:"UPDATE_DRAFT_LOCATION",payload:{latitude:c,longitude:i}})}}},d),i.a.createElement("div",{className:t.navigationControl},i.a.createElement($.b,{onViewportChange:function(e){return p(e)}})),h&&i.a.createElement($.a,Object.assign({offsetLeft:-19,offsetTop:-37},h),i.a.createElement(q,{size:40,color:"red"})),l.draft&&i.a.createElement($.a,Object.assign({offsetLeft:-19,offsetTop:-37},l.draft),i.a.createElement(q,{size:40,color:"hotpink"})),l.pins.map(function(e){return i.a.createElement($.a,{key:e._id,offsetLeft:-19,offsetTop:-37,latitude:e.latitude,longitude:e.longitude},i.a.createElement(q,{onClick:function(){return function(e){y(e),u({type:"SET_PIN",payload:e})}(e)},size:40,color:N(e)}))}),x&&i.a.createElement($.c,{anchor:"top",latitude:x.latitude,longitude:x.longitude,closeOnClick:!1,onClose:function(){return y(null)}},i.a.createElement("img",{className:t.popupImage,src:x.image,alt:x.title}),i.a.createElement("div",{className:t.popupTab},i.a.createElement(I.a,null,x.latitude.toFixed(6),", ",x.longitude.toFixed(6),","),l.currentUser._id===x.author._id&&i.a.createElement(te.a,{onClick:function(){return _(x)}},i.a.createElement(Ke.a,{className:t.deleteIcon}))))),i.a.createElement(M.Subscription,{subscription:Ve,onSubscriptionData:function(e){var t=e.subscriptionData.data.pinAdded;console.log(t),u({type:"CREATE_PIN",payload:t})}}),i.a.createElement(M.Subscription,{subscription:He,onSubscriptionData:function(e){var t=e.subscriptionData.data.pinUpdated;console.log(t),u({type:"CREATE_COMMENT",payload:t})}}),i.a.createElement(M.Subscription,{subscription:Ze,onSubscriptionData:function(e){var t=e.subscriptionData.data.pinDeleted;console.log(t),u({type:"DELETE_PIN",payload:t})}}),i.a.createElement(ze,null))}),nt=v(function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(L,null),i.a.createElement(tt,null))}),at=n(492),rt=Object(m.withStyles)({root:{height:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}})(function(e){var t=e.classes,n=Object(r.useContext)(S).dispatch,a=function(){var e=Object(F.a)(R.a.mark(function e(t){var a,r,i,o;return R.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.getAuthResponse().id_token,r=new se.GraphQLClient("/graphql",{headers:{authorization:a}}),e.next=5,r.request("\n{\n  me {\n    _id\n    name\n    email\n    picture\n  }\n}\n");case 5:i=e.sent,o=i.me,n({type:"LOGIN_USER",payload:o}),n({type:"IS_LOGGED_IN",payload:t.isSignedIn()}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),c(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t){return e.apply(this,arguments)}}(),c=function(e){n({type:"IS_LOGGED_IN",payload:!1}),console.error(e)};return i.a.createElement("div",{className:t.root},i.a.createElement(I.a,{component:"h1",variant:"h3",gutterBottom:!0,noWrap:!0,style:{color:"rgb(66,133,244)"}},"Welcome"),i.a.createElement(k.GoogleLogin,{theme:"dark",buttonText:"Login with google",onFailure:c,isSignedIn:!0,onSuccess:a,clientId:"1093938110983-vjamfd3c5biuuep8qeq4cm3fp021hvc7.apps.googleusercontent.com"}))}),it=function(){return Object(r.useContext)(S).state.isAuth?i.a.createElement(at.a,{to:"/"}):i.a.createElement(rt,null)},ct=n(286);function ot(e,t){var n=t.type,a=t.payload;switch(n){case"LOGIN_USER":return Object(G.a)({},e,{currentUser:a});case"IS_LOGGED_IN":return Object(G.a)({},e,{isAuth:a});case"SIGNOUT_USER":return Object(G.a)({},e,{currentUser:null,isAuth:!1});case"CREATE_DRAFT":return Object(G.a)({},e,{currentPin:null,draft:{latitude:0,longitude:0}});case"UPDATE_DRAFT_LOCATION":return Object(G.a)({},e,{draft:a});case"DELETE_DRAFT":return Object(G.a)({},e,{draft:null});case"GET_PINS":return Object(G.a)({},e,{pins:a});case"CREATE_PIN":var r=a,i=e.pins.filter(function(e){return e._id!=r._id});return Object(G.a)({},e,{pins:[].concat(Object(ct.a)(i),[r])});case"SET_PIN":return Object(G.a)({},e,{currentPin:a,draft:null});case"DELETE_PIN":var c=a,o=e.pins.filter(function(e){return e._id!=c._id});return Object(G.a)({},e,{pins:o,currentPin:null});case"CREATE_COMMENT":var l=a,u=e.pins.map(function(e){return e._id===l._id?l:e});return Object(G.a)({},e,{pins:u,currentPin:l});default:return e}}var lt=n(288),ut=function(e){var t=e.component,n=Object(lt.a)(e,["component"]),a=Object(r.useContext)(S).state;return i.a.createElement(s.a,Object.assign({render:function(e){return a.isAuth?i.a.createElement(t,e):i.a.createElement(at.a,{to:"/login"})}},n))},st=(n(469),n(178)),mt=n(287),dt=n(491);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log("production");var pt=new mt.a({uri:"ws://localhost:4000/graphql",options:{reconnect:!0}}),gt=new st.a({link:pt,cache:new dt.a});o.a.render(i.a.createElement(function(){var e=Object(r.useContext)(S),t=Object(r.useReducer)(ot,e),n=Object(a.a)(t,2),c=n[0],o=n[1];return console.log(c),i.a.createElement(l.a,null,i.a.createElement(M.ApolloProvider,{client:gt},i.a.createElement(S.Provider,{value:{state:c,dispatch:o}},i.a.createElement(u.a,null,i.a.createElement(ut,{exact:!0,path:"/",component:nt}),i.a.createElement(s.a,{path:"/login",component:it})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[363,2,1]]]);
//# sourceMappingURL=main.b27a9f94.chunk.js.map