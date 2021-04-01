<template>
  <div>
    <button @click="btnClick">按钮</button>
  </div>
</template>
<script>
export default {
  name: "Category",
  data() {
    return {
    }
  },
  methods: {
    btnClick(){
      this.$toast.show('已添加到购物车~')
    }
  }
}
</script>
<style scoped>
  
</style>