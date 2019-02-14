(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{244:function(e,t,n){e.exports=n(412)},249:function(e,t,n){},412:function(e,t,n){"use strict";n.r(t);var a=n(45),r=n.n(a),s=n(158),o=n.n(s),i=(n(249),n(111)),c=n(112),u=n(116),h=n(113),l=n(115),d=n(106),m=n(119),p=n.n(m),f=n(153),v=n(121),y=(n(237),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.markers&&0!==this.props.markers.length?r.a.createElement("ul",{style:{listStyle:"none",color:"red"}},this.props.markers&&this.props.markers.map(function(e){return r.a.createElement("li",{key:e.message},e.startLineNumber,":",e.startColumn," - ",e.message)})):null}}]),t}(r.a.Component)),b=n(243),k=(n(411),n(238)),w=n(239),j=n.n(w),g=function(){var e=Object(f.a)(p.a.mark(function e(t){var n;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),new Error("Unable to download openrpc.json file located at the url: ".concat(t));case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t){return e.apply(this,arguments)}}(),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).monaco=r.a.createRef(),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark(function e(){var t,n,a,r,s=this;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("https://raw.githubusercontent.com/open-rpc/meta-schema/master/schema.json");case 2:t=e.sent,n=JSON.stringify(j()(t),void 0,"\t"),this.editorInstance=v.editor.create(this.monaco.current,{value:n,language:"json",theme:"vs-dark",options:{tabSize:2,formatOnType:!0,formatOnPaste:!0,autoIndent:!0}}),a=window.monaco.Uri.parse("inmemory://model/userSpec.json"),r=v.editor.createModel(n,"json",a),this.editorInstance.setModel(r),v.languages.json.jsonDefaults.setDiagnosticsOptions({enableSchemaRequest:!0,validate:!0,schemas:[{fileMatch:["*"],schema:t}]}),this.editorInstance.setSelection(new v.Selection(3,13,3,13)),this.editorInstance.focus(),window.onresize=function(){return s.editorInstance.layout()},setTimeout(function(){return s.editorInstance.layout()},1e3),this.editorInstance.onDidChangeModelContent(function(){return s.props.onChange()},1e3);case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"editorDidMount",value:function(e,t){this.setEditor(e,t)}},{key:"onChange",value:function(e,t){this.props.onChangeMarkers(window.monaco.editor.getModelMarkers())}},{key:"onVimKeybind",value:function(e){if(this.vimMode)return this.vimMode.dispose(),this.statusNode.innerHTML="",void(this.vimMode=null);this.statusNode=document.getElementById("vim-status-bar"),this.vimMode=Object(k.initVimMode)(this.editorInstance,this.statusNode)}},{key:"render",value:function(){return r.a.createElement(b.a,{keyName:"ctrl+alt+v",onKeyDown:this.onVimKeybind.bind(this)},r.a.createElement("div",{style:{height:"100%"},ref:this.monaco}),r.a.createElement("div",{id:"vim-status-bar"}))}}]),t}(r.a.Component),E=n(179),M=n.n(E),S=n(240),D=n.n(S),I=n(241),x=n.n(I),C=n(242),N=n.n(C),J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={markers:[],parsedSchema:{}},n.refreshEditorData=n.refreshEditorData.bind(Object(d.a)(Object(d.a)(n))),n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(p.a.mark(function e(){return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.interval=setInterval(this.refreshEditorData,1e3);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"refreshEditorData",value:function(e){var t,n=v.editor.getModelMarkers();try{t=JSON.parse(v.editor.getModels()[0].getValue())}catch(a){}this.setState({markers:n,parsedSchema:t||this.state.parsedSchema})}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"setMarkers",value:function(e){this.refreshEditorData(e)}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"row"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",height:"100%",width:"50%"}},r.a.createElement(y,{markers:this.state.markers}),r.a.createElement(O,{onChange:this.setMarkers.bind(this)})),r.a.createElement("div",{className:"docs",style:{margin:"40px"}},this.state.parsedSchema.info&&r.a.createElement(M.a,{source:D()({info:this.state.parsedSchema.info})}),this.state.parsedSchema.servers&&r.a.createElement(M.a,{source:x()({servers:this.state.parsedSchema.servers})}),this.state.parsedSchema.methods&&r.a.createElement(M.a,{source:this.state.parsedSchema.methods.map(function(e){return N()({method:e})}).join("")})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,{style:{height:"100%"}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[244,2,3]]]);
//# sourceMappingURL=main.c31b487f.chunk.js.map