(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=n.n(s),d=(n(12),n(0));function h(t){return t.toUTCString().slice(-12,-4)}var k=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date},t.clockId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.clockId=setInterval((function(){t.setState({today:new Date}),console.info(h(new Date))}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=t.clockName;e!==this.props.clockName&&console.debug("Renamed from ".concat(e," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.clockId&&clearInterval(this.clockId)}},{key:"render",value:function(){var t=this.props.clockName,e=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:h(e)})]})}}]),n}(u.a.Component),m=k;function v(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var p=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timeId=void 0,t.handleRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handleClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timeId=setInterval((function(){t.setState({clockName:v()})}),3300),document.addEventListener("contextmenu",this.handleRightClick),document.addEventListener("click",this.handleClick)}},{key:"componentWillUnmount",value:function(){this.timeId&&clearInterval(this.timeId),document.removeEventListener("contextmenu",this.handleRightClick),document.removeEventListener("click",this.handleClick)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(m,{clockName:e})]})}}]),n}(u.a.Component);a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f2cac6eb.chunk.js.map