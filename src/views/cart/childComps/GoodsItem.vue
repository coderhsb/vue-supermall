<template>
  <div class="cart-goods">
    <div class="goods-checked">
      <input type="checkbox" :checked="goodsItem.checked" @click="handleChecked"><br>
    </div>
    <div class="goods-image">
      <img :src="goodsItem.image" alt="">
    </div>
    <div class="goods-info">
      <div class="goods-title">{{goodsItem.title}}</div>
      <div class="goods-desc">{{goodsItem.desc}}</div>
      <div class="goods-price-row">
        <div class="goods-price">￥{{goodsItem.price}}</div>
        <div class="goods-num">x{{goodsItem.num}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    };
  },
  methods: {
    handleChecked(){
      this.$store.commit('changeChecked',this.goodsItem.iid)
    }
  },
}
</script>
<style lang="less" scoped>
  .cart-goods{
    // width: 100vw;
    display: flex;
    // height: 120px;
    padding: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #ccc;
    .goods-checked{
      line-height: 100px;
      flex: 1;
      input{
        width: 16px;
        height: 16px;
      }
    }
    .goods-image{
      flex: 3;
      img{
        width: 100%;
        height: 100px;
        border-radius: 5px;
      }
    }
    .goods-info{
      width: 0;
      flex: 10;
      padding-left: 10px;
      .goods-title{
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        margin-bottom: 10px;
        font-size: 14px;
        padding-left: 2px;
      }
      .goods-desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 12px;
        padding-left: 2px;
      }
      .goods-price-row{
        margin-top: 23px;
        display: flex;
        justify-content: space-between;
        .goods-price{
          font-size: 18px;
          color: var(--color-tint);
        }
      }
    }
  }
</style>