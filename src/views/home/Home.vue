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
    <tab-control class="fixed" 
      @handleTab="handleTab" 
      :titleList="['综合','销量','价格']" 
      ref="control1"
      v-show="isControlTop"
      ></tab-control>
    <better-scroll class="scroll" 
    @scrollY="scrollY"
    ref="scroll" 
    :probe-type="3" 
    :pullUpLoad="true" 
    @isPullUpLoad="isPullUpLoad">
      <home-swiper :banner="banner"></home-swiper>
      <recommend-view :recommends="recommends" v-if="flag"></recommend-view>
      <tab-control
      @handleTab="handleTab" 
      :titleList="['综合','销量','价格']" 
      ref="control2"
      ></tab-control>
      <goods-list :goods="showType" @imageLoad="imageLoad"></goods-list>
    </better-scroll>

    <back-top v-show="isShowTop" @click.native="handleTop"></back-top>
  </div>
</template>
<script>
import { getHomeMultiData, getHomeGoods } from "@/network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";

import TabControl from "@/components/content/TabControl";
import NavBar from "@/components/common/navbar/NavBar";
import GoodsList from '@/components/content/goods/GoodsList.vue';
import BetterScroll from '@/components/common/scroll/BetterScroll';
import BackTop from '@/components/content/BackTop.vue';

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      type: ['pop','new','sell'],
      typeIndex : 0,
      flag: false,
      bs: null,
      isShowTop: false,
      isHandleTop: false,
      tabControlTop: 0,
      isControlTop: false
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");    
  },
  methods: {
    // 网络请求相关方法 --开始
    getHomeMultiData() {
      getHomeMultiData().then(res => {
        this.recommends = res.data.recommend.list;
        this.banner = res.data.banner.list;
        this.flag = true;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finish();
      });
    },
    // 网络请求相关方法 --结束

    // 事件监听
    handleTab(index){
      this.typeIndex = index;
      this.$refs.control1.activeIndex = index;
      this.$refs.control2.activeIndex = index;
    },
    scrollY(y){
      this.isShowTop = y<(-1200)
      this.isControlTop = y<(-331)
    },
    handleTop(){      
      this.$refs.scroll.scrollTo(0,0)
    },
    isPullUpLoad(){
      this.getHomeGoods(this.currentType)
    },
    imageLoad(){
      this.$refs.scroll.refresh()
    }
  },
  computed:{
    showType(){
      return this.goods[this.type[this.typeIndex]].list
    },
    currentType(){
      return this.type[this.typeIndex]
    }
  }
};
</script>
<style scoped>
  .home_nav {
    background-color: var(--color-tint);
    box-shadow: 0 1px 1px var(--color-tint);
  }
  .nav_text {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
  }
  .fixed{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .scroll{
    height: calc(100vh - 93px);
    overflow: hidden;
  }

</style>
