webpackJsonp([0,2],[,,function(e,t,s){"use strict";var r=s(1),o=s.n(r),n=s(21),a=s(16),i=s.n(a),l=s(15),c=s.n(l);o.a.use(n.a),t.a=new n.a({routes:[{path:"/",name:"hello",component:i.a},{path:"/play/:gameLevel",name:"bubbles",component:c.a}]})},function(e,t){},function(e,t,s){s(11);var r=s(0)(s(5),s(19),null,null);e.exports=r.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"bubble",props:["index","level","last"],data:function(){return{operators:["+","-","*","/","%"],circleXCoordinate:Math.floor(901*Math.random())+0,ans:"",showBubble:!0,focus:!1,isCorrect:!0}},directives:{focus:{update:function(e,t){t.value&&e.focus()}}},created:function(){this.last&&this.$emit("showResult")},computed:{operator:function(){var e=0;return e=1===this.level?2:2===this.level?4:5,this.operators[Math.floor(Math.random()*e)+0]},num2:function(){var e=void 0,t=0;return"*"===this.operator||"/"===this.operator?(e=11,t=1):e=100,Math.floor(Math.random()*e)+t},num1:function(){var e=void 0;return e="%"===this.operator?11:100,Math.floor(Math.random()*e)+0}},methods:{calculate:function(){var e=parseFloat(this.ans);if("+"===this.operator)this.num1+this.num2===e?this.popBubble():this.wrongAnswer();else if("-"===this.operator)this.num1-this.num2===e?this.popBubble():this.wrongAnswer();else if("*"===this.operator)this.num1*this.num2===e?this.popBubble():this.wrongAnswer();else if("/"===this.operator){var t=this.num1/this.num2;t===e||Math.ceil(t).toFixed(1)===e||Math.ceil(t).toFixed(2)===e?this.popBubble():this.wrongAnswer()}else if("%"===this.operator){var s=this.num1/100*this.num2;s===e||Math.ceil(s).toFixed(1)===e||Math.ceil(s).toFixed(2)===e?this.popBubble():this.wrongAnswer()}},popBubble:function(){this.showBubble=!1,this.isCorrect=!0,this.$emit("correctAnswer")},wrongAnswer:function(){this.ans="",this.isCorrect=!1},showResult:function(){console.log("game over"),this.$emit("showResult")}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(14),o=s.n(r);t.default={name:"bubbles",data:function(){return{counter:[0,1,2,3,4,5,6,7,8,9],score:0,level:parseInt(this.$route.params.gameLevel),showScore:!1,msg:""}},components:{bubble:o.a},methods:{increaseScore:function(){this.score+=100},showResult:function(){switch(this.score){case 100:this.msg="Nice job!";break;case 200:this.msg="Excellent!";break;case 300:this.msg="Man are you good!";break;case 400:this.msg="You are a pro!";break;case 500:this.msg="Unbelievable!";break;case 600:this.msg="Insanity!";break;case 700:this.msg="You are on fire!";break;case 800:this.msg="That was crazy!";break;case 900:this.msg="You are blowing my mind!";break;case 1e3:this.msg="WINNER! \n OMG! You are a Genius!!!"}this.showScore=!0}}}},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{level:1}}}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,s){e.exports=s.p+"static/img/heart.c9bacc9.png"},function(e,t,s){s(10);var r=s(0)(s(6),s(18),"data-v-3ff8e1f2",null);e.exports=r.exports},function(e,t,s){s(12);var r=s(0)(s(7),s(20),"data-v-7a62051e",null);e.exports=r.exports},function(e,t,s){s(9);var r=s(0)(s(8),s(17),"data-v-17771fdc",null);e.exports=r.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"c"},[s("div",{staticClass:"box outerDiv"},[s("h1",{staticClass:"title"},[e._v("Develop your number sense!!!")]),e._v(" "),s("p",{staticClass:"control"},[s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{type:"radio",id:"beginner",value:"1"},domProps:{checked:e._q(e.level,"1")},on:{__c:function(t){e.level="1"}}}),e._v("\n      Beginner\n    ")]),e._v(" "),s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{type:"radio",id:"intermediate",value:"2"},domProps:{checked:e._q(e.level,"2")},on:{__c:function(t){e.level="2"}}}),e._v("\n      Intermediate\n    ")]),e._v(" "),s("label",{staticClass:"radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],attrs:{type:"radio",id:"expert",value:"3"},domProps:{checked:e._q(e.level,"3")},on:{__c:function(t){e.level="3"}}}),e._v("\n      Expert\n    ")])]),e._v(" "),s("p",{staticClass:"control"},[s("router-link",{staticClass:"button is-primary is-large",attrs:{to:{name:"bubbles",params:{gameLevel:e.level}},exact:""}},[e._v("Play")])],1)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade"}},[e.showBubble?s("g",{on:{click:function(t){e.focus=!0}}},[s("animateTransform",{attrs:{attributeType:"XML",attributeName:"transform",type:"translate",from:"100, 300",to:"100,-1000",dur:"20s",fill:"freeze",begin:e.index,repeatCount:"0"}}),e._v(" "),s("circle",{class:{correct:e.isCorrect,wrong:!e.isCorrect},attrs:{cx:e.circleXCoordinate,cy:"900",r:"100"}}),e._v(" "),s("text",{attrs:{"font-size":"25","font-weight":"bold","font-family":"Verdana",x:e.circleXCoordinate-40,y:"890"}},[e._v(e._s(e.num1)+" "+e._s(e.operator)+" "+e._s(e.num2))]),e._v(" "),s("text",{attrs:{"font-size":"25","font-weight":"bold","font-family":"Verdana",x:e.circleXCoordinate-70,y:"920"}},[e._v("=")]),e._v(" "),s("foreignObject",{attrs:{x:e.circleXCoordinate-40,y:"900",width:"90",height:"100"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.ans,expression:"ans"},{name:"focus",rawName:"v-focus",value:e.focus,expression:"focus"}],attrs:{type:"text"},domProps:{value:e.ans},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e.calculate(t)},blur:function(t){e.focus=!1},input:function(t){t.target.composing||(e.ans=t.target.value)}}})])],1):e._e()])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("svg",{class:"l"+e.level},[r("defs",[r("linearGradient",{attrs:{id:"grad1",x1:"0%",y1:"90%",x2:"100%",y2:"0%"}},[r("stop",{attrs:{offset:"20%","stop-color":"#FFF"}}),e._v(" "),r("stop",{attrs:{offset:"70%","stop-color":"#a0e3e8"}})],1)],1),e._v(" "),r("foreignObject",{attrs:{x:"15",y:"15",width:"70",height:"70"}},[r("img",{attrs:{src:s(13),alt:"Star",height:"50",width:"50"}})]),e._v(" "),r("text",{attrs:{"font-size":"25","font-weight":"bold","font-family":"Verdana",x:"75",y:"50"}},[e._v(e._s(e.score))]),e._v(" "),e._l(e.counter,function(t){return r("bubble",{attrs:{index:3*t,level:e.level,last:9===t},on:{showResult:e.showResult,correctAnswer:e.increaseScore}})}),e._v(" "),r("g",{directives:[{name:"show",rawName:"v-show",value:e.showScore,expression:"showScore"}]},[r("foreignObject",{attrs:{x:"550",y:"300",width:"300",height:"450"}},[r("div",{staticClass:"scoreReport"},[e._v(e._s(e.msg))]),e._v(" "),r("router-link",{staticClass:"button is-primary is-inverted is-large",attrs:{to:"/",exact:""}},[e._v("Play Again")])],1)],1)],2)},staticRenderFns:[]}},,,,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(1),o=s.n(r),n=s(4),a=s.n(n),i=s(2),l=s(3);s.n(l);new o.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})}],[24]);
//# sourceMappingURL=app.cf5abf5e241c710ba295.js.map