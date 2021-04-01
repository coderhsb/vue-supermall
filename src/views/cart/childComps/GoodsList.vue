<template>
  <div>
    <goods-item v-for="(item,index) in goodsList" :key="index" :goods-item="item">
    </goods-item>
  </div>
</template>
<script>
import GoodsItem from './GoodsItem.vue';
export default {
  components: { GoodsItem },
  name: "Goodslist",
  props:{
    goodsList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
</style>