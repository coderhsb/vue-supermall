<template>
  <div class="goods-rate">
    <div class="goods-rate-text">用户评价</div>
    <div class="rate-item" v-for="(item,index) in rateList" :key= "index">
      <div class="user-name">
        <div class="user-name-icon"><img :src="item.user.avatar" alt=""></div>
        <div class="user-name-text">{{item.user.uname}}</div>
      </div>
      <div class="user-rate">{{item.content}}</div>
      <div class="user-goods-info">
        <span>{{item.created | showDate}}</span>
        <span>{{item.style}}</span>
        </div>
      <div class="user-goods-image" v-if="item.images">
        <div class="goods-image-wrap" v-for="(item,index) in item.images" :key="index">
          <img :src="item" alt="" @load="imageLoad">
        </div>
      </div>
      <div class="explain">{{item.explain}}</div>
    </div>
  </div>
</template>
<script>
import {formatDate} from '@/common/utils'
export default {
  name: "GoodsRate",
  props:{
    rateList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    };
  },
  methods: {
    imageLoad(){
      this.$emit('imageLoad')
    }
  },
  filters:{
    showDate(value){
      let date = new Date(value * 1000)
      const showDate = formatDate(date,'yyyy-MM-dd hh:mm:ss')
      // const showDate = date.toLocaleString()
      return showDate
    }
  }
}
</script>
<style lang="less" scoped>
  .goods-rate{
    padding: 10px;
    .goods-rate-text{
      padding: 10px 0;
      border-bottom: 1px solid #ccc;
    }
    .rate-item{
      padding-top: 5px;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      .user-name{
        padding: 5px 0;
        display: flex;
        height: 50px;
        line-height: 40px;
        .user-name-icon{
          flex: 1;
          img{
            border-radius: 40px;
            height: 40px;
            width: 40px;
          }
        }
        .user-name-text{
          flex: 6;
          font-size: 16px;
          height: 40px;
        }
      }
      .user-rate{
        font-size: 13px;
        padding: 5px;
        line-height: 20px;
      }
      .user-goods-info{
        padding: 5px;
        color: #aaa;
        font-size: 12px;
        span{
          padding-right: 4px;
        }
      }
      .user-goods-image{
        display: flex;
        flex-wrap: wrap;
        .goods-image-wrap{
          width: 64px;
          height: 64px;
          padding: 2px;
          img{
            width: 60px;
            height: 60px;
          }
        }
      }
      .explain{
        padding: 5px;
        font-size: 13px;
        line-height: 20px;
      }
    }
  }
</style>