<template>
  <div>
    <!-- 标题 -->
    <nav-bar class="home_nav">
      <template v-slot:center>
        <div class="nav_text">
          购物街
        </div>
      </template>
    </nav-bar>
    <div style="height:44px"></div>
    <home-swiper :banner="banner"></home-swiper>
    <!-- <div>{{recommends}}</div> -->
    <recommend-view :recommends="recommends" v-if="flag"></recommend-view>
    <div style="height:49px"></div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import { getHomeMultiData } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banner: [],
      recommends: [],
      flag : false
    };
  },
  created() {
    getHomeMultiData().then(res => {
      this.recommends = res.data.recommend.list;
      this.banner = res.data.banner.list;
      this.flag = true
    });
  },
};
</script>
<style scoped>
.home_nav {
  background-color: var(--color-tint);
  box-shadow: 0 1px 1px var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.nav_text {
  color: #fff;
  font-size: 18px;
  font-weight: 400;
}
</style>
