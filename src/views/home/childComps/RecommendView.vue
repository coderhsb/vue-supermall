<template>
  <div class="recommend">
    <div class="recommend_item" v-for="item of recommends" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="recommend_item_title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
  }
};
</script>
<style lang="less" scoped>
  .recommend{
    display: flex;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 20px;
    border-bottom: 5px solid #eee;
    font-size: 14px;
    .recommend_item{
      flex: 1;
      a{
        display: block;
        text-align: center;
        img{
          width: 80%;
          padding-bottom: 5px;
        }
      }
    }
  } 
</style>
