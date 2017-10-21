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
                        v-model="prepage.keyword"
                        :on-icon-click="search"
                        >
                </el-input>
            </div>

        </div>
        <hr/>
        <div class="nav-items">
            <el-button type="primary" size="small">已读</el-button>
            <el-button type="primary" size="small" @click="favorite">收藏夹</el-button>
            <el-button type="primary" size="small">购物车</el-button>
        </div>
        <h2 v-show="ismoving" class="ismoving">你搜索的是 “{{prepage.keyword}}”，一共搜索到了 {{books.total}} 条记录</h2>
        <div class="book-content clearFix">
            <div  v-for="(book,index) in books.books" class="book-content-con clearFix">
                <div class="book-content-img">
                    <img :src="book.image" alt="">
                </div>
                <div class="book-content-introduce">
                    <div>
                        <a :href="book.alt">{{book.title}}{{index}}</a>
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
                    <el-button type="success" v-if="isfav!==index" @click="fav(book,index)">收藏</el-button>
                    <el-button v-else type="success" @click="cancelfav(book,index)">取消收藏</el-button>
                </div>
            </div>
        </div>
        <!--分页-->
        <div class="book-pagination" v-if="ispagination">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="1"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="10"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
            >
            </el-pagination>
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
                prepage:{
                    pages:10,
                    keyword:''
                },
                rate:'7',
                favs:[],
                isfav:-1,
                ismoving:false,
                ispagination:false,
                total:0,
                paginationIndex:0
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
            handleSizeChange(val) {
//                console.log(`每页 ${val} 条`);
            },
            //分页操作
            handleCurrentChange(val) {
                this.prepage.pages=val
                this.getBooks(this.prepage)
            },
            search(){
                this.getBooks(this.prepage)
                this.ismoving=true
//                this.total=this.books.total
            },
            fav(book,index){
                this.favs.push(book)
                this.favs=[...new Set(this.favs)]//把push之后的值进行去重
                localStorage.setItem('favs',JSON.stringify(this.favs))
                this.isfav=index
            },
            cancelfav(book,index){
//                var cancelfav=this.favs.findIndex(x=>x===book)
//                this.favs.splice(cancelfav,1)
//                this.isfav=-1
            },
            favorite(){
                this.$router.push({path:'/books/bookFavorite'})
            }
        },
        watch:{
            books(){
                this.ispagination=true
                this.total=this.books.total
            }
        },
        created(){
        }

    }
</script>