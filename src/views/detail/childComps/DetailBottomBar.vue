<template>
  <div class="bottom-bar">
    <div class="service small">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-kefu"></use>
      </svg>
      <div>客服</div>
    </div>
    <div class="shop small">
      <svg class="icon" aria-hidden="true" :class="{collect: isCollect}">
        <use xlink:href="#icon-dianpu"></use>
      </svg>
      <p>店铺</p>
    </div>
    <div class="select small" @click="handleCart">
      <!-- <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shoucang"></use>
      </svg> -->
      <img src="../../../assets/img/detail/cart.svg" alt="">
      <p>购物车</p>
    </div>
    <div class="cart big" @click="addToCat">加入购物车</div>
    <div class="buy big">购买</div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  data () {
    return {
      isCollect: false
    };
  },
  methods: {
    addToCat(){
      this.$emit('cartClick')
    },
    handleCart(){
      this.$router.push('/cart')
    }
  },
}
</script>
<style lang="less" scoped>
  .bottom-bar{
    background-color:antiquewhite;
    position: fixed;
    height: 49px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    .small{
      background-color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 2;
      font-size: 14px;
      svg{
        font-size: 24px;
      }
      img{
        width: 24px;
        height: 24px;
      }
    }
    .big{
      line-height: 49px;
      text-align: center;
      flex: 3;
      font-weight: 400;
    }
    .cart{
      background-color: yellow;
    }
    .buy{
      background-color: var(--color-tint);
      color: white;
    }
  }
</style>