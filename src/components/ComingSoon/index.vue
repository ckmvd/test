<template>
  <div class="movie_body">
    <ul>
      <li v-for="item in comingList" :key="item.id">
        <div class="pic_show">
          <img :src="item.img | setWH('128.180')" />
        </div>
        <div class="info_list">
          <h2>{{item.nm}} <img v-if="item.version" src="@/assets/maxs.png"></h2>
          <p>
            <span class="person">{{item.wish}}</span> 人想看
          </p>
          <p>{{item.star}}</p>
          <p>{{item.rt}}</p>
        </div>
        <div class="btn_pre">预售</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ComingSoon",
  data() {
    return {
      comingList: [],
      isShow: true
    };
  },
  mounted() {
    this.axios
      .get("/api/movieComingList?cityId=10")
      .then(res => {
        // console.log(res);
        var msg = res.data.msg;
        if (msg === "ok") {
          var data = res.data.data.comingList;
          this.comingList = data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
</style>
