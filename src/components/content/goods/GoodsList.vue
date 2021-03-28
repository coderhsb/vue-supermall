<template>
  <div class="goods">
    <goods-item v-for="item in goods" :key="item.link" :goods-item="item">
    </goods-item>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem.vue';
export default {
  name: "GoodsList",
  props:{
    goods:{
    type : Array,
    default(){
      return []
      }
    },
  },
  components:{
    GoodsItem
  }
}
</script>
<style lang="less" scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    padding-right: 6px;
  }
</style>