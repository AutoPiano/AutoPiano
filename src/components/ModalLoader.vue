<style lang="less">
@import url('../assets/style/variable.less');

.component-modal-loader { position: absolute; top: 0; left: 0; z-index: 1000; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  .loader-wrap { width: 120px; height: 120px; background: rgba(0, 0, 0, .6); border-radius: 5px;    }
  .loader { background: transparent; width: 80px; height: 80px; margin: auto; position: relative; }
  span { display: block; bottom: 0px; width: 9px; height: 5px; background: @c-blue; position: absolute; animation: soundBar 3s infinite ease-in-out; }
  span:nth-child(1) { left: 0px; }
  span:nth-child(2) { left: 10px; animation-delay:.2s; }
  span:nth-child(3) { left: 20px; animation-delay:.4s; }
  span:nth-child(4) { left: 30px; animation-delay:.6s; }
  span:nth-child(5) { left: 40px; animation-delay:.8s; }
  span:nth-child(6) { left: 50px; animation-delay:1s; }
  span:nth-child(7) { left: 60px; animation-delay:1.2s; }
  span:nth-child(8) { left: 70px; animation-delay:1.4s; }
  @keyframes soundBar { 0% {height: 5px; background:@c-blue} 20% {height: 50px; background:@c-red;} 40% {height: 5px; background:@c-blue} 60% {height: 5px; background:@c-blue} }
  .txt { color: #fff; text-align: center; margin-top: 10px; }
}
</style>

<template>
<div class="component-modal-loader" v-show="loaderShow">
  <div class="loader-wrap">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="txt">{{ tipTxt }}</div>
  </div>
</div>
</template>

<script>
import Observe from 'observe'
import { OBEvent } from 'config'
export default {
  name: '',
  components: {},
  mixins: [],
  props: [],
  data() {
    return {
      tipTxt: '请稍候',
      loaderShow: false
    }
  },
  computed: {},
  mounted() {
    Observe.$on(OBEvent.SHOW_GLOBAL_LOADING, (data) => {
      this.loaderShow = true
      this.tipTxt = data ? data.txt : '请稍候'
    })
    Observe.$on(OBEvent.HIDE_GLOBAL_LOADING, () => {
      this.loaderShow = false
    })
  },
  watch: {},
  methods: {}
}
</script>
