<style lang="less">
@import url('../assets/style/variable.less');
.component-commodity-list { width: 100%; height: auto; margin: 30px auto; padding: 0; text-align: center; letter-spacing: -20px; background: rgba(255,255,255,.6); border-radius: 5px; overflow: visible; white-space: nowrap; position: relative;
  .scroll-wrap { width: 100%; padding: 20px 0; overflow: scroll; }
  .card-wrap { display: inline-block; width: 20%; margin: 0 2.5%; box-shadow: 1px 1px 10px 1px #ddd; border-radius: 5px; overflow: hidden; letter-spacing: normal; }

  .arrow { width: 35px; height: 35px; border-top: solid 6px rgba(239,73,111,.5); border-right: solid 6px rgba(239,73,111,.5); position: absolute; top: calc(50% - 17.5px); cursor: pointer;
    &:hover { border-color: rgba(239,73,111,.8); }
  }
  .left-arrow { left: -10px; transform: rotate(225deg); }
  .right-arrow { right: -10px;  transform: rotate(45deg); }
}
</style>

<template>
  <div class="component-commodity-list responsive-section-a" ref="listWrap">
    <div class="arrow left-arrow" @click="scrollList('left')"></div>
    <div class="scroll-wrap" ref="scroll">
      <div class="card-wrap" v-for="(product, index) in ValidGoods" :key="index">
        <CommodityCard :product="product" />
      </div>
    </div>

    <div class="arrow right-arrow" @click="scrollList('right')"></div>
  </div>
</template>

<script>
import CommodityCard from '@/components/CommodityCard.vue'
import { Goods } from '@/config'

export default {
  name: 'CommodityList',
  components: {
    CommodityCard
  },
  mixins: [],
  props: [],
  data() {
    return {
      AllGoods: Goods,
    }
  },
  computed: {
    ValidGoods() {
      return this.AllGoods.filter(g => g.valid)
    }
  },
  watch: {},
  mounted() {
    this.fetchRemoteData()
  },
  methods: {
    fetchRemoteData() {
      $.ajax({
        type: 'GET',
        url: '/static/data/goods.json',
        success: (goodsList) => {
          if (goodsList && goodsList.length > 0) {
            this.AllGoods = goodsList
          }
        }
      })
    },
    scrollList(dir = 'left') {
      if (this.scrollList.timer) {
        clearTimeout(this.scrollList.timer)
      }
      this.scrollList.timer = setTimeout(() => {
        let listWrap = this.$refs.listWrap
        let scrollContent = this.$refs.scroll
        let curLeft = scrollContent.scrollLeft || 0
        let delta = 0
        let itemWidth = listWrap.offsetWidth / 4
        if (dir == 'left') {
          delta = -itemWidth
        } else if (dir == 'right') {
          delta = itemWidth
        }
        $(scrollContent).animate({
          scrollLeft: curLeft + delta
        }, 100)
      }, 200)
    }
  }
}
</script>
