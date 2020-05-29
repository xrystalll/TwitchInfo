(this["webpackJsonpTwitch-info"]=this["webpackJsonpTwitch-info"]||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},37:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=(a(37),a(5)),s=a(6),o=a(8),m=a(7),d=a(3),u=a(1),h=a(31),p=a(27),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(p.Scrollbars,{autoHide:!0,renderTrackHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-horizontal"}))},renderTrackVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"track-vertical"}))},renderThumbHorizontal:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-horizontal"}))},renderThumbVertical:function(e){return l.a.createElement("div",Object.assign({},e,{className:"thumb-vertical"}))},renderView:function(t){return l.a.createElement("div",Object.assign({},t,{className:e.props.className}))}},this.props.children)}}]),a}(n.Component),f=function(){var e=Object(u.f)();return l.a.createElement("header",null,l.a.createElement("div",{className:"head_container"},l.a.createElement(d.b,{to:"/TwitchInfo/",className:"twitch_link"},l.a.createElement("svg",{className:"tw-glitch-logo__svg",overflow:"visible",width:"40px",height:"40px",version:"1.1",viewBox:"0 0 40 40",x:"0px",y:"0px"},l.a.createElement("polygon",{className:"tw-glitch-logo__body",points:"13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"}),l.a.createElement("polygon",{className:"tw-glitch-logo__face",points:"26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25",transform:"translate(0 0)"}),l.a.createElement("path",{className:"tw-glitch-logo__eyes",d:"M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z",transform:"translate(0 0)"}))),l.a.createElement("div",{className:"head_input_inner"},l.a.createElement("input",{onChange:function(e){var t=e.currentTarget;t.value.trim().length?t.classList.remove("error"):t.classList.add("error")}.bind(void 0),onBlur:function(e){var t=e.currentTarget;t.classList.contains("error")&&t.classList.remove("error")}.bind(void 0),onKeyDown:function(t){if("Enter"===t.key){var a=t.currentTarget;a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value),a.value=""):a.classList.add("error")}}.bind(void 0),className:"login input_text",type:"text",placeholder:"Enter username"}),l.a.createElement("input",{onClick:function(t){var a=t.currentTarget.parentNode.children[0];a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value),a.value=""):a.classList.add("error")}.bind(void 0),className:"btn",type:"submit",value:"Check"}))))},g=function(e){var t=e.component,a=Object(h.a)(e,["component"]);return l.a.createElement(u.a,Object.assign({},a,{render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(f,null),l.a.createElement(v,{className:"view"},l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"container"},l.a.createElement(t,e)))))}}))},E=function(){document.title="Get Twitch account info";var e=Object(u.f)();return l.a.createElement("main",{className:"landing"},l.a.createElement("div",{className:"bg"}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"landing_content"},l.a.createElement("h1",{className:"main_head"},"Get Twitch Account"),l.a.createElement("div",{className:"main_description"},"Enter Twitch username to get information about the date of registration, last online, list of follows and more."),l.a.createElement("div",{className:"main_form"},l.a.createElement("input",{onChange:function(e){var t=e.currentTarget;t.value.trim().length?t.classList.remove("error"):t.classList.add("error")}.bind(void 0),onBlur:function(e){var t=e.currentTarget;t.classList.contains("error")&&t.classList.remove("error")}.bind(void 0),onKeyDown:function(t){if("Enter"===t.key){var a=t.currentTarget;a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value)):a.classList.add("error")}}.bind(void 0),className:"login_main input_text",type:"text",placeholder:"Enter username"}),l.a.createElement("input",{onClick:function(t){var a=t.currentTarget.parentNode.children[0];a.value.trim().length?(a.classList.remove("error"),e.push("/TwitchInfo/channel/"+a.value)):a.classList.add("error")}.bind(void 0),className:"btn_main",type:"submit",value:"Check"})))))},w=a(4),_=a.n(w),b=a(12),N=function(e){e||(e=Date.now());var t,a=new Date(e).getTime(),n=new Date,l=new Date(a),r=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],c=n.getFullYear(),i=r[n.getMonth()],s=n.getDate(),o=l.getFullYear(),m=r[l.getMonth()],d=l.getDate(),u=l.getHours(),h=l.getMinutes()<10?"0".concat(l.getMinutes()):l.getMinutes();return t=o!==c?" ".concat(o):"","".concat(d,".").concat(m,".").concat(o)==="".concat(s,".").concat(i,".").concat(c)?"today at ".concat(u,":").concat(h):"".concat(d,".").concat(m,".").concat(o)==="".concat(s-1,".").concat(i,".").concat(c)?"yesterday at ".concat(u,":").concat(h):"".concat(d," ").concat(m).concat(t," at ").concat(u,":").concat(h)},k=function(e){return e&&0!==e?e<1e3?e:e>=1e3&&e<1e6?"".concat(+(e/1e3).toFixed(1),"K"):e>=1e6&&e<1e9?"".concat(+(e/1e6).toFixed(1),"M"):e>=1e9&&e<1e12?"".concat(+(e/1e9).toFixed(1),"B"):void 0:0},y=function(e){var t=e.data[0],a=e.extended[0],n=".user-profile-content .user-head:before {background-image: url(".concat(t.profile_banner||t.logo,")}");return l.a.createElement("article",{className:"container container-profile container-profile-main"},l.a.createElement("style",null,n),l.a.createElement("div",{className:"user-profile-content"},l.a.createElement("div",{className:"user-head"},l.a.createElement("div",{className:"container container-profile user-info"},l.a.createElement("div",{className:"avatar animated fadeInUpBig"},l.a.createElement("img",{src:t.logo,className:"img-circle",alt:""})),l.a.createElement("div",{className:"info"},l.a.createElement("div",{className:"uname animated fadeInUpBig"},l.a.createElement("a",{className:"display_name",href:"https://www.twitch.tv/"+t.name,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("h4",{title:t.name+" - id "+t._id},t.display_name),t.partner?l.a.createElement("div",{title:"Twitch partner"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z",fill:"#9147ff"}))):null,a&&"staff"===a.type?l.a.createElement("div",{title:"Twitch staff"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z",fill:"#9147ff"}))):null)),l.a.createElement("ul",{className:"social_info animated fadeInUpBig"},l.a.createElement("li",null,l.a.createElement("span",null,"Followers"),l.a.createElement("span",{className:"social_count"},k(t.followers))),l.a.createElement("li",null,l.a.createElement("span",null,"Views"),l.a.createElement("span",{className:"social_count"},k(t.views)))),t.description.length>0?l.a.createElement("p",{className:"bio animated fadeInUpBig"},t.description):null))),l.a.createElement("div",{className:"include"},l.a.createElement("div",{className:"container container-profile user-posts__container"},l.a.createElement("div",{className:"more_info"},l.a.createElement("span",null,"Last seen: "),l.a.createElement("b",null,N(t.updated_at))),l.a.createElement("div",{className:"more_info"},l.a.createElement("span",null,"Registration: "),l.a.createElement("b",null,N(t.created_at)))))))},x=function(e){var t=e.data;return l.a.createElement("div",{className:"stream_container"},l.a.createElement("div",{className:"live_title"},"Live stream"),l.a.createElement("div",{className:"stream_item"},l.a.createElement("a",{href:t.channel.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"clip_thumb",style:{backgroundImage:"url(".concat(t.preview.large,")")}},l.a.createElement("div",{className:"clip_stat"},l.a.createElement("span",{className:"live"},l.a.createElement("i",{className:"live_dot"}),"Live"),l.a.createElement("span",null,k(t.viewers)," viewers"))),l.a.createElement("div",{className:"stream_header"},l.a.createElement("div",{className:"clip_header_top"},l.a.createElement("span",null,t.game),l.a.createElement("span",null,"Started ",N(t.created_at))),l.a.createElement("h4",{className:"clip_title"},t.channel.status)))))},M=a(16),I=function(e){var t=e.data.channel;return l.a.createElement(d.b,{to:"/TwitchInfo/channel/"+t.name,className:"follow_item"},l.a.createElement("div",{className:"follow_item_left"},l.a.createElement("div",{className:"follow_img",style:{backgroundImage:"url(".concat(t.logo,")")}})),l.a.createElement("div",{className:"follow_item_right"},l.a.createElement("div",{className:"follow_name"},t.display_name,t.partner?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 20 20"},l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 2l6 2 2 6-2 6-6 2-6-2-2-6 2-6 6-2zM8.889 13.636l5.43-5.429-1.415-1.414-4.015 4.015-2.015-2.015-1.414 1.414 3.429 3.43z",fill:"#9147ff"})):null),l.a.createElement("div",{className:"follow_date"},"Followed from ",N(e.data.created_at),e.data.notifications?l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z"})):l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M20 18.69L7.84 6.14 5.27 3.49 4 4.76l2.8 2.8v.01c-.52.99-.8 2.16-.8 3.42v5l-2 2v1h13.73l2 2L21 19.72l-1-1.03zM12 22c1.11 0 2-.89 2-2h-4c0 1.11.89 2 2 2zm6-7.32V11c0-3.08-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.15.03-.29.08-.42.12-.1.03-.2.07-.3.11h-.01c-.01 0-.01 0-.02.01-.23.09-.46.2-.68.31 0 0-.01 0-.01.01L18 14.68z"}))),l.a.createElement("div",{className:"follow_tags"},t.game?l.a.createElement("span",{className:"follow_tag"},t.game):null,t.language?l.a.createElement("span",{className:"follow_tag"},t.language):null)))},j=function(e){var t=e.className,a=e.size;return l.a.createElement("div",{className:"content_loader ".concat(t||"")},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:a||24,height:a||24,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},l.a.createElement("circle",{cx:"50",cy:"50",fill:"none",strokeWidth:"10",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(359.289 50.0009 50.0009)"},l.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1.2s",begin:"0s",repeatCount:"indefinite"}))))},C=function(e){var t=e.message;return l.a.createElement("div",{className:"empty-results"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:112,height:112,viewBox:"0 0 24 24"},l.a.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),l.a.createElement("path",{className:"path_info",d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),l.a.createElement("div",{className:"empty_words"},l.a.createElement("div",{className:"empty_top"},t)))},S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this))._isMounted=!1,n.state={userId:e.userId,clientId:e.clientId,follows:[],noFollowsData:!1,limit:10,offset:0,loadMore:!1,loadMoreInProgress:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchFollows()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"fetchFollows",value:function(){var e=Object(b.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitch.tv/kraken/users/".concat(this.state.userId,"/follows/channels?limit=").concat(this.state.limit,"&offset=")+this.state.offset,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this._isMounted&&(!a.error&&a.follows.length>0?this.setState({follows:a.follows,offset:this.state.offset+this.state.limit,loadMore:!0}):this.setState({noFollowsData:!0})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({noFollowsData:!0}),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMoreFollows",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/users/".concat(this.state.userId,"/follows/channels?limit=").concat(this.state.limit,"&offset=")+this.state.offset,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){t.follows.length?e.setState({follows:[].concat(Object(M.a)(e.state.follows),Object(M.a)(t.follows)),offset:e.state.offset+e.state.limit,loadMoreInProgress:!1}):e.setState({loadMore:!1,loadMoreInProgress:!1})})).catch((function(t){e.setState({loadMore:!1,loadMoreInProgress:!1}),console.error(t)}))}},{key:"loadMoreFollows",value:function(){this.state.loadMoreInProgress||(this.setState({loadMoreInProgress:!0}),this.fetchMoreFollows())}},{key:"render",value:function(){var e=this.state,t=e.follows,a=e.noFollowsData,n=e.loadMore,r=e.loadMoreInProgress;return l.a.createElement(l.a.Fragment,null,t.length>0?l.a.createElement("div",{className:"follows_list"},t.map((function(e){return l.a.createElement(I,{key:e.channel._id,data:e})}))):a?l.a.createElement(C,{message:"No follows"}):l.a.createElement(j,{className:"long"}),n?l.a.createElement("div",{className:"foot_center"},l.a.createElement("div",{onClick:this.loadMoreFollows.bind(this),className:"load_more"},r?l.a.createElement("span",{className:"more_loader"},l.a.createElement(j,null)):l.a.createElement("span",{className:"more_text"},"Load more follows"))):null)}}]),a}(n.Component),O=a(15),L=a(30),D=function(e){var t=e.data,a=Object(n.useState)(!1),r=Object(L.a)(a,2),c=r[0],i=r[1];Object(n.useEffect)((function(){var e=setTimeout((function(){return i(!1)}),2e3);return function(){return clearTimeout(e)}}),[c]);var s=c?" copied_noactive":"",o=!!t.vod;return l.a.createElement("div",{className:"modal open"},l.a.createElement("div",{className:"position"},l.a.createElement("div",{className:"body"},l.a.createElement("div",{className:"prev_clip","data-thisslug":t.slug},l.a.createElement("svg",{className:"prev_clip_ic",width:"20",height:"20",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M13.5 14.5L9 10l4.5-4.5L12 4l-6 6 6 6 1.5-1.5z"}))),l.a.createElement("div",{className:"body_flex"},l.a.createElement("div",{className:"body_width body_ratio_16-9"},l.a.createElement("div",{className:"body_bg"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"view_ratio ratio_16-9"},l.a.createElement("div",{className:"view_content"},l.a.createElement("video",{className:"video",src:t.thumbnails.tiny.replace("-preview-86x45.jpg",".mp4"),poster:t.thumbnails.medium,controls:!0})))),l.a.createElement("div",{className:"bottom"},l.a.createElement("div",{className:"clip_info_box"},l.a.createElement("div",{className:"clip_info_box_position"},l.a.createElement("div",{className:"clip_info_box_flexbox"},l.a.createElement("div",{className:"clip_info"},l.a.createElement("div",{className:"clip_info_position"},l.a.createElement("div",{className:"action_bar"},l.a.createElement("div",{className:"author_box"},l.a.createElement("div",{className:"avatar_box"},l.a.createElement("div",{className:"author_avatar",style:{backgroundImage:"url(".concat(t.broadcaster.logo,")")}})),l.a.createElement("div",{className:"author_text"},l.a.createElement("div",{className:"author_name"},t.broadcaster.display_name),l.a.createElement("div",{className:"created_time"},t.game)),"clipboard"in navigator?l.a.createElement("div",{onClick:function(e){navigator.clipboard.writeText(e).then((function(){return i(!0)})).catch((function(e){return console.error("Could not copy text.",e)}))}.bind(void 0,t.url.replace("?tt_medium=clips_api&tt_content=url","")),className:"clip_action_share"+s,title:"Copy link to this clip on Twitch"},c?l.a.createElement("svg",{className:"clip_copied",width:"20px",height:"20px",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M4 10l5 5 8-8-1.5-1.5L9 12 5.5 8.5 4 10z"})):l.a.createElement("svg",{width:"20px",height:"20px",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M2 8a2 2 0 012-2v10h10a2 2 0 01-2 2H4a2 2 0 01-2-2V8z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V4zm2 8V4h8v8H8z"}))):null)),l.a.createElement("div",{className:"clip_info_content"},l.a.createElement("span",{className:"clip_info_views",title:t.views+" views"},l.a.createElement("svg",{width:"20px",height:"20px",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M11.998 10a2 2 0 11-4 0 2 2 0 014 0z"}),l.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z"})),k(t.views)," views"),l.a.createElement("h4",{className:"clip_title"},t.title),l.a.createElement("div",{className:"clip_info_created"},l.a.createElement("div",{className:"clip_info_time"},N(t.created_at)),t.curator?l.a.createElement("div",{className:"clip_info_author"},"Clipped by",l.a.createElement(d.b,{to:"/TwitchInfo/channel/"+t.curator.name},t.curator.display_name)):null)),l.a.createElement("div",{className:"clip_bottom"},o?l.a.createElement("a",{className:"btn clip_full",href:t.vod.url,target:"_blank",rel:"noopener noreferrer"},"Watch full video"):null,l.a.createElement("a",{title:"Download clip",className:"btn clip_download".concat(o?" short":""),href:t.thumbnails.tiny.replace("-preview-86x45.jpg",".mp4"),target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"},l.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})),o?null:l.a.createElement("span",null,"Download clip")))))))))))),l.a.createElement("div",{className:"next_clip","data-thisslug":t.slug},l.a.createElement("svg",{className:"next_clip_ic",width:"20",height:"20",version:"1.1",viewBox:"0 0 20 20",x:"0px",y:"0px"},l.a.createElement("path",{d:"M6.5 5.5L11 10l-4.5 4.5L8 16l6-6-6-6-1.5 1.5z"}))))),l.a.createElement("div",{className:"cover"}))},T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this))._isMounted=!1,n.state={clip:[],clientId:e.clientId},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchClip()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"componentDidUpdate",value:function(e){e.slug!==this.props.slug&&this.fetchClip()}},{key:"fetchClip",value:function(){var e=Object(b.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitch.tv/kraken/clips/"+this.props.slug,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this._isMounted&&(a&&!a.error?this.setState({clip:[a]}):console.error("No clip data")),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.clip;return e.length>0&&l.a.createElement(D,{data:e[0]})}}]),a}(n.Component),z=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this)).state={data:e.data,open:!1,slug:""},n.handleOutsideClick=n.handleOutsideClick.bind(Object(O.a)(n)),n.handleKeyDown=n.handleKeyDown.bind(Object(O.a)(n)),n.handleClickNext=n.handleClickNext.bind(Object(O.a)(n)),n}return Object(s.a)(a,[{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleKeyDown,!1),document.removeEventListener("click",this.handleClickNext,!1)}},{key:"openModal",value:function(e){document.addEventListener("click",this.handleOutsideClick,!1),document.addEventListener("keydown",this.handleKeyDown,!1),document.addEventListener("click",this.handleClickNext,!1),this.setState({open:!0,slug:e})}},{key:"handleOutsideClick",value:function(e){"cover"!==e.target.className&&"position"!==e.target.className||(document.removeEventListener("click",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleKeyDown,!1),document.removeEventListener("click",this.handleClickNext,!1),this.setState({open:!1}))}},{key:"handleKeyDown",value:function(e){27===e.keyCode&&(document.removeEventListener("click",this.handleOutsideClick,!1),document.removeEventListener("keydown",this.handleKeyDown,!1),document.removeEventListener("click",this.handleClickNext,!1),this.setState({open:!1}))}},{key:"handleClickNext",value:function(e){if("next_clip"===e.target.className||"next_clip_ic"===e.target.className.baseVal||"next_clip_ic"===e.target.parentNode.className.baseVal){var t=e.target.closest(".next_clip").dataset.thisslug,a=document.querySelector('[data-slug="'.concat(t,'"]')).nextSibling;a&&"modal"===a.classList[0]&&(a=a.nextSibling);var n=null!==a?a.dataset.slug:null;n?(this.setState({slug:n}),document.querySelector(".prev_clip").classList.remove("disable")):document.querySelector(".next_clip").classList.add("disable")}else if("prev_clip"===e.target.className||"prev_clip_ic"===e.target.className.baseVal||"prev_clip_ic"===e.target.parentNode.className.baseVal){var l=e.target.closest(".prev_clip").dataset.thisslug,r=document.querySelector('[data-slug="'.concat(l,'"]')).previousSibling;r&&"modal"===r.classList[0]&&(r=r.previousSibling);var c=null!==r?r.dataset.slug:null;c?(this.setState({slug:c}),document.querySelector(".next_clip").classList.remove("disable")):document.querySelector(".prev_clip").classList.add("disable")}}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.open,n=e.slug,r=!!t.vod;return l.a.createElement(l.a.Fragment,null,a?l.a.createElement(T,{slug:n,clientId:this.props.clientId}):null,l.a.createElement("div",{className:"clip_item","data-slug":t.slug},l.a.createElement("div",{onClick:this.openModal.bind(this,t.slug)},l.a.createElement("div",{className:"clip_thumb",style:{backgroundImage:"url(".concat(t.thumbnails.medium,")")}},l.a.createElement("div",{className:"clip_stat"},l.a.createElement("span",null,k(t.views)," views"),l.a.createElement("span",null,function(e){e||(e=0);var t=parseInt(e,10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),l=t-3600*a-60*n;return a>0&&(a+=":"),l<10&&(l="0"+l),a+n+":"+l}(t.duration))))),l.a.createElement("div",{className:"clip_header"},l.a.createElement("div",{className:"clip_header_top"},l.a.createElement("span",null,t.game),l.a.createElement("span",null,N(t.created_at))),t.curator?l.a.createElement("div",{className:"clip_author"},"Clipped by",l.a.createElement(d.b,{to:"/TwitchInfo/channel/"+t.curator.name},t.curator.display_name)):null,l.a.createElement("h4",{className:"clip_title"},t.title)),l.a.createElement("div",{className:"clip_bottom"},r?l.a.createElement("a",{className:"btn clip_full",href:t.vod.url,target:"_blank",rel:"noopener noreferrer"},"Watch full video"):null,l.a.createElement("a",{className:"btn clip_download".concat(r?" short":""),href:t.thumbnails.tiny.replace("-preview-86x45.jpg",".mp4"),target:"_blank",rel:"noopener noreferrer",download:!0},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20",height:"20"},l.a.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})),r?null:l.a.createElement("span",null,"Download clip")))))}}]),a}(n.Component),P=a(29),F=a.n(P),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this))._isMounted=!1,n.initialPeriod="week",n.state={login:e.login,clientId:e.clientId,period:n.initialPeriod,clips:[],noClipsData:!1,limit:10,cursor:"",loadMore:!1,loadMoreInProgress:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.getUserPeriod()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"getUserPeriod",value:function(){var e=Object(b.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("period");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0=this.initialPeriod;case 5:t=e.t0,this._isMounted&&this.setState({period:t}),this.fetchClips();case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchClips",value:function(){var e=Object(b.a)(_.a.mark((function e(){var t,a,n,l=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:this.state.period,e.prev=1,e.next=4,fetch("https://api.twitch.tv/kraken/clips/top?channel=".concat(this.state.login,"&period=").concat(t,"&limit=")+this.state.limit,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,this._isMounted&&(!n.error&&n.clips.length>0?(this.setState({clips:n.clips,cursor:n._cursor,loadMore:!0}),""===n._cursor&&this.setState({loadMore:!1,loadMoreInProgress:!1})):this.setState({noClipsData:!0})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),this.setState({noClipsData:!0}),console.error(e.t0);case 15:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchMoreClips",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/clips/top?channel=".concat(this.state.login,"&period=").concat(this.state.period,"&limit=").concat(this.state.limit,"&cursor=")+this.state.cursor,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){t.clips.length>0&&""!==e.state.cursor?(e.setState({clips:[].concat(Object(M.a)(e.state.clips),Object(M.a)(t.clips)),cursor:t._cursor,loadMoreInProgress:!1}),""===t._cursor&&e.setState({loadMore:!1,loadMoreInProgress:!1})):e.setState({loadMore:!1,loadMoreInProgress:!1})})).catch((function(t){e.setState({loadMore:!1,loadMoreInProgress:!1}),console.error(t)}))}},{key:"loadMoreClips",value:function(){this.state.loadMoreInProgress||(this.setState({loadMoreInProgress:!0}),this.fetchMoreClips())}},{key:"changePreiod",value:function(e){switch(e.value){case"day":this.setState({clips:[],noClipsData:!1,period:"day",cursor:"",loadMore:!1}),this.fetchClips("day"),localStorage.setItem("period","day");break;case"week":this.setState({clips:[],noClipsData:!1,period:"week",cursor:"",loadMore:!1}),this.fetchClips("week"),localStorage.setItem("period","week");break;case"month":this.setState({clips:[],noClipsData:!1,period:"month",cursor:"",loadMore:!1}),this.fetchClips("month"),localStorage.setItem("period","month");break;case"all":this.setState({clips:[],noClipsData:!1,period:"all",cursor:"",loadMore:!1}),this.fetchClips("all"),localStorage.setItem("period","all");break;default:this.setState({clips:[],noClipsData:!1,period:this.initialPeriod,cursor:"",loadMore:!1}),this.fetchClips(this.initialPeriod),localStorage.setItem("period",this.initialPeriod)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.clips,n=t.noClipsData,r=t.loadMore,c=t.loadMoreInProgress,i=t.period,s=[{value:"day",label:"Popular - 24 hours"},{value:"week",label:"Popular - 7 days"},{value:"month",label:"Popular - 30 days"},{value:"all",label:"Popular - all time"}];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"period_toggle_wrap"},l.a.createElement("div",{className:"period_toggle"},l.a.createElement(F.a,{options:s,onChange:this.changePreiod.bind(this),value:s.find((function(e){return e.value===i}))}),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"20px",height:"20px"},l.a.createElement("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z",fill:"#EFEFF1"})))),a.length>0?l.a.createElement("div",{className:"clips_list"},a.map((function(t){return l.a.createElement(z,{key:t.slug,data:t,clientId:e.state.clientId})}))):n?l.a.createElement(C,{message:"No clips"}):l.a.createElement(j,{className:"long"}),r?l.a.createElement("div",{className:"foot_center"},l.a.createElement("div",{onClick:this.loadMoreClips.bind(this),className:"load_more"},c?l.a.createElement("span",{className:"more_loader"},l.a.createElement(j,null)):l.a.createElement("span",{className:"more_text"},"Load more clips"))):null)}}]),a}(n.Component),V=function(e){var t=e.data;return l.a.createElement("div",{className:"emote_item"},l.a.createElement("div",{className:"emote_img",style:{backgroundImage:"url(https://static-cdn.jtvnw.net/emoticons/v1/".concat(t.id,"/3.0)")}}),l.a.createElement("div",{className:"emote_name"},t.code))},H=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this))._isMounted=!1,n.state={userId:e.userId,tier1:[],tier2:[],tier3:[],noEmotesData:!1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.fetchEmotes()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"fetchEmotes",value:function(){var e=Object(b.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitchemotes.com/api/v4/channels/"+this.state.userId);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this._isMounted&&(!a.error&&a.emotes.length>0?this.setState({tier1:a.emotes.filter((function(e){return e.emoticon_set===Number(a.plans["$4.99"])})),tier2:a.emotes.filter((function(e){return e.emoticon_set===Number(a.plans["$9.99"])})),tier3:a.emotes.filter((function(e){return e.emoticon_set===Number(a.plans["$24.99"])}))}):this.setState({noEmotesData:!0})),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({noEmotesData:!0}),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.tier1,a=e.tier2,n=e.tier3,r=e.noEmotesData;return t.length>0||a.length>0||n.length>0?l.a.createElement("div",{className:"emotes"},t.length>0?l.a.createElement("div",{className:"emote_grid"},l.a.createElement("h4",{className:"tier_title"},"Tier 1 subscriber emotes"),t.map((function(e){return l.a.createElement(V,{key:e.id,data:{id:e.id,code:e.code}})}))):null,a.length>0?l.a.createElement("div",{className:"emote_grid"},l.a.createElement("h4",{className:"tier_title"},"Tier 2 subscriber emotes"),a.map((function(e){return l.a.createElement(V,{key:e.id,data:{id:e.id,code:e.code}})}))):null,n.length>0?l.a.createElement("div",{className:"emote_grid"},l.a.createElement("h4",{className:"tier_title"},"Tier 3 subscriber emotes"),n.map((function(e){return l.a.createElement(V,{key:e.id,data:{id:e.id,code:e.code}})}))):null):r?l.a.createElement(C,{message:"No emotes"}):l.a.createElement(j,{className:"long"})}}]),a}(n.Component),A=function(e){var t=e.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"channel_nav nav_sticky"},l.a.createElement(d.c,{to:"/TwitchInfo/channel/"+t.login,exact:!0,className:"nav_item"},"Followed channels"),l.a.createElement(d.c,{to:"/TwitchInfo/channel/"+t.login+"/clips",className:"nav_item"},"Clips"),l.a.createElement(d.c,{to:"/TwitchInfo/channel/"+t.login+"/emotes",className:"nav_item"},"Emotes")),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/TwitchInfo/channel/:login",exact:!0,component:function(e){return l.a.createElement(S,{userId:t.userId,clientId:t.clientId})}}),l.a.createElement(u.a,{path:"/TwitchInfo/channel/:login/clips",component:function(e){return l.a.createElement(B,{login:t.login,clientId:t.clientId})}}),l.a.createElement(u.a,{path:"/TwitchInfo/channel/:login/emotes",component:function(e){return l.a.createElement(H,{userId:t.userId})}})))},U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).initialState={userId:0,clientId:"ce4n64ldb15801hbrrz06vpq5dbain",profile:[],extendedInfo:[],stream:[],live:!1,noProfileData:!1},e.state=e.initialState,e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Get Twitch account info",this.fetchProfile()}},{key:"componentDidUpdate",value:function(e){e.match.params.login!==this.props.match.params.login&&(this.setState(this.initialState),this.fetchProfile())}},{key:"fetchProfile",value:function(){var e=Object(b.a)(_.a.mark((function e(){var t,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.twitch.tv/kraken/users?login="+this.props.match.params.login,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}});case 3:return t=e.sent,e.next=6,t.json();case 6:!(a=e.sent).error&&a.users.length>0?(this.setState({extendedInfo:[a.users[0]],userId:Number(a.users[0]._id)}),this.getChannel(),this.getStream()):this.setState({noProfileData:!0}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({noProfileData:!0}),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getChannel",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.userId;fetch("https://api.twitch.tv/kraken/channels/"+t,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){e.setState({profile:[t]})})).catch((function(t){e.setState({noProfileData:!0}),console.error(t)}))}},{key:"getStream",value:function(){var e=this;fetch("https://api.twitch.tv/kraken/streams/"+this.state.userId,{method:"GET",headers:{Accept:"application/vnd.twitchtv.v5+json","Client-ID":this.state.clientId}}).then((function(e){return e.json()})).then((function(t){if(t.error||null===t.stream){if(!1===e.state.live)return;e.setState({live:!1})}else e.setState({stream:t.stream,live:!0})})).catch((function(t){e.setState({live:!1}),console.error(t)}))}},{key:"render",value:function(){var e=this.state,t=e.profile,a=e.extendedInfo,n=e.stream,r=e.live,c=e.noProfileData;return t.length>0?l.a.createElement("div",null,l.a.createElement(y,{data:t,extended:a}),r?l.a.createElement(x,{data:n}):null,l.a.createElement(A,{data:{clientId:this.state.clientId,userId:t[0]._id,login:t[0].name}})):c?l.a.createElement(C,{message:"Nothing! Try another username"}):l.a.createElement(j,{className:"full",size:"32"})}}]),a}(n.Component),G=function(){return document.title="TwitchInfo - 404 Not Found",l.a.createElement("section",{className:"content"},l.a.createElement("div",{className:"container http_error_container"},l.a.createElement("div",{className:"http_error"},l.a.createElement("h2",null,"404 Not Found"),l.a.createElement(d.b,{to:"/TwitchInfo/"},"Go to home page"))))},K=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){"light"===localStorage.getItem("theme")&&document.body.classList.add("light-theme")}},{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/TwitchInfo/",exact:!0,component:E}),l.a.createElement(g,{path:"/TwitchInfo/channel/:login",component:U}),l.a.createElement(u.a,{component:G})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(K,null),document.querySelector("#root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.db27f53a.chunk.js.map