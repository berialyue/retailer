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
        <div>{{cate.mallCategoryName}}</div>
      </div>
    </div>
    <div class="ad-banner">
      <img v-lazy="adBanner.PICTURE_ADDRESS" width="100%">
    </div>
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <swiper>
          <swiper-slide v-for="(item, index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%">
              <div>{{item.goodsName}}</div>
              <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floorComponent :floorData="floor1"></floorComponent>
    <floorComponent :floorData="floor2"></floorComponent>
    <floorComponent :floorData="floor3"></floorComponent>

    <!-- <div class="floor-title">
      <div class="floor-num">1F</div>
      <div class="floor-content">休闲食品</div>
    </div>
    <div class="floor">
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floor1_0.image" width="100%" />
        </div>
        <div>
          <div class="floor-two">
            <img :src="floor1_1.image" width="100%" />
          </div>
          <div>
            <img :src="floor1_2.image" width="100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item, index) in floor1.slice(3)" :key="index">
        <img :src="item.image" width="100%">
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import swiperDefault from '../swiper/swiperDefault'
import floorComponent from '../component/floorComponent'

export default {
  name: 'ShoppingMall',
  data () {
    return {
      locationIcon: require('../../assets/images/location.png'),
      bannerPicArray: [],
      category: '',
      adBanner: '',
      recommendGoods: [],
      floor1: [],
      floor2: [],
      floor3: []
    }
  },
  components: {
    swiper,
    swiperSlide,
    swiperDefault,
    floorComponent
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
          this.recommendGoods = response.data.data.recommend
          this.floor1 = response.data.data.floor1
          this.floor2 = response.data.data.floor2
          this.floor3 = response.data.data.floor3
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
  width: 100vw
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
  width: 20vw
  padding: .3rem
  font-size: 12px
  text-align: center
.recommend-area
  background-color: #fff
  margin-top: .3rem
.recommend-title
  border-bottom: 1px solid #eeeeee
  font-size: 14px
  padding: .2rem
  color: #e5017d
.recommend-body
  border-bottom: 1px solid #eee
.recommend-item
  width: 99%
  border-right: 1px solid #eeeeee
  font-size: 12px
  text-align: center
// .floor-title
//   height: 2rem
//   line-height: 2rem
//   display: flex
//   justify-content: center
//   background-color: #efefef
// .floor-num
//   width: 1.5rem
//   height: 1.5rem
//   margin: .2rem .4rem 0 0
//   line-height: 1.5rem
//   text-align: center
//   color: #ffffff
//   border-radius: 50%
//   background-color: #d54418
// .floor-content
//   color: #d54418
// .floor-anomaly
//   display: flex
//   flex-direction: row
//   background-color: #fff
//   border-bottom: 1px solid #dddddd
// .footer-anomaly div
//   width: 10rem
//   box-sizing: border-box
//   -webkit-box-sizing: border-box
// .floor-one
//   border-right: 1px solid #dddddd
// .floor-two
//   border-bottom: 1px solid #dddddd
// .floor-rule
//   display: flex
//   flex-direction: row
//   flex-wrap: wrap
//   background-color: #ffffff
// .floor-rule div
//   -webkit-box-sizing: border-box
//   box-sizing: border-box
//   width: 10rem
//   border-bottom: 1px solid #dddddd
// .floor-rule div:nth-child(odd)
//   border-right: 1px solid #dddddd
</style>
