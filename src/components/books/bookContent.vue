<template>
    <div>
        <div>
            <input type="text" v-model="keyword" />
            <button @click="search">搜索</button>
        </div>
        <hr/>
        <div>
            <ul>
                <li v-for="book in books.books">
                    <img :src="book.image" alt="">
                    <div style="display: inline-block">
                        <h2>{{book.title}}</h2>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    import 'fetch-jsonp'
    export default {
        name:'bookContent',
        data(){
            return {
                keyword:'',

            }
        },
        computed:{
            ...mapState({
                books : state => state.root.books
            })
        },
        methods:{
            ...mapActions({
                getBooks:'getBooks'
            }),
            search(){
                this.getBooks(this.keyword);
            }
        },
        watch:{
            books(){
//                console.log(this.books)
            }
        },
        created(){
//            console.log(this.books)
        }

    }
</script>