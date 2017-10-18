<template>
    <div>
        <div @click="click">woshi</div>
    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import 'fetch-jsonp'
    export default {
        name:'bookContent',
        computed:{
            ...mapState({
                books : state => state.root.books
            })
        },
        methods:{
            ...mapActions({
                getBooks:'getBooks'
            }),
            click(){
                console.log(this.HOST)
//                var url = this.HOST + '/movie/in_theaters'
//                this.$http.get(url).then(res => {
//                    console.log(res)
//                },res => {
//                    console.info('调用失败');
//                });
            }
        },
        created(){
            this.getBooks(1);
        }

    }
</script>