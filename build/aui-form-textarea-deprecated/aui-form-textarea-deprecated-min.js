YUI.add("aui-form-textarea-deprecated",function(e,t){var n=e.Lang,r=e.getClassName,i=e.config.doc,t="textarea",s="node",o='<textarea autocomplete="off" class="{cssClass}" name="{name}"></textarea>',u=e.Component.create({NAME:t,ATTRS:{autoSize:{value:!0},height:{value:"auto"},maxHeight:{value:1e3},minHeight:{value:45},width:{value:"auto"}},HTML_PARSER:{node:"textarea"},EXTENDS:e.Textfield,prototype:{FIELD_TEMPLATE:o,renderUI:function(){var t=this;u.superclass.renderUI.call(t);var r=t.get("autoSize");if(r!==!1){var i=null;n.isObject(r)&&(i=r),t.get(s).plug(e.Plugin.Autosize,i)}},bindUI:function(){var e=this;u.superclass.bindUI.call(e),e.after("heightChange",e._afterHeightChange),e.after("widthChange",e._afterWidthChange),e.after(["maxHeightChange","minHeightChange"],e._afterMinMaxChange)},syncUI:function(){var e=this;u.superclass.syncUI.call(e),e._uiSetDim("height",e.get("height")),e._uiSetDim("width",e.get("width"));var t=e.get("maxHeight"),r=e.get("minHeight"),i=e.get(s).autosize;i&&(n.isValue(t)&&i.set("maxHeight",t),n.isValue(r)&&i.set("minHeight",r))},_afterHeightChange:function(e){var t=this;t._uiSetDim("height",e.newVal,e.prevVal)},_afterMinMaxChange:function(e){var t=this,n=t.get(s).autosize;n&&n.set(e.attrName,e.newVal)},_afterWidthChange:function(e){var t=this;t._uiSetDim("width",e.newVal,e.prevVal)},_uiSetDim:function(e,t){var n=this;n.get("node").setStyle(e,t)}}});e.Textarea=u},"3.0.3-deprecated.4",{requires:["node-pluginhost","aui-autosize-deprecated","aui-form-textfield-deprecated"]});
