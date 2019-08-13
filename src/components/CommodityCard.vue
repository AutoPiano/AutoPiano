<style lang="less">
@import url('../assets/style/variable.less');

.component-commodity-card { display: inline-block; width: 100%; height: auto; font-size: 14px; text-align: left; background: #fff;
  .pic-wrap { width: 100%;  padding: 10px 20px; overflow: hidden;
    .pic { width: 100%; }
  }
  .card-section { padding: 5px 8px; }
  .commodity-name { display: block; width: 100%; font-weight: bold; text-overflow: ellipsis; overflow: hidden; word-break: break-all; white-space: nowrap;
    &:hover { text-decoration: underline; }
  }
  .em { color: @c-red; font-weight: bold; }
  .price { float: left;
    .price-info { font-size: 12px; color: #888; }
  }
  .sale-count { float: right; }
  .seller-name { font-size: 12px; color: #888; }

  .btn-wrap { text-align: center; padding: 5px 0 15px; }
  .link-btn { display: inline-block; width: 100px; height: 26px; line-height: 26px; border-radius: 13px; background: @c-red; color: #fff; text-align: center; cursor: pointer;
    &:hover { opacity: .8; }
  }
}
</style>

<template>
  <div class="component-commodity-card">
    <div class="pic-wrap">
      <img :src="'/static/goodsImgs/' + product.pic" :alt="product.name" class="pic">
    </div>
    <a class="card-section commodity-name" :href="product.link" target="_blank">{{product.name}}</a>
    <div class="card-section clearfix">
      <div class="price"><span class="em">{{product.price}}</span>&nbsp;<span class="price-info">(仅供参考)</span></div>
      <div class="sale-count">月销 <span class="em">{{product.salePerMonth}}</span></div>
    </div>
    <div class="card-section seller-name">{{product.seller}}</div>
    <div class="card-section btn-wrap">
      <a class="link-btn" :href="product.link" target="_blank">去京东购买</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommodityCard',
  components: {},
  mixins: [],
  props: [ 'product' ],
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
}
</script>
