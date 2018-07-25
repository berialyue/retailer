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
  </div>
</template>

<script>
export default {
  name: 'ShoppingMall',
  data () {
    return {
      locationIcon: require('../../assets/images/location.png')
    }
  }
}
</script>

<style scoped>
.search-bar{
  height: 2.2rem;
  background-color: #e5017d;
  line-height: 2.2rem;
}
.location-icon{
  width: 60%;
  padding-top: .4rem;
  padding-left: .5rem;
}
.search-input{
  width: 100%;
  height: 1.3rem;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 1px solid #ffffff !important;
  background-color: #e5017d;
  color: #ffffff
}
.search-btn{
  margin-left: .5rem;
  background-color: #cccccc;
  border: 0px
}
</style>
