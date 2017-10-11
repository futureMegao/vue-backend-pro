
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
                </div>
               <div class="addAccount-list">
                   <span>用户名：</span><el-input v-model="user" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>真实姓名：</span><el-input v-model="realName" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>部门：</span><el-input v-model="section" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>角色：</span><el-input v-model="role" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <!--<div class="addAccount-list">-->
                   <!--<span>性别：</span> <input type="radio" name="sex" value="男" />男-->
                   <!--<input type="radio" name="sex" value="女" />女-->
               <!--</div>-->
                <div  class="addAccount-list">
                    <span>账号状态：</span><el-input v-model="state" placeholder="请输入内容" class="addAccount-input"></el-input>
                </div>
               <div  class="addAccount-list">
                   <span>加入时间：</span><el-input v-model="joinDate" placeholder="请输入内容" class="addAccount-input"></el-input>
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
                "joinDate":""
            };
        },
        computed:{
            ...mapState({
                addAccount : state => state.root.addAccount,
                accountManagement:state=>state.root.accountManagement
            })
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
                    "section":this.section,
                    "role":this.role,
                    "state":this.state,
                    "joinDate":this.joinDate})
            }
        }
    }
</script>