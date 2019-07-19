<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" v-model="message">
            </div>					
        </div>
        <!-- <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img"><img src="/images/movie_1.jpg"></div>
                    <div class="info">
                        <p><span>无名之辈</span><span>8.5</span></p>
                        <p>A Cool Fish</p>
                        <p>剧情,喜剧,犯罪</p>
                        <p>2018-11-16</p>
                    </div>
                </li>
            </ul>
        </div> -->
        <div class="search_result" >
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="(item,index) in moviesList" :key="index">
                    <div class="img"><img :src="item.img | setWH('128.180')"></div>
                    <div class="info">
                        <p><span style="overflow:hidden">{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p style="overflow:hidden;">{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return{
            message:'',
            moviesList:[],
        }
    },
    methods:{
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
    },
    watch:{
        message(newVal){     //监听message   newVal参数 更新之后的值
            // console.log(newVal)
            this.cancelRequest()
            this.axios.get('/api/searchList?cityId=10&kw='+newVal,{
                cancelToken: new this.axios.CancelToken((c)=> {
                    this.source = c;
                })
            }).then((res)=>{
                var msg=res.data.msg;
                var movies=res.data.data.movies;
                console.log(res.data.data.movies.list)
                if(msg&&movies){
                    this.moviesList=res.data.data.movies.list;
                }
            }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                //handle error
                console.log(err);
                }
            })
        },
    }
}
    // mounted(){
    //     this.axios.get('/api/searchList?cityId=10&kw=a').then((res)=>{
    //         console.log(res)
    //     })
    //     .catch(()=>{

    //     })
    // }

</script>

<style scoped>

</style>