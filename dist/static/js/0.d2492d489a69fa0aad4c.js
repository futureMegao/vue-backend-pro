webpackJsonp([0],{"40BW":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view"),e._v(" "),a("div",{staticClass:"accountMangement-nav clearFix"},[a("div",{staticClass:"accountMangement-nav-left"},[a("el-button",{attrs:{type:"primary",icon:"edit"},on:{click:e.addAccount}},[e._v("添加")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"share"}},[e._v("启用")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"delete"}},[e._v("禁用")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"}},[e._v("删除")])],1),e._v(" "),a("div",{staticClass:"accountMangement-nav-right"},[a("el-input",{attrs:{placeholder:"全局搜索",icon:"search","on-icon-click":e.handleIconClick},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]),e._v(" "),a("div",[a("div",{staticClass:"right-banner-content"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.isSearch?e.showList:e.searchAccount,border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),e._v(" "),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"user",label:"用户名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"realName",label:"真实姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"section",label:"部门",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"role",label:"角色","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"state",label:"账号状态","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"joinDate",label:"加入时间","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.editor(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-dialog",{attrs:{title:"编辑内容",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"addAccount-list"},[a("span",[e._v("ID：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("用户名：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("真实姓名：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:e.realName,callback:function(t){e.realName=t},expression:"realName"}})],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("部门：")]),e._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"部门"},model:{value:e.formInline.region,callback:function(t){e.formInline.region=t},expression:"formInline.region"}},[a("el-option",{attrs:{label:"产品",value:"产品"}}),e._v(" "),a("el-option",{attrs:{label:"人力资源",value:"人力资源"}}),e._v(" "),a("el-option",{attrs:{label:"行政管理",value:"行政管理"}}),e._v(" "),a("el-option",{attrs:{label:"运营",value:"运营"}})],1)],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("角色：")]),e._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"角色"},model:{value:e.formInline.role,callback:function(t){e.formInline.role=t},expression:"formInline.role"}},[a("el-option",{attrs:{label:"人力专员",value:"人力专员"}}),e._v(" "),a("el-option",{attrs:{label:"行政专员",value:"行政专员"}}),e._v(" "),a("el-option",{attrs:{label:"web前端工程师",value:"web前端工程师"}})],1)],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("账号状态：")]),e._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"状态"},model:{value:e.formInline.status,callback:function(t){e.formInline.status=t},expression:"formInline.status"}},[a("el-option",{attrs:{label:"可用",value:"可用"}}),e._v(" "),a("el-option",{attrs:{label:"冻结",value:"冻结"}}),e._v(" "),a("el-option",{attrs:{label:"不可用",value:"不可用"}})],1)],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("加入时间：")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm roleList",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.ruleForm.date1=t},expression:"ruleForm.date1"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(a){e.determine(t.$index,t.row)}}},[e._v("确 定")])],1)]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{"current-page":1,"page-sizes":[10,20,30,40],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)])],1)},n=[],o={render:l,staticRenderFns:n};t.a=o},HsHv:function(e,t,a){"use strict";var l=a("NYxO"),n=a("LGg+"),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e};t.a={name:"account-management",components:{alertAccount:n.a},data:function(){return{paginationIndex:"",total:0,currentPage:4,isSearch:1,search:"",multipleSelection:[],dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",id:"",index:"",user:"",realName:"",section:"",role:"",state:"",joinDate:"",date1:"",errorText:"",formInline:{status:"",region:"",role:""},ruleForm:{date1:""},rules:{date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}]}}},computed:o({},a.i(l.b)({accountManagement:function(e){return e.root.accountManagement},searchAccount:function(e){return e.root.searchAccount}}),{showList:function(){var e=10*this.paginationIndex,t=10*(this.paginationIndex+1);return this.accountManagement.filter(function(a,l){return l>=e&&l<t})}}),methods:o({toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){console.log("每页 "+e+" 条")},handleCurrentChange:function(e){this.paginationIndex=e-1},handleIconClick:function(){this.searchAccountManagement(this.search),this.searchAccount?this.isSearch=0:this.isSearch=1},addAccount:function(){console.log(this.accountManagement),this.$router.push({path:"/accountManagements/addAccount"})},handleDelete:function(e,t){this.deleteAccount(t)},editor:function(e,t){this.dialogFormVisible=!0,this.id=t.id,this.index=t.index,this.realName=t.realName,this.formInline.region=t.section,this.formInline.role=t.role,this.formInline.status=t.state,this.ruleForm.date1=t.joinDate},determine:function(e){this.dialogFormVisible=!1,console.log(e),this.alterAccount({id:this.id,index:this.index,user:this.user,realName:this.realName,section:this.formInline.region,role:this.formInline.role,state:this.formInline.status,joinDate:this.ruleForm.date1})}},a.i(l.a)({getAccountManagement:"getAccountManagement",deleteAccount:"deleteAccount",alterAccount:"alterAccount",searchAccountManagement:"searchAccountManagement"})),created:function(){this.total=this.accountManagement.length,this.getAccountManagement(2)}}},J12e:function(e,t,a){"use strict";t.a={name:"alertAccount",data:function(){return{dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",id:"",user:"",realName:"",section:"",role:"",state:"",joinDate:"",date1:"",errorText:"",formInline:{status:"",region:"",role:""},ruleForm:{date1:""},rules:{date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}]}}}}},LAyl:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("HsHv"),n=a("40BW"),o=a("VU/8"),i=o(l.a,n.a,null,null,null);t.default=i.exports},"LGg+":function(e,t,a){"use strict";var l=a("J12e"),n=a("V0kN"),o=a("VU/8"),i=o(l.a,n.a,null,null,null);t.a=i.exports},V0kN:function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"编辑内容",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("div",{staticClass:"addAccount-list"},[a("span",[e._v("ID：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),e._v(" "),a("em",{staticClass:"errors"},[e._v("{{}}")])],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("用户名：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}})],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("真实姓名：")]),a("el-input",{staticClass:"addAccount-input",attrs:{placeholder:"请输入内容"},model:{value:e.realName,callback:function(t){e.realName=t},expression:"realName"}})],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("部门：")]),e._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"部门"},model:{value:e.formInline.region,callback:function(t){e.formInline.region=t},expression:"formInline.region"}},[a("el-option",{attrs:{label:"产品",value:"产品"}}),e._v(" "),a("el-option",{attrs:{label:"人力资源",value:"人力资源"}}),e._v(" "),a("el-option",{attrs:{label:"行政管理",value:"行政管理"}}),e._v(" "),a("el-option",{attrs:{label:"运营",value:"运营"}})],1)],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("角色：")]),e._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"角色"},model:{value:e.formInline.role,callback:function(t){e.formInline.role=t},expression:"formInline.role"}},[a("el-option",{attrs:{label:"人力专员",value:"人力专员"}}),e._v(" "),a("el-option",{attrs:{label:"行政专员",value:"行政专员"}}),e._v(" "),a("el-option",{attrs:{label:"web前端工程师",value:"web前端工程师"}})],1)],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("账号状态：")]),e._v(" "),a("el-select",{staticStyle:{width:"195px"},attrs:{placeholder:"状态"},model:{value:e.formInline.status,callback:function(t){e.formInline.status=t},expression:"formInline.status"}},[a("el-option",{attrs:{label:"可用",value:"可用"}}),e._v(" "),a("el-option",{attrs:{label:"冻结",value:"冻结"}}),e._v(" "),a("el-option",{attrs:{label:"不可用",value:"不可用"}})],1)],1),e._v(" "),a("div",{staticClass:"addAccount-list"},[a("span",[e._v("加入时间：")]),e._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm roleList",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-col",{attrs:{span:11}},[a("el-form-item",{attrs:{prop:"date1"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.ruleForm.date1,callback:function(t){e.ruleForm.date1=t},expression:"ruleForm.date1"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)])],1)},n=[],o={render:l,staticRenderFns:n};t.a=o}});
//# sourceMappingURL=0.d2492d489a69fa0aad4c.js.map