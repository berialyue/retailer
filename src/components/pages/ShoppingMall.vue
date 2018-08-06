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
              <div>￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <floorComponent :floorData="floor1" floorNum='1F' :floorName="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" floorNum='2F' :floorName="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" floorNum='3F' :floorName="floorName.floor3"></floorComponent>
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-row gutter="20">
          <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
            <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import swiperDefault from '../swiper/swiperDefault'
import floorComponent from '../component/floorComponent'
import { toMoney } from '../../filter/moneyFilter.js'
import goodsInfo from '../component/goodsInfoComponent'
import url from '@/serviceAPI.config.js'

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
      floor3: [],
      floorName: '',
      hotGoods: []
    }
  },
  components: {
    swiper,
    swiperSlide,
    swiperDefault,
    floorComponent,
    goodsInfo
  },
  filters: {
    moneyFilter (money) {
      return toMoney(money)
    }
  },
  created () {
    axios({
      url: url.getShoppingMallInfo,
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
          this.floorName = response.data.data.floorName
          this.hotGoods = response.data.data.hotGoods
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
  height: 2.4rem
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
  margin-left: 1.2rem
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
.hot-area
  text-align: center
  font-size: 14px
  height: 1.8rem
  line-height: 1.8rem
</style>
