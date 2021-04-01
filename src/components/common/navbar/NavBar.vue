<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
  data () {
    return {
    };
  }
}
</script>
<style scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    z-index: 9;
  }
  .left,.right{
    width: 60px;
    text-align: center;
  }
  .center{
    height: 44px;
    flex: 1;
    text-align: center;
  }
</style>