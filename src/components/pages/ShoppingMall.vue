<template>
  <div>
    <div class="search-bar">
      <van-row class="search-content">
        <van-col span='3' class="icon">
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
          <img v-lazy="banner.image" class="swipe-img">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index" class="type-item">
        <img v-lazy="cate.image" width="90%">
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ShoppingMall',
  data () {
    return {
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [],
      category: '',
      adBanner: ''
    }
  },
  created () {
    axios({
      url: 'https://www.easy-mock.com/mock/5b5b3c42fbbb0c35ff88bfba/',
      method: 'get'
    })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          this.category = response.data.data.category
          this.adBanner = response.data.data.advertesPicture
          this.bannerPicArray = response.data.data.slides
          console.log(this.bannerPicArray)
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style lang="stylus" scoped>
.search-bar
  height: 2.2rem
  background-color: #e5017d
  line-height: 2.2rem
.search-content, .icon
  height: 2.2rem
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
  height: 0
  overflow: hidden
  padding-bottom: 44.444%
  clear: both
.swipe-img
  width: 100%
.type-bar
  background-color: #fff
  margin: .1rem .3rem .3rem .3rem
  display: flex
  flex-direction: row
  border-radius: .3rem
  font-size: 14px
  flex-wrap: nowrap
.type-item
  width: 4rem
  padding: .3rem
  font-size: 12px
  text-align: center
</style>
