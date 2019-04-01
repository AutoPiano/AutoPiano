<template>
  <div class="page-home">
    <div class="app-bg"></div>

    <Piano></Piano>

    <div class="page-section-wrap">
      <EasyScore></EasyScore>
      <DemoScore></DemoScore>
    </div>

    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Vue from 'vue'
import Piano from '@/components/Piano'
import PageFooter from '@/components/Footer'
import EasyScore from '@/components/EasyScore'
import DemoScore from '@/components/DemoScore'

export default {
  name: 'Home',
  data() {
    return {
      percent: 0
    }
  },
  mounted() {
    /*强制横屏*/
    function horizontalScreen(className){
        // transform 强制横屏
        var conW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var conH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // transform: rotate(90deg); width: 667px; height: 375px;transform-origin:28% 50%;
        //var iosTopHe = 0;//若有其他样式判断，写于此
        if (conW > conH) {
          $(className).css({
            "transform":"rotate(0deg)",
            "width":"100%",
            "height":"100%"
          })
          return;
        }
        $(className).css({
            "transform":"rotate(90deg) translate("+((conH-conW)/2)+"px,"+((conH-conW)/2)+"px)",
            "width":conH+"px",
            "height":conW+"px",
            //"margin-top":iosTopHe+"px",
            // "border-left":iosTopHe+"px solid #000",
            "transform-origin":"center center",
            "-webkit-transform-origin": "center center"
        });
    }
    var vm = this
    window.onorientationchange = () => {
      horizontalScreen('body')
      // console.log('orientation change');
    }
    var ua = window.navigator.userAgent
    if (ua.match(/mobile/i)) {
      horizontalScreen('body')
      alert('为了您更好的浏览体验，请在电脑端浏览器打开本网站。')
    }

    this.handleAutoPianoload(100)
  },
  methods: {
    handleAutoPianoload(data) {
      var vm = this;
      vm.percent = data;
      if (data >= 100) {
        setTimeout(()=> {
          $('.loader-page').fadeOut()
          $('#preloadAudio').remove()
        }, 700)
      }
    }
  },
  components: {
    Piano,
    PageFooter,
    EasyScore,
    DemoScore
  }
}
</script>

<style lang="less">

@pblue: #1296db;
@textdark: #2c3e50;

.page-home { width: 100%; min-width: 980px; min-height: 100%; padding: 1px; padding-bottom: 100px; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: @textdark;  position: absolute; top: 0; left: 0;
  .app-bg { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -100; opacity: 0.5; background: url('../../static/imgs/bg2.jpg') no-repeat; background-size: cover; }
  .page-section-wrap { width: 100%; padding: 0px; display: flex; align-items: center; justify-content: space-around; }
}
</style>
