<template>
    <div>
        <div class="nav-primary">
            <div class="nav-logo">我要读书</div>
            <div class="nav-input">
                <!--<input type="text" v-model="keyword" />-->
                <!--<button @click="search">搜索</button>-->

                <el-input
                        placeholder="请输入书名"
                        icon="search"
                        v-model="keyword"
                        :on-icon-click="search"
                        >
                </el-input>
            </div>

        </div>
        <hr/>
        <div class="nav-items">
            <el-button type="primary" size="small">已读</el-button>
            <el-button type="primary" size="small">收藏夹</el-button>
            <el-button type="primary" size="small">购物车</el-button>
        </div>
        <div class="book-content clearFix">
            <ul>
                <!--<li v-for="book in books.books">-->
                    <!--<img :src="book.image" alt="">-->
                    <!--<div style="display: inline-block">-->
                        <!--<h2>{{book.title}}</h2>-->
                    <!--</div>-->
                <!--</li>-->

            </ul>
            <div  v-for="book in books.books" class="book-content-con clearFix">
                <div class="book-content-img">
                    <img :src="book.image" alt="">
                </div>
                <div class="book-content-introduce">
                    <div>
                        <a :href="book.alt">{{book.title}}</a>
                    </div>
                    <div class="book-rating">豆瓣评分：<span class="book-rating-col">{{book.rating.average}}</span>分
                        <!--<span>-->
                        <!--<el-rate-->
                                <!--v-model="book.rating.average"-->
                                <!--disabled-->
                                <!--show-text-->
                                <!--:max="5"-->
                                <!--text-color="#ff9900"-->
                                <!--text-template="{value}">-->
                        <!--</el-rate>-->
                    <!--</span>-->
                        <span class="book-rating-raters">({{book.rating.numRaters}}人评价)</span>
                    </div>
                    <div class="book-author">{{book.author[0]}}/{{book.publisher}}/{{book.pubdate}}/{{book.price}}</div>
                </div>
            </div>
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
                rate:'7'
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
            },
            alerts(){
                alert(1)
            }
        },
        watch:{
            books(){
            }
        },
        created(){
        }

    }
</script>