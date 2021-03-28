<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <template #item_icon>
          <img src="@/assets/img/tabbar/home.svg" alt="" />
        </template>
        <template #item_icon_active>
          <img src="@/assets/img/tabbar/home_active.svg" alt="" />
        </template>
        <template #item_text>
          <p>首页</p>
        </template>
      </tab-bar-item>
        <tab-bar-item path='/category'>
        <img slot="item_icon" src="@/assets/img/tabbar/category.svg" alt="" />
        <template #item_icon_active>
          <img src="@/assets/img/tabbar/category_active.svg" alt="" />
        </template>
        <p slot="item_text">分类</p>
      </tab-bar-item>
        <tab-bar-item path='/cart'>
        <img slot="item_icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
        <template #item_icon_active>
          <img src="@/assets/img/tabbar/shopcart_active.svg" alt="" />
        </template>
        <p slot="item_text">购物车</p>
      </tab-bar-item>
        <tab-bar-item path='/user'>
        <img slot="item_icon" src="@/assets/img/tabbar/profile.svg" alt="" />
        <template #item_icon_active>
          <img src="@/assets/img/tabbar/profile_active.svg" alt="" />
        </template>
        <p slot="item_text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>

import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: "component_name",
  components:{
    TabBar,
    TabBarItem
  },
  data () {
    return {
    };
  }
}
</script>
<style scoped>
</style>