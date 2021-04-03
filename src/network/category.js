import {request} from './request'

export const getCategory = () => {
  return request({
    url: '/category'
  })
}

export const getCategoryInfo = (maitKey) => {
  return request({
    url: '/subcategory',
    params:{
      maitKey
    }
  })
}

export const getCategoryRecommend = (miniWallkey) => {
  return request({
    url: '/subcategory/detail',
    params:{
      miniWallkey
    }
  })
}

