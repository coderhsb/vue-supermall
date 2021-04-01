<template>
  <div class="params-wrap">
    <div class="rule">
      <div class="rule-list" v-for="(item1,index1) in goodsRule" :key='index1'>
        <div class="rule-list-item" v-for="(item2,index2) in item1" :key='index2'>
          {{item2}}
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info-item" v-for="item in goodsInfo" :key="item.key">
        <div class="info-key">{{item.key}}</div>
        <div class="info-value">{{item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsParams",
  props:{
    goodsParams:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  data () {
    return {
    };
  },
  computed:{
    goodsRule(){
      return this.goodsParams.rule.tables[0]
    },
    goodsInfo(){
      return this.goodsParams.info.set
    }
  }
}
</script>
<style lang="less" scoped>
  .params-wrap{
    width: 100%;
    padding: 10px;
    padding-top: 20px;
    border-top: 2px solid #ccc;
    .rule{
      border-bottom: 2px solid #ccc;
      .rule-list{
        display: flex;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        .rule-list-item{
          flex: 1;
          text-align: center;
        }
      }
    }
    .info{
      padding-left: 20px;
      padding-top: 10px;
      .info-item{
        display: flex;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        .info-key{
          flex: 1;
          text-align: left;
        }
        .info-value{
          flex: 4;
          text-align: left;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: var(--color-tint);
        }
      }
    }
  }
</style>