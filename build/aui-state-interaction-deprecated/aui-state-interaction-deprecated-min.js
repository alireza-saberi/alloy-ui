YUI.add("aui-state-interaction-deprecated",function(e,t){var n=e.Lang,r=n.isBoolean,i=n.isString,s=e.getClassName,o="state",u=s(o,"default"),a=s(o,"hover"),f=s(o,"active"),l=e.Component.create({NAME:"stateinteraction",NS:"StateInteraction",ATTRS:{active:{value:!1},activeState:{value:!0,validator:r},bubbleTarget:{value:null},classNames:{value:{}},"default":{value:!1},defaultState:{value:!0,validator:r},hover:{value:!1},hoverState:{value:!0,validator:r},node:{value:null}},EXTENDS:e.Plugin.Base,constructor:function(t){var n=t.host,r=n;e.Widget&&n instanceof e.Widget&&(r=n.get("contentBox")),t.node=r,l.superclass.constructor.apply(this,arguments)},prototype:{initializer:function(){var e=this,t=e.get("classNames.active"),n=e.get("classNames.default"),r=e.get("classNames.hover");e._CSS_STATES={active:i(t)?t:f,"default":i(n)?n:u,hover:i(r)?r:a},e.get("defaultState")&&e.get("node").addClass(e._CSS_STATES["default"]),e._createEvents(),e._attachInteractionEvents()},_attachInteractionEvents:function(){var t=this,n=t.get("node");n.on("click",t._fireEvents,t),n.on("mouseenter",e.rbind(t._fireEvents,t,"mouseover")),n.on("mouseleave",e.rbind(t._fireEvents,t,"mouseout")),t.after("activeChange",t._uiSetState),t.after("hoverChange",t._uiSetState),t.after("defaultChange",t._uiSetState)},_fireEvents:function(e,t){var n=this,r=n.get("bubbleTarget");return t=t||e.type,r&&r.fire(t),n.fire(t)},_createEvents:function(){var e=this,t=e.get("bubbleTarget");t&&e.addTarget(t),e.publish("click",{defaultFn:e._defClickFn,emitFacade:!0}),e.publish("mouseout",{defaultFn:e._defMouseOutFn,emitFacade:!0}),e.publish("mouseover",{defaultFn:e._defMouseOverFn,emitFacade:!0})},_defClickFn:function(e){var t=this;t.set("active",!t.get("active"))},_defMouseOutFn:function(){var e=this;e.set("hover",!1)},_defMouseOverFn:function(){var e=this;e.set("hover",!0)},_uiSetState:function(e){var t=this,n=e.attrName;if(t.get(n+"State")){var r="addClass";e.newVal||(r="removeClass"),t.get("node")[r](t._CSS_STATES[n])}}}});e.namespace("Plugin").StateInteraction=l},"3.0.3-deprecated.4",{requires:["aui-base-deprecated","plugin"]});
