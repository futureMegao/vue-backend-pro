<template>
    <div id="app" class="clearFix">

        <div>
            <div class="header"></div>
            <!--左侧菜单-->
            <left-bar class="clearFix left-bar"></left-bar>

            <!--右侧banner-->
            <div  class="right-bar">
                <right-banner></right-banner>

                <router-view></router-view>
            </div>
        </div>
        <transition name="fade">
            <div class="mask" v-if="isShow">
             <img src="../images/login_bg.jpg"/>
            <div class="login" >
                <div class="ivu-card">
                    <div class="ivu-card-head">
                        <p>>欢迎登录</p>
                    </div>
                    <div class="ivu-card-body">
                        <div>
                            <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic ivu-input-form">
                                <el-form-item
                                        prop="email"
                                        label="账号"
                                        :rules="[
      { required: true, message: '账号不能为空', trigger: 'blur' }
    ]"
                                >
                                    <el-input v-model="dynamicValidateForm.email" class="ivu-input-type"></el-input>
                                </el-form-item>


                                <el-form-item
                                        v-for="(domain, index) in dynamicValidateForm.domains"
                                        :label="'密码'"
                                        :key="domain.key"
                                        :prop="'domains.' + index + '.value'"
                                        :rules="{
      required: true, message: '密码不能为空', trigger: 'blur'
    }"
                                >
                                    <el-input v-model="domain.value" class="ivu-input-type"></el-input>
                                </el-form-item>


                                <el-form-item>
                                    <el-button type="primary" @click="submitForm(dynamicValidateForm)" class="ivu-input-button" :loading="logining">提交</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                    </div>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex'

    import leftBar from './LeftBar.vue'
    import rightBanner from './RightBanner.vue'
    import axios from 'axios'
    import vueCookie from 'vue-cookie'
    export default {
        name : 'app',
        components : {leftBar, rightBanner},
        data(){
            return {
                dynamicValidateForm: {
                    domains: [{
                        value: ''
                    }],
                    email: ''
                },
                logining: false,
//                isShow:null,
            }
        },
        computed:{
            isShow(){
                var test= vueCookie.get("test")
                console.log(test)
                if(test){
                   return this.isShow =false
                    console.log(1)
                }else{
                    return this.isShow =true
                }
            }
        },
        methods : {
            ...mapActions({
                setCrumbsInfo : 'setCrumbsInfo',
                setHistoryTabs : 'setHistoryTabs'
            }),

            // 添加历史记录
            addHistoryTab(tabInfo){

                // 简介不添加到历史记录
                if(tabInfo.path !== '/intro'){

                    this.setHistoryTabs(tabInfo);
                }
            },

            submitForm(formName) {
                if(!formName.email){
                    alert("请输入账号")
                }else if(!formName.domains[0].value){
                    alert("请输入密码")
                }else if (formName.email && formName.domains[0].value){
                    vueCookie.set("test",formName.email, 1)
                    vueCookie.set("password",formName.domains[0].value, 1)
                    var test= vueCookie.get("test")
                    var password= vueCookie.get("password")
                    if(test && password){
                        console.log(test,password)
//                            this.isShow=false
                            this.$router.push({path:'/intro'})
//                            this.isShow
                    }
                }

            }
        },
        watch :{

            $route(to, from){
                let crumbs = [];

                to.matched.forEach((item) =>{

                    crumbs.push({name : item.name, path : item.path});
                })

                if(crumbs.length > 0){

                    // 设置面包屑信息
                    this.setCrumbsInfo(crumbs);

                    // 设置历史记录
                    this.addHistoryTab(crumbs[crumbs.length - 1])
                }
            },

        },
        directives:{
            mask:{
                inserted:function(el){
                    console.log(el,window.screen.height)
                    el.style.height= window.screen.height+"px"
                }
            }
        }
    }
</script>

