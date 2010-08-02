/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("dd-drag",function(D){var E=D.DD.DDM,R="node",G="dragging",M="dragNode",C="offsetHeight",K="offsetWidth",H="drag:mouseDown",B="drag:afterMouseDown",F="drag:removeHandle",L="drag:addHandle",P="drag:removeInvalid",Q="drag:addInvalid",J="drag:start",I="drag:end",N="drag:drag",O="drag:align",A=function(T){this._lazyAddAttrs=false;A.superclass.constructor.apply(this,arguments);var S=E._regDrag(this);if(!S){D.error("Failed to register node, already in use: "+T.node);}};A.NAME="drag";A.ATTRS={node:{setter:function(S){var T=D.one(S);if(!T){D.error("DD.Drag: Invalid Node Given: "+S);}else{T=T.item(0);}return T;}},dragNode:{setter:function(S){var T=D.one(S);if(!T){D.error("DD.Drag: Invalid dragNode Given: "+S);}return T;}},offsetNode:{value:true},startCentered:{value:false},clickPixelThresh:{value:E.get("clickPixelThresh")},clickTimeThresh:{value:E.get("clickTimeThresh")},lock:{value:false,setter:function(S){if(S){this.get(R).addClass(E.CSS_PREFIX+"-locked");}else{this.get(R).removeClass(E.CSS_PREFIX+"-locked");}return S;}},data:{value:false},move:{value:true},useShim:{value:true},activeHandle:{value:false},primaryButtonOnly:{value:true},dragging:{value:false},parent:{value:false},target:{value:false,setter:function(S){this._handleTarget(S);return S;}},dragMode:{value:null,setter:function(S){return E._setDragMode(S);}},groups:{value:["default"],getter:function(){if(!this._groups){this._groups={};}var S=[];D.each(this._groups,function(U,T){S[S.length]=T;});return S;},setter:function(S){this._groups={};D.each(S,function(U,T){this._groups[U]=true;},this);return S;}},handles:{value:null,setter:function(S){if(S){this._handles={};D.each(S,function(U,T){var V=U;if(U instanceof D.Node||U instanceof D.NodeList){V=U._yuid;}this._handles[V]=U;},this);}else{this._handles=null;}return S;}},bubbles:{setter:function(S){this.addTarget(S);return S;}}};D.extend(A,D.Base,{_bubbleTargets:D.DD.DDM,addToGroup:function(S){this._groups[S]=true;E._activateTargets();return this;},removeFromGroup:function(S){delete this._groups[S];E._activateTargets();return this;},target:null,_handleTarget:function(S){if(D.DD.Drop){if(S===false){if(this.target){E._unregTarget(this.target);this.target=null;}return false;}else{if(!D.Lang.isObject(S)){S={};}S.bubbleTargets=("bubbleTargets" in S)?S.bubbleTargets:D.Object.values(this._yuievt.targets);S.node=this.get(R);S.groups=S.groups||this.get("groups");this.target=new D.DD.Drop(S);}}else{return false;}},_groups:null,_createEvents:function(){this.publish(H,{defaultFn:this._defMouseDownFn,queuable:false,emitFacade:true,bubbles:true,prefix:"drag"});this.publish(O,{defaultFn:this._defAlignFn,queuable:false,emitFacade:true,bubbles:true,prefix:"drag"});this.publish(N,{defaultFn:this._defDragFn,queuable:false,emitFacade:true,bubbles:true,prefix:"drag"});this.publish(I,{preventedFn:this._prevEndFn,queuable:false,emitFacade:true,bubbles:true,prefix:"drag"});var S=[B,F,L,P,Q,J,"drag:drophit","drag:dropmiss","drag:over","drag:enter","drag:exit"];D.each(S,function(U,T){this.publish(U,{type:U,emitFacade:true,bubbles:true,preventable:false,queuable:false,prefix:"drag"});},this);},_ev_md:null,_startTime:null,_endTime:null,_handles:null,_invalids:null,_invalidsDefault:{"textarea":true,"input":true,"a":true,"button":true,"select":true},_dragThreshMet:null,_fromTimeout:null,_clickTimeout:null,deltaXY:null,startXY:null,nodeXY:null,lastXY:null,actXY:null,realXY:null,mouseXY:null,region:null,_handleMouseUp:function(S){this._fixIEMouseUp();if(E.activeDrag){E._end();}},_fixDragStart:function(S){S.preventDefault();},_ieSelectFix:function(){return false;},_ieSelectBack:null,_fixIEMouseDown:function(){if(D.UA.ie){this._ieSelectBack=D.config.doc.body.onselectstart;D.config.doc.body.onselectstart=this._ieSelectFix;}},_fixIEMouseUp:function(){if(D.UA.ie){D.config.doc.body.onselectstart=this._ieSelectBack;}},_handleMouseDownEvent:function(S){this.fire(H,{ev:S});},_defMouseDownFn:function(T){var S=T.ev;this._dragThreshMet=false;this._ev_md=S;if(this.get("primaryButtonOnly")&&S.button>1){return false;}if(this.validClick(S)){this._fixIEMouseDown();S.preventDefault();this._setStartPosition([S.pageX,S.pageY]);E.activeDrag=this;this._clickTimeout=D.later(this.get("clickTimeThresh"),this,this._timeoutCheck);}this.fire(B,{ev:S});},validClick:function(W){var V=false,Z=false,S=W.target,U=null,T=null,X=null,Y=false;if(this._handles){D.each(this._handles,function(a,b){if(a instanceof D.Node||a instanceof D.NodeList){if(!V){X=a;if(X instanceof D.Node){X=new D.NodeList(a._node);}X.each(function(c){if(c.contains(S)){V=true;}});}}else{if(D.Lang.isString(b)){if(S.test(b+", "+b+" *")&&!U){U=b;V=true;}}}});}else{Z=this.get(R);if(Z.contains(S)||Z.compareTo(S)){V=true;}}if(V){if(this._invalids){D.each(this._invalids,function(a,b){if(D.Lang.isString(b)){if(S.test(b+", "+b+" *")){V=false;}}});}}if(V){if(U){T=W.currentTarget.all(U);Y=false;T.each(function(b,a){if((b.contains(S)||b.compareTo(S))&&!Y){Y=true;this.set("activeHandle",b);}},this);}else{this.set("activeHandle",this.get(R));}}return V;},_setStartPosition:function(S){this.startXY=S;this.nodeXY=this.lastXY=this.realXY=this.get(R).getXY();if(this.get("offsetNode")){this.deltaXY=[(this.startXY[0]-this.nodeXY[0]),(this.startXY[1]-this.nodeXY[1])];}else{this.deltaXY=[0,0];}},_timeoutCheck:function(){if(!this.get("lock")&&!this._dragThreshMet&&this._ev_md){this._fromTimeout=this._dragThreshMet=true;this.start();this._alignNode([this._ev_md.pageX,this._ev_md.pageY],true);}},removeHandle:function(T){var S=T;if(T instanceof D.Node||T instanceof D.NodeList){S=T._yuid;}if(this._handles[S]){delete this._handles[S];this.fire(F,{handle:T});}return this;},addHandle:function(T){if(!this._handles){this._handles={};}var S=T;if(T instanceof D.Node||T instanceof D.NodeList){S=T._yuid;}this._handles[S]=T;this.fire(L,{handle:T});return this;},removeInvalid:function(S){if(this._invalids[S]){this._invalids[S]=null;delete this._invalids[S];this.fire(P,{handle:S});}return this;},addInvalid:function(S){if(D.Lang.isString(S)){this._invalids[S]=true;
this.fire(Q,{handle:S});}return this;},initializer:function(S){this.get(R).dd=this;if(!this.get(R).get("id")){var T=D.stamp(this.get(R));this.get(R).set("id",T);}this.actXY=[];this._invalids=D.clone(this._invalidsDefault,true);this._createEvents();if(!this.get(M)){this.set(M,this.get(R));}this.on("initializedChange",D.bind(this._prep,this));this.set("groups",this.get("groups"));},_prep:function(){this._dragThreshMet=false;var S=this.get(R);S.addClass(E.CSS_PREFIX+"-draggable");S.addClass(E.CSS_PREFIX+"-draggable");S.on("mousedown",D.bind(this._handleMouseDownEvent,this));S.on("mouseup",D.bind(this._handleMouseUp,this));S.on("dragstart",D.bind(this._fixDragStart,this));},_unprep:function(){var S=this.get(R);S.removeClass(E.CSS_PREFIX+"-draggable");S.detachAll();},start:function(){if(!this.get("lock")&&!this.get(G)){var T=this.get(R),S,U,V;this._startTime=(new Date()).getTime();E._start();T.addClass(E.CSS_PREFIX+"-dragging");this.fire(J,{pageX:this.nodeXY[0],pageY:this.nodeXY[1],startTime:this._startTime});T=this.get(M);V=this.nodeXY;S=T.get(K);U=T.get(C);if(this.get("startCentered")){this._setStartPosition([V[0]+(S/2),V[1]+(U/2)]);}this.region={"0":V[0],"1":V[1],area:0,top:V[1],right:V[0]+S,bottom:V[1]+U,left:V[0]};this.set(G,true);}return this;},end:function(){this._endTime=(new Date()).getTime();if(this._clickTimeout){this._clickTimeout.cancel();}this._dragThreshMet=this._fromTimeout=false;this._ev_md=null;if(!this.get("lock")&&this.get(G)){this.fire(I,{pageX:this.lastXY[0],pageY:this.lastXY[1],startTime:this._startTime,endTime:this._endTime});}this.get(R).removeClass(E.CSS_PREFIX+"-dragging");this.set(G,false);this.deltaXY=[0,0];return this;},_prevEndFn:function(S){this.get(M).setXY(this.nodeXY);},_align:function(S){this.fire(O,{pageX:S[0],pageY:S[1]});},_defAlignFn:function(S){this.actXY=[S.pageX-this.deltaXY[0],S.pageY-this.deltaXY[1]];},_alignNode:function(S){this._align(S);this._moveNode();},_moveNode:function(S){var T=[],U=[],W=this.nodeXY,V=this.actXY;T[0]=(V[0]-this.lastXY[0]);T[1]=(V[1]-this.lastXY[1]);U[0]=(V[0]-this.nodeXY[0]);U[1]=(V[1]-this.nodeXY[1]);this.region={"0":V[0],"1":V[1],area:0,top:V[1],right:V[0]+this.get(M).get(K),bottom:V[1]+this.get(M).get(C),left:V[0]};this.fire(N,{pageX:V[0],pageY:V[1],scroll:S,info:{start:W,xy:V,delta:T,offset:U}});this.lastXY=V;},_defDragFn:function(S){if(this.get("move")){if(S.scroll){S.scroll.node.set("scrollTop",S.scroll.top);S.scroll.node.set("scrollLeft",S.scroll.left);}this.get(M).setXY([S.pageX,S.pageY]);this.realXY=[S.pageX,S.pageY];}},_move:function(U){if(this.get("lock")){return false;}else{this.mouseXY=[U.pageX,U.pageY];if(!this._dragThreshMet){var T=Math.abs(this.startXY[0]-U.pageX),S=Math.abs(this.startXY[1]-U.pageY);if(T>this.get("clickPixelThresh")||S>this.get("clickPixelThresh")){this._dragThreshMet=true;this.start();this._alignNode([U.pageX,U.pageY]);}}else{if(this._clickTimeout){this._clickTimeout.cancel();}this._alignNode([U.pageX,U.pageY]);}}},stopDrag:function(){if(this.get(G)){E._end();}return this;},destructor:function(){this._unprep();this.detachAll();if(this.target){this.target.destroy();}E._unregDrag(this);}});D.namespace("DD");D.DD.Drag=A;},"3.2.0PR1",{requires:["dd-ddm-base"],skinnable:false});