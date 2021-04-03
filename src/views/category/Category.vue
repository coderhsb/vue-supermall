<template>
  <div class="category-wrap">
    <better-scroll class="category-left">
      <div class="category-titil"
      v-for="(item,index) in categoryList"
      :key="item.maitKey"
      @click="handleTitle(index)"
      :class="{active: currentIndex === index}"
      >
        {{item.title}}
      </div>
    </better-scroll>
    <better-scroll class="category-right">
      <category-info :category-info="categoryInfo"></category-info>
      <goods-list :goods="categoryRecommend"></goods-list>
    </better-scroll>
  </div>
</template>
<script>
import BetterScroll from '../../components/common/scroll/BetterScroll.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import {getCategory, getCategoryInfo, getCategoryRecommend} from '../../network/category'
import CategoryInfo from './childComps/categoryInfo.vue'

export default {
  components: { BetterScroll, CategoryInfo, GoodsList },
  name: "Category",
  data() {
    return {
      categoryList: [],
      currentIndex : 0,
      categoryInfo: [],
      categoryRecommend:[]
    }
  },
  created() {
    getCategory().then(res => {
      this.categoryList = res.data.category.list
      getCategoryInfo(this.categoryList[0].maitKey).then(res => {
        this.categoryInfo = res.data.list
      })
      getCategoryRecommend(this.categoryList[0].miniWallkey).then(res => {
        res.forEach(v => v.image = v.img)
        this.categoryRecommend = res
      })
    })
  },
  methods: {
    handleTitle(index){
      this.currentIndex = index
      getCategoryInfo(this.categoryList[index].maitKey).then(res => {
        this.categoryInfo = res.data.list
      })
    }
  }
}
</script>
<style lang='less' scoped>
  .category-wrap{
    display: flex;
    height: calc(100vh - 49px);
    .category-left{
      flex: 2;
      height: calc(100vh - 49px);
      overflow: hidden;
      .category-titil{
        height: 40px;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
        background-color: #f6f6f6;
      }
      .active{
        background-color: #fff;
        border-left: 2px solid var(--color-tint);
      }
    }
    .category-right{
      flex: 5;
      height: calc(100vh - 49px);
      overflow: hidden;
    }
  }
</style>