import {debounce} from '@/common/utils'

export const mixinDemo = {
  data() {
    return {
      timer:null,
      isShowTop: false,
      navTops: [],
      currentIndex: 0
    }
  },
  created(){
    let refresh = debounce(()=>{
      this.$refs.scroll.refresh()
    },100)

    let getTops = debounce(()=>{
      try {
        this.navTops = [0,this.$refs.params.$el.offsetTop,this.$refs.rate.$el.offsetTop,this.$refs.recommend.$el.offsetTop]
      } catch (error) {
        console.log(error);
      }
    },200)

    this.timer = () => {
      refresh()
      getTops()
    }
  },
  methods: {
    imageLoad(){
      this.timer()
    },
    handleTop(){      
      this.$refs.scroll.scrollTo(0,0)
    },
    scrollY(y){
      this.isShowTop = y<(-1200)
      if(this.navTops.length){
        if(-y < this.navTops[1]){
          this.currentIndex = 0
        }else if(this.navTops[1]<= -y && -y<this.navTops[2]){
          this.currentIndex = 1
        }else if(this.navTops[2] <= -y && -y< this.navTops[3]){
          this.currentIndex = 2
        }else{
          this.currentIndex = 3
        }
      }
    }
  }
}