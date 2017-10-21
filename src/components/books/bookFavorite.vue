<template>
    <div>
        <div class="book-favorite"> 图书收藏夹</div>
        <div class="book-content clearFix">
            <div  v-for="(book,index) in favs" class="book-content-con clearFix">
                <div class="book-content-img">
                    <img :src="book.image" alt="">
                </div>
                <div class="book-content-introduce">
                    <div>
                        <a :href="favs.alt">{{book.title}}{{index}}</a>
                    </div>
                    <div class="book-rating">豆瓣评分：<span class="favs-rating-col">{{book.rating.average}}</span>分
                        <span class="book-rating-raters">({{book.rating.numRaters}}人评价)</span>
                    </div>
                    <div class="book-author">{{book.author[0]}}/{{book.publisher}}/{{book.pubdate}}/{{book.price}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'bookFavorite',
        data(){
            return {
               favs:[]
            }
        },
        created() {
            // 当应用创建成功的时候，去LocalStorage中获取数据，并更新到data中favs中
            var favs = localStorage.getItem('favs');
            if (favs) {
                this.favs = JSON.parse(favs);
            }
        },
    }
</script>