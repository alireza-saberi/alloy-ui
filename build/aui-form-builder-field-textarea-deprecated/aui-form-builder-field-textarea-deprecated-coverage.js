if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-form-builder-field-textarea-deprecated/aui-form-builder-field-textarea-deprecated.js']) {
   __coverage__['build/aui-form-builder-field-textarea-deprecated/aui-form-builder-field-textarea-deprecated.js'] = {"path":"build/aui-form-builder-field-textarea-deprecated/aui-form-builder-field-textarea-deprecated.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"b":{"1":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":54},"end":{"line":1,"column":73}}},"2":{"name":"(anonymous_2)","line":61,"loc":{"start":{"line":61,"column":21},"end":{"line":61,"column":32}}},"3":{"name":"(anonymous_3)","line":94,"loc":{"start":{"line":94,"column":26},"end":{"line":94,"column":37}}},"4":{"name":"(anonymous_4)","line":101,"loc":{"start":{"line":101,"column":16},"end":{"line":101,"column":50}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":120,"column":78}},"2":{"start":{"line":10,"column":0},"end":{"line":23,"column":101}},"3":{"start":{"line":34,"column":0},"end":{"line":113,"column":3}},"4":{"start":{"line":62,"column":16},"end":{"line":62,"column":36}},"5":{"start":{"line":95,"column":12},"end":{"line":95,"column":32}},"6":{"start":{"line":97,"column":12},"end":{"line":97,"column":106}},"7":{"start":{"line":99,"column":12},"end":{"line":106,"column":14}},"8":{"start":{"line":102,"column":20},"end":{"line":104,"column":21}},"9":{"start":{"line":103,"column":24},"end":{"line":103,"column":78}},"10":{"start":{"line":108,"column":12},"end":{"line":108,"column":25}},"11":{"start":{"line":115,"column":0},"end":{"line":115,"column":54}},"12":{"start":{"line":117,"column":0},"end":{"line":117,"column":63}}},"branchMap":{"1":{"line":102,"type":"if","locations":[{"start":{"line":102,"column":20},"end":{"line":102,"column":20}},{"start":{"line":102,"column":20},"end":{"line":102,"column":20}}]}},"code":["(function () { YUI.add('aui-form-builder-field-textarea-deprecated', function (A, NAME) {","","/**"," * The Form Builder Component"," *"," * @module aui-form-builder"," * @submodule aui-form-builder-field-textarea"," */","","var AArray = A.Array,","","    getCN = A.getClassName,","","    CSS_FORM_CONTROL = getCN('form', 'control'),","    CSS_FIELD = getCN('field'),","    CSS_FIELD_TEXT = getCN('field', 'text'),","    CSS_FIELD_TEXTAREA = getCN('field', 'textarea'),","    CSS_FORM_BUILDER_FIELD = getCN('form-builder-field'),","    CSS_FORM_BUILDER_FIELD_NODE = getCN('form-builder-field', 'node'),","","    TPL_TEXTAREA = '<div class=\"form-builder-field-wrapper\"><textarea id=\"{id}\" class=\"' + [","        CSS_FORM_BUILDER_FIELD_NODE, CSS_FIELD, CSS_FIELD_TEXT,","        CSS_FIELD_TEXTAREA, CSS_FORM_CONTROL].join(' ') + '\" name=\"{name}\">{value}</textarea></div>';","","/**"," * A base class for `A.FormBuilderTextAreaField`."," *"," * @class A.FormBuilderTextAreaField"," * @extends A.FormBuilderTextField"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","var FormBuilderTextAreaField = A.Component.create({","","    /**","     * Static property provides a string to identify the class.","     *","     * @property NAME","     * @type String","     * @static","     */","    NAME: 'form-builder-textarea-field',","","    /**","     * Static property used to define the default attribute","     * configuration for the `A.FormBuilderTextAreaField`.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    ATTRS: {","","        /**","         * Reusable block of markup used to generate the field.","         *","         * @attribute template","         */","        template: {","            valueFn: function() {","                return TPL_TEXTAREA;","            }","        }","","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: CSS_FORM_BUILDER_FIELD,","","    /**","     * Static property used to define which component it extends.","     *","     * @property EXTENDS","     * @type Object","     * @static","     */","    EXTENDS: A.FormBuilderTextField,","","    prototype: {","","        /**","         * Returns a list of property models including the","         * `A.TextAreaCellEditor` model.","         *","         * @method getPropertyModel","         */","        getPropertyModel: function() {","            var instance = this;","","            var model = A.FormBuilderTextAreaField.superclass.getPropertyModel.apply(instance, arguments);","","            AArray.each(","                model,","                function(item, index, collection) {","                    if (item.attributeName === 'predefinedValue') {","                        collection[index].editor = new A.TextAreaCellEditor();","                    }","                }","            );","","            return model;","        }","","    }","","});","","A.FormBuilderTextAreaField = FormBuilderTextAreaField;","","A.FormBuilderField.types.textarea = A.FormBuilderTextAreaField;","","","}, '3.0.3-deprecated.4', {\"requires\": [\"aui-form-builder-field-deprecated\"]});","","}());"]};
}
var __cov_OJhxNjUq$h4f5214ruWcow = __coverage__['build/aui-form-builder-field-textarea-deprecated/aui-form-builder-field-textarea-deprecated.js'];
__cov_OJhxNjUq$h4f5214ruWcow.s['1']++;YUI.add('aui-form-builder-field-textarea-deprecated',function(A,NAME){__cov_OJhxNjUq$h4f5214ruWcow.f['1']++;__cov_OJhxNjUq$h4f5214ruWcow.s['2']++;var AArray=A.Array,getCN=A.getClassName,CSS_FORM_CONTROL=getCN('form','control'),CSS_FIELD=getCN('field'),CSS_FIELD_TEXT=getCN('field','text'),CSS_FIELD_TEXTAREA=getCN('field','textarea'),CSS_FORM_BUILDER_FIELD=getCN('form-builder-field'),CSS_FORM_BUILDER_FIELD_NODE=getCN('form-builder-field','node'),TPL_TEXTAREA='<div class="form-builder-field-wrapper"><textarea id="{id}" class="'+[CSS_FORM_BUILDER_FIELD_NODE,CSS_FIELD,CSS_FIELD_TEXT,CSS_FIELD_TEXTAREA,CSS_FORM_CONTROL].join(' ')+'" name="{name}">{value}</textarea></div>';__cov_OJhxNjUq$h4f5214ruWcow.s['3']++;var FormBuilderTextAreaField=A.Component.create({NAME:'form-builder-textarea-field',ATTRS:{template:{valueFn:function(){__cov_OJhxNjUq$h4f5214ruWcow.f['2']++;__cov_OJhxNjUq$h4f5214ruWcow.s['4']++;return TPL_TEXTAREA;}}},CSS_PREFIX:CSS_FORM_BUILDER_FIELD,EXTENDS:A.FormBuilderTextField,prototype:{getPropertyModel:function(){__cov_OJhxNjUq$h4f5214ruWcow.f['3']++;__cov_OJhxNjUq$h4f5214ruWcow.s['5']++;var instance=this;__cov_OJhxNjUq$h4f5214ruWcow.s['6']++;var model=A.FormBuilderTextAreaField.superclass.getPropertyModel.apply(instance,arguments);__cov_OJhxNjUq$h4f5214ruWcow.s['7']++;AArray.each(model,function(item,index,collection){__cov_OJhxNjUq$h4f5214ruWcow.f['4']++;__cov_OJhxNjUq$h4f5214ruWcow.s['8']++;if(item.attributeName==='predefinedValue'){__cov_OJhxNjUq$h4f5214ruWcow.b['1'][0]++;__cov_OJhxNjUq$h4f5214ruWcow.s['9']++;collection[index].editor=new A.TextAreaCellEditor();}else{__cov_OJhxNjUq$h4f5214ruWcow.b['1'][1]++;}});__cov_OJhxNjUq$h4f5214ruWcow.s['10']++;return model;}}});__cov_OJhxNjUq$h4f5214ruWcow.s['11']++;A.FormBuilderTextAreaField=FormBuilderTextAreaField;__cov_OJhxNjUq$h4f5214ruWcow.s['12']++;A.FormBuilderField.types.textarea=A.FormBuilderTextAreaField;},'3.0.3-deprecated.4',{'requires':['aui-form-builder-field-deprecated']});
