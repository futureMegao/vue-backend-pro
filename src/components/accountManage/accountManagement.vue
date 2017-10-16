<template>
    <div>
        <router-view></router-view>
        <div class="accountMangement-nav clearFix">
            <div class="accountMangement-nav-left">
                <el-button type="primary" icon="edit" @click="addAccount">添加</el-button>
                <el-button type="primary" icon="share">启用</el-button>
                <el-button type="primary" icon="delete">禁用</el-button>
                <el-button type="primary" icon="search">删除</el-button>
                <!--<el-button type="primary">上传<i class="el-icon-upload el-icon&#45;&#45;right"></i></el-button>-->
            </div>
            <div class="accountMangement-nav-right">
                <el-input placeholder="搜索用户名" icon="search" v-model="search" :on-icon-click="handleIconClick"></el-input>
            </div>
        </div>
        <div>
            <el-table
                    ref="multipleTable"
                    :data="isSearch ? accountManagement:searchAccount"
                    border
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="ID"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="user"
                        label="用户名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="realName"
                        label="真实姓名"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="section"
                        label="部门"
                        width="120">
                </el-table-column>
                <el-table-column
                        prop="role"
                        label="角色"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="state"
                        label="账号状态"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column
                        prop="joinDate"
                        label="加入时间"
                        show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="操作">
                    <template scope="scope">
                        <el-button
                                size="small"
                                @click="editor(scope.$index,scope.row)">编辑</el-button>

                        <!--弹窗-->

                        <el-dialog title="编辑内容" :visible.sync="dialogFormVisible">
                            <div class="addAccount-list">
                                <span>ID：</span><el-input v-model="id" placeholder="请输入内容" class="addAccount-input"></el-input>
                                <em class="errors">{{}}</em>
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
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="determine(scope.$index,scope.row)">确 定</el-button>
                            </div>
                        </el-dialog>

                        <el-button
                                size="small"
                                type="danger"
                                @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import {mapState,mapActions} from 'vuex'
    import alertAccount from './alertAccount.vue'
    export default {
        name : 'account-management',
        components:{
            alertAccount
        },
        data() {
            return {
                isSearch:1,
                search:'',
                multipleSelection: [],
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',


                "id":"",
                'index':'',
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
            }
        },
        computed:{
//            ...mapState('accountManagement',{
//                accountManagement:'accountManagement'
//            })
            ...mapState({
                accountManagement : state => state.root.accountManagement,
                searchAccount : state =>state.root.searchAccount
            })

        },
        methods : {
            //el  自带的方法
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleIconClick(ev) {
//                console.log(this.search);
                this.searchAccountManagement(this.search)
            },
            //新增账户跳转路由
            addAccount(){
                console.log(this.accountManagement);
                this.$router.push({path:'/accountManagements/addAccount'})
            },
            //删除账户数据
            handleDelete(index,row){
                this.deleteAccount(row);
            },
            //点击编辑让弹窗内容和点击的内容同步
            editor(index,row){
                this.dialogFormVisible=true
                this.id=row.id
                this.index=row.index
                this.realName=row.realName
                this.formInline.region=row.section
                this.formInline.role=row.role
                this.formInline.status=row.state
                this.ruleForm.date1=row.joinDate
            },
            //修改账户数据
            determine(row){
                this.dialogFormVisible=false
                console.log(row)
                this.alterAccount({'id':this.id,
                    'index':this.index,
                    "user":this.user,
                    "realName":this.realName,
                    "section":this.formInline.region,
                    "role":this.formInline.role,
                    "state":this.formInline.status,
                    "joinDate":this.ruleForm.date1})
            },
//            ...mapActions('accountManagement',{
//                getAccountManagement : 'getAccountManagement'
//            })
            ...mapActions({
                getAccountManagement:'getAccountManagement',
                deleteAccount :'deleteAccount',
                alterAccount :'alterAccount',
                searchAccountManagement:'searchAccountManagement'

            })
        },
        created(){
            if(this.searchAccount){
                this.isSearch=1
//                this.searchAccountManagement()
//                this.getAccountManagement(2);

            }else {
                this.isSearch=0
            }
        }
    }
</script>

