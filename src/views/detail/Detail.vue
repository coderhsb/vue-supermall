<template>
  <div class="detail-wrap">
    <detail-nav-bar @handleNavBar="handleNavBar" :current-index="currentIndex"></detail-nav-bar>
    <better-scroll class="detail-scroll" ref="scroll" :probeType="3" @scrollY="scrollY">
      <detail-swiper :swiperList="swiperList" v-if="flag"></detail-swiper> 
      <goods-info :goodsInfo="goodsInfo" v-if="flag"></goods-info>
      <detail-shop-info :shop="goodsShop"></detail-shop-info>
      <detail-info :detailInfo="detailInfo" v-if="flag" @imageLoad="imageLoad"></detail-info>
      <!-- 商品参数 -->
      <goods-params :goodsParams="goodsParams" ref="params" v-if="flag"></goods-params>
      <!-- 评论 -->
      <goods-rate :rateList="goodsRate" @imageLoad="imageLoad" ref="rate"></goods-rate>
      <!-- 推荐商品 -->
      <goods-list :goods="detailRecommend" @imageLoad="imageLoad" ref="recommend"></goods-list>
    </better-scroll>
    <back-top v-show="isShowTop" @click.native="handleTop"></back-top>
    <detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>
  </div>
</template>
<script>

import DetailNavBar from './childComps/DetailNavBar.vue';
import {getDetail,getRecommend,Goods, Shop} from '@/network/detail'
import BetterScroll from '@/components/common/scroll/BetterScroll.vue';
import DetailSwiper from './childComps/DetailSwiper.vue';
import GoodsInfo from './childComps/GoodsInfo.vue';
import DetailShopInfo from './childComps/DetailShopInfo.vue';
import DetailInfo from './childComps/DetailInfo.vue';
import GoodsParams from './childComps/GoodsParams.vue';
import GoodsRate from './childComps/GoodsRate.vue';
import BackTop from '@/components/content/BackTop.vue';
import GoodsList from '../../components/content/goods/GoodsList.vue';
import {mixinDemo} from '@/common/mixin'
import DetailBottomBar from './childComps/DetailBottomBar.vue';
import {mapActions} from 'vuex'

export default {
  components: { 
    DetailNavBar,  
    BetterScroll, 
    DetailSwiper, 
    GoodsInfo, 
    DetailShopInfo, 
    DetailInfo, 
    GoodsParams,
    GoodsRate,
    BackTop,
    GoodsList,
    DetailBottomBar
    },
  name: "Detail",

  mixins: [mixinDemo],

  data () {
    return {
      iid: null,
      swiperList: [],
      flag: false,
      goodsInfo: {},
      goodsShop: {},
      detailInfo: {},
      goodsParams: {},
      goodsRate: [],
      detailRecommend: [],
    };
  },

  created() {
    this.iid = this.$route.query.id
    getDetail(this.iid).then(res => {
      const data = res.result
      this.swiperList = data.itemInfo.topImages
      this.goodsInfo = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.goodsShop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.goodsParams = data.itemParams
      this.goodsRate = data.rate.list
      this.flag = true
    })
    getRecommend().then(res => this.detailRecommend = res.data.list)
  },

  methods: {
    // ...mapActions(['addCart']),
    ...mapActions({
      add : 'addCart'
    }),
    handleNavBar(index){
      this.$refs.scroll.scrollTo(0,-this.navTops[index],300)
    },
    cartClick(){
      const product = {}
      product.image = this.swiperList[0]
      product.title = this.goodsInfo.title
      product.desc = this.goodsInfo.desc
      product.price = this.goodsInfo.lowNowPrice
      product.iid = this.iid
      product.num = 1
      product.checked = true

      // this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res => {
      //   console.log(res);    
      // })
      this.add(product).then(res => this.$toast.show(res))
    }
  }
}
</script>
<style lang="less" scoped>
  .detail-wrap{
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    z-index: 9;
    .detail-scroll{
      position: absolute;
      top: 44px;
      bottom: 49px;
      right: 0;
      left: 0;
      overflow: hidden;
    }
  }
</style>