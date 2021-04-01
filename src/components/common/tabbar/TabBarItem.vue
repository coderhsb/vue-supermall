<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if='!isActive'><slot name="item_icon"></slot></div>
    <div v-else><slot name="item_icon_active"></slot></div>
    <div :class="{active: isActive}"><slot name="item_text"></slot></div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      
    }
  },
  props:{
    path:String
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path)
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
img {
  margin-top: 3px;
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-bottom: 2px;
}
p {
  font-size: 13px;
}
.active{
  color: red;
}
</style>
