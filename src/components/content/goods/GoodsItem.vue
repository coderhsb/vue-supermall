<template>
  <div class="goods-item" @click="handleGoodsItem">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
    <p>{{goodsItem.title}}</p>
    <div class="floot-wrap">
      <span class="goods-price">￥{{goodsItem.price}}</span>&nbsp;
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-collect"></use>
      </svg>
      <span class="goods-sale">{{goodsItem.cfav}}</span>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsItem",
  props: {
    goodsItem:{
      type : Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  methods: {
    imageLoad(){      
      this.$emit('imageLoad')
    },
    handleGoodsItem(){
      this.$router.push({
        path: '/detail',
        query:{
          id : this.goodsItem.iid
        }
      })
    }
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  }
}
</script>
<style lang="less" scoped>
  .goods-item{
    width: 50%;
    padding-top: 5px;
    padding-left: 6px;
    img{
      width: 100%;
      border-radius: 10px;
    }
    .goods-info{
      p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 13px;
      }
      .floot-wrap{
        text-align: center;
        font-size: 13px;
        padding: 2px;
        svg{
          font-size: 14px;
        }
        .goods-price{
          color: var(--color-tint);
        }
        .goods-sale{
          color: #666;
        }
      }
      
    }
  }
</style>