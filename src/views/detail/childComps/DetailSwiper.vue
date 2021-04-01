<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item 
      v-for="(item,index) in swiperList"
      :key="index"
      >
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";


export default {
  components: { Swiper,SwiperItem },
  name: "DetailSwiper",
  props:{
    swiperList:{
      type: Array,
      detault(){
        return []
      }
    }
  },
  data () {
    return {
    };
  }
}
</script>
<style lang="less" scoped>
  .detail-swiper{
    overflow: hidden;
    height: 250px;
  }
</style>