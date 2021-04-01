import {request} from './request'

export const getDetail = (iid) => {
  return request({
      url: '/detail',
      params: {
        iid
      }
    })
}

export const getRecommend = () => {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.desc = itemInfo.desc
    this.oldPrice = itemInfo.oldPrice
    this.lowNowPrice = itemInfo.lowNowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}