<template>
  <div class="cart-wrap">
    <nav-bar class="cart-titie">
      <div slot="center">购物车({{totalNum}})</div>
    </nav-bar>
    <better-scroll class="scroll">
      <goods-list :goodsList="goodsList"></goods-list>
    </better-scroll>
    <cart-bottom-bar :total-num='totalNum' :total-price="totalPrice" :all-checked="allChecked"></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';
import GoodsList from './childComps/GoodsList.vue';
import BetterScroll from '@/components/common/scroll/BetterScroll.vue';


export default {
  components: { 
    NavBar, 
    GoodsList, 
    CartBottomBar,  
    BetterScroll 
  },

  name: "Cart",
  
  data () {
    return {
      goodsList: []
    };
  },
  created() {
    this.goodsList = this.$store.state.cartList
  },
  computed:{
    totalNum(){
      return this.goodsList.filter(v => v.checked).reduce((v,m) => v + m.num, 0)
    },
    totalPrice(){
      return this.goodsList.reduce((v,m) => {
        if(m.checked){
          return v + m.price * m.num
        }else{
          return v
        }
      } , 0)
    },
    allChecked(){
      return this.goodsList.every(v => v.checked) && Boolean(this.goodsList.length)
    }
  }
}
</script>
<style lang='less' scoped>
  .cart-wrap{
    .cart-titie{
      background-color: var(--color-tint);
      color: #fff;
    }
    .scroll{
      height: calc(100vh - 44px - 49px - 36px);
      overflow: hidden;
    }
  }
</style>