(this["webpackJsonpsearch-youtube-vid"]=this["webpackJsonpsearch-youtube-vid"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),s=a(6),o=a.n(s),l=a(17),m=a(2),u=a(3),d=a(5),p=a(4),v=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={term:"Rico Almoete"},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"search-bar ui segment"},i.a.createElement("form",{onSubmit:this.onFormSubmit,className:"ui form"},i.a.createElement("div",{className:"field"},i.a.createElement("label",null,"Video Search"),i.a.createElement("input",{value:this.state.term,type:"text",onChange:this.onInputChange}))))}}]),a}(i.a.Component),h=a(18),f=a.n(h).a.create({baseURL:"https://www.googleapis.com/youtube/v3"}),b=(a(42),function(e){var t=e.video,a=e.onVideoSelect;return i.a.createElement("div",{onClick:function(){return a(t)},className:"video-item item"},i.a.createElement("img",{alt:t.snippet.title,className:"ui image",src:t.snippet.thumbnails.medium.url}),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},t.snippet.title)))}),E=function(e){var t=e.videos,a=e.onVideoSelect,n=t.map((function(e){return i.a.createElement(b,{key:e.id.videoId,onVideoSelect:a,video:e})}));return i.a.createElement("div",{className:"ui relaxed divided list"},n)},S=function(e){var t=e.video;if(!t)return i.a.createElement("div",null,"Loading....");var a="https://www.youtube.com/embed/".concat(t.id.videoId);return i.a.createElement("div",null,i.a.createElement("div",{className:"ui embed"},i.a.createElement("iframe",{src:a})),i.a.createElement("div",{className:"ui segment"},i.a.createElement("h4",null,t.snippet.title),i.a.createElement("p",null,t.snippet.description)))},g="AIzaSyDg-dcxDuzJDmeuq7RjEPq6ln5xP-oujGM",y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(l.a)(o.a.mark((function t(a){var n,i,r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.get("/search",{params:{q:a,part:"snippet",type:"video",maxResults:"20",key:g}});case 2:for(n=t.sent,i=n.data.items[0].snippet.publishedAt,r=0,c=1;c<n.data.items.length;c++)n.data.items[c].snippet.publishedAt>i&&(i=n.data.items[c].snippet.publishedAt,r=c);e.setState({videos:n.data.items,selectedVideo:n.data.items[r]});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.onTermSubmit("Rico Almoete")}},{key:"render",value:function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(v,{onFormSubmit:this.onTermSubmit}),i.a.createElement("div",{className:"ui grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"eleven wide column"},i.a.createElement(S,{video:this.state.selectedVideo})),i.a.createElement("div",{className:"five wide column"},i.a.createElement(E,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})))))}}]),a}(i.a.Component);c.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.031cacef.chunk.js.map