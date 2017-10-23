<template>
    <div>
        <div class="personage">
            <h2 class="card-head">个人信息</h2>
            <div class="card-message">
                <p>用户姓名：{{test}}</p>
                <p>公司：默认公司</p>
                <p>部门：技术部</p>
            </div>
        </div>

    </div>
</template>
<script>
    import vueCookie from 'vue-cookie'
    export default {
        name:'personageCenter',
        computed:{
            test(){
                var test= vueCookie.get("test")
                return test
            }
        }
    }
</script>