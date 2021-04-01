<template>
  <div id="app">
    <keep-alive exclude="Detail,Cart">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/MainTabBar'
import './common/iconfont'
import './common/iconfont1'
export default {
  name: 'App',
  components:{
    MainTabBar,
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>
