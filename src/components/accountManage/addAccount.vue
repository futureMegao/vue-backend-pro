
<template>
    <div>
        <div class="addAccount-nav">
           <div class="dashed"></div>
           <el-menu theme="dark"  class="el-menu-demo" mode="horizontal">
               <el-menu-item index="1">返回</el-menu-item>
           </el-menu>
           </el-menu>
           <div class="clearFix">
                <div class="addAccount-list">
                    <span>用户名：</span><el-input v-model="input" placeholder="请输入内容" class="addAccount-input"></el-input>
                </div>
               <div class="addAccount-list">
                   <span>密码：</span><el-input v-model="input" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>真实姓名：</span><el-input v-model="input" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>手机号：</span><el-input v-model="input" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>部门：</span><el-input v-model="input" placeholder="请输入内容" class="addAccount-input"></el-input>
               </div>
               <div class="addAccount-list">
                   <span>性别：</span> <input type="radio" name="sex" value="男" />男
                   <input type="radio" name="sex" value="女" />女
               </div>
                <div  class="addAccount-list">
                    <span>角色：</span><el-input v-model="input" placeholder="请输入内容" class="addAccount-input"></el-input>
                </div>
           </div>
           <div>
               <el-button type="primary" size="large" class="present">提交</el-button>
           </div>
       </div>

    </div>
</template>

<script>
    export default {
        name: 'add-account',
        data () {
            return {
                radio: '1',
                input:''
            };
        }
    }
</script>