webpackJsonp([6],{Iwqh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("tMH7"),n=a("XQX3"),s=a("VU/8"),o=s(l.a,n.a,null,null,null);e.default=o.exports},XQX3:function(t,e,a){"use strict";var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"addAccount-nav"},[a("div",{staticClass:"dashed"}),t._v(" "),a("el-menu",{staticClass:"el-menu-demo",attrs:{theme:"dark",mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"},on:{click:t.toAccountManagement}},[t._v("返回")])],1),t._v(" "),a("div",{staticClass:"clearFix"},[a("div",{staticClass:"addAccount-list"},[a("span",[t._v("ID：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),t._v(" "),a("em",{staticClass:"errors"},[t._v(t._s(t.idErrors.errorText))])],1),t._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[t._v("用户名：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),t._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[t._v("真实姓名：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:t.realName,callback:function(e){t.realName=e},expression:"realName"}})],1),t._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[t._v("部门：")]),t._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"部门"},model:{value:t.formInline.region,callback:function(e){t.formInline.region=e},expression:"formInline.region"}},[a("el-option",{attrs:{label:"产品",value:"产品"}}),t._v(" "),a("el-option",{attrs:{label:"人力资源",value:"人力资源"}}),t._v(" "),a("el-option",{attrs:{label:"行政管理",value:"行政管理"}}),t._v(" "),a("el-option",{attrs:{label:"运营",value:"运营"}})],1)],1),t._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[t._v("角色：")]),t._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"角色"},model:{value:t.formInline.role,callback:function(e){t.formInline.role=e},expression:"formInline.role"}},[a("el-option",{attrs:{label:"人力专员",value:"人力专员"}}),t._v(" "),a("el-option",{attrs:{label:"行政专员",value:"行政专员"}}),t._v(" "),a("el-option",{attrs:{label:"web前端工程师",value:"web前端工程师"}})],1)],1),t._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[t._v("账号状态：")]),t._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"状态"},model:{value:t.formInline.status,callback:function(e){t.formInline.status=e},expression:"formInline.status"}},[a("el-option",{attrs:{label:"可用",value:"可用"}}),t._v(" "),a("el-option",{attrs:{label:"冻结",value:"冻结"}}),t._v(" "),a("el-option",{attrs:{label:"不可用",value:"不可用"}})],1)],1),t._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[t._v("加入时间：")]),t._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm roleList",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.ruleForm.date1,callback:function(e){t.ruleForm.date1=e},expression:"ruleForm.date1"}})],1)],1)],1)],1)]),t._v(" "),a("div",[a("el-button",{staticClass:"present",attrs:{type:"primary",size:"large"},on:{click:t.button}},[t._v("提交")])],1)],1)])},n=[],s={render:l,staticRenderFns:n};e.a=s},tMH7:function(t,e,a){"use strict";var l=a("NYxO"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(t[l]=a[l])}return t};e.a={name:"add-account",data:function(){return{radio:"1",input:"",id:"",user:"",realName:"",section:"",role:"",state:"",joinDate:"",date1:"",errorText:"",formInline:{status:"",region:"",role:""},ruleForm:{date1:""},rules:{date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}]}}},computed:n({},a.i(l.b)({addAccount:function(t){return t.root.addAccount},accountManagement:function(t){return t.root.accountManagement}}),{idErrors:function(){var t=void 0,e=void 0;return/^\d{4,6}$/g.test(this.id)?(e=!0,t=""):(e=!1,t="ID必须为4至6位的数字"),this.id||(t=""),{status:e,errorText:t}}}),methods:n({},a.i(l.a)({setAddAccount:"setAddAccount",getAccountManagement:"getAccountManagement"}),{toAccountManagement:function(){this.$router.push({path:"/accountManagements/accountManagement"})},button:function(){console.log(this.accountManagement),this.setAddAccount({id:this.id,user:this.user,realName:this.realName,section:this.formInline.region,role:this.formInline.role,state:this.formInline.status,joinDate:this.ruleForm.date1})}})}}});
//# sourceMappingURL=6.594f14211f6db1825548.js.map