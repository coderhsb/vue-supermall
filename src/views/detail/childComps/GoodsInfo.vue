<template>
  <div class="goods-info" v-if="Object.keys(goodsInfo) !== 0">
    <div class="goods-title">{{goodsInfo.title}}</div>
    <div class="goods-price-warp">
      <div class="goods-price">{{goodsInfo.price}}</div>
      <div class="goods-old-price">{{goodsInfo.oldPrice}}</div>
      <div class="goods-desc">{{goodsInfo.discountDesc}}</div>
    </div>
    <div class="goods-star-warp">
      <div>{{goodsInfo.columns[0]}}</div>
      <div>{{goodsInfo.columns[1]}}</div>
      <div>{{goodsInfo.services[1].name}}</div>
    </div>
    <div class="goods-services">
      <div>
        <img :src="goodsInfo.services[0].icon" alt="">
        {{goodsInfo.services[0].name}}
      </div>
      <div>
        <img :src="goodsInfo.services[0].icon" alt="">
        {{goodsInfo.services[2].name}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsInfo",
  props:{
    goodsInfo:{
      type: Object,
      default(){
        return {}
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
  .goods-info{
    padding: 10px;
    padding-bottom: 20px;
    border-bottom: 4px solid #eee;
    .goods-title{
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: #333;
      padding-bottom: 10px;
    }
    .goods-price-warp{
      display: flex;
      position: relative;
      .goods-price{
        color: var(--color-tint);
        font-size: 24px;
        font-weight: 400;
      }
      .goods-old-price{
        margin-left: 3px;
        font-size: 13px;
        color: #aaa;
        height: 13px;
        position: relative;
        bottom: 0;
        margin-top: 9px;
        text-decoration: line-through;
      }
      .goods-desc{
        margin-left: 3px;
        padding: 0;
        font-size: 12px;
        color: #fff;
        background-color: var(--color-tint);
        border-radius: 5px;
        height: 18px;
        padding: 3px;
        font-weight: 400;
      }
    }
    .goods-star-warp{
      padding-top: 10px;
      display: flex;
      color: #999;
      font-size: 13px;
      width: 100%;
      justify-content: space-between;
      padding-bottom: 5px;
      border-bottom: 1px solid #eee;
    }
    .goods-services{
      padding-top: 16px;
      display: flex;
      color: #333;
      font-size: 14px;
      width: 100%;
      justify-content: space-between;
      line-height: 14px;
      img{
        width: 12px;
        height: 12px;
      }
    }
  }
</style>