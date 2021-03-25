import axios from 'axios'
export const request = (config) => {
  const ins = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // ins.interceptors.request.use(config => {
  //   console.log(config);
  //   return config
  // },err => console.log(err))

  ins.interceptors.response.use(res => {
    // console.log(res);
    return res.data
  },err => console.log(err))

  return ins(config)
  
}
