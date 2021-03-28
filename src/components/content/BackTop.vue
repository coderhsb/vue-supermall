<template>
  <div class="img-warp">
    <img src="@/assets/img/common/top.png" alt="">
  </div>
</template>
<script>
export default {
  name: "BackTop"
}
</script>
<style lang="less" scoped>
  .img-warp{
    position: fixed;
    right: 8px;
    bottom: 54px;
  }
  .img-warp img{
    width: 40px;
    height: 40px;
  }
</style>