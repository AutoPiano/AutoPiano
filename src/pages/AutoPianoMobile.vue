<template>
  <div class="page-home">
    <div class="app-bg" :style="appBgStyle"></div>

    <div class="app-content">
      <Piano></Piano>
      <div class="score-section">
        <ManualPlayScoreList></ManualPlayScoreList>
        <AutoPlayScoreList></AutoPlayScoreList>
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Piano from '@/components/Piano'
import PageFooter from '@/components/Footer'
import ManualPlayScoreList from '@/components/ManualPlayScoreList'
import AutoPlayScoreList from '@/components/AutoPlayScoreList'

export default {
  name: 'AutoPianoMobile',
  components: {
    Piano,
    PageFooter,
    ManualPlayScoreList,
    AutoPlayScoreList
  },
  data() {
    return {
      appBgStyle: ''
    }
  },
  mounted() {
    this.setWallPaper()
    /*强制横屏*/
    function horizontalScreen(className) {
        // transform 强制横屏
        var conW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var conH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        console.log(conW, conH, devicePixelRatio);
        var dpr = window.devicePixelRatio;
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
            "transform": "rotate(90deg) translate("+((conH-conW)/2)+"px,"+((conH-conW)/2)+"px)",
            "width": conH+"px",
            "height": conW+"px",
            //"margin-top":iosTopHe+"px",
            // "border-left":iosTopHe+"px solid #000",
            "transform-origin":"center center",
            "-webkit-transform-origin": "center center"
        });
    }
    window.onorientationchange = () => {
      // console.log('orientation change');
      horizontalScreen('body')
    }
    if (window.isMobile) {
      alert('为了您更好的浏览体验，请在电脑端浏览器访问。\n www.autopiano.cn')
      horizontalScreen('body')
    }
  },
  methods: {
    // 背景壁纸 移动端不需要设随机壁纸
    setWallPaper() {
      let src = 'https://i.loli.net/2019/04/28/5cc5bbb538f26.jpg'
      this.appBgStyle = `background: url(${src}) no-repeat; background-size: cover;`
      // if (window['__PRERENDER_INJECTED']) {
      //   this.appBgStyle = `background: #eee;`
      // }
    }
  }
}
</script>

<style lang="less">
@import url('../assets/style/variable.less');
.page-home { width: 100%; height: 100%; padding: 1px; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50;  position: absolute; top: 0; left: 0; overflow-x: hidden;
  .app-bg { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -100; opacity: 0.5; background-size: cover; }
  .app-content { width: 100%; height: 100%; padding-bottom: 200px; overflow-x: hidden; overflow-y: scroll;
    .score-section { width: 100%; padding: 0px; display: flex; align-items: center; justify-content: space-around; }
    .component-random-lyric { font-size: 20px; }
    .piano-wrap { margin-top: 30px; }
  }
}
</style>
