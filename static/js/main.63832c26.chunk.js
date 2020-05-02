(this["webpackJsonptwitch-info"]=this["webpackJsonptwitch-info"]||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),o=a.n(c),r=(a(33),a(9)),s=a(10),i=a(12),m=a(11),h=a(4),u=a(6),d=a(27),f=a(23),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(f.Scrollbars,{autoHide:!0,renderTrackHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-horizontal"}))},renderTrackVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-vertical"}))},renderThumbHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-horizontal"}))},renderThumbVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-vertical"}))},renderView:function(t){return l.a.createElement("div",Object.assign({},t,{className:e.props.className}))}},this.props.children)}}]),a}(n.Component),p=function(){var e=Object(u.f)();return l.a.createElement("header",null,l.a.createElement("div",{className:"head_container"},l.a.createElement(h.b,{to:"/TwitchInfo/",className:"twitch_link"},l.a.createElement("svg",{className:"tw-glitch-logo__svg",overflow:"visible",width:"40px",height:"40px",version:"1.1",viewBox:"0 0 40 40",x:"0px",y:"0px"},l.a.createElement("polygon",{className:"tw-glitch-logo__body",points:"13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"}),l.a.createElement("polygon",{className:"tw-glitch-logo__face",points:"26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25",transform:"translate(0 0)"}),l.a.createElement("path",{className:"tw-glitch-logo__eyes",d:"M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z",transform:"translate(0 0)"}))),l.a.createElement("div",{className:"head_input_inner"},l.a.createElement("input",{onKeyDown:function(t){if("Enter"===t.key){var a=t.currentTarget;a.value.length?(a.classList.remove("error"),e.push("/TwitchInfo/user/"+a.value)):a.classList.add("error")}}.bind(void 0),className:"login input_text",type:"text",placeholder:"Enter username"}),l.a.createElement("input",{onClick:function(t){var a=t.currentTarget.parentNode.children[0];a.value.length?(a.classList.remove("error"),e.push("/TwitchInfo/user/"+a.value)):a.classList.add("error")}.bind(void 0),className:"btn",type:"submit",value:"Check"}))))},w=function(e){var t=e.component,a=Object(d.a)(e,["component"]);return l.a.createElement(u.a,Object.assign({},a,{render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,null),l.a.createElement(v,{className:"view"},l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"container"},l.a.createElement(t,e)))))}}))},g=function(){document.title="Get Twitch account info";var e=Object(u.f)();return l.a.createElement("main",{className:"landing"},l.a.createElement("div",{className:"bg"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"landing_content"},l.a.createElement("h1",{className:"main_head"},"Get Twitch Account"),l.a.createElement("div",{className:"main_description"},"Enter Twitch username to get information about the date of registration, last online, list of follows and more."),l.a.createElement("div",{className:"main_form"},l.a.createElement("input",{onKeyDown:function(t){if("Enter"===t.key){var a=t.currentTarget;a.value.length?(a.classList.remove("error"),e.push("/TwitchInfo/user/"+a.value)):a.classList.add("error")}}.bind(void 0),className:"login_main input_text",type:"text",placeholder:"Enter username"}),l.a.createElement("input",{onClick:function(t){var a=t.currentTarget.parentNode.children[0];a.value.length?(a.classList.remove("error"),e.push("/TwitchInfo/user/"+a.value)):a.classList.add("error")}.bind(void 0),className:"btn_main",type:"submit",value:"Check"})))))},E=a(17),N=a(16),b=a.n(N),_=a(26),y=function(e){var t,a=new Date(e).getTime(),n=new Date,l=new Date(a),c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],o=n.getFullYear(),r=c[n.getMonth()],s=n.getDate(),i=l.getFullYear(),m=c[l.getMonth()],h=l.getDate(),u=l.getHours(),d=l.getMinutes()<10?"0".concat(l.getMinutes()):l.getMinutes();return t=i!==o?" ".concat(i):"","".concat(h,".").concat(m,".").concat(i)==="".concat(s,".").concat(r,".").concat(o)?"today at ".concat(u,":").concat(d):"".concat(h,".").concat(m,".").concat(i)==="".concat(s-1,".").concat(r,".").concat(o)?"yesterday at ".concat(u,":").concat(d):"".concat(h," ").concat(m).concat(t," at ").concat(u,":").concat(d)},M=function(e){var t=e.data[0],a=".user-profile-content .user-head:before {background-image: url(".concat(t.logo,")}");return l.a.createElement("article",{className:"container container-profile container-profile-main"},l.a.createElement("style",null,a),l.a.createElement("div",{className:"user-profile-content"},l.a.createElement("div",{className:"user-head"},l.a.createElement("div",{className:"container container-profile user-info"},l.a.createElement("div",{className:"avatar animated fadeInUpBig"},l.a.createElement("img",{src:t.logo,className:"img-circle",alt:""})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"uname animated fadeInUpBig"},l.a.createElement("a",{href:"https://www.twitch.tv/"+t.name,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",{title:t.name+" - id "+t._id},t.display_name," ","staff"===t.type?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{"clip-rule":"evenodd",d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",fill:"#9147ff"})):null))),null!==t.bio?l.a.createElement("p",{className:"bio animated fadeInUpBig"},t.bio):null))),l.a.createElement("div",{className:"include"},l.a.createElement("div",{className:"container container-profile user-posts__container"},l.a.createElement("div",{className:"more_info"},l.a.createElement("span",null,"Last seen: "),l.a.createElement("b",null,y(t.updated_at))),l.a.createElement("div",{className:"more_info"},l.a.createElement("span",null,"Registration: "),l.a.createElement("b",null,y(t.created_at))),l.a.createElement("div",{className:"follows"},"FOLLOWED CHANNELS")))))},k=function(e){var t=e.data;return l.a.createElement(h.b,{to:"/TwitchInfo/user/"+t.channel.name,className:"follow_item"},l.a.createElement("div",{className:"follow_item_left"},l.a.createElement("img",{src:t.channel.logo,className:"follow_img",alt:""})),l.a.createElement("div",{className:"follow_item_right"},l.a.createElement("div",{className:"follow_name"},t.channel.display_name,t.channel.partner?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 20 20"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z",fill:"#9147ff"})):null),l.a.createElement("div",{className:"follow_date"},"Followed from ",y(t.created_at),t.notifications?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z",fill:"#ADADB8"})):l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),l.a.createElement("path",{d:"M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z",fill:"#ADADB8"}))),l.a.createElement("div",{className:"follow_tags"},t.channel.game?l.a.createElement("span",{className:"follow_tag"},t.channel.game):null,t.channel.language?l.a.createElement("span",{className:"follow_tag"},t.channel.language):null)))},I=function(){return l.a.createElement("div",{className:"content_loader"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},l.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:"#fff",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(359.289 50.0009 50.0009)"},l.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.2s",begin:"0s",repeatCount:"indefinite"}))))},x=function(e){return l.a.createElement("div",{className:"empty-results"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:112,height:112,viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",fill:"#c4c4c5"})),l.a.createElement("div",{className:"empty_words"},l.a.createElement("div",{className:"empty_top"},e.message)))},j=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={userId:0,clientId:"ce4n64ldb15801hbrrz06vpq5dbain",profile:[],follows:[],noProfileData:!1,noFollowsData:!1,limit:10,offset:0,loadMore:!1,loadMoreInProgress:!1},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Get Twitch account info",this.fetchProfile()}},{key:"componentDidUpdate",value:function(e){e.match.params.login!==this.props.match.params.login&&(this.setState({profile:[],follows:[],noProfileData:!1,noFollowsData:!1,offset:0,loadMore:!1,loadMoreInProgress:!1}),this.fetchProfile())}},{key:"fetchProfile",value:function(){var e=Object(_.a)(b.a.mark((function e(){var t,a,n,l=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:this.props.match.params.login,e.prev=1,e.next=4,fetch("https://api.twitch.tv/kraken/users?login="+t,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this.setState({profile:[n.users[0]],userId:n.users[0]._id}),this.getFollows(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),this.setState({noProfileData:!0}),console.error(e.t0);case 16:case"end":return e.stop()}}),e,this,[[1,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFollows",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/users/".concat(this.state.userId,"/follows/channels?limit=").concat(this.state.limit,"&offset=").concat(this.state.offset),{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){e.setState({follows:t.follows}),t.follows.length>0?e.setState({loadMore:!0}):e.setState({noFollowsData:!0})})).catch((function(t){e.setState({noFollowsData:!0}),console.error(t)}))}},{key:"fetchMoreFollows",value:function(e,t){var a=this;fetch("https://api.twitch.tv/kraken/users/".concat(this.state.userId,"/follows/channels?limit=").concat(this.state.limit,"&offset=").concat(t),{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(e){e.follows.length?a.setState({follows:[].concat(Object(E.a)(a.state.follows),Object(E.a)(e.follows)),loadMoreInProgress:!1}):a.setState({loadMore:!1,loadMoreInProgress:!1})})).catch((function(e){return console.error(e)}))}},{key:"loadMoreFollows",value:function(){this.setState({offset:this.state.offset+this.state.limit,loadMoreInProgress:!0}),this.fetchMoreFollows(this.state.userId,this.state.offset+this.state.limit)}},{key:"changeUser",value:function(e,t){this.setState({profile:[],follows:[],noProfileData:!1,noFollowsData:!1,offset:0,loadMore:!1,loadMoreInProgress:!1}),this.fetchProfile(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.profile,n=t.follows;return l.a.createElement(l.a.Fragment,null,a.length>0?l.a.createElement("div",null,l.a.createElement(M,{data:a}),n.length>0?l.a.createElement("div",{className:"follows_list"},n.map((function(t){return l.a.createElement("div",{key:t.channel._id,onClick:e.changeUser.bind(e,t.channel.name)},l.a.createElement(k,{data:t}))}))):this.state.noFollowsData?l.a.createElement(x,{message:"No follows"}):l.a.createElement(I,null)):this.state.noProfileData?l.a.createElement(x,{message:"No data"}):l.a.createElement(I,null),this.state.loadMore?l.a.createElement("div",{onClick:this.loadMoreFollows.bind(this),className:"foot_center"},l.a.createElement("div",{className:"load_more"},this.state.loadMoreInProgress?l.a.createElement("span",{className:"more_loader"},l.a.createElement(I,null)):l.a.createElement("span",{className:"more_text"},"Load more follows"))):null)}}]),a}(n.Component),D=function(){return document.title="TwitchInfo - 404 Not Found",l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"container http_error_container"},l.a.createElement("div",{className:"http_error"},l.a.createElement("h2",null,"404 Not Found"),l.a.createElement(h.b,{to:"/TwitchInfo/"},"Go to home page"))))},T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/TwitchInfo/",exact:!0,component:g}),l.a.createElement(w,{path:"/TwitchInfo/user/:login",component:j}),l.a.createElement(u.a,{component:D})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.63832c26.chunk.js.map