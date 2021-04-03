<template>
  <div class="info-wrap">
    <div class="info-item"
    v-for="(item,index) in categoryInfo"
    :key="index"
    >
      <a :href="item.link">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "categoryInfo",
  props:{
    categoryInfo:{
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
  .info-wrap{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 10px;
    .info-item{
      width: 33.33333%;
      text-align: center;
      padding: 10px;
      img{
        width: 60%;
      }
      p{
        font-size: 12px;
      }
    }
  }
</style>