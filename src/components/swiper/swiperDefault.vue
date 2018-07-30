<template>
  <div >
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="text">
           <div class="centent">
             一大堆文章......
           </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  data () {
    return {
      slide: [1, 2, 3, 4, 5, 6],
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 'auto',
        freemode: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="stylus" scoped>
.swiper
  height: 300px
  overflow: hidden
.text
  font-size: 10px !important
  text-align: left
  padding: 30px
  height: auto
  -webkit-box-sizing: border-box
  box-sizing: border-box
</style>
