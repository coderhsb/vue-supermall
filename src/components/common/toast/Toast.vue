<template>
  <div v-show="isShow" class="toast-wrap">
    <div class="toast-content">{{message}}</div>
  </div>
</template>
<script>
export default {
  name: "Toast",
  data () {
    return {
      message: '',
      isShow: false
    };
  },
  methods: {
    show(message = "请传递要显示的内容", time = 1500){
      this.message = message
      this.isShow = true

      setTimeout(() => {
        this.isShow = false
      }, time);
    }
  },
}
</script>
<style lang="less" scoped>
  .toast-wrap{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 12px;
    background-color: rgba(0, 0, 0, .5);
    z-index: 999;
    .toast-content{
      color: #fff;
    }
  }
</style>