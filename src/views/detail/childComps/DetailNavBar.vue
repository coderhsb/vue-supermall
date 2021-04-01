<template>
  <div>
    <nav-bar>
      <div slot="left" class="title-left" @click="backClick">
        <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title-center">
        <div class="title-center-item"
        v-for="(item,index) in titleList"
        :key = "index"
        @click="itemClick(index)"
        :class="{active: activeIndex === index}"
        >
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue';
export default {
  name: "DetailNavBar",
  components: { NavBar },
  props:{
    currentIndex:{
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      titleList:['商品','参数','评论','推荐'],
      activeIndex: 0
    };
  },
  methods: {
    itemClick(index){
      this.activeIndex = index
      this.$emit("handleNavBar",index)
    },
    backClick(){
      this.$router.back()
    }
  },
  watch:{
    currentIndex(){
      this.activeIndex = this.currentIndex
    }
  }
}
</script>
<style lang="less" scoped>
  .title-left{
    font-size: 30px;
  }
  .title-center{
    display: flex;
    font-size: 14px;
    .title-center-item{
      flex: 1;
    }
  }
  .active{
    color: var(--color-tint);
  }
</style>