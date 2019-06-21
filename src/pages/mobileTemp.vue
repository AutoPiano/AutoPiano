<template>
  <div id="page-mobile" class="page-mobile">
    <div class="app-bg" :style="appBgStyle"></div>
    <div class="app-content">
      <h2 class="mobile-tip">请在电脑上用Chrome浏览器访问：www.autopiano.cn</h2>
      <PageHeader></PageHeader>
      <Piano></Piano>

      <div class="blank" style="height: 80px;"></div>
      <PageFooter></PageFooter>
    </div>

    <div class="score-section">
        <ManualPlayScoreList></ManualPlayScoreList>
        <AutoPlayScoreList></AutoPlayScoreList>
      </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/Footer'
// import RandomLyric from '@/components/RandomLyric'
import Piano from '@/components/Piano'
import ManualPlayScoreList from '@/components/ManualPlayScoreList'
import AutoPlayScoreList from '@/components/AutoPlayScoreList'

export default {
  name: 'AutoPianoMobile',
  components: {
    PageHeader,
    PageFooter,
    // RandomLyric,
    Piano,
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
    if (window.isMobile) {
      // alert('为了您更好的浏览体验，请在电脑端浏览器访问: \n www.autopiano.cn')
      this.horizontalScreen('body')
    }
    window.onorientationchange = () => {
      this.horizontalScreen('body')
    }
  },
  methods: {
    // 背景壁纸 移动端不需要设随机壁纸
    setWallPaper() {
      // 埃菲尔铁塔背景
      let src = 'https://i.loli.net/2019/04/28/5cc5bbb4c3a7b.jpg'
      this.appBgStyle = `background: url(${src}) no-repeat; background-size: cover;`
    },
    /*强制横屏*/
    horizontalScreen(className) {
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
  }
}
</script>

<style lang="less">
@import url('../assets/style/variable.less');
#page-mobile.page-mobile { width: 100%; height: 100%; padding: 1px; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50;  position: absolute; top: 0; left: 0; overflow-x: hidden;
  .app-bg { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -100; opacity: 0.5; background-size: cover; }
  .app-content { width: 70%; height: 100%; overflow-x: hidden; overflow-y: scroll; font-size: 30px; position: absolute; top: 0; right: 0;
    .mobile-tip { float: right; margin-right: 30px; background: #fff; color: #696969; font-size: 36px; }

    .component-page-header { margin: 50px auto;
      .trade-mark { width: 100%;
        .icon-piano { transform: scale(1); }
        .trade-mark-txt { font-size: 70px; left: 100px;
          .trade-mark-txt--en { font-size: 50px; }
        }
      }
    }

    .component-random-lyric { padding: 30px 0 20px;
      #randomLyric { font-size: 30px; }
    }
    .piano-wrap { width: 350%; margin-top: 20px;
      .piano-band { height: 70px; line-height: 70px; background-size: 260px 70px; }
      .piano-key-wrap { height: 520px !important;
        .bkey { height: calc(520px * 0.65) !important; }
      }
      .keytip { font-size: 30px; }
    }
  }
  .score-section { width: 30%; height: 100%; padding: 0px; overflow: scroll; position: absolute; top: 0; left: 0;
    .score-container { width: 100%; height: auto; padding: 20px; font-size: 40px; overflow: scroll;
      .component-title { font-size: 40px; margin: 15px 0 20px 15px;
        .join { display: none; }
      }
      .list-item { height: auto; padding: 10px 0; white-space: nowrap; text-overflow: ellipsis;
        .num { font-size: 30px; }
        a { margin-left: 7px; }
      }
      .degree, .difficulty-degree { display: none; }
      .content-wrap { font-size: 40px; line-height: 40px;
        .author-info { display: none; }
        .info { display: none; }
        .score-item-content { font-size: 40px; line-height: 40px; }
        .score-item-lyrics { line-height: 40px; }
      }
    }
  }
  .page-footer { height: 70px; line-height: 70px;
    .record-info { float: left; margin-left: 30px; }
    a { font-size: 30px; }
  }
}
</style>
