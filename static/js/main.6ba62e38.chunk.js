(this["webpackJsonpbcc.42500"]=this["webpackJsonpbcc.42500"]||[]).push([[0],{111:function(e,t,n){e.exports=n(141)},116:function(e,t,n){},139:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),l=n.n(o),i=(n(116),n(15)),c=n(83),u=n.n(c),s=n(174),m=n(142),d=n(171),f=n(187),p=Object(d.a)((function(e){return Object(f.a)({title:{color:"#000D1A",fontSize:28,fontWeight:"bold",marginTop:60},cardBlock:{marginTop:32},card:{marginBottom:60,width:"100%"},hashTagSocialCard:{fontSize:16,color:"#000D1A",fontWeight:"bold"},description:{fontSize:14,color:"#000D1A"}})})),g=function(e){var t=p(),n=e.showCard;return r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement("img",{src:"logo-bcc.svg",alt:"logo"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:t.title},"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0443")),n&&r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0,spacing:4,className:t.cardBlock},r.a.createElement(s.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},r.a.createElement("img",{src:"socialCard.svg",alt:"socialCard",className:t.card})),r.a.createElement(s.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},r.a.createElement(s.a,{container:!0,alignItems:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement(m.a,{className:t.hashTagSocialCard},"#socialcard"),r.a.createElement(m.a,{className:t.description},"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0446.\u043f\u043e\u0441\u043e\u0431\u0438\u0439")))))))},v=n(176),h=n(185),b=n(17),E=n(16),x=n.n(E),O=n(40),k=n(32),C=n(29),j=n(26),S=n.n(j),y=window.env,w=new(function(){function e(){var t=this;Object(b.a)(this,e),S.a.interceptors.response.use((function(e){return e}),(function(e){var n;if(401===(null===(n=e.response)||void 0===n?void 0:n.status)&&localStorage.refreshToken&&localStorage.jwtToken){var a={accessToken:localStorage.jwtToken,refreshToken:localStorage.refreshToken};t.post("".concat(y.SERVER_URL,"/auth/refreshToken"),a).then((function(e){e.ok&&(localStorage.setItem("jwtToken",e.tokens.accessToken),localStorage.setItem("refreshToken",e.tokens.refreshToken),localStorage.setItem("userInfo",JSON.stringify(e.user)))})).then((function(){var t=e.config;t.headers={Authorization:"Bearer "+localStorage.jwtToken},S.a.request(t)}))}}))}return Object(C.a)(e,[{key:"request",value:function(e){return S.a.request(e)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(t=t||{}).headers=t.headers||{};var n=JSON.parse(localStorage.getItem("userContext")||"{}");return t.headers.Authorization="Bearer "+(n.token||{}).accessToken,t.baseURL=t.baseURL||y.SERVER_URL,S.a.get(e,t).then((function(e){return null===e||void 0===e?void 0:e.data}))}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(t=t||{}).headers=t.headers||{};var n=JSON.parse(localStorage.getItem("userContext")||"{}");return t.headers.Authorization="Bearer "+(n.token||{}).accessToken,t.baseURL=t.baseURL||y.SERVER_URL,S.a.delete(e,t).then((function(e){return e.data}))}},{key:"head",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(t=t||{}).headers=t.headers||{};var n=JSON.parse(localStorage.getItem("userContext")||"{}");return t.headers.Authorization="Bearer "+(n.token||{}).accessToken,t.baseURL=y.SERVER_URL,S.a.head(e,t)}},{key:"token",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.baseURL=y.SERVER_URL,S.a.post(e,t,n).then((function(e){return e.data}))}},{key:"post",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(n=n||{}).headers=n.headers||{};var a=JSON.parse(localStorage.getItem("userContext")||"{}");return(a.token||{}).accessToken&&(n.headers.Authorization="Bearer "+(a.token||{}).accessToken),n.baseURL=n.baseURL||y.SERVER_URL,S.a.post(e,t,n).then((function(e){return e.data}))}},{key:"put",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(n=n||{}).headers=n.headers||{};var a=JSON.parse(localStorage.getItem("userContext")||"{}");return n.headers.Authorization="Bearer "+(a.token||{}).accessToken,n.baseURL=y.SERVER_URL,S.a.put(e,t,n).then((function(e){return e.data}))}},{key:"patch",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(n=n||{}).headers=n.headers||{};var a=JSON.parse(localStorage.getItem("userContext")||"{}");return n.headers.Authorization="Bearer "+(a.token||{}).accessToken,n.baseURL=y.SERVER_URL,S.a.patch(e,t,n).then((function(e){return e.data}))}}]),e}()),R=window.env,N=function(){function e(){Object(b.a)(this,e)}return Object(C.a)(e,[{key:"sendOtp",value:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/hotspot/sendOtp",Object(O.a)({},t),{baseURL:R.OTP_URL});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"confirmOtp",value:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.post("/camunda/auth/login/public",Object(O.a)({},t),{baseURL:R.GREEN_API});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=window.env,P=function(){function e(){Object(b.a)(this,e)}return Object(C.a)(e,[{key:"start",value:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.post("/camunda/process/start",{processDefinitionKey:"social_card",variables:t},{baseURL:T.GREEN_API}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),U=window.env,L=function(){function e(){Object(b.a)(this,e)}return Object(C.a)(e,[{key:"getIdentityTypes",value:function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w.get("/reference/api/generic/Id",{baseURL:U.GREEN_API}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),D=window.env,I=function(){function e(){Object(b.a)(this,e)}return Object(C.a)(e,[{key:"getRegions",value:function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/reference/api/kato/regions",{baseURL:D.GREEN_API});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getKatoChildren",value:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.get("/reference/api/kato/children/new/".concat(t),{baseURL:D.GREEN_API});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),F=new function e(){Object(b.a)(this,e),this.authOtp=new N,this.camunda=new P,this.reference=new L,this.kato=new I},z=Object(d.a)((function(e){return Object(f.a)({checkBoxBlock:{marginTop:34},checkbox:{fontSize:16,color:"#000000"},protectionContinueBlock:{marginTop:45},garantProtection:{fontSize:14,color:"#000000",marginBottom:24}})})),B=function(){var e=z(),t=Object(a.useState)(!1),n=Object(i.a)(t,2),o=n[0],l=n[1];return r.a.createElement(Ue.Consumer,null,(function(t){var n=t.model,a=t.setStep,i=t.changeModel,c=t.setOpenError,u=t.setLoading;return r.a.createElement("form",{onSubmit:function(e){return function(e,t,n,a,r){e.preventDefault(),r(!0),F.authOtp.sendOtp({iin:t.iin,phone:t.phoneNumber}).then((function(){localStorage.removeItem("userContext"),r(!1),n(1)})).catch((function(e){r(!1),a(!0)}))}(e,n,a,c,u)}},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",fullWidth:!0,label:"\u0418\u0418\u041d",maxLength:12,isNumeric:!0,value:n.iin,onChange:function(e){return i((function(e){return e.iin}),(function(t){return e.target.value}))},required:!0,inputProps:{pattern:"\\d{12}",title:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0438\u0437 12 \u0446\u0438\u0444\u0440"}})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(fe,{variant:"filled",fullWidth:!0,label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:n.phoneNumber,onChangeValue:function(e){return i((function(e){return e.phoneNumber}),(function(t){return e}))},required:!0,inputProps:{pattern:"^[+][7]\\s[(]\\d{3}[)]\\s\\d{3}\\s\\d{2}\\s\\d{2}$",title:"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 +7 (111) 111 11 11"}})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(v.a,{className:e.checkBoxBlock,control:r.a.createElement(h.a,{value:o,onChange:function(){return l(!o)},color:"primary",required:!0}),label:r.a.createElement(m.a,{className:e.checkbox},"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d(\u0430) \u043d\u0430 \u0441\u0431\u043e\u0440 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0,className:e.protectionContinueBlock},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:!1,sm:!1,md:!1,lg:!1,xl:!1},r.a.createElement("img",{src:"protection.svg",alt:"protection"})),r.a.createElement(s.a,{item:!0,xs:!0,sm:!0,md:!0,lg:!0,xl:!0},r.a.createElement(m.a,{className:e.garantProtection},"\u041c\u044b \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u043c \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(te,{fullWidth:!0,type:"submit"},"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"))))))}))},A=Object(d.a)((function(e){return Object(f.a)({timer:{fontSize:16,color:"#000D1A",marginTop:24},linkReSendSms:{marginTop:24,color:"#536dfe",textDecoration:"underline",fontSize:18,fontWeight:"bold",cursor:"pointer","&:hover, &:active":{color:"#536dfe",opacity:.8}}})})),W=function(){var e=A(),t=Object(a.useState)(90),n=Object(i.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)(""),u=Object(i.a)(c,2),d=u[0],f=u[1];r.a.useEffect((function(){var e=setInterval((function(){0!==o&&l(o-1)}),1e3);return function(){return clearInterval(e)}}),[o]);return r.a.createElement(Ue.Consumer,null,(function(t){var n=t.model,a=t.setStep,i=(t.changeModel,t.setOpenError),c=t.setLoading;return r.a.createElement("form",{onSubmit:function(e){return function(e,t,n,a,r){e.preventDefault(),r(!0),F.authOtp.confirmOtp({iin:t.iin,phone:t.phoneNumber,otp:d}).then((function(e){r(!1),localStorage.setItem("userContext",JSON.stringify(e)),n(2)})).catch((function(e){r(!1),a(!0)}))}(e,n,a,i,c)}},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",isNumeric:!0,maxLength:6,fullWidth:!0,label:"\u041a\u043e\u0434 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f",required:!0,inputProps:{pattern:"\\d{6}",title:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0438\u0437 6 \u0446\u0438\u0444\u0440"},value:d,onChange:function(e){return f(e.target.value)}})),0!==o?r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:e.timer},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0421\u041c\u0421 \u0447\u0435\u0440\u0435\u0437: ",o)):r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:e.linkReSendSms,onClick:function(){return function(e,t,n){n(!0),F.authOtp.sendOtp({iin:e.iin,phone:e.phoneNumber}).then((function(){n(!1),l(90),f("")})).catch((function(e){n(!1),t(!0)}))}(n,i,c)}},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0421\u041c\u0421")),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(te,{style:{marginTop:24},fullWidth:!0,type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))))}))},M=Object(d.a)((function(e){return Object(f.a)({})})),q=function(){M();return r.a.createElement(Ue.Consumer,null,(function(e){var t,n,a,o=e.model,l=e.changeModel,i=e.setStep;return r.a.createElement("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),t(3)}(e,i)}},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",fullWidth:!0,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",value:null===(t=o.lastName)||void 0===t?void 0:t.toUpperCase(),onChange:function(e){return l((function(e){return e.lastName}),(function(t){return e.target.value.toUpperCase()}))},required:!0,inputProps:{pattern:"[a-zA-Z\u0400-\u04ff]{2,30}",title:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432 \u041a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u041b\u0430\u0442\u0438\u043d\u0438\u0446\u044b \u0434\u043b\u0438\u043d\u043e\u0439 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0431\u0443\u043a\u0432"}})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",fullWidth:!0,label:"\u0418\u043c\u044f",value:null===(n=o.firstName)||void 0===n?void 0:n.toUpperCase(),onChange:function(e){return l((function(e){return e.firstName}),(function(t){return e.target.value.toUpperCase()}))},required:!0,inputProps:{pattern:"[a-zA-Z\u0400-\u04ff]{2,30}",title:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432 \u041a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u041b\u0430\u0442\u0438\u043d\u0438\u0446\u044b \u0434\u043b\u0438\u043d\u043e\u0439 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0431\u0443\u043a\u0432"}})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",fullWidth:!0,label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",value:null===(a=o.middleName)||void 0===a?void 0:a.toUpperCase(),onChange:function(e){return l((function(e){return e.middleName}),(function(t){return e.target.value.toUpperCase()}))},inputProps:{pattern:"[a-zA-Z\u0400-\u04ff]{2,30}",title:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432 \u041a\u0438\u0440\u0438\u043b\u043b\u0438\u0446\u044b \u0438\u043b\u0438 \u041b\u0430\u0442\u0438\u043d\u0438\u0446\u044b \u0434\u043b\u0438\u043d\u043e\u0439 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 2 \u0431\u0443\u043a\u0432"}})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(Re,{value:o.birthDate||null,required:!0,inputProps:{pattern:"(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",title:"\u0414\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433"},onChange:function(e){return l((function(e){return e.birthDate}),(function(t){return null===e||void 0===e?void 0:e.format("MM/DD/YYYY")}))},label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(te,{style:{marginTop:24},fullWidth:!0,type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))))}))},_=[{name:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",description:"\u041f\u0430\u0441\u043f\u043e\u0440\u0442 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{name:"\u0423\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",description:"\u0423\u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0433\u0440\u0430\u0436\u0434\u0430\u043d\u0438\u043d\u0430 \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"}],Y=function(){return r.a.createElement(Ue.Consumer,null,(function(e){var t,n,a,o,l,i,c=e.model,u=e.changeModel,m=e.setStep;return r.a.createElement("form",{onSubmit:function(e){return function(e,t){e.preventDefault(),t(4)}(e,m)}},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",fullWidth:!0,label:"\u0422\u0438\u043f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",select:!0,SelectProps:{native:!0},value:(null===(t=c.identity)||void 0===t?void 0:t.type)||"",onChange:function(e){return u((function(e){var t;return null===(t=e.identity)||void 0===t?void 0:t.type}),(function(t){return e.target.value}))},required:!0},r.a.createElement("option",null),null===_||void 0===_?void 0:_.map((function(e){return r.a.createElement("option",{value:e.name},e.description)}))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{label:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430",variant:"filled",fullWidth:!0,isNumeric:!0,value:null===(n=c.identity)||void 0===n?void 0:n.number,onChange:function(e){return u((function(e){var t;return null===(t=e.identity)||void 0===t?void 0:t.number}),(function(t){return e.target.value}))},required:!0})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{variant:"filled",fullWidth:!0,label:"\u041a\u0435\u043c \u0432\u044b\u0434\u0430\u043d",value:null===(a=c.identity)||void 0===a||null===(o=a.issue)||void 0===o?void 0:o.toUpperCase(),onChange:function(e){return u((function(e){var t;return null===(t=e.identity)||void 0===t?void 0:t.issue}),(function(t){var n;return null===(n=e.target.value)||void 0===n?void 0:n.toUpperCase()}))},required:!0})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(Re,{value:(null===(l=c.identity)||void 0===l?void 0:l.issueDate)||null,required:!0,inputProps:{pattern:"(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",title:"\u0414\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433"},onChange:function(e){return u((function(e){var t;return null===(t=e.identity)||void 0===t?void 0:t.issueDate}),(function(t){return null===e||void 0===e?void 0:e.format("MM/DD/YYYY")}))},label:"\u0414\u0430\u0442\u0430 \u0432\u044b\u0434\u0430\u0447\u0438"})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(Re,{value:(null===(i=c.identity)||void 0===i?void 0:i.expireDate)||null,required:!0,inputProps:{pattern:"(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}",title:"\u0414\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433"},onChange:function(e){return u((function(e){var t;return null===(t=e.identity)||void 0===t?void 0:t.expireDate}),(function(t){return null===e||void 0===e?void 0:e.format("MM/DD/YYYY")}))},label:"\u0414\u0430\u0442\u0430 \u0438\u0441\u0442\u0435\u0447\u0435\u043d\u0438\u044f"}))))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(te,{style:{marginTop:24},fullWidth:!0,type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))))}))},V=n(52),J=Object(d.a)((function(e){return Object(f.a)({})})),$=function(){J();var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)([]),c=Object(i.a)(l,2),u=c[0],m=c[1],d=Object(a.useState)([]),f=Object(i.a)(d,2),p=f[0],g=f[1];Object(a.useEffect)((function(){F.kato.getRegions().then((function(e){return o(e)}))}),[]);return r.a.createElement(Ue.Consumer,null,(function(e){var t,a,o,l,i,c,d,f,v,h,b,E,x=e.model,O=e.changeModel,k=e.setStep,C=e.setOpenError,j=e.setLoading;return r.a.createElement("form",{onSubmit:function(e){return function(e,t,n,a,r){e.preventDefault(),r(!0),F.camunda.start({client:t}).then((function(){r(!1),n(5)})).catch((function(e){r(!1),a(!0)}))}(e,x,k,C,j)}},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{label:"\u041e\u0431\u043b\u0430\u0441\u0442\u044c",variant:"filled",fullWidth:!0,select:!0,SelectProps:{native:!0},value:null===(t=x.address)||void 0===t||null===(a=t.region)||void 0===a?void 0:a.code,onChange:function(e){return function(e,t){var a=null===n||void 0===n?void 0:n.find((function(t){return t.te===e.target.value}));t((function(e){return e.address}),(function(e){return e.region={code:null===a||void 0===a?void 0:a.te,name:null===a||void 0===a?void 0:a.rus_name},e.district={code:"",name:""},e.village="",e})),F.kato.getKatoChildren(e.target.value).then((function(e){m(e.districts||[]),g([].concat(Object(V.a)(e.cities||[]),Object(V.a)(e.villages||[])))})).catch((function(e){}))}(e,O)},required:!0},r.a.createElement("option",null),null===n||void 0===n?void 0:n.map((function(e){return r.a.createElement("option",{value:e.te},e.rus_name)})))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{label:"\u0420\u0430\u0439\u043e\u043d",variant:"filled",fullWidth:!0,select:!0,SelectProps:{native:!0},value:null===(o=x.address)||void 0===o||null===(l=o.district)||void 0===l?void 0:l.code,onChange:function(e){return function(e,t){var n=null===u||void 0===u?void 0:u.find((function(t){return t.te===e.target.value}));t((function(e){return e.address}),(function(e){return e.district={code:null===n||void 0===n?void 0:n.te,name:null===n||void 0===n?void 0:n.rus_name},e.village="",e})),F.kato.getKatoChildren(e.target.value).then((function(e){g([].concat(Object(V.a)(e.cities||[]),Object(V.a)(e.villages||[])))}))}(e,O)},required:u.length>0&&!(null===(i=x.address)||void 0===i?void 0:i.village)},r.a.createElement("option",null),null===u||void 0===u?void 0:u.map((function(e){return r.a.createElement("option",{value:e.te},e.rus_name)})))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(ce,{label:"\u0413\u043e\u0440\u043e\u0434/\u0421\u0435\u043b\u043e",variant:"filled",fullWidth:!0,select:!0,SelectProps:{native:!0},value:null===(c=x.address)||void 0===c?void 0:c.village,onChange:function(e){return O((function(e){var t;return null===(t=e.address)||void 0===t?void 0:t.village}),(function(t){return e.target.value}))},required:p.length>0},r.a.createElement("option",null),null===p||void 0===p?void 0:p.map((function(e){return r.a.createElement("option",{value:e.rus_name},e.rus_name)})))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(ce,{label:"\u0423\u043b\u0438\u0446\u0430",variant:"filled",fullWidth:!0,value:null===(d=x.address)||void 0===d||null===(f=d.street)||void 0===f?void 0:f.toUpperCase(),onChange:function(e){return O((function(e){var t;return null===(t=e.address)||void 0===t?void 0:t.street}),(function(t){return e.target.value.toUpperCase()}))},required:!0})),r.a.createElement(s.a,{item:!0,xs:6,sm:6,md:3,lg:3,xl:3},r.a.createElement(ce,{label:"\u0414\u043e\u043c",variant:"filled",fullWidth:!0,value:null===(v=x.address)||void 0===v||null===(h=v.house)||void 0===h?void 0:h.toUpperCase(),onChange:function(e){return O((function(e){var t;return null===(t=e.address)||void 0===t?void 0:t.house}),(function(t){return e.target.value.toUpperCase()}))},required:!0})),r.a.createElement(s.a,{item:!0,xs:6,sm:6,md:3,lg:3,xl:3},r.a.createElement(ce,{label:"\u041a\u0432\u0430\u0440\u0442\u0438\u0440\u0430",variant:"filled",fullWidth:!0,value:null===(b=x.address)||void 0===b||null===(E=b.flat)||void 0===E?void 0:E.toUpperCase(),onChange:function(e){return O((function(e){var t;return null===(t=e.address)||void 0===t?void 0:t.flat}),(function(t){return e.target.value.toUpperCase()}))}})))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(te,{style:{marginTop:24},fullWidth:!0,type:"submit"},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"))))}))},H=Object(d.a)((function(e){return Object(f.a)({tickBlock:{marginTop:40,height:250,backgroundColor:"rgba(125, 206, 160, 0.1)"},txtSend:{fontSize:18,color:"#1F7042",fontWeight:"bold",marginTop:24},txtFollowInstruct:{fontSize:16,color:"#1F7042",marginTop:16,textAlign:"center"},txtOtherCard:{fontSize:22,fontWeight:"bold",marginTop:40,marginBottom:30},imgOtherCard:{width:"100%",borderRadius:8,marginBottom:12},txtOtherCardHashTagTitle:{fontSize:18,fontWeight:"bold",color:"#000D1A",marginBottom:12,marginTop:8},txtOtherCardDesc:{fontSize:16,color:"#4D565F",marginTop:12},premium:{backgroundColor:"#000D1A",color:"#FFFFFF",fontSize:12,padding:"8px 16px",borderRadius:4}})})),Z=function(){var e=H();return r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0,className:e.tickBlock,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(s.a,{item:!0},r.a.createElement("img",{src:"tick.svg",alt:"tick"})),r.a.createElement(s.a,{item:!0},r.a.createElement(m.a,{className:e.txtSend},"\u0417\u0430\u044f\u0432\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0430")),r.a.createElement(s.a,{item:!0},r.a.createElement(m.a,{className:e.txtFollowInstruct},"\u0421\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438 \u043f\u043e \u0421\u041c\u0421")))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:e.txtOtherCard},"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u043d\u0430 \u043d\u0430\u0448\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u0430\u0440\u0442\u044b")),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0,spacing:8},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement("img",{src:"ironcard.svg",alt:"ironcard",className:e.imgOtherCard})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},r.a.createElement(m.a,{className:e.txtOtherCardHashTagTitle},"#IRonCard")),r.a.createElement(s.a,{item:!0,xs:6,sm:6,md:6,lg:6,xl:6},r.a.createElement(s.a,{container:!0,justify:"flex-end"},r.a.createElement("span",{className:e.premium},"\u041f\u0440\u0435\u043c\u0438\u0443\u043c"))))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:e.txtOtherCardDesc},"\u041f\u0435\u0440\u0432\u0430\u044f \u0431\u0435\u0441\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u043c\u0435\u0442\u0430\u043b\u043b\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0430\u0440\u0442\u0430")))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:6,lg:6,xl:6},r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement("img",{src:"kartakarta.svg",alt:"kartakarta",className:e.imgOtherCard})),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:e.txtOtherCardHashTagTitle},"#\u043a\u0430\u0440\u0442\u0430\u043a\u0430\u0440\u0442\u0430"),r.a.createElement(m.a,{className:e.txtOtherCardDesc},"\u041a\u044d\u0448\u0431\u044d\u043a \u0434\u043e 30%"," "),r.a.createElement(m.a,{className:e.txtOtherCardDesc},"\u041a\u0440\u0435\u0434\u0438\u0442\u043d\u044b\u0439 \u043b\u0438\u043c\u0438\u0442 \u0434\u043e 3 \u043c\u043b\u043d. \u20b8."),r.a.createElement(m.a,{className:e.txtOtherCardDesc},"\u0420\u0430\u0441\u0441\u0440\u043e\u0447\u043a\u0430 \u0434\u043e 12 \u043c\u0435\u0441.")))))))},G=n(178),K=Object(d.a)((function(e){return Object(f.a)({title:{fontSize:16,color:"#4D565F"},divProgress:{position:"relative",marginBottom:24},progress:{top:0,left:0,height:22,width:"100%",borderRadius:2,position:"absolute",zIndex:1569},progressCount:{top:0,left:0,position:"absolute",width:"100%",textAlign:"center",color:"white",zIndex:1600,fontSize:15}})})),Q=function(e){var t=K(),n=e.title,a=e.children,o=e.percent;e.step;return r.a.createElement(Ue.Consumer,null,(function(e){e.setStep;return r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(m.a,{className:t.title},n)),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement("div",{className:t.divProgress},r.a.createElement(G.a,{className:t.progress,variant:"determinate",color:"primary",value:o}),r.a.createElement(m.a,{className:t.progressCount},"".concat(o,"%")))),r.a.createElement(s.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},a))}))},X=n(5),ee=n(179),te=Object(X.a)({root:{fontSize:18,color:"white",height:60,backgroundColor:"#27AE60",textTransform:"none","&:hover, &:active":{backgroundColor:"#27AE60",opacity:.8}}})(ee.a),ne=n(47),ae=n(183),re=n(88),oe=Object(d.a)((function(e){return Object(f.a)({root:{height:"56px",border:"1px solid #E8E8E8",overflow:"hidden",borderRadius:3,backgroundColor:"#FFFFFF",boxSizing:"border-box",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",border:"2px solid #1F7042"},"& label.Mui-focused":{color:"green"}},focused:{},disabled:{backgroundColor:"#fff",color:"#8B98A7"}})})),le=Object(d.a)((function(e){return Object(f.a)({root:{marginBottom:"1px"}})})),ie=function(e){var t=e.inputRef,n=(e.allowLeadingZeros,e.onChange),a=Object(ne.a)(e,["inputRef","allowLeadingZeros","onChange"]);return r.a.createElement(re.a,Object.assign({},a,{getInputRef:t,onValueChange:function(e){n({target:{value:e.value}})},isNumericString:!0,allowLeadingZeros:!0}))},ce=function(e){var t=oe({}),n=le({}),a=e.isNumeric,o=e.maxLength,l=e.shrink,i=e.inputProps,c=e.InputProps,u=Object(ne.a)(e,["isNumeric","maxLength","shrink","inputProps","InputProps"]);return r.a.createElement(ae.a,Object.assign({},u,{style:{height:"56px",marginTop:24},inputProps:Object(O.a)({},i,{maxLength:o}),InputLabelProps:{classes:n,required:!1,shrink:l},InputProps:Object(O.a)({},c,{classes:t,disableUnderline:!0,inputComponent:a?ie:void 0})}))},ue=n(89),se=Object(d.a)((function(e){return Object(f.a)({root:{height:"56px",border:"1px solid #E8E8E8",overflow:"hidden",borderRadius:2,backgroundColor:"#FFFFFF",boxSizing:"border-box",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",border:"2px solid #1F7042"},"& label.Mui-focused":{color:"green"},"& label":{color:"red"}},focused:{},disabled:{backgroundColor:"#fff",color:"#8B98A7"}})})),me=Object(d.a)((function(e){return Object(f.a)({root:{marginBottom:"1px"}})})),de=function(e){var t=e.inputRef,n=Object(ne.a)(e,["inputRef"]);return r.a.createElement(ue.a,Object.assign({},n,{ref:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){t(e?e.inputElement:null)})),mask:"+7 (111) 111 11 11",placeholder:"+7 (707) 707 77 77"}))},fe=function(e){var t=se({}),n=me({}),a=e.value,o=e.onChangeValue,l=e.onChangeProviderCode,i=e.onChange,c=e.inputProps,u=Object(ne.a)(e,["value","onChangeValue","onChangeProviderCode","onChange","inputProps"]);return r.a.createElement(ae.a,Object.assign({value:a,style:{height:"56px",marginTop:24},InputLabelProps:{shrink:!!a||void 0,classes:n,required:!1},onChange:function(e){i&&i(e),function(e){o&&(e=e.replace(/ /g,"").replace("(","").replace(")",""),o(e),l&&e.length>=5&&l(e.substr(2,3)))}(e.target.value)},InputProps:{classes:t,disableUnderline:!0,inputComponent:de},inputProps:Object(O.a)({},c,{pattern:"^[+][7]\\s[(]\\d{3}[)]\\s\\d{3}\\s\\d{2}\\s\\d{2}$",title:"\u041f\u043e\u043b\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442\u0430 +7 (111) 111 11 11"})},u))},pe=n(91),ge=n(93),ve=n(27),he=n.n(ve),be=n(14),Ee=n(182),xe=n(181),Oe=n(46),ke=n.n(Oe);n(138);ke.a.locale("ru");var Ce=Object(ge.a)({overrides:{MuiPickersToolbar:{toolbar:{backgroundColor:he.a[800]}},MuiPickersCalendarHeader:{switchHeader:{}},MuiPickersDay:{day:{color:he.a[800]},daySelected:{backgroundColor:he.a[400]},dayDisabled:{color:he.a[100]},current:{color:he.a[900]}},MuiPickersYear:{year:{color:he.a[800]},yearSelected:{backgroundColor:he.a[400]},yearDisabled:{color:he.a[100]},current:{color:he.a[900]}},MuiPickersModal:{dialogAction:{color:he.a[800]}}}}),je=Object(d.a)((function(e){return Object(f.a)({root:{border:"1px solid #E8E8E8",overflow:"hidden",borderRadius:2,backgroundColor:"#FFFFFF",boxSizing:"border-box",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover:not($disabled)":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",border:"2px solid #1F7042"},"&$disabled":{backgroundColor:"#fff"},"& label.Mui-focused":{color:"green"}},focused:{},disabled:{backgroundColor:"#fff",color:"#8B98A7"}})})),Se=Object(d.a)((function(e){return Object(f.a)({root:{margin:0,padding:0,lineHeight:"20px",height:"55px",width:"100%"}})})),ye=Object(d.a)((function(e){return Object(f.a)({root:{marginBottom:1}})})),we=Object(d.a)((function(e){return Object(f.a)({root:{}})})),Re=function(e){var t=je({}),n=Se({}),a=ye({}),o=we({}),l=r.a.useState("ru"),c=Object(i.a)(l,1)[0];return r.a.createElement("div",{style:{marginTop:24}},r.a.createElement(be.a,{libInstance:ke.a,utils:pe.a,locale:c},r.a.createElement(xe.a,{theme:Ce},r.a.createElement(Ee.a,Object.assign({autoOk:!0,className:n.root,inputProps:{style:{paddingTop:20}},variant:"inline",invalidDateMessage:"\u0414\u0430\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 \u0434\u0434.\u043c\u043c.\u0433\u0433\u0433\u0433",minDateMessage:"\u0414\u0430\u0442\u0430 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0440\u0430\u043d\u044c\u0448\u0435 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0434\u0430\u0442\u044b (01.01.1900)",inputVariant:"filled",format:"DD.MM.YYYY",margin:"normal",KeyboardButtonProps:{"aria-label":"change date"},InputProps:{classes:t,disableUnderline:!0},InputLabelProps:{classes:a,required:!1},InputAdornmentProps:{classes:o}},e)))))},Ne=(n(139),n(186)),Te=n(184),Pe=n(92),Ue=(n(140),r.a.createContext({model:{identity:{},address:{}},setStep:function(e){},changeModel:function(e,t){},setOpenError:function(e){},setLoading:function(e){}})),Le=function(e){return r.a.createElement(Te.a,Object.assign({elevation:6,variant:"filled"},e))};var De=function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)({identity:{},address:{}}),c=Object(i.a)(l,2),s=c[0],m=c[1],d=Object(a.useState)(!1),f=Object(i.a)(d,2),p=f[0],v=f[1],h=Object(a.useState)(!1),b=Object(i.a)(h,2),E=b[0],x=b[1],O=function(){v(!1)};return r.a.createElement("div",null,r.a.createElement(Ne.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:p,autoHideDuration:6e3,onClose:O},r.a.createElement(Le,{onClose:O,severity:"error"},"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043d\u0435\u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430!")),r.a.createElement(Pe.a,{tag:"div",blocking:E},r.a.createElement(Ue.Provider,{value:{model:s,setStep:o,changeModel:function(e,t){m(u()(s,e,t,null))},setOpenError:v,setLoading:x}},r.a.createElement("div",null,r.a.createElement(g,{showCard:5!==n}),0===n&&r.a.createElement(Q,{title:"\u0428\u0430\u0433 1: \u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",percent:0,step:1},r.a.createElement(B,null)),1===n&&r.a.createElement(Q,{title:"\u0428\u0430\u0433 2: \u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u043e\u043c\u0435\u0440\u0430",percent:20,step:2},r.a.createElement(W,null)),2===n&&r.a.createElement(Q,{title:"\u0428\u0430\u0433 3: \u0417\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",percent:40,step:3},r.a.createElement(q,null)),3===n&&r.a.createElement(Q,{title:"\u0428\u0430\u0433 4: \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0443\u0434\u043e\u0441\u0442\u0432\u0435\u0440\u044f\u044e\u0449\u0438\u0439 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u044c",percent:60,step:4},r.a.createElement(Y,null)),4===n&&r.a.createElement(Q,{title:"\u0428\u0430\u0433 5: \u0410\u0434\u0440\u0435\u0441\u0430",percent:80,step:5},r.a.createElement($,null)),5===n&&r.a.createElement(Z,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ie=Object(ge.a)({palette:{primary:{main:"#27AE60"}}});l.a.render(r.a.createElement(xe.a,{theme:Ie},r.a.createElement(De,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[111,1,2]]]);
//# sourceMappingURL=main.6ba62e38.chunk.js.map