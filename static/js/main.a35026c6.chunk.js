(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{105:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(52),l=a.n(r),c=a(4),i=a(66),s=a(36),m=a(21),d=a(35),p=a(32),u=a.n(p),h=(a(75),function(){return o.a.createElement("figure",{className:"hammer-icon"},o.a.createElement("span",{className:"hammer-icon__hammer"}),o.a.createElement("span",{className:"hammer-icon__nail"}),o.a.createElement("span",{className:"hammer-icon__shadow"}))}),f=a(3),g=a.n(f),b=a(31),v=a.n(b),_=a(16),y=a.n(_),E=a(7),x=a.n(E),C=a(2),w=a.n(C),k=a(6),D=a.n(k),S=a(1),j=a.n(S),N=j.a.oneOfType([j.a.array,j.a.bool,j.a.number,j.a.object,j.a.string]),O={defaultValue:N,disabled:j.a.bool,label:j.a.string,name:j.a.string,options:j.a.arrayOf(j.a.shape({label:j.a.string,value:N})),useBuiltInStyle:j.a.bool,type:j.a.string},M=j.a.shape(O),B=j.a.shape(w()(w()({},O),{},{fields:j.a.arrayOf(M)})),P=(j.a.arrayOf(B),j.a.shape(x()({},j.a.string,j.a.shape({component:j.a.node}))),function(e){var t=e.componentsMap,a=e.formData,r=e.formFieldData,l=e.formValues,c=e.name,i=e.useBuiltInStyle,s=e.onChange,m=e.onRowDataChange,d=Object(n.useCallback)((function(e,t){s(r.name||e,r.name?w()(w()({},l),{},x()({},e,t)):t)}),[r,l,s]);return o.a.createElement("fieldset",{className:"contractor-group--".concat(c)},o.a.createElement("legend",null,r.label),r.fields.map((function(e){return o.a.createElement(W,{key:r.name+e.name,componentsMap:t,formData:a,formFieldData:e,formValues:l,formRowData:r,name:"".concat(c,".").concat(e.name),useBuiltInStyle:i,onChange:d,onRowDataChange:m})})))});P.defaultProps={componentsMap:{},formData:[],formFieldData:{},formValues:{},formRowData:{},name:"",useBuiltInStyle:!0,onChange:function(){},onRowDataChange:function(){}};var A=P,R=a(30),I=a.n(R),V=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:L;if(!e||!Array.isArray(e)||e.length<1||e.filter((function(e){return"object"!==I()(e)})).length>0)return F("formData must be an array of objects."),!1;for(var n=0;n<e.length;n++){var o=a(e[n],t);if(!o)return!1}return!0},L=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=["defaultValue","disabled","label","name","options","placeholder","props","fields","required","type"],r=Object.keys(t);if(r.length<1)return F("one of the items in formData is an empty object."),!1;for(var l=0;l<r.length;l++)if(!o.includes(r[l]))return F("".concat(r[l]," field is not allowed in formData.")),!1;if(t.hasOwnProperty("fields")&&t.hasOwnProperty("type"))return F("items in formData can only have either 'fields' or 'type' field, not both."),!1;if("string"!==typeof t.label||!Boolean(t.label)||t.hasOwnProperty("name")&&("string"!==typeof t.name||!Boolean(t.name)))return F("'label' and 'name' must have a value of string type."),!1;if(t.hasOwnProperty("type")&&!a.hasOwnProperty(t.type))return F("no component provided for ".concat(t.type,".")),!1;if(t.fields&&!Array.isArray(t.fields))return F("'fields' must be an array."),!1;if(t.fields)for(var c=0;c<t.fields.length;c++){var i=n(t.fields[c],a);if(!i)return!1}return!0},F=function(e){if(e){console.error("".concat("react-form-contractor warning: ").concat(e))}},H=function(e){var t=e.componentsMap,a=e.formData,r=e.formFieldData,l=e.formValues,c=e.formRowData,i=e.identifier,s=e.useBuiltInStyle,m=e.onChange,d=e.onRowDataChange,p=t[r.type||"textfield"],u=Object(n.useCallback)((function(e){m(r.name,e)}),[m,r]),h=Object(n.useCallback)((function(e){d(e)}),[d]);if(!p||!p.component)return F("no component provided for ".concat(r.type,".")),null;var f=p.component,b=w()(w()(w()({disabled:Boolean(r.disabled),identifier:i,label:r.label,name:r.name,placeholder:r.placeholder,value:l&&l.hasOwnProperty(r.name)?"textfield"===r.type?l[r.name].toString():l[r.name]:"",props:w()({},r.props||{})},p.props||{}),r.options&&{options:r.options}),{},{onChange:u,onRowDataChange:h});return o.a.createElement(f,g()({formData:a,formFieldData:r,formRowData:c,useBuiltInStyle:s},b))};H.defaultProps={componentsMap:{},formData:[],formFieldData:{},formValues:{},formRowData:{},identifier:"",useBuiltInStyle:!0,onChange:function(){},onRowDataChange:function(){}};var z=H,T=function(e){var t=e.componentsMap,a=e.formData,r=e.formFieldData,l=e.formValues,c=e.formRowData,i=e.name,s=e.useBuiltInStyle,m=e.onChange,d=e.onRowDataChange,p=Object(n.useCallback)((function(e){c.name===e.name?d(e):d(w()(w()({},c),{},{fields:c.fields.map((function(t){return t.name===e.name?w()({},e):w()({},t)}))}))}),[c,d]);return r.type&&"string"===typeof r.type?o.a.createElement(z,{componentsMap:t,formData:a,formFieldData:r,formValues:l,formRowData:c,identifier:i,useBuiltInStyle:s,onChange:m,onRowDataChange:d}):Array.isArray(r.fields)&&r.fields.length>0?o.a.createElement(A,{componentsMap:t,formData:a,formFieldData:r,formValues:r.name?l[r.name]:l,formRowData:r,name:i,useBuiltInStyle:s,onChange:m,onRowDataChange:p}):null};T.defaultProps={componentsMap:{},formData:[],formFieldData:{},formValues:{},formRowData:{},name:"",useBuiltInStyle:!0,onChange:function(){},onRowDataChange:function(){}};var W=T,U=function(e,t,a){return"string"===typeof t?t===a:"checkbox"===e?t.find((function(e){return e===a})):a===t},X=function(e){var t=e.disabled,n=e.identifier,r=e.inputType,l=e.label,c=e.name,i=e.options,s=e.props,m=e.useBuiltInStyle,d=e.value,p=e.onChange;m&&a(82);var u=function(e){var t=e.target.value;if("radio"===r)return p(t);var a=d.findIndex((function(e){return e===t}));p(-1===a?[].concat(y()(d),[t]):[].concat(y()(d.slice(0,a)),y()(d.slice(a+1))))},h=D()("contractor-checkbox",{"contractor-checkbox--disabled":t});return o.a.createElement("div",{className:h},l&&o.a.createElement("div",{className:"contractor-checkbox__group-wwwwwwwwwwlabel"},l),o.a.createElement("div",{className:"contractor-checkbox__list"},i.map((function(e,a){var l="contractor-checkbox__item--".concat(n,"--").concat(a);return o.a.createElement("label",{className:"contractor-checkbox__group__item",htmlFor:l,key:l},o.a.createElement("input",g()({className:"contractor-checkbox__group__item--input",checked:U(r,d,e.value),disabled:t,id:l,name:c,type:r,value:e.value,onChange:u},s)),o.a.createElement("span",{className:"contractor-checkbox__group__item--text"},e.label))}))))};X.defaultProps={disabled:!1,identifier:"",inputType:"checkbox",label:"",name:"",options:[],props:{},useBuiltInStyle:!0,value:[],onChange:function(){}};var J=X,q=function(e){var t=e.disabled,a=e.identifier,r=e.label,l=e.name,c=e.placeholder,i=e.props,s=e.value,m=e.onChange,d=Object(n.useCallback)((function(e){m(e.target.value)}),[m]),p=D()("contractor-number",{"contractor-number--disabled":t}),u="contractor-number-".concat(a);return o.a.createElement("div",{className:p},o.a.createElement("label",{className:"contractor-number__label",htmlFor:u},r),o.a.createElement("input",g()({className:"contractor-number__input",disabled:t,id:u,name:l,placeholder:c,type:"number",value:s,onChange:d},i)))};q.defaultProps={disabled:!1,identifier:"",label:"",name:"",placeholder:"",props:{},value:0,onChange:function(){}};var G=q,K=function(e){return o.a.createElement(J,g()({},e,{inputType:"radio"}))},$=function(e){var t=e.disabled,a=e.identifier,r=e.label,l=e.name,c=e.options,i=e.value,s=e.onChange,m=Object(n.useCallback)((function(e){s(e.target.value)}),[s]),d=D()("contractor-select",{"contractor-select--disabled":t}),p="contractor-select-".concat(a);return o.a.createElement("div",{className:d},o.a.createElement("label",{className:"contractor-select__label",htmlFor:p},r),o.a.createElement("select",{className:"contractor-select__select",disabled:t,name:l,id:p,value:i,onChange:m},c.map((function(e,t){return o.a.createElement("option",{key:"contractor-select__select--option--".concat(t),className:"contractor-select__select--option",value:e.value},e.label)}))))};$.defaultProps={disabled:!1,identifier:"",label:"",name:"",options:[],value:"",onChange:function(){}};var Q=$,Y=function(e){var t=e.disabled,a=e.label;return o.a.createElement("button",{className:"contractor-submit",disabled:t,type:"submit"},a)};Y.defaultProps={disabled:!1,label:"Submit"};var Z=Y,ee=function(e){var t=e.disabled,n=e.identifier,r=e.label,l=e.name,c=e.props,i=e.useBuiltInStyle,s=e.value,m=e.values,d=e.onChange;i&&a(83);var p=D()("contractor-switch",{"contractor-switch--disabled":t}),u="contractor-switch-".concat(n);return o.a.createElement("div",{className:p},o.a.createElement("label",{className:"contractor-switch__label",htmlFor:u},r),o.a.createElement("input",g()({className:"contractor-switch__input",checked:s===m.on,disabled:t,id:u,name:l,type:"checkbox",onChange:function(e){d(e.target.checked?m.on:m.off)}},c)),i&&o.a.createElement("div",{className:"contractor-switch__visual"},o.a.createElement("div",{className:"contractor-switch__indicator"})))};ee.defaultProps={disabled:!1,label:"",name:"",props:{},useBuiltInStyle:!0,value:!1,values:{on:!0,off:!1},onChange:function(){}};var te=ee,ae=function(e){var t=e.disabled,a=e.identifier,r=e.label,l=e.name,c=e.placeholder,i=e.props,s=e.value,m=e.onChange,d=Object(n.useCallback)((function(e){m(e.target.value)}),[m]),p=D()("contractor-textarea",{"contractor-textarea--disabled":t}),u="contractor-textarea-".concat(a);return o.a.createElement("div",{className:p},o.a.createElement("label",{className:"contractor-textarea__label",htmlFor:u},r),o.a.createElement("textarea",g()({className:"contractor-textarea__textarea",disabled:t,name:l,id:u,placeholder:c,value:s,onChange:d},i)))};ae.defaultProps={disabled:!1,identifier:"",label:"",name:"",placeholder:"",props:{},value:"",onChange:function(){}};var ne=ae,oe=function(e){var t=e.disabled,a=e.identifier,r=e.label,l=e.name,c=e.placeholder,i=e.props,s=e.value,m=e.onChange,d=Object(n.useCallback)((function(e){m(e.target.value)}),[m]),p=D()("contractor-textfield",{"contractor-textfield--disabled":t}),u="contractor-textfield-".concat(a);return o.a.createElement("div",{className:p},o.a.createElement("label",{className:"contractor-textfield__label",htmlFor:u},r),o.a.createElement("input",g()({className:"contractor-textfield__input",disabled:t,id:u,name:l,placeholder:c,type:"text",value:s,onChange:d},i)))};oe.defaultProps={disabled:!1,identifier:"",label:"",name:"",placeholder:"",props:{},value:"",onChange:function(){}};var re={checkbox:{component:J,defaultValue:[]},number:{component:G,defaultValue:0},radio:{component:K,defaultValue:function(e){return Array.isArray(e.options)&&(e.options[0]||{}).value||""}},select:{component:Q,defaultValue:function(e){return Array.isArray(e.options)&&(e.options[0]||{}).value||""}},submit:{component:Z,noValue:!0},switch:{component:te,defaultValue:!1},textarea:{component:ne,defaultValue:""},textfield:{component:oe,defaultValue:""}},le=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ce;return t.reduce((function(e,t){var r=a[t.type]&&a[t.type].noValue;return w()(w()({},e),!r&&x()({},t.name,Array.isArray(t.fields)?n(t.fields,a):o(t,a)))}),{})},ce=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ie;return e.defaultValue?e.defaultValue:a(e,t)},ie=function(e,t){var a=t[e.type].defaultValue;return"function"===typeof a?a(e):a},se=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return t.map((function(e){return w()(w()({},e),{},{name:e.name||e.label.toLowerCase().replace(/ /g,"_")},Array.isArray(e.fields)&&{fields:a(e.fields)})}))},me=function(e){var t=e.classNames,a=e.componentsMap,r=e.emitChangeOnLoad,l=e.formData,c=e.useBuiltInStyle,i=e.onChange,s=e.onFormDataChange,m=e.onSubmit,d=Object(n.useMemo)((function(){return Array.from(new Set(Object.keys(re).concat(Object.keys(a)))).reduce((function(e,t){return w()(w()({},e),{},x()({},t,w()(w()({},re[t]||{}),a[t]||{})))}),{})}),[a]),p=Object(n.useMemo)((function(){var e=Array.isArray(t)?t:[t];return D.a.apply(void 0,["contractor-form"].concat(y()(e)))}),[t]),u=Object(n.useState)(se(V(l,d)?l:[])),h=v()(u,2),f=h[0],b=h[1],_=Object(n.useState)(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:le,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ce;return e.reduce((function(e,o){var r=t[o.type]&&t[o.type].noValue,l=o.name?w()({},!r&&x()({},o.name,Array.isArray(o.fields)?a(o.fields,t):n(o,t))):a(o.fields);return w()(w()({},e),l)}),{})}(f,d)),E=v()(_,2),C=E[0],k=E[1];Object(n.useEffect)((function(){r&&i(C)})),Object(n.useEffect)((function(){b(se(V(l,d)?l:[]))}),[d,l]);var S=Object(n.useCallback)((function(e,t){var a=w()(w()({},C),{},x()({},e,t));k(a),i(a)}),[C,i]),j=Object(n.useCallback)((function(e){var t=f.map((function(t){return t.name===e.name?w()({},e):w()({},t)})),a=se(t);b(a),s(a)}),[f,s]),N=Object(n.useCallback)((function(e){e&&"function"===typeof e.preventDefault&&e.preventDefault(),m(C)}),[C,m]),O={componentsMap:d,formData:f,formValues:C,onChange:S,onRowDataChange:j};return o.a.createElement("form",{className:p,onSubmit:N},f.map((function(e){return o.a.createElement(W,g()({},O,{key:e.name,formFieldData:e,formRowData:e,name:e.name,useBuiltInStyle:c}))})))};me.defaultProps={classNames:"",componentsMap:{},emitChangeOnLoad:!1,formData:[],useBuiltInStyle:!0,onChange:function(){},onFormDataChange:function(){},onSubmit:function(){}};var de=me,pe=function(){return o.a.createElement("a",{className:"octocat-icon",href:"https://github.com/lyndonoc/react-depot/tree/master/packages/libs/react-form-contractor"},o.a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 16 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))},ue=[{label:"New Recipe Information",name:"new_recipe_information",fields:[{label:"Name",name:"name",fields:[{label:"In English",name:"english",type:"textfield"},{label:"In Korean",name:"korean",type:"textfield"}]},{label:"Details",name:"details",fields:[{label:"Description",name:"description",type:"textarea"},{label:"Number of guests",name:"number_of_guests",type:"number"},{label:"Ingredients",name:"ingredients",type:"checkbox",options:[{label:"Onions",value:"onions"},{label:"Peppers",value:"peppers"},{label:"Potatoes",value:"potatoes"},{label:"Carrots",value:"carrots"}]},{label:"Occasion",name:"occasion",type:"radio",options:[{label:"Valentine's day",value:"valentine"},{label:"Christmas",value:"christmas"},{label:"Thanksgiving Day",value:"thanksgiving"}]},{label:"Time Estimates",name:"estimates",type:"select",options:[{label:"30 Minutes",value:"30_minutes"},{label:"1 Hour",value:"1_hour"},{label:"6 Hour",value:"6_hour"}]},{label:"Time",name:"time",fields:[{label:"Lunch",name:"lunch",type:"switch"},{label:"Dinner",name:"dinner",type:"switch"}]}]},{label:"Submit",type:"submit"}]}],he=(a(84),function(){var e=Object(n.useState)(ue),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({}),c=Object(s.a)(l,2),i=c[0],p=c[1],f=function(e){p(e)};return o.a.createElement("div",{className:"form-contractor-demo__container"},o.a.createElement(m.a,null,o.a.createElement("link",{rel:"icon",href:"".concat("https://lyndonoc.github.io/react-depot","/hammer-favicon.ico")}),o.a.createElement("title",null,"React Form Contractor")),o.a.createElement("div",{className:"form-contractor-demo__header__wrapper"},o.a.createElement("div",{className:"form-contractor-demo__header"},o.a.createElement(h,null),o.a.createElement("h1",{className:"form-contractor-demo__title"},"react-form-contractor")),o.a.createElement(pe,null)),o.a.createElement("main",{className:"form-contractor-demo__main"},o.a.createElement("div",{className:"form-contractor-demo__main--intro"},o.a.createElement("h2",null,"Have your form built instantly with JSON contract"),o.a.createElement("p",null,"Given JSON data on your form and components, ",o.a.createElement("code",null,"react-form-component")," will dynamically generate a WAI-ARIA compliant form with built-in validators and other controls."))),o.a.createElement("div",{className:"form-contractor-demo"},o.a.createElement("section",{className:"form-contractor-demo__section"},o.a.createElement("h3",null,"1) Provide form data in JSON"),o.a.createElement(d.a,{height:"100%",id:"form-contractor-demo__editor",locale:u.a,placeholder:a,width:"100%",onChange:function(e){r(e.jsObject)}})),o.a.createElement("section",{className:"form-contractor-demo__section"},o.a.createElement("h3",null,"2) Let the ",o.a.createElement("code",null,"contractor")," build the form"),o.a.createElement(de,{emitChangeOnLoad:!0,formData:a,onChange:f,onSubmit:f})),o.a.createElement("section",{className:"form-contractor-demo__section"},o.a.createElement("h3",null,"3) Check out the generated value"),o.a.createElement(d.a,{height:"100%",id:"form-contractor-demo__viewer",locale:u.a,placeholder:i,viewOnly:!0,width:"100%"}))))}),fe=a(307),ge=a(55),be=a.n(ge),ve=a(56),_e=a.n(ve),ye=a(10),Ee=a.n(ye),xe=a(57),Ce=a.n(xe),we=a(58),ke=a.n(we),De=a(59),Se=a.n(De),je=a(60),Ne=a.n(je),Oe=a(67),Me=a(62);function Be(){var e=Se()(["\n  align-items: center;\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  position: relative;\n  .react-scroll-dragger {\n    &__btn {\n      background-color: #fff;\n      background-position: center center;\n      background-repeat: no-repeat;\n      border: 1px solid #e6e6e6;\n      cursor: pointer;\n      display: block;\n      height: 50px !important;\n      padding: 0;\n      transition: opacity .3s;\n      width: 50px !important;\n      &--prev {\n        background-image: url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'/%3E%3C/svg%3E\");\n      }\n      &--next {\n        background-image: url(\"data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z'/%3E%3C/svg%3E\");\n        transform: rotate(180deg) !important;\n      }\n    }\n    &__container {\n      ","\n      > div {\n        &:first-of-type {\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          * {\n            -webkit-user-drag: none;\n            -khtml-user-drag: none;\n            -moz-user-drag: none;\n            -o-user-drag: none;\n            user-drag: none;\n          }\n        }\n      }\n      @media screen and (max-width: 768px) {\n        margin-right: 5px;\n      }\n    }\n  }\n"]);return Be=function(){return e},e}var Pe=Oe.a.div(Be(),(function(e){return e.height?{height:"".concat(e.height,"px !important")}:{}})),Ae=function(e){Ce()(a,e);var t=ke()(a);function a(e){var n;return be()(this,a),(n=t.call(this,e)).state={isAtBeginning:!0,isAtEnd:!1,isDragging:!1,needScroll:!1},n.lastXPosition=0,n.lastScrollPosition=0,n.scrollContainerElem=null,n.getComponentMap=n.getComponentMap.bind(Ee()(n)),n.handleBtnClick=n.handleBtnClick.bind(Ee()(n)),n.handleClickCapture=n.handleClickCapture.bind(Ee()(n)),n.handleMouseDown=n.handleMouseDown.bind(Ee()(n)),n.handleMouseDrag=n.handleMouseDrag.bind(Ee()(n)),n.handleMouseUp=n.handleMouseUp.bind(Ee()(n)),n.handleContainerScroll=n.handleContainerScroll.bind(Ee()(n)),n.handleRef=n.handleRef.bind(Ee()(n)),n.registerLastScrollPosition=n.registerLastScrollPosition.bind(Ee()(n)),n.updateScrollStatus=n.updateScrollStatus.bind(Ee()(n)),window.addEventListener("mousemove",n.handleMouseDrag),window.addEventListener("resize",n.updateScrollStatus),Ne.a.polyfill(),n}return _e()(a,[{key:"componentDidMount",value:function(){this.updateScrollStatus()}},{key:"componentDidUpdate",value:function(e,t,a){this.updateScrollStatus()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("mousemove",this.handleMouseDrag),window.removeEventListener("resize",this.updateScrollStatus)}},{key:"getComponentMap",value:function(){var e=this.props.children,t=this.state,a=t.isAtBeginning,n=t.isAtEnd,r=t.needScroll,l={display:"none"},c=function(){return o.a.createElement("div",{style:l})};return{prev_button:r?o.a.createElement("button",{key:"react-scroll-dragger__prev-btn",className:D()("react-scroll-dragger__btn",{"react-scroll-dragger__btn--prev":!0,"react-scroll-dragger__btn--active":!a,"react-scroll-dragger__btn--inactive":a}),onClick:this.handleBtnClick.bind(null,!0)}):null,next_button:r?o.a.createElement("button",{key:"react-scroll-dragger__next-btn",className:D()("react-scroll-dragger__btn",{"react-scroll-dragger__btn--next":!0,"react-scroll-dragger__btn--active":!n,"react-scroll-dragger__btn--inactive":n}),onClick:this.handleBtnClick.bind(null,!1)}):null,children:o.a.createElement(Me.Scrollbars,{key:"react-scroll-dragger__children",autoHide:!0,className:"react-scroll-dragger__container",onClickCapture:this.handleClickCapture,onScroll:this.handleContainerScroll,ref:this.handleRef,renderTrackHorizontal:c,renderTrackVertical:c},e)}}},{key:"handleBtnClick",value:function(e){var t=this.scrollContainerElem;if(t){var a=t.offsetWidth,n=e?Math.max(t.scrollLeft-a,0):t.scrollLeft+a;t.scrollTo({behavior:"smooth",left:n})}}},{key:"handleClickCapture",value:function(e){this.lastXPosition!==e.pageX&&e.stopPropagation()}},{key:"handleContainerScroll",value:function(){var e=this.scrollContainerElem;if(e){var t=e.offsetWidth,a=e.scrollLeft,n=e.scrollWidth;this.setState({isAtBeginning:a<30,isAtEnd:n<=a+t})}}},{key:"handleMouseDown",value:function(e){this.lastXPosition=e.pageX,this.registerLastScrollPosition(),this.setState({isDragging:!0})}},{key:"handleMouseUp",value:function(){this.registerLastScrollPosition(),this.setState({isDragging:!1})}},{key:"handleMouseDrag",value:function(e){if(this.state.isDragging){var t=this.lastXPosition-e.pageX,a=this.scrollContainerElem;a&&(a.scrollLeft=(this.lastScrollPosition||0)+t)}}},{key:"handleRef",value:function(e){e&&e.container&&e.container.childNodes&&(this.scrollContainerElem=e.container.childNodes[0])}},{key:"registerLastScrollPosition",value:function(){var e=this.scrollContainerElem;e&&(this.lastScrollPosition=e.scrollLeft)}},{key:"updateScrollStatus",value:function(){var e=this.scrollContainerElem;if(e){var t=e.offsetWidth,a=e.scrollLeft,n=e.scrollWidth;this.setState({isAtEnd:n<=a+t,needScroll:t<n})}}},{key:"render",value:function(){var e=this.props,t=e.componentOrder,a=e.height,n=this.getComponentMap();return o.a.createElement(Pe,g()({className:"react-scroll-dragger",onMouseDown:this.handleMouseDown,onMouseUp:this.handleMouseUp},a&&{height:a}),t.map((function(e){return n[e]||null})))}}]),a}(n.PureComponent);x()(Ae,"defaultProps",{componentOrder:["prev_button","children","next_button"]});var Re=Ae,Ie=function(){return o.a.createElement("a",{className:"octocat-icon",href:"https://github.com/lyndonoc/react-depot/tree/master/packages/libs/react-scroll-dragger"},o.a.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 16 16"},o.a.createElement("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})))},Ve=[{title:"Basic example",description:"",codes:[{language:"jsx",code:'\n          <DragScroll>\n            {images.map((item, itemIndex) => {\n              return (\n                <img\n                  alt="demo"\n                  src={item}\n                />\n              );\n            })}\n          </DragScroll>\n        '}],props:{height:150},images:["https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg","https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg","https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097__340.jpg","https://cdn.pixabay.com/photo/2016/09/07/22/38/cat-1652822__340.jpg","https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793__340.jpg","https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961__340.jpg","https://cdn.pixabay.com/photo/2015/04/17/09/36/domestic-cat-726989__340.jpg","https://cdn.pixabay.com/photo/2013/01/25/13/03/cat-76116__340.jpg","https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952__340.jpg","https://cdn.pixabay.com/photo/2017/03/29/09/59/cat-2184682__340.jpg"]},{title:"Configurable component order",description:"",codes:[{language:"jsx",code:'\n          <DragScroll componentOrder={["children", "prev_button", "next_button"]}>\n            {images.map((item, itemIndex) => {\n              return (\n                <img\n                  alt="demo"\n                  src={item}\n                />\n              );\n            })}\n          </DragScroll>\n        '}],props:{componentOrder:["children","prev_button","next_button"],height:150},images:["https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg","https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826__340.jpg","https://cdn.pixabay.com/photo/2015/03/26/09/54/pug-690566__340.jpg","https://cdn.pixabay.com/photo/2014/08/21/14/51/pet-423398__340.jpg","https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186__340.jpg","https://cdn.pixabay.com/photo/2016/02/19/15/46/dog-1210559__340.jpg","https://cdn.pixabay.com/photo/2017/06/24/09/13/dog-2437110__340.jpg","https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087__340.jpg","https://cdn.pixabay.com/photo/2016/02/18/18/37/puppy-1207816__340.jpg","https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077__340.jpg"]},{title:"",description:"",codes:[{language:"jsx",code:'\n          <DragScroll componentOrder={["children"]}>\n            {images.map((item, itemIndex) => {\n              return (\n                <img\n                  alt="demo"\n                  src={item}\n                />\n              );\n            })}\n          </DragScroll>\n        '}],props:{componentOrder:["children"],height:150},images:["https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616__340.jpg","https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg","https://cdn.pixabay.com/photo/2014/12/14/12/26/evening-567840__340.jpg","https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg","https://cdn.pixabay.com/photo/2014/08/01/00/08/pier-407252__340.jpg","https://cdn.pixabay.com/photo/2015/04/23/22/01/tree-736888__340.jpg","https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098__340.jpg","https://cdn.pixabay.com/photo/2012/10/30/15/55/hayden-valley-63564__340.jpg","https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301__340.jpg","https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__340.jpg"]},{title:"Custom styles",description:"",codes:[{language:"jsx",code:'\n          <DragScroll>\n            {images.map((item, itemIndex) => {\n              return (\n                <img\n                  alt="demo"\n                  src={item}\n                />\n              );\n            })}\n          </DragScroll>\n        '},{language:"scss",code:"\n          .react-scroll-dragger__btn {\n            &--inactive {\n              opacity: .25 !important;\n            }\n          }\n        "}],props:{height:150},images:["https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262__340.jpg","https://cdn.pixabay.com/photo/2016/01/20/13/05/cat-1151519__340.jpg","https://cdn.pixabay.com/photo/2015/10/12/15/01/cat-984097__340.jpg","https://cdn.pixabay.com/photo/2016/09/07/22/38/cat-1652822__340.jpg","https://cdn.pixabay.com/photo/2013/05/17/15/54/cat-111793__340.jpg","https://cdn.pixabay.com/photo/2017/01/20/21/22/kitten-asleep-in-a-pot-1995961__340.jpg","https://cdn.pixabay.com/photo/2015/04/17/09/36/domestic-cat-726989__340.jpg","https://cdn.pixabay.com/photo/2013/01/25/13/03/cat-76116__340.jpg","https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952__340.jpg","https://cdn.pixabay.com/photo/2017/03/29/09/59/cat-2184682__340.jpg"]}],Le=(a(105),function(){return o.a.createElement("div",{className:"drag-scroll-demo__container"},o.a.createElement(m.a,null,o.a.createElement("link",{rel:"icon",href:"".concat("https://lyndonoc.github.io/react-depot","/crab-favicon.ico")}),o.a.createElement("title",null,"React Scroll Dragger")),o.a.createElement("div",{className:"drag-scroll-demo__header__wrapper"},o.a.createElement("div",{className:"drag-scroll-demo__header"},o.a.createElement("h1",{className:"drag-scroll-demo__title"},"react-scroll-dragger")),o.a.createElement(Ie,null)),o.a.createElement("div",{className:"drag-scroll-demo"},Ve.map((function(e,t){return o.a.createElement("section",{className:"drag-scroll-demo__section",key:t},o.a.createElement("h3",{className:"drag-scroll-demo__section--title"},e.title),e.codes.map((function(e,t){return o.a.createElement(fe.a,{key:"".concat(e.language,"+").concat(t),language:e.language},e.code)})),o.a.createElement(Re,e.props||{},e.images.map((function(e,t){return o.a.createElement("div",{key:"".concat(e,"+").concat(t),className:"drag-scroll-demo__img__container"},o.a.createElement("img",{alt:"",className:"drag-scroll-demo__img",src:e}))}))))}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Fe=[{component:he,path:"/react-depot/react-form-contractor"},{component:Le,path:"/react-depot/react-scroll-dragger"},{component:function(){return o.a.createElement(c.a,{to:"/react-depot/react-form-contractor"})},path:"*"}];l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(c.d,null,Fe.map((function(e,t){return o.a.createElement(c.b,{exact:!0,component:e.component,key:"".concat(e.path,"+").concat(t),path:e.path})}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a(305)},75:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.a35026c6.chunk.js.map