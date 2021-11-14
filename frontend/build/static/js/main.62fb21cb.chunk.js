(this["webpackJsonpcreate-react-app"]=this["webpackJsonpcreate-react-app"]||[]).push([[0],{165:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(35),s=a.n(r),c=a(208),i=a(219),o=a(222),l=a(223),d=a(18),j=(a(117),a(1));var b=a(15),u=a(11),x=a(218),m=a(224),h=a(201),p=a(213),f=a(229),O=a(214),g=a(211),v=a(215),w=function(e){var t=e.editSelectedPlace,a=e.selectedPlace;return Object(j.jsxs)(m.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(m.a,{src:"https://picsum.photos/600/300",component:"img",sx:{borderRadius:"16px"}}),Object(j.jsxs)(h.a,{spacing:4,sx:{mt:4},children:[Object(j.jsxs)(m.a,{sx:{display:"flex"},children:[Object(j.jsx)(p.a,{label:"Name",placeholder:"Name",variant:"standard",sx:{flexGrow:1,mr:4},value:a.name,onChange:function(e){return t({name:e.target.value})}}),Object(j.jsxs)(f.a,{variant:"standard",sx:{width:"13rem"},children:[Object(j.jsx)(O.a,{id:"type-label",children:"Type"}),Object(j.jsxs)(g.a,{labelId:"type-label",id:"type-select",label:"Type",value:a.type,defaultValue:"HOUSING",onChange:function(e){return t({type:e.target.value})},children:[Object(j.jsx)(v.a,{value:"HOUSING",children:"Housing"}),Object(j.jsx)(v.a,{value:"FOOD",children:"Food"}),Object(j.jsx)(v.a,{value:"AMUSEMENT",children:"Amusement"}),Object(j.jsx)(v.a,{value:"ENTERTAINMENT",children:"Entertainment"})]})]})]}),Object(j.jsxs)(m.a,{sx:{mb:4},children:[Object(j.jsx)(p.a,{variant:"standard",id:"datetime-local",label:"From",type:"datetime-local",defaultValue:"2017-05-24T10:30",sx:{width:"18rem",mr:4},InputLabelProps:{shrink:!0}}),Object(j.jsx)(p.a,{variant:"standard",id:"datetime-local",label:"To",type:"datetime-local",defaultValue:"2017-05-24T10:30",sx:{width:"18rem"},InputLabelProps:{shrink:!0}})]}),Object(j.jsxs)(m.a,{sx:{display:"flex"},children:[Object(j.jsx)(p.a,{label:"Street",variant:"standard",sx:{flexGrow:1,mr:4}}),Object(j.jsx)(p.a,{label:"City",variant:"standard",sx:{width:"18rem"}})]}),Object(j.jsxs)(m.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsx)(p.a,{label:"State",variant:"standard",sx:{width:"30%"}}),Object(j.jsx)(p.a,{label:"Zipcode",variant:"standard",sx:{width:"30%"}}),Object(j.jsx)(p.a,{label:"Country",variant:"standard",sx:{width:"30%"}})]})]})]})},y=a(216),S=a(203),k=a(204),T=a(205),C=function(e){var t=e.isEditable,a=e.handleEdit,n=e.handleSave;return Object(j.jsxs)(m.a,{sx:{display:"flex",justifyContent:"flex-end",height:"3rem",mt:"auto"},children:[t?Object(j.jsx)(y.a,{variant:"contained",size:"large",sx:{mr:2,width:"7rem"},onClick:n,startIcon:Object(j.jsx)(S.a,{}),children:"Save"}):Object(j.jsx)(y.a,{variant:"contained",size:"large",sx:{mr:2,width:"7rem"},onClick:a,startIcon:Object(j.jsx)(k.a,{}),children:"Edit"}),Object(j.jsx)(y.a,{variant:"contained",size:"large",color:"error",startIcon:Object(j.jsx)(T.a,{}),children:"Delete"})]})},I=a(221),N=function(e){var t=e.place;return Object(j.jsxs)(m.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(j.jsx)(m.a,{src:"https://picsum.photos/600/300",component:"img",sx:{borderRadius:"16px"}}),Object(j.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",mt:4},children:[Object(j.jsx)(o.a,{sx:{fontWeight:"medium",fontSize:"2rem",textTransform:"uppercase"},children:t.name}),Object(j.jsx)(I.a,{label:t.type,color:"primary",sx:{ml:4}})]}),Object(j.jsx)(o.a,{sx:{fontSize:"1.2rem",mb:1},children:"[From] - [To]"}),Object(j.jsx)(o.a,{sx:{fontSize:"1.2rem",mb:1},children:"[Street], [City], [Zipcode], [City], [Country]"})]})},z=function(e){var t=e.selectedPlace,a=e.editSelectedPlace,r=Object(n.useState)(!1),s=Object(u.a)(r,2),c=s[0],i=s[1];return Object(j.jsxs)(m.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[c?Object(j.jsx)(w,{selectedPlace:t,editSelectedPlace:a}):Object(j.jsx)(N,{place:t}),Object(j.jsx)(C,{isEditable:c,handleEdit:function(){i(!0)},handleSave:function(){i(!1)}})]})},E=a(230),P=function(e){var t=e.id,a=e.name,n=e.type,r=e.from,s=e.to,c=e.selectPlace;return Object(j.jsxs)(E.a,{onClick:function(){c({id:t,name:a,type:n})},sx:{display:"flex",alignItems:"center",px:3,py:1.5,my:2,ml:4,cursor:"pointer"},children:[Object(j.jsxs)(m.a,{component:"span",sx:{flexGrow:1},children:[r.getHours(),":",r.getMinutes()," - ",s.getHours(),":",s.getMinutes(),Object(j.jsx)(m.a,{component:"span",sx:{mx:1,color:"#CBD5E0"},children:"|"}),a]}),Object(j.jsx)(I.a,{label:n,color:function(){var e;switch(Math.floor(3*Math.random())){case 0:e="primary";break;case 1:e="secondary";break;case 2:e="warning"}return e}(),sx:{textTransform:"uppercase"},size:"small"})]})},W=a(206),D=function(e){var t=e.addPlace,a=e.tripName,r=e.updateTripName,s=Object(n.useState)(!1),c=Object(u.a)(s,2),i=c[0],l=c[1];return Object(j.jsxs)(m.a,{children:[Object(j.jsxs)(m.a,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(j.jsx)(m.a,{sx:{flexGrow:1,mt:1},children:i?Object(j.jsx)(p.a,{hiddenLabel:!0,size:"small",variant:"filled",fullWidth:!0,sx:{height:"3rem",width:"90%"},value:a,onChange:function(e){return r(e.target.value)}}):Object(j.jsx)(o.a,{sx:{fontWeight:"medium",fontSize:"2rem",textTransform:"uppercase",height:"3rem"},children:a})}),Object(j.jsx)(y.a,{onClick:function(){return l(!i)},size:"small",variant:"contained",sx:{width:"7rem",height:"2.5rem"},startIcon:Object(j.jsx)(k.a,{}),children:i?"Save":"Edit"})]}),Object(j.jsx)(y.a,{onClick:t,size:"small",variant:"contained",color:"secondary",startIcon:Object(j.jsx)(W.a,{}),sx:{ml:4,mt:"6.5rem",mb:"16px",width:"240px",height:"2.5rem"},children:"Create Place"})]})},F=function(e){var t=e.places,a=e.createNewPlace,n=e.selectPlace,r=e.tripName,s=e.updateTripName;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(D,{addPlace:function(){a()},tripName:r,updateTripName:s}),t.map((function(e){return Object(j.jsx)(P,{id:e.id,name:e.name,type:e.type,from:new Date,to:new Date,selectPlace:n},e.id)}))]})},_=a(84),A=a.n(_),R=a(107),U=a(108),M=a.n(U).a.create({baseURL:"https://knighthack.herokuapp.com/",timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}});M.interceptors.response.use((function(e){return e}),function(){var e=Object(R.a)(A.a.mark((function e(t){var a,n,r,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.config,"undefined"!==typeof t.response){e.next=4;break}return alert("A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."),e.abrupt("return",Promise.reject(t));case 4:if("No active account found with the given credentials"!==t.response.data.detail||401!==t.response.status||"Unauthorized"!==t.response.statusText){e.next=7;break}return alert("Invalid login"),e.abrupt("return",Promise.reject(t));case 7:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText||"api-auth/token/refresh/"!==a.url){e.next=10;break}return window.location.href="/",e.abrupt("return",Promise.reject(t));case 10:if("token_not_valid"!==t.response.data.code||401!==t.response.status||"Unauthorized"!==t.response.statusText||"api-auth/token/refresh/"===a.url){e.next=25;break}if(!(n=localStorage.getItem("refresh_token"))){e.next=23;break}if(r=JSON.parse(atob(n.split(".")[1])),s=Math.ceil(Date.now()/1e3),!(r.exp>s)){e.next=19;break}return e.abrupt("return",M.post("api-auth/token/refresh/",{refresh:n}).then((function(e){return localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),M.defaults.headers.Authorization="JWT "+e.data.access,a.headers.Authorization="JWT "+e.data.access,M(a)})).catch((function(e){console.log("error")})));case 19:console.log("Refresh token is expired",r.exp,s),window.location.href="/";case 21:e.next=25;break;case 23:console.log("Refresh token not available."),window.location.href="/";case 25:return 403===t.response.status&&"Forbidden"===t.response.statusText&&"You do not have permission to perform this action."===t.response.data.detail&&(window.location.href="/"),e.abrupt("return",Promise.reject(t));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var J=function(e){var t=e.id,a=e.name,n=e.places,r=e.selectTrip;return Object(j.jsxs)(E.a,{onClick:function(){r({id:t,name:a,places:n})},sx:{display:"flex",justifyContent:"space-between",px:3,py:1.5,my:2,cursor:"pointer"},children:[Object(j.jsx)(o.a,{sx:{fontWeight:"medium",textTransform:"uppercase"},children:a}),Object(j.jsx)(o.a,{children:"Date"})]})},L=a(217),Y=a(113),q=a(207),G=a(109),H=a.n(G),V=a(110),B=a.n(V),Z=a(111),K=a.n(Z),Q=function(){var e=n.useState(null),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Boolean(a),c=function(){r(null)};return Object(j.jsxs)(m.a,{sx:{height:"5rem",mb:"5rem"},children:[Object(j.jsx)(y.a,{onClick:function(e){r(e.currentTarget)},variant:"contained",size:"large",sx:{borderRadius:9},startIcon:Object(j.jsx)(L.a,{sx:{position:"relative",left:"-0.5rem"},children:"H"}),children:"Username"}),Object(j.jsxs)(Y.a,{anchorEl:a,open:s,onClose:c,onClick:c,PaperProps:{elevation:0,sx:{minWidth:300,ml:2,mt:.5,overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))","& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,left:20,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"left",vertical:"bottom"},children:[Object(j.jsxs)(v.a,{children:[Object(j.jsx)(q.a,{children:Object(j.jsx)(H.a,{fontSize:"small"})}),"Add another account"]}),Object(j.jsxs)(v.a,{children:[Object(j.jsx)(q.a,{children:Object(j.jsx)(B.a,{fontSize:"small"})}),"Settings"]}),Object(j.jsxs)(v.a,{children:[Object(j.jsx)(q.a,{children:Object(j.jsx)(K.a,{fontSize:"small"})}),"Logout"]})]})]})},X=a(112),$=a.n(X),ee=function(e){var t=e.addTrip;return Object(j.jsxs)(m.a,{children:[Object(j.jsx)(Q,{}),Object(j.jsx)(y.a,{onClick:t,size:"small",variant:"contained",color:"secondary",fullWidth:!0,startIcon:Object(j.jsx)($.a,{}),sx:{mb:"1rem",height:"2.5rem"},children:"New Trip"})]})},te=function(e){var t=e.trips,a=e.createTrip,n=e.selectTrip;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(ee,{addTrip:function(){a()}}),t.map((function(e){return[Object(j.jsx)(J,{id:e.id,name:e.name,places:e.places,selectTrip:n},e.id)]}))]})},ae=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({id:0,name:"default",places:[]}),c=Object(u.a)(s,2),i=c[0],o=c[1],l=Object(n.useState)({id:0,name:"default",type:"DEFAULT"}),m=Object(u.a)(l,2),h=m[0],p=m[1];Object(n.useEffect)((function(){M.get("api/trips").then((function(e){for(var t=0;t<e.data.length;t++)e.data[t].places=[];r(e.data)})).catch((function(e){})),console.log(a)}),[]);var f=Object(n.useState)(0),O=Object(u.a)(f,2),g=O[0],v=O[1],w=Object(n.useState)(0),y=Object(u.a)(w,2),S=y[0],k=y[1],T=function(e){o(e)},C=function(e){p(e)},I=function(e){var t=a.findIndex((function(t){return t.id==e.id})),n=Object(b.a)(a);n[t]=e,r(n)},N=function(e){var t=i.places.findIndex((function(t){return t.id==e.id})),a=Object(b.a)(i.places);a[t]=e;var n=Object(d.a)(Object(d.a)({},i),{},{places:a});I(n)};return Object(j.jsxs)(x.a,{container:!0,direction:"row",sx:{height:"100vh",backgroundColor:"#E2E8F0"},children:[Object(j.jsx)(x.a,{item:!0,xs:2.5,sx:{borderRight:"2px solid #E2E8F0",boxSizing:"border-box",p:4,height:"100vh",overflowY:"scroll"},children:Object(j.jsx)(te,{trips:a,createTrip:function(){var e={id:g,name:"default",places:[]};r([e].concat(Object(b.a)(a))),v(g+1),T(e)},selectTrip:T})}),Object(j.jsx)(x.a,{item:!0,xs:4,sx:{borderRight:"2px solid #E2E8F0",boxSizing:"border-box",py:4,px:6,height:"100vh",overflowY:"scroll",backgroundColor:"#dbe2e9"},children:Object(j.jsx)(F,{places:i.places,createNewPlace:function(){var e={id:S,name:"default",type:"default"},t=Object(d.a)(Object(d.a)({},i),{},{places:[e].concat(Object(b.a)(i.places))});o(t),k(S+1),C(e),I(t)},selectPlace:C,tripName:i.name,updateTripName:function(e){var t=Object(d.a)(Object(d.a)({},i),{},{name:e});o(t),I(t),M.put("api/trip/".concat(t.id),{name:e,locations:[]}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}})}),Object(j.jsx)(x.a,{item:!0,xs:5.5,sx:{px:14,py:4,height:"100vh"},children:Object(j.jsx)(z,{selectedPlace:h,editSelectedPlace:function(e){var t=Object(d.a)(Object(d.a)({},h),e);p(t),N(t)}})})]})},ne=a(226),re=a(210),se=a(225),ce=a(114);function ie(e){return Object(j.jsxs)(o.a,Object(d.a)(Object(d.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(j.jsx)(l.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var oe=Object(ce.a)();function le(){window.location.href="/dashboard";var e=n.useState(!1),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(j.jsx)(i.a,{theme:oe,children:Object(j.jsxs)(se.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(c.a,{}),Object(j.jsxs)(m.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(j.jsx)(L.a,{sx:{m:1,bgcolor:"secondary.main"}}),Object(j.jsx)(o.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(j.jsxs)(m.a,{component:"form",onSubmit:function(e){e.preventDefault(),r(!0);var t=new FormData(e.currentTarget);M.post("api-auth/token/",{email:t.get("email"),password:t.get("password")}).then((function(e){localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),M.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),window.location.href="/dashboard"})).catch((function(e){r(!1)})),n.useEffect((function(){null!==localStorage.getItem("access_token")&&(window.location.href="/dashboard")}),[])},noValidate:!0,sx:{mt:1},children:[Object(j.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,disabled:a}),Object(j.jsx)(p.a,{margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",disabled:a}),Object(j.jsx)(ne.a,{control:Object(j.jsx)(re.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(j.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign In"}),Object(j.jsxs)(x.a,{container:!0,children:[Object(j.jsx)(x.a,{item:!0,xs:!0,children:Object(j.jsx)(l.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(j.jsx)(x.a,{item:!0,children:Object(j.jsx)(l.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]}),Object(j.jsx)(ie,{sx:{mt:8,mb:4}})]})})}var de=a(3);function je(e){return Object(j.jsxs)(o.a,Object(d.a)(Object(d.a)({variant:"body2",color:"text.secondary",align:"center"},e),{},{children:["Copyright \xa9 ",Object(j.jsx)(l.a,{color:"inherit",href:"https://mui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]}))}var be=Object(ce.a)();function ue(){var e=n.useState({email:"",password:"",firstName:"",lastName:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],s=n.useState(!1),b=Object(u.a)(s,2),h=b[0],f=b[1],O=n.useState({email:null,password:null,firstName:null,lastName:null}),g=Object(u.a)(O,2),v=g[0],w=(g[1],function(e){r(Object(d.a)(Object(d.a)({},a),{},Object(de.a)({},e.target.name,e.target.value.trim())))});return Object(j.jsx)(i.a,{theme:be,children:Object(j.jsxs)(se.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(c.a,{}),Object(j.jsxs)(m.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(j.jsx)(L.a,{sx:{m:1,bgcolor:"secondary.main"}}),Object(j.jsx)(o.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(j.jsxs)(m.a,{component:"form",noValidate:!0,onSubmit:function(e){e.preventDefault(),console.log(a),f(!0),M.post("api-auth/signup/",{email:a.email,password:a.password,first_name:a.firstName,last_name:a.lastName}).then((function(e){var t,n;t=a.email,n=a.password,M.post("api-auth/token/",{email:t,password:n}).then((function(e){localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),M.defaults.headers.Authorization="JWT "+localStorage.getItem("access_token"),window.location.href="/dashboard"})).catch((function(e){console.log(e)})),window.location.href="/dashboard"})).catch((function(e){f(!1)}))},sx:{mt:3},children:[Object(j.jsxs)(x.a,{container:!0,spacing:2,children:[Object(j.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(p.a,{autoComplete:"given-name",name:"firstName",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,onChange:w,disabled:h,error:null!==v.firstName,helperText:null!==v.firstName?"Empty field!":""})}),Object(j.jsx)(x.a,{item:!0,xs:12,sm:6,children:Object(j.jsx)(p.a,{required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"family-name",onChange:w,disabled:h})}),Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)(p.a,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",onChange:w,disabled:h})}),Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)(p.a,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"new-password",onChange:w,disabled:h})}),Object(j.jsx)(x.a,{item:!0,xs:12,children:Object(j.jsx)(ne.a,{control:Object(j.jsx)(re.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(j.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Sign Up"}),Object(j.jsx)(x.a,{container:!0,justifyContent:"flex-end",children:Object(j.jsx)(x.a,{item:!0,children:Object(j.jsx)(l.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(j.jsx)(je,{sx:{mt:5}})]})})}var xe=a(14);function me(){return Object(j.jsxs)(xe.c,{children:[Object(j.jsx)(xe.a,{exact:!0,path:"/",element:Object(j.jsx)(le,{})}),Object(j.jsx)(xe.a,{path:"/signup",element:Object(j.jsx)(ue,{})}),Object(j.jsx)(xe.a,{path:"/dashboard",element:Object(j.jsx)(ae,{})})]})}var he=a(42),pe=Object(ce.a)({typography:{fontFamily:["IBM Plex Sans"].join(", ")},palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:he.a.A400}}}),fe=a(79);s.a.render(Object(j.jsxs)(i.a,{theme:pe,children:[Object(j.jsx)(c.a,{}),Object(j.jsx)(fe.a,{children:Object(j.jsx)(me,{})})]}),document.querySelector("#root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.62fb21cb.chunk.js.map