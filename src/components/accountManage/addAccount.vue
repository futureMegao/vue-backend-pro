
<template>
    <div>
        <div class="addAccount-nav">
           <div class="dashed"></div>
           <el-menu theme="dark"  class="el-menu-demo" mode="horizontal">
               <el-menu-item index="1" @click="toAccountManagement">返回</el-menu-item>
           </el-menu>
           </el-menu>
           <div class="clearFix">
                <div class="addAccount-list">
                    <span>ID：</span><el-input v-model="id" placeholder="请输入内容" class="addAccount-input"></el-input>
                    <em class="errors">{{idErrors.errorText}}</em>
                </div>
               <div class="addAccount-list">
                   <span>用户名：</span><el-input v-model="user" placeholder="请输入内容" class="addAccount-input"></el-input>
                   <!--<em class="errors">{{userErrors.errorText}}</em>-->
               </div>
               <div class="addAccount-list">
                   <span>真实姓名：</span><el-input v-model="realName" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>部门：</span>
                   <!--<el-input v-model="section" placeholder="请输入内容" class="addAccount-input"></el-input>-->
                   <el-select v-model="formInline.region" placeholder="部门" style="width:195px">
                       <el-option label="产品" value="产品"></el-option>
                       <el-option label="人力资源" value="人力资源"></el-option>
                       <el-option label="行政管理" value="行政管理"></el-option>
                       <el-option label="运营" value="运营"></el-option>
                   </el-select>
               </div>
               <div class="addAccount-list">
                   <span>角色：</span>
                   <!--<el-input v-model="role" placeholder="请输入内容" class="addAccount-input"></el-input>-->
                   <el-select v-model="formInline.role" placeholder="角色" style="width:195px">
                       <el-option label="人力专员" value="人力专员"></el-option>
                       <el-option label="行政专员" value="行政专员"></el-option>
                       <el-option label="web前端工程师" value="web前端工程师"></el-option>
                   </el-select>
               </div>
               <!--<div class="addAccount-list">-->
                   <!--<span>性别：</span> <input type="radio" name="sex" value="男" />男-->
                   <!--<input type="radio" name="sex" value="女" />女-->
               <!--</div>-->
                <div  class="addAccount-list">
                    <span>账号状态：</span>
                    <!--<el-input v-model="state" placeholder="请输入内容" class="addAccount-input"></el-input>-->
                    <el-select v-model="formInline.status" placeholder="状态" style="width:195px">
                        <el-option label="可用" value="可用"></el-option>
                        <el-option label="冻结" value="冻结"></el-option>
                        <el-option label="不可用" value="不可用"></el-option>
                    </el-select>
                </div>
               <div  class="addAccount-list">
                   <span>加入时间：</span>
                   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm roleList">
                       <!--<el-form-item label="活动时间" required>-->
                           <el-col :span="11">
                               <el-form-item prop="date1">
                                   <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 200px;"></el-date-picker>
                               </el-form-item>
                           </el-col>

                       <!--</el-form-item>-->
                   </el-form>

               </div>
           </div>
           <div>
               <el-button type="primary" size="large" class="present" @click="button">提交</el-button>
           </div>
       </div>

    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        name: 'add-account',
        data () {
            return {
                radio: '1',
                input:'',
                "id":"",
                "user":"",
                "realName":"",
                "section":"",
                "role":"",
                "state":"",
                "joinDate":"",
                date1: "",
                errorText:"",
                formInline: {
                    status:'',
                    region: '',
                    role:'',
                },
                ruleForm: {
                    date1: '',
                },
                rules: {
                    date1: [
                        { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                    ]
                }
            };
        },
        computed:{
            ...mapState({
                addAccount : state => state.root.addAccount,
                accountManagement:state=>state.root.accountManagement
            }),
            idErrors(){
                let errorText, status
                if (!/^\d{4,6}$/g.test(this.id)) {
                    status = false
                    errorText = 'ID必须为4至6位的数字'
                }else{
                    status = true
                    errorText = ''
                }
                if (!this.id) {//undefind 取反
                    errorText = ''
//                    this.userFlag = true
                }
                return {
                    status,
                    errorText
                }
            }
        },
        methods:{
            ...mapActions({
                setAddAccount:'setAddAccount',
                getAccountManagement:'getAccountManagement'
            }),
            toAccountManagement(){
                this.$router.push({path:'/accountManagements/accountManagement'})
            },
            button(){
                console.log(this.accountManagement);
                this.setAddAccount({ "id":this.id,
                    "user":this.user,
                    "realName":this.realName,
                    "section":this.formInline.region,
                    "role":this.formInline.role,
                    "state":this.formInline.status,
                    "joinDate":this.ruleForm.date1})
            }
        }
    }
</script>