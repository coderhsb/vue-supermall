<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
      <div class="pullup-tips" v-if="pullUpLoad">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span>Pull up and load more</span>
        </div>
        <div v-else class="after-trigger">
          <div class="loader">Loading...</div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  name: "BetterScroll",
  props:{
    // 监听scroll
    probeType:{
      type: Number,
      default:0
    },
    // 监听触底
    pullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      bs: null,
      isPullUpLoad: false,
    };
  },
  mounted() {
    this.bs = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      pullUpLoad: this.pullUpLoad,
      click:true
    })

    if(this.probeType === 2 || this.probeType === 3){
      this.bs.on('scroll', ({ y }) => {
        this.$emit('scrollY',y)
    })
    }
    

    if(this.pullUpLoad){
      this.bs.on('pullingUp', () => {
        this.isPullUpLoad = true
        this.$emit('isPullUpLoad')
      })
    }

  },
  methods: {
    scrollTo(x,y,time=500){
      this.bs.scrollTo(x,y,time)
    },
    finish(){
      if(this.pullUpLoad){
        this.bs && this.bs.finishPullUp()
        this.isPullUpLoad = false
      }
    },
    refresh(){
      this.bs && this.bs.refresh()
    }
  },
}
</script>
<style lang="less" scoped>
  .pullup-tips{
    padding: 20px;
    text-align: center;
    color: #999;
  }
 
</style>