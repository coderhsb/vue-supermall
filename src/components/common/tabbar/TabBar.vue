<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style>
  #tab-bar{
    display: flex;
    background-color: #f4f4f4;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 -1px 0 #f8f8f8;
    height: 49px;
  }
</style>
