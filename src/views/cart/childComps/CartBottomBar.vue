<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <input id="all" type="checkbox" :checked="allChecked" @click="handleAll">
      <label for="all"><span>全选</span></label>  
    </div>
    <div class="bottom-center">
      合计：￥{{totalPrice.toFixed(2)}}
    </div>
    <div class="bottom-right" @click="handleCalc">
      结算({{totalNum}})
    </div>
  </div>
</template>
<script>
export default {
  name: "CartBottomBar",
  props:{
    totalNum:{
      type: Number,
      default: 0
    },
    totalPrice:{
      type: Number,
      default: 0
    },
    allChecked:{
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleAll(){
      this.$store.commit('handleAll', this.allChecked)
    },
    handleCalc(){
      if(!this.totalNum){
        this.$toast.show('请选择要购买的商品~')
      }
    }
  },
}
</script>
<style lang="less" scoped>
  .bottom-bar{
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    height: 36px;
    background-color: white;
    .bottom-left{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      flex: 2;
      input{
        width: 15px;
        height: 15px;
      }
      span{
        padding-left: 2px;
      }
    }
    .bottom-center{
      flex: 7;
      line-height: 36px;
      padding-left: 30px;
    }
    .bottom-right{
      flex: 3;
      line-height: 36px;
      text-align: center;
      background-color: #ff5200;
      color: white;
    }
  }
</style>