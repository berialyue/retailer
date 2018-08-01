<template>
  <div>
    <div class="floor-title">
      <div class="floor-num">1F</div>
      <div class="floor-content">休闲食品</div>
    </div>
    <div class="floor">
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" width="100%" />
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData1.image" width="100%" />
          </div>
          <div>
            <img :src="floorData2.image" width="100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="floor-rule">
      <div v-for="(item, index) in floorData.slice(3)" :key="index">
        <img :src="item.image" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'floorComponent',
  props: ['floorData'],
  data () {
    return {
      floorData0: {},
      floorData1: {},
      floorData2: {}
    }
  },
  created () {

  },
  watch: {
    floorData: function (val) {
      console.log(this.floorData)
      this.floorData0 = this.floorData[0]
      this.floorData1 = this.floorData[1]
      this.floorData2 = this.floorData[2]
    }
  }
}
</script>

<style lang="stylus" scoped>
.floor-title
  height: 2rem
  line-height: 2rem
  display: flex
  justify-content: center
  background-color: #efefef
.floor-num
  width: 1.5rem
  height: 1.5rem
  margin: .2rem .4rem 0 0
  line-height: 1.5rem
  text-align: center
  color: #ffffff
  border-radius: 50%
  background-color: #d54418
.floor-content
  color: #d54418
.floor-anomaly
  display: flex
  flex-direction: row
  background-color: #fff
  border-bottom: 1px solid #dddddd
.footer-anomaly div
  width: 10rem
  box-sizing: border-box
  -webkit-box-sizing: border-box
.floor-one
  border-right: 1px solid #dddddd
.floor-two
  border-bottom: 1px solid #dddddd
.floor-rule
  display: flex
  flex-direction: row
  flex-wrap: wrap
  background-color: #ffffff
.floor-rule div
  -webkit-box-sizing: border-box
  box-sizing: border-box
  width: 10rem
  border-bottom: 1px solid #dddddd
.floor-rule div:nth-child(odd)
  border-right: 1px solid #dddddd
</style>
