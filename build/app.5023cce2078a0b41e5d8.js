webpackJsonp([0,2],{0:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}var t=n(1),o=e(t),r=n(153),i=n(156),a=e(i),l=n(200),s=e(l),u=n(270),c=e(u),f=n(515),d=e(f),p=n(204);n(!function(){var e=new Error('Cannot find module "../../css/default.css"');throw e.code="MODULE_NOT_FOUND",e}()),n(!function(){var e=new Error('Cannot find module "../../css/fonts.css"');throw e.code="MODULE_NOT_FOUND",e}()),n(!function(){var e=new Error('Cannot find module "../../css/font-awesome/css/font-awesome.min.css"');throw e.code="MODULE_NOT_FOUND",e}());var h=document.getElementById("base"),m=(0,a["default"])({queryKey:!1});(0,p.render)(o["default"].createElement(r.Router,{history:m},o["default"].createElement(r.Route,{path:"/",component:c["default"]}),o["default"].createElement(r.Route,{path:"app",component:s["default"]})),h),(0,d["default"])("create","UA-XXXX-Y","auto"),(0,d["default"])("send","pageview")}).call(this)}finally{}},200:function(e,t,n){try{(function(){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var o=n(201),r=t(o),i=n(1),a=t(i),l=n(153),s=(t(l),n(204),a["default"].createClass({displayName:"App",render:function(){return a["default"].createElement("div",null,a["default"].createElement(r["default"],null),this.props.children)}}));e.exports=s}).call(this)}finally{}},201:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(202),s=e(l),u=n(205),c=e(u),f=n(206),d=e(f),p=n(256),h=e(p),m=(n(204),n(1)),y=e(m),v=(n(249),n(264)),b={contentHeaderMenuLink:{textDecoration:"none",color:"white",padding:8}},g=function(e){function t(e,n){o(this,t);var i=r(this,Object.getPrototypeOf(t).call(this,e,n));return i._onChange=i._onChange.bind(i),i.menuButtonClick=i.menuButtonClick.bind(i),i.onSetOpen=i.onSetOpen.bind(i),i.state={docked:!0,open:!1,transitions:!0,touch:!0,touchHandleWidth:20,dragToggleDistance:30,name:i.getStateFromStore()},i}return i(t,e),a(t,[{key:"getStateFromStore",value:function(){return v.getSelected()}},{key:"componentDidMount",value:function(){v.addChangeListener(this._onChange)}},{key:"componentWillUnmount",value:function(){v.removeChangeListener(this._onChange)}},{key:"onSetOpen",value:function(e){this.setState({open:e})}},{key:"menuButtonClick",value:function(e){e.preventDefault(),this.onSetOpen(!this.state.open)}},{key:"renderPropNumber",value:function(e){var t=this,n=function(n){var o={};o[e]=parseInt(n.target.value),t.setState(o)};return y["default"].createElement("p",{key:e},e," ",y["default"].createElement("input",{type:"number",onChange:n,value:this.state[e]}))}},{key:"render",value:function(){var e=y["default"].createElement(c["default"],null),t=(y["default"].createElement("span",null,!this.state.docked&&y["default"].createElement("a",{onClick:this.menuButtonClick,href:"#",style:b.contentHeaderMenuLink},"="),y["default"].createElement("span",null," ",this.state.name)),{sidebar:e,docked:this.state.docked,open:this.state.open,touch:this.state.touch,touchHandleWidth:this.state.touchHandleWidth,dragToggleDistance:this.state.dragToggleDistance,transitions:this.state.transitions,onSetOpen:this.onSetOpen});return y["default"].createElement(s["default"],t,y["default"].createElement(d["default"],{title:this.state.name},y["default"].createElement("div",{className:"content"},y["default"].createElement("div",{className:"wrap"},y["default"].createElement("div",{className:"control",role:"main",style:{height:"2180px"}},y["default"].createElement(h["default"],null))))))}},{key:"_onChange",value:function(){var e=this.getStateFromStore();this.setState({name:e})}}]),t}(y["default"].Component);t["default"]=g}).call(this)}finally{}},205:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=n(204),c=(e(u),n(206)),f=e(c),d=n(207),p=n(246),h=e(p),m=n(249),y={base:{sidebar:{width:256},sidebarLink:{display:"block",padding:"16px 0px",color:"#757575",textDecoration:"none",borderRadius:"10px"},divider:{margin:"8px 0",height:1,backgroundColor:"#757575"},":hover":{backgroundColor:"00FFFF"}}},v=["Atlanta Hawks","Boston Celtics","Brooklyn Nets","Charlotte Hornets","Chicago Bulls","Cleveland Cavaliers","Dallas Mavericks","Denver Nuggets","Detroit Pistons","Golden State Warriors","Houston Rockets","Indiana Pacers","LA Clippers","LA Lakers","Memphis Grizzlies","Miami Heat","Milwaukee Bucks","Minnesota Timberwolves","New Orleans Pelicans","New York Knicks","Oklahoma City Thunder","Orlando Magic","Philadelphia Sixers","Phoenix Suns","Portland Trail Blazers","Sacramento Kings","San Antonio Spurs","Toronto Raptors","Utah Jazz","Washington Wizards"],b=function(e){function t(e,n){o(this,t);var i=r(this,Object.getPrototypeOf(t).call(this,e,n));return i.handleClick=function(){return i.setState({isShowingModal:!0})},i.handleClose=function(){return i.setState({isShowingModal:!1})},i.enterHover=i.enterHover.bind(i),i.exitHover=i.exitHover.bind(i),i.pushName=i.pushName.bind(i),i.createList=i.createList.bind(i),i.changeLinks=i.changeLinks.bind(i),i.setState=i.setState.bind(i),i.state={result_links:i.createList(),isShowingModal:!1,initial_links:v},i}return i(t,e),a(t,[{key:"pushName",value:function(e){m.setTeamName(e)}},{key:"createList",value:function(e){var t=v;if("undefined"==typeof e||0==e.length){var n=[];n=t}else n=e;for(var o=[],r=0;r<n.length;r++){var i=n[r];o.push(s["default"].createElement("a",{key:n[r],style:y.base.sidebarLink,onClick:this.pushName.bind(null,i),onMouseOver:this.enterHover.bind(null,n[r]),onMouseLeave:this.exitHover},i))}return o}},{key:"componentDidMount",value:function(){this.createList()}},{key:"enterHover",value:function(e){m.setHoverTeam(e)}},{key:"exitHover",value:function(){m.removeHoverTeam()}},{key:"changeLinks",value:function(e,t){this.setState({result_links:this.createList(t)})}},{key:"render",value:function(){var e=y.base.sidebar;return this.props.style&&(e=update(e,{$merge:this.props.style})),s["default"].createElement(f["default"],{title:"Menu",style:e},s["default"].createElement("a",{href:"#",style:y.base.sidebarLink},"Home"),s["default"].createElement("a",{onClick:this.handleClick,style:y.base.sidebarLink},this.state.isShowingModal&&s["default"].createElement(d.ModalContainer,{onClose:this.handleClose},s["default"].createElement(d.ModalDialog,{onClose:this.handleClose},s["default"].createElement("h1",null,"Coming Soon!"))),"Log In"),s["default"].createElement("div",{style:y.base.divider}),s["default"].createElement(h["default"],{items:this.state.initial_links,placeholder:"Search for your team",onChange:this.changeLinks}),this.state.result_links)}}]),t}(s["default"].Component);t["default"]=b}).call(this)}finally{}},206:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=e(r),a={root:{fontFamily:'"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',fontWeight:300},header:{backgroundColor:"#03a9f4",color:"white",padding:"16px",fontSize:"1.5em"}},l=function(e){var t=e.style?o({},a.root,e.style):a.root;return i["default"].createElement("div",{style:t},i["default"].createElement("div",{style:a.header},e.title),e.children)};t["default"]=l}).call(this)}finally{}},249:function(e,t,n){try{(function(){"use strict";var t=n(250),o=n(254),r={recieveTeamName:function(e){t.handleAction({actionType:o.RECIEVE_TEAM,name:e})},setTeamName:function(e){t.handleAction({actionType:o.SET_NAME,index:e})},setHoverTeam:function(e){t.handleAction({actionType:o.ADD_HOVER,hover:e})},removeHoverTeam:function(){t.handleAction({actionType:o.REMOVE_HOVER})}};e.exports=r}).call(this)}finally{}},250:function(e,t,n){try{(function(){"use strict";var t=n(251).Dispatcher,o=new t;o.handleAction=function(e){this.dispatch({source:"VIEW_ACTION",action:e})},e.exports=o}).call(this)}finally{}},254:function(e,t,n){try{(function(){"use strict";var t=n(255);e.exports=t({RECIEVE_TEAM:null,SET_TEAM:null,ADD_HOVER:null,REMOVE_HOVER:null})}).call(this)}finally{}},255:538,256:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=n(257),c=(e(u),n(258)),f=e(c),d=n(261),p=e(d),h=n(262),m=n(263),y=n(264),v=n(267);window.React=s["default"];var b=function(e){function t(e,n){o(this,t);var i=r(this,Object.getPrototypeOf(t).call(this,e,n));return i._onChange=i._onChange.bind(i),i._updateArticle=i._updateArticle.bind(i),i._handleArticle=i._handleArticle.bind(i),i.state={name:i.getTeamState(),articles:[],ignore:!1,title:""},i}return i(t,e),a(t,[{key:"handlePermissionGranted",value:function(){console.log("Permission Granted"),this.setState({ignore:!1})}},{key:"handlePermissionDenied",value:function(){console.log("Permission Denied"),this.setState({ignore:!0})}},{key:"handleNotSupported",value:function(){console.log("Web Notification not Supported"),this.setState({ignore:!0})}},{key:"handleNotificationOnClick",value:function(e,t){console.log(e,"Notification clicked tag:"+t),window.open(t)}},{key:"handleNotificationOnError",value:function(e,t){console.log(e,"Notification error tag:"+t)}},{key:"handleNotificationOnClose",value:function(e,t){console.log(e,"Notification closed tag:"+t)}},{key:"handleNotificationOnShow",value:function(e,t){console.log(e,"Notification shown tag:"+t)}},{key:"_handleArticle",value:function(e){if(!this.state.ignore){var t=e.title,n="",o=e.url,r=(e.iurl,{tag:o,body:n,lang:"en",dir:"ltr"});this.setState({title:t,options:r})}}},{key:"getTeamState",value:function(){return y.getSelected()}},{key:"_updateArticle",value:function(){var e=new h(this.props.baseUrl+this.state.name+"/results");this.bindAsArray(e,"articles")}},{key:"componentDidMount",value:function(){y.addChangeListener(this._onChange),this._updateArticle();var e=new h(this.props.baseUrl+this.state.name+"/results");e.orderByChild("timeStamp").startAt(Date.now()).on("child_added",function(e){var t=e.val();this._handleArticle(t)}.bind(this))}},{key:"componentWillUnmount",value:function(){y.removeChangeListener(this._onChange);var e=new h(this.props.baseUrl+this.state.name);e.off(),"[]"==this.articles&&(console.log(this.articles),this.unbind("articles"))}},{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement(p["default"],{ignore:this.state.ignore&&""!==this.state.title,notSupported:this.handleNotSupported.bind(this),onPermissionGranted:this.handlePermissionGranted.bind(this),onPermissionDenied:this.handlePermissionDenied.bind(this),onShow:this.handleNotificationOnShow.bind(this),onClick:this.handleNotificationOnClick.bind(this),onClose:this.handleNotificationOnClose.bind(this),onError:this.handleNotificationOnError.bind(this),timeout:5e3,title:this.state.title,options:this.state.options}),s["default"].createElement("ul",{className:"tiles"},s["default"].createElement(f["default"],{article:this.state.articles})))}},{key:"_onChange",value:function(){var e=this.getTeamState();this.setState({name:e},function(){this.unbind("articles"),this._updateArticle()})}}]),t}(s["default"].Component);b.defaultProps={baseUrl:"https://articleserver.firebaseio.com/"},v(b.prototype,m),t["default"]=b}).call(this)}finally{}},257:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("img",{src:this.props.image,width:"282",height:"200"})}}]),t}(s["default"].Component);t["default"]=u}).call(this)}finally{}},258:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=n(259),c=e(u),f=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props.article;e.sort(function(e,t){return t.date-e.date});var t=e.map(function(e,t){return""==e.iurl&&(e.iurl="/images/basketball.jpg"),s["default"].createElement("li",{key:t},s["default"].createElement(c["default"],{image:e.iurl}),s["default"].createElement("div",{className:"post-basic-info"},s["default"].createElement("h3",null,s["default"].createElement("a",{href:e.url},e.title)),s["default"].createElement("span",null,s["default"].createElement("a",{href:"#"},s["default"].createElement("label",null," "),e.team)),s["default"].createElement("p",null,e.description)))});return s["default"].createElement("div",null,t)}}]),t}(s["default"].Component);t["default"]=f}).call(this)}finally{}},259:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=n(260),c=e(u),f=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement(c["default"],{src:this.props.image,style:{width:"282px",height:"200px"}})}}]),t}(s["default"].Component);t["default"]=f}).call(this)}finally{}},261:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u="granted",c=function(){var e=0;return function(){return e++}},f=c(),d=function(e){function t(e){o(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e)),i=!1,a=!1;return"Notification"in window&&window.Notification?(i=!0,window.Notification.permission===u&&(a=!0)):i=!1,n.state={supported:i,granted:a},n.notifications={},n.windowFocus=!0,n.onWindowFocus=n._onWindowFocus.bind(n),n.onWindowBlur=n._onWindowBlur.bind(n),n}return i(t,e),a(t,[{key:"_onWindowFocus",value:function(){this.windowFocus=!0}},{key:"_onWindowBlur",value:function(){this.windowFocus=!1}},{key:"componentDidMount",value:function(){var e=this;this.props.disableActiveWindow&&(window.addEventListener?(window.addEventListener("focus",this.onWindowFocus),window.addEventListener("blur",this.onWindowBlur)):window.attachEvent&&(window.attachEvent("focus",this.onWindowFocus),window.attachEvent("blur",this.onWindowBlur))),this.state.supported?this.state.granted?this.props.onPermissionGranted():window.Notification.requestPermission(function(t){var n=t===u;e.setState({granted:n},function(){n?e.props.onPermissionGranted():e.props.onPermissionDenied()})}):this.props.notSupported()}},{key:"componentWillUnmount",value:function(){this.props.disableActiveWindow&&(window.removeEventListner?(window.removeEventListener("focus",this.onWindowFocus),window.removeEventListener("blur",this.onWindowBlur)):window.detachEvent&&(window.detachEvent("focus",this.onWindowFocus),window.detachEvent("blur",this.onWindowBlur)))}},{key:"render",value:function(){var e=this,t=this.props.disableActiveWindow&&this.windowFocus;return!this.props.ignore&&this.props.title&&this.state.supported&&this.state.granted&&!t&&!function(){var t=e.props.options;if("string"!=typeof t.tag&&(t.tag="web-notification-"+f()),!e.notifications[t.tag]){var n=new window.Notification(e.props.title,t);n.onshow=function(n){e.props.onShow(n,t.tag),setTimeout(function(){e.close(t.tag)},e.props.timeout)},n.onclick=function(n){e.props.onClick(n,t.tag)},n.onclose=function(n){e.props.onClose(n,t.tag)},n.onerror=function(n){e.props.onError(n,t.tag)},e.notifications[t.tag]=n}}(),s["default"].createElement("input",{type:"hidden",name:"dummy-for-react-web-notification",style:{display:"none"}})}},{key:"close",value:function(e){this.notifications[e]&&"function"==typeof this.notifications[e].close&&this.notifications[e].close()}},{key:"_getNotificationInstance",value:function(e){return this.notifications[e]}}]),t}(s["default"].Component);d.propTypes={ignore:s["default"].PropTypes.bool,disableActiveWindow:s["default"].PropTypes.bool,notSupported:s["default"].PropTypes.func,onPermissionGranted:s["default"].PropTypes.func,onPermissionDenied:s["default"].PropTypes.func,onShow:s["default"].PropTypes.func,onClick:s["default"].PropTypes.func,onClose:s["default"].PropTypes.func,onError:s["default"].PropTypes.func,timeout:s["default"].PropTypes.number,title:s["default"].PropTypes.string.isRequired,options:s["default"].PropTypes.object},d.defaultProps={ignore:!1,disableActiveWindow:!1,notSupported:function(){},onPermissionGranted:function(){},onPermissionDenied:function(){},onShow:function(){},onClick:function(){},onClose:function(){},onError:function(){},timeout:5e3,options:{}},t["default"]=d}).call(this)}finally{}},264:function(e,t,n){try{(function(){"use strict";function t(e){u=e,c=e,localStorage.setItem("_localTeam",e),localStorage.setItem("_localOriginal",e)}function o(e){c=u,localStorage.setItem("_localOriginal",u),u=e,localStorage.setItem("_localTeam",e)}function r(){u=c,localStorage.setItem("_localTeam",c)}var i=n(250),a=n(265).EventEmitter,l=n(254),s=n(266),u="New York Knicks",c="New York Knicks",f=(localStorage.getItem("_localTeam"),s.extend({},a.prototype,{getSelected:function(){var e=localStorage.getItem("_localTeam");return"undefined"!==e?e:u},emitChange:function(){this.emit("change")},addChangeListener:function(e){this.on("change",e)},removeChangeListener:function(e){this.removeListener("change",e)}}));i.register(function(e){var n=e.action;switch(n.actionType){case l.SET_NAME:t(n.index);break;case l.ADD_HOVER:o(n.hover);break;case l.REMOVE_HOVER:r();break;default:return!0}return f.emitChange(),!0}),e.exports=f}).call(this)}finally{}},265:function(e,t){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function o(e){return"function"==typeof e}function r(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}e.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(e){if(!r(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},n.prototype.emit=function(e){var t,n,r,l,s,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(o(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:l=Array.prototype.slice.call(arguments,1),n.apply(this,l)}else if(i(n))for(l=Array.prototype.slice.call(arguments,1),u=n.slice(),r=u.length,s=0;r>s;s++)u[s].apply(this,l);return!0},n.prototype.addListener=function(e,t){var r;if(!o(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,o(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(r=a(this._maxListeners)?n.defaultMaxListeners:this._maxListeners,r&&r>0&&this._events[e].length>r&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!o(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},n.prototype.removeListener=function(e,t){var n,r,a,l;if(!o(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],a=n.length,r=-1,n===t||o(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(n)){for(l=a;l-- >0;)if(n[l]===t||n[l].listener&&n[l].listener===t){r=l;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],o(n))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},n.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?o(this._events[e])?[this._events[e]]:this._events[e].slice():[]},n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(o(t))return 1;if(t)return t.length}return 0},n.listenerCount=function(e,t){return e.listenerCount(t)}},270:function(e,t,n){try{(function(){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var o=n(271),r=t(o),i=n(153),a=(t(i),n(511)),l=t(a),s=n(513),u=t(s),c=n(514),f=t(c),d=n(1),p=d.createClass({displayName:"HomeView",render:function(){return d.createElement("div",null,d.createElement(r["default"],null),d.createElement(l["default"],null),d.createElement(u["default"],null),d.createElement(f["default"],null),this.props.children)}});e.exports=p}).call(this)}finally{}},271:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=n(272),c=e(u),f=n(292),d=(e(f),n(153)),p=n(306),h=n(352),m=e(h),y=n(348),v=(e(y),n(418)),b=e(v),g=n(420),w=(e(g),function(e){function t(e,n){o(this,t);var i=r(this,Object.getPrototypeOf(t).call(this,e,n));return i.state={muiTheme:m["default"].getMuiTheme(b["default"])},i}return i(t,e),a(t,[{key:"getChildContext",value:function(){return{muiTheme:this.state.muiTheme}}},{key:"render",value:function(){return s["default"].createElement("div",{className:"wrapper big"},s["default"].createElement(c["default"],{style:{height:"100%"},className:"lander"},s["default"].createElement("div",{className:"container vertical-center intro-header"},s["default"].createElement("div",{className:"intro-message"},s["default"].createElement("h1",null,"Squad Stream"),s["default"].createElement("p",null,"Real-time news for your favorite NBA team"),s["default"].createElement("hr",{className:"intro-divider"}),s["default"].createElement(p.RaisedButton,{className:"raised-button",label:"Get Started",primary:!0,containerElement:s["default"].createElement(d.Link,{to:"/app"}),style:{backgroundColor:"#00bcd4"}})))))}}]),t}(s["default"].Component));w.childContextTypes={muiTheme:s["default"].PropTypes.object},t["default"]=w}).call(this)}finally{}},511:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=n(512),c=e(u),f=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:"featured-wrapper"},s["default"].createElement("div",{className:"featured container"},s["default"].createElement("div",{className:"major"},s["default"].createElement("h2",null,"Stay In The Know")),s["default"].createElement(c["default"],{column:"column1 col-md-4 leftColumn",icon:"icon icon-star",title:"Choose Your Team",description:"Choose your favorite NBA team."}),s["default"].createElement(c["default"],{column:"column1 col-md-4 middleColumn",icon:"icon icon-search",title:"Explore",description:"Explore the latest news and stay Streets Ahead. And by latest news we mean to the minute."}),s["default"].createElement(c["default"],{column:"column1 col-md-4",icon:"icon icon-dribbble",title:"Kickback and Relax",description:"...or go study, but leave the tab open and we'll send you notifs about any breaking news."
})))}}]),t}(s["default"].Component);t["default"]=f}).call(this)}finally{}},512:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("div",{className:this.props.column},s["default"].createElement("span",{className:this.props.icon}),s["default"].createElement("div",{className:"title"},s["default"].createElement("h2",null,this.props.title),s["default"].createElement("span",{className:"byline"},this.props.description)))}}]),t}(s["default"].Component);t["default"]=u}).call(this)}finally{}},513:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),s=e(l),u=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("footer",{className:"footer-basic-centered"},s["default"].createElement("p",{className:"footer-links"},s["default"].createElement("a",{href:"#"},"Home")," · ",s["default"].createElement("a",{href:"/#/app"},"Get Started")),s["default"].createElement("p",{className:"footer-company-name"},"Squad Stream by Ammar Karim © 2015-2016"))}}]),t}(s["default"].Component);t["default"]=u}).call(this)}finally{}},514:function(e,t,n){try{(function(){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n(1),s=t(l),u=n(515),c=u.Initializer,f=function(e){function t(){return o(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement(c,null))}}]),t}(s["default"].Component);e.exports=f}).call(this)}finally{}}});