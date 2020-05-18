(this["webpackJsonptwitch-info"]=this["webpackJsonptwitch-info"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),o=(a(37),a(6)),s=a(7),i=a(9),m=a(8),d=a(3),h=a(1),u=a(31),p=a(27),v=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.Scrollbars,{autoHide:!0,renderTrackHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-horizontal"}))},renderTrackVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-vertical"}))},renderThumbHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-horizontal"}))},renderThumbVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-vertical"}))},renderView:function(t){return l.a.createElement("div",Object.assign({},t,{className:e.props.className}))}},this.props.children)}}]),a}(n.Component),f=function(){var e=Object(h.f)();return l.a.createElement("header",null,l.a.createElement("div",{className:"head_container"},l.a.createElement(d.b,{to:"/TwitchInfo/",className:"twitch_link"},l.a.createElement("svg",{className:"tw-glitch-logo__svg",overflow:"visible",width:"40px",height:"40px",version:"1.1",viewBox:"0 0 40 40",x:"0px",y:"0px"},l.a.createElement("polygon",{className:"tw-glitch-logo__body",points:"13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"}),l.a.createElement("polygon",{className:"tw-glitch-logo__face",points:"26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25",transform:"translate(0 0)"}),l.a.createElement("path",{className:"tw-glitch-logo__eyes",d:"M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z",transform:"translate(0 0)"}))),l.a.createElement("div",{className:"head_input_inner"},l.a.createElement("input",{onChange:function(e){var t=e.currentTarget;t.value.trim().length?t.classList.remove("error"):t.classList.add("error")}.bind(void 0),onBlur:function(e){var t=e.currentTarget;t.classList.contains("error")&&t.classList.remove("error")}.bind(void 0),onKeyDown:function(t){if("Enter"===t.key){var a=t.currentTarget;a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value),a.value=""):a.classList.add("error")}}.bind(void 0),className:"login input_text",type:"text",placeholder:"Enter username"}),l.a.createElement("input",{onClick:function(t){var a=t.currentTarget.parentNode.children[0];a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value),a.value=""):a.classList.add("error")}.bind(void 0),className:"btn",type:"submit",value:"Check"}))))},E=function(e){var t=e.component,a=Object(u.a)(e,["component"]);return l.a.createElement(h.a,Object.assign({},a,{render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(v,{className:"view"},l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"container"},l.a.createElement(t,e)))))}}))},g=function(){document.title="Get Twitch account info";var e=Object(h.f)();return l.a.createElement("main",{className:"landing"},l.a.createElement("div",{className:"bg"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"landing_content"},l.a.createElement("h1",{className:"main_head"},"Get Twitch Account"),l.a.createElement("div",{className:"main_description"},"Enter Twitch username to get information about the date of registration, last online, list of follows and more."),l.a.createElement("div",{className:"main_form"},l.a.createElement("input",{onChange:function(e){var t=e.currentTarget;t.value.trim().length?t.classList.remove("error"):t.classList.add("error")}.bind(void 0),onBlur:function(e){var t=e.currentTarget;t.classList.contains("error")&&t.classList.remove("error")}.bind(void 0),onKeyDown:function(t){if("Enter"===t.key){var a=t.currentTarget;a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value)):a.classList.add("error")}}.bind(void 0),className:"login_main input_text",type:"text",placeholder:"Enter username"}),l.a.createElement("input",{onClick:function(t){var a=t.currentTarget.parentNode.children[0];a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value)):a.classList.add("error")}.bind(void 0),className:"btn_main",type:"submit",value:"Check"})))))},w=a(11),_=a.n(w),N=a(14),b=a(15),k=function(e){e||(e=Date.now());var t,a=new Date(e).getTime(),n=new Date,l=new Date(a),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=n.getFullYear(),o=r[n.getMonth()],s=n.getDate(),i=l.getFullYear(),m=r[l.getMonth()],d=l.getDate(),h=l.getHours(),u=l.getMinutes()<10?"0".concat(l.getMinutes()):l.getMinutes();return t=i!==c?" ".concat(i):"","".concat(d,".").concat(m,".").concat(i)==="".concat(s,".").concat(o,".").concat(c)?"today at ".concat(h,":").concat(u):"".concat(d,".").concat(m,".").concat(i)==="".concat(s-1,".").concat(o,".").concat(c)?"yesterday at ".concat(h,":").concat(u):"".concat(d," ").concat(m).concat(t," at ").concat(h,":").concat(u)},y=function(e){return e&&0!==e?e<1e3?e:e>=1e3&&e<1e6?"".concat(+(e/1e3).toFixed(1),"K"):e>=1e6&&e<1e9?"".concat(+(e/1e6).toFixed(1),"M"):e>=1e9&&e<1e12?"".concat(+(e/1e9).toFixed(1),"B"):void 0:0},x=function(e){var t=e.data.channel;return l.a.createElement(d.b,{to:"/TwitchInfo/channel/"+t.name,className:"follow_item"},l.a.createElement("div",{className:"follow_item_left"},l.a.createElement("img",{src:t.logo,className:"follow_img",alt:""})),l.a.createElement("div",{className:"follow_item_right"},l.a.createElement("div",{className:"follow_name"},t.display_name,t.partner?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 20 20"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z",fill:"#9147ff"})):null),l.a.createElement("div",{className:"follow_date"},"Followed from ",k(e.data.created_at),e.data.notifications?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z",fill:"#ADADB8"})):l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z",fill:"#ADADB8"}))),l.a.createElement("div",{className:"follow_tags"},t.game?l.a.createElement("span",{className:"follow_tag"},t.game):null,t.language?l.a.createElement("span",{className:"follow_tag"},t.language):null)))},M=function(e){var t=e.className,a=e.size;return l.a.createElement("div",{className:"content_loader ".concat(t||"")},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a||24,height:a||24,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},l.a.createElement("circle",{cx:"50",cy:"50",fill:"none",stroke:"#fff",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(359.289 50.0009 50.0009)"},l.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.2s",begin:"0s",repeatCount:"indefinite"}))))},I=function(e){var t=e.message;return l.a.createElement("div",{className:"empty-results"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:112,height:112,viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.a.createElement("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z",fill:"#c4c4c5"})),l.a.createElement("div",{className:"empty_words"},l.a.createElement("div",{className:"empty_top"},t)))},C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this))._isMounted=!1,n.state={userId:e.userId,clientId:e.clientId,follows:[],noFollowsData:!1,limit:10,offset:0,loadMore:!1,loadMoreInProgress:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchFollows()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"fetchFollows",value:function(){var e=Object(N.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitch.tv/kraken/users/".concat(this.state.userId,"/follows/channels?limit=").concat(this.state.limit,"&offset=")+this.state.offset,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this._isMounted&&(!a.error&&a.follows.length>0?this.setState({follows:a.follows,offset:this.state.offset+this.state.limit,loadMore:!0}):this.setState({noFollowsData:!0})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({noFollowsData:!0}),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMoreFollows",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/users/".concat(this.state.userId,"/follows/channels?limit=").concat(this.state.limit,"&offset=")+this.state.offset,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){t.follows.length?e.setState({follows:[].concat(Object(b.a)(e.state.follows),Object(b.a)(t.follows)),offset:e.state.offset+e.state.limit,loadMoreInProgress:!1}):e.setState({loadMore:!1,loadMoreInProgress:!1})})).catch((function(t){e.setState({loadMore:!1,loadMoreInProgress:!1}),console.error(t)}))}},{key:"loadMoreFollows",value:function(){this.state.loadMoreInProgress||(this.setState({loadMoreInProgress:!0}),this.fetchMoreFollows())}},{key:"render",value:function(){var e=this.state,t=e.follows,a=e.noFollowsData,n=e.loadMore,r=e.loadMoreInProgress;return l.a.createElement(l.a.Fragment,null,t.length>0?l.a.createElement("div",{className:"follows_list"},t.map((function(e){return l.a.createElement(x,{key:e.channel._id,data:e})}))):a?l.a.createElement(I,{message:"No follows"}):l.a.createElement(M,{className:"long"}),n?l.a.createElement("div",{className:"foot_center"},l.a.createElement("div",{onClick:this.loadMoreFollows.bind(this),className:"load_more"},r?l.a.createElement("span",{className:"more_loader"},l.a.createElement(M,null)):l.a.createElement("span",{className:"more_text"},"Load more follows"))):null)}}]),a}(n.Component),j=a(16),O=a(30),L=function(e){var t=e.data,a=Object(n.useState)(!1),r=Object(O.a)(a,2),c=r[0],o=r[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return o(!1)}),2e3);return function(){return clearTimeout(e)}}),[c]);var s=c?" copied_noactive":"",i=!!t.vod;return l.a.createElement("div",{className:"modal open"},l.a.createElement("div",{className:"position"},l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"body_flex"},l.a.createElement("div",{className:"body_width body_ratio_16-9"},l.a.createElement("div",{className:"body_bg"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"view_ratio ratio_16-9"},l.a.createElement("div",{className:"view_content"},l.a.createElement("video",{className:"video",src:t.thumbnails.tiny.replace("-preview-86x45.jpg",".mp4"),controls:!0})))),l.a.createElement("div",{className:"bottom"},l.a.createElement("div",{className:"clip_info_box"},l.a.createElement("div",{className:"clip_info_box_position"},l.a.createElement("div",{className:"clip_info_box_flexbox"},l.a.createElement("div",{className:"clip_info"},l.a.createElement("div",{className:"clip_info_position"},l.a.createElement("div",{className:"action_bar"},l.a.createElement("div",{className:"author_box"},l.a.createElement("div",{className:"avatar_box"},l.a.createElement("div",{className:"author_avatar"},l.a.createElement("img",{src:t.broadcaster.logo,alt:""}))),l.a.createElement("div",{className:"author_text"},l.a.createElement("div",{className:"author_name"},t.broadcaster.display_name),l.a.createElement("div",{className:"created_time"},t.game)),"clipboard"in navigator?l.a.createElement("div",{onClick:function(e){navigator.clipboard.writeText(e).then((function(){return o(!0)})).catch((function(e){return console.error("Could not copy text.",e)}))}.bind(void 0,t.url.replace("?tt_medium=clips_api&tt_content=url","")),className:"clip_action_share"+s,title:"Copy link to this clip on Twitch"},c?l.a.createElement("svg",{className:"clip_copied",width:"20px",height:"20px",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M4 10l5 5 8-8-1.5-1.5L9 12 5.5 8.5 4 10z"})):l.a.createElement("svg",{width:"20px",height:"20px",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M2 8a2 2 0 012-2v10h10a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V4zm2 8V4h8v8H8z"}))):"")),l.a.createElement("div",{className:"clip_info_content"},l.a.createElement("span",{className:"clip_info_views",title:t.views+" views"},l.a.createElement("svg",{width:"20px",height:"20px",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M11.998 10a2 2 0 11-4 0 2 2 0 014 0z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z"})),y(t.views)," views"),l.a.createElement("h4",{className:"clip_title"},t.title),l.a.createElement("div",{className:"clip_info_created"},l.a.createElement("div",{className:"clip_info_time"},k(t.created_at)),t.curator?l.a.createElement("div",{className:"clip_info_author"},"Clipped by",l.a.createElement(d.b,{to:"/TwitchInfo/channel/"+t.curator.name},t.curator.display_name)):null)),l.a.createElement("div",{className:"clip_bottom"},i?l.a.createElement("a",{className:"btn clip_full",href:t.vod.url,target:"_blank",rel:"noopener noreferrer"},"Watch full video"):null,l.a.createElement("a",{title:"Download clip",className:"btn clip_download".concat(i?" short":""),href:t.thumbnails.tiny.replace("-preview-86x45.jpg",".mp4"),target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"},l.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",fill:"#efeff1"})),i?null:l.a.createElement("span",null,"Download clip")))))))))))))),l.a.createElement("div",{className:"cover"}))},T=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this)).state={data:e.data,open:!1},n.handleOutsideClick=n.handleOutsideClick.bind(Object(j.a)(n)),n.handleEscape=n.handleEscape.bind(Object(j.a)(n)),n}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleEscape,!1)}},{key:"openModal",value:function(){document.addEventListener("click",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleEscape,!1),this.setState({open:!0})}},{key:"handleOutsideClick",value:function(e){"cover"!==e.target.className&&"position"!==e.target.className||(document.removeEventListener("click",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleEscape,!1),this.setState({open:!1}))}},{key:"handleEscape",value:function(e){27===e.keyCode&&(document.removeEventListener("click",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleEscape,!1),this.setState({open:!1}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.open,n=!!t.vod;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"clip_item"},l.a.createElement("div",{onClick:this.openModal.bind(this)},l.a.createElement("div",{className:"clip_thumb",style:{backgroundImage:"url(".concat(t.thumbnails.medium,")")}},l.a.createElement("div",{className:"clip_stat"},l.a.createElement("span",null,y(t.views)," views"),l.a.createElement("span",null,function(e){e||(e=0);var t=parseInt(e,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),l=t-3600*a-60*n;return a>0&&(a+=":"),l<10&&(l="0"+l),a+n+":"+l}(t.duration))))),l.a.createElement("div",{className:"clip_header"},l.a.createElement("div",{className:"clip_header_top"},l.a.createElement("span",null,t.game),l.a.createElement("span",null,k(t.created_at))),t.curator?l.a.createElement("div",{className:"clip_author"},"Clipped by",l.a.createElement(d.b,{to:"/TwitchInfo/channel/"+t.curator.name},t.curator.display_name)):null,l.a.createElement("h4",{className:"clip_title"},t.title)),l.a.createElement("div",{className:"clip_bottom"},n?l.a.createElement("a",{className:"btn clip_full",href:t.vod.url,target:"_blank",rel:"noopener noreferrer"},"Watch full video"):null,l.a.createElement("a",{className:"btn clip_download".concat(n?" short":""),href:t.thumbnails.tiny.replace("-preview-86x45.jpg",".mp4"),target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"},l.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",fill:"#efeff1"})),n?null:l.a.createElement("span",null,"Download clip")))),a?l.a.createElement(L,{data:t}):null)}}]),a}(n.Component),D=a(29),S=a.n(D),z=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this))._isMounted=!1,n.state={login:e.login,clientId:e.clientId,period:"week",clips:[],noClipsData:!1,limit:10,cursor:"",loadMore:!1,loadMoreInProgress:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchClips()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"fetchClips",value:function(){var e=Object(N.a)(_.a.mark((function e(){var t,a,n,l=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:this.state.period,e.prev=1,e.next=4,fetch("https://api.twitch.tv/kraken/clips/top?channel=".concat(this.state.login,"&period=").concat(t,"&limit=")+this.state.limit,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this._isMounted&&(!n.error&&n.clips.length>0?(this.setState({clips:n.clips,cursor:n._cursor,loadMore:!0}),""===n._cursor&&this.setState({loadMore:!1,loadMoreInProgress:!1})):this.setState({noClipsData:!0})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),this.setState({noClipsData:!0}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMoreClips",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/clips/top?channel=".concat(this.state.login,"&period=").concat(this.state.period,"&limit=").concat(this.state.limit,"&cursor=")+this.state.cursor,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){t.clips.length>0&&""!==e.state.cursor?(e.setState({clips:[].concat(Object(b.a)(e.state.clips),Object(b.a)(t.clips)),cursor:t._cursor,loadMoreInProgress:!1}),""===t._cursor&&e.setState({loadMore:!1,loadMoreInProgress:!1})):e.setState({loadMore:!1,loadMoreInProgress:!1})})).catch((function(t){e.setState({loadMore:!1,loadMoreInProgress:!1}),console.error(t)}))}},{key:"loadMoreClips",value:function(){this.state.loadMoreInProgress||(this.setState({loadMoreInProgress:!0}),this.fetchMoreClips())}},{key:"changePreiod",value:function(e){switch(e.value){case"day":this.setState({clips:[],noClipsData:!1,period:"day",cursor:"",loadMore:!1}),this.fetchClips("day");break;case"week":this.setState({clips:[],noClipsData:!1,period:"week",cursor:"",loadMore:!1}),this.fetchClips("week");break;case"month":this.setState({clips:[],noClipsData:!1,period:"month",cursor:"",loadMore:!1}),this.fetchClips("month");break;case"all":this.setState({clips:[],noClipsData:!1,period:"all",cursor:"",loadMore:!1}),this.fetchClips("all");break;default:this.setState({clips:[],noClipsData:!1,period:"week",cursor:"",loadMore:!1}),this.fetchClips("week")}}},{key:"render",value:function(){var e=this.state,t=e.clips,a=e.noClipsData,n=e.loadMore,r=e.loadMoreInProgress,c=e.period,o=[{value:"day",label:"Popular - 24 hours"},{value:"week",label:"Popular - 7 days"},{value:"month",label:"Popular - 30 days"},{value:"all",label:"Popular - all time"}];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"period_toggle_wrap"},l.a.createElement("div",{className:"period_toggle"},l.a.createElement(S.a,{options:o,onChange:this.changePreiod.bind(this),value:o.find((function(e){return e.value===c}))}),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20px",height:"20px"},l.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z",fill:"#EFEFF1"})))),t.length>0?l.a.createElement("div",{className:"clips_list"},t.map((function(e){return l.a.createElement(T,{key:e.slug,data:e})}))):a?l.a.createElement(I,{message:"No clips"}):l.a.createElement(M,{className:"long"}),n?l.a.createElement("div",{className:"foot_center"},l.a.createElement("div",{onClick:this.loadMoreClips.bind(this),className:"load_more"},r?l.a.createElement("span",{className:"more_loader"},l.a.createElement(M,null)):l.a.createElement("span",{className:"more_text"},"Load more clips"))):null)}}]),a}(n.Component),P=function(e){var t=e.data[0],a=e.extended[0],n=".user-profile-content .user-head:before {background-image: url(".concat(t.profile_banner||t.logo,")}");return l.a.createElement("article",{className:"container container-profile container-profile-main"},l.a.createElement("style",null,n),l.a.createElement("div",{className:"user-profile-content"},l.a.createElement("div",{className:"user-head"},l.a.createElement("div",{className:"container container-profile user-info"},l.a.createElement("div",{className:"avatar animated fadeInUpBig"},l.a.createElement("img",{src:t.logo,className:"img-circle",alt:""})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"uname animated fadeInUpBig"},l.a.createElement("a",{className:"display_name",href:"https://www.twitch.tv/"+t.name,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",{title:t.name+" - id "+t._id},t.display_name),t.partner?l.a.createElement("div",{title:"Twitch partner"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z",fill:"#9147ff"}))):null,a&&"staff"===a.type?l.a.createElement("div",{title:"Twitch staff"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",fill:"#9147ff"}))):null)),l.a.createElement("ul",{className:"social_info animated fadeInUpBig"},l.a.createElement("li",null,l.a.createElement("span",null,"Followers"),l.a.createElement("span",{className:"social_count"},y(t.followers))),l.a.createElement("li",null,l.a.createElement("span",null,"Views"),l.a.createElement("span",{className:"social_count"},y(t.views)))),t.description.length>0?l.a.createElement("p",{className:"bio animated fadeInUpBig"},t.description):null))),l.a.createElement("div",{className:"include"},l.a.createElement("div",{className:"container container-profile user-posts__container"},l.a.createElement("div",{className:"more_info"},l.a.createElement("span",null,"Last seen: "),l.a.createElement("b",null,k(t.updated_at))),l.a.createElement("div",{className:"more_info"},l.a.createElement("span",null,"Registration: "),l.a.createElement("b",null,k(t.created_at)))))))},F=function(e){var t=e.data;return l.a.createElement("div",{className:"stream_container"},l.a.createElement("div",{className:"live_title"},"Live stream"),l.a.createElement("div",{className:"stream_item"},l.a.createElement("a",{href:t.channel.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"clip_thumb",style:{backgroundImage:"url(".concat(t.preview.large,")")}},l.a.createElement("div",{className:"clip_stat"},l.a.createElement("span",{className:"live"},l.a.createElement("i",{className:"live_dot"}),"Live"),l.a.createElement("span",null,y(t.viewers)," viewers"))),l.a.createElement("div",{className:"stream_header"},l.a.createElement("div",{className:"clip_header_top"},l.a.createElement("span",null,t.game),l.a.createElement("span",null,"Started ",k(t.created_at))),l.a.createElement("h4",{className:"clip_title"},t.channel.status)))))},B=function(e){var t=e.login;return l.a.createElement("div",{className:"channel_nav"},l.a.createElement(d.c,{to:"/TwitchInfo/channel/"+t,exact:!0,className:"nav_item"},"FOLLOWED CHANNELS"),l.a.createElement(d.c,{to:"/TwitchInfo/channel/"+t+"/clips",className:"nav_item"},"CLIPS"))},H=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).initialState={userId:0,clientId:"ce4n64ldb15801hbrrz06vpq5dbain",profile:[],extendedInfo:[],stream:[],live:!1,noProfileData:!1},e.state=e.initialState,e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Get Twitch account info",this.fetchProfile()}},{key:"componentDidUpdate",value:function(e){e.match.params.login!==this.props.match.params.login&&(this.setState(this.initialState),this.fetchProfile())}},{key:"fetchProfile",value:function(){var e=Object(N.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitch.tv/kraken/users?login="+this.props.match.params.login,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 3:return t=e.sent,e.next=6,t.json();case 6:!(a=e.sent).error&&a.users.length>0?(this.setState({extendedInfo:[a.users[0]],userId:a.users[0]._id}),this.getChannel(),this.getStream()):this.setState({noProfileData:!0}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({noProfileData:!0}),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getChannel",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.userId;fetch("https://api.twitch.tv/kraken/channels/"+t,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){e.setState({profile:[t]})})).catch((function(t){e.setState({noProfileData:!0}),console.error(t)}))}},{key:"getStream",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/streams/"+this.state.userId,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){t.error||null===t.stream?e.setState({live:!1}):e.setState({stream:t.stream,live:!0})})).catch((function(t){e.setState({live:!1}),console.error(t)}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.profile,n=t.extendedInfo,r=t.stream,c=t.live,o=t.noProfileData;return a.length>0?l.a.createElement("div",null,l.a.createElement(P,{data:a,extended:n}),c?l.a.createElement(F,{data:r}):null,l.a.createElement(B,{login:a[0].name}),l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/TwitchInfo/channel/:login",exact:!0,component:function(t){return l.a.createElement(C,{userId:a[0]._id,clientId:e.state.clientId})}}),l.a.createElement(h.a,{path:"/TwitchInfo/channel/:login/clips",component:function(t){return l.a.createElement(z,{login:a[0].name,clientId:e.state.clientId})}}))):o?l.a.createElement(I,{message:"Nothing! Try another username"}):l.a.createElement(M,{className:"full",size:"32"})}}]),a}(n.Component),A=function(){return document.title="TwitchInfo - 404 Not Found",l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"container http_error_container"},l.a.createElement("div",{className:"http_error"},l.a.createElement("h2",null,"404 Not Found"),l.a.createElement(d.b,{to:"/TwitchInfo/"},"Go to home page"))))},V=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(h.c,null,l.a.createElement(h.a,{path:"/TwitchInfo/",exact:!0,component:g}),l.a.createElement(E,{path:"/TwitchInfo/channel/:login",component:H}),l.a.createElement(h.a,{component:A})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(V,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.05d2cd3d.chunk.js.map