<template>
  <div class="movie_body">
    <ul>
      <!-- <li>
        <div class="pic_show">
          <img src="/images/movie_1.jpg" />
        </div>
        <div class="info_list">
          <h2>无名之辈</h2>
          <p>
            观众评分
            <span class="grade">9.2</span>
          </p>
          <p>主演: 陈建斌,任素汐,潘斌龙</p>
          <p>今天55家影院放映607场</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>-->
      <li v-for="(item,index) in movieList" :key="index">
        <div class="pic_show">
          <img :src="item.img | setWH('128.180')" />
          <!--图片src需要绑定-->
        </div>
        <div class="info_list">
          <h2>
            {{item.nm}}}
            <img v-if="item.version" src="@/assets/maxs.png" />
          </h2>
          <p>
            观众评分
            <span class="grade">{{item.sc}}}</span>
          </p>
          <p>{{item.star}}}</p>
          <p>{{item.showInfo}}}</p>
        </div>
        <div class="btn_mall">购票</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
      isShow: true
    };
  },
  mounted() {
    this.axios
      .get("/api/movieOnInfoList?cityId=10")
      .then(res => {
        console.log(res.data.data.movieList);
        var msg = res.data.msg;
        if (msg === "ok") {
          var data = res.data.data.movieList;
          this.movieList = data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {}
};
</script>

<style scopde>
</style>
