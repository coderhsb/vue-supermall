<template>
  <div class="detail-info">
    <div class="info-desc">{{detailInfo.desc}}</div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-image-wrap">
      <div class="image-item"
      v-for="(item,index) in detailInfo.detailImage[0].list"
      :key= "index"
      >
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailInfo",
  props:{
    detailInfo:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      loadCounter: 0
    }
  },
  methods: {
    imageLoad(){
      if(++this.loadCounter === this.imageLength){
        this.$emit('imageLoad')
      }
    }
  },
  computed:{
    imageLength(){
      return this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>
<style lang="less" scoped>
  .detail-info{
    width: 100%;
    .info-image-wrap{
      img{
        width: 100%;
      }
    }
  }
</style>