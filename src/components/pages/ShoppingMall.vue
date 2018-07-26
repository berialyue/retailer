<template>
  <div>
    <div class="search-bar">
      <van-row>
        <van-col span='3'>
          <img :src="locationIcon" class="location-icon">
        </van-col>
        <van-col span='16'>
          <input type="text" class="search-input">
        </van-col>
        <van-col span='5'>
          <van-button size="mini" class="search-btn">查找</van-button>
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay='3000'>
        <van-swipe-item v-for='(banner,index) in bannerPicArray' :key='index'>
          <img :src="banner.imageUrl" class="swipe-img">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingMall',
  data () {
    return {
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [
        {imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
        {imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
        {imageUrl: 'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  height: 2.2rem
  background-color: #e5017d
  line-height: 2.2rem
.location-icon
  width: 60%
  padding-top: .4rem
  padding-left: .5rem
.search-input
  width: 100%
  height: 1.3rem
  border-top: 0px
  border-left: 0px
  border-right: 0px
  border-bottom: 1px solid #ffffff !important
  background-color: #e5017d
  color: #ffffff
.search-btn
  margin-left: .5rem
  background-color: #cccccc
  border: 0px
.swiper-area
  width: 20rem
  overflow: hidden
  clear: both
.swipe-img
  width: 100%
</style>
