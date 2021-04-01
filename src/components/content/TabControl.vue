<template>
  <div class="tab_control">
    <div
      class="tab_item"
      v-for="(item, index) in titleList"
      :key="index"
      :class="{ active: activeIndex === index }"
      @click="handleItem(index)"
    >
      <span>{{ item }}</span>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props:{
    titleList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    handleItem(index) {
      this.activeIndex = index;
      this.$emit('handleTab',index);
    }
  }
};
</script>
<style lang="less" scoped>
.tab_control {
  display: flex;
  padding: 10px 0;
  background-color: #fff;
  .tab_item {
    flex: 1;
    text-align: center;
    span{
      padding: 5px;
    }
  }
  .active {
    color: var(--color-tint);
    span {
      border-bottom: 2px solid var(--color-tint);
    }
  }
}
</style>
