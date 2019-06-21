<style lang="less">
@import url('../assets/style/variable.less');

#page-mobile.page-mobile { width: 100%; height: 100%; padding: 1px; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50; position: absolute; top: 0; left: 0; overflow-x: hidden;
  .app-bg { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -100; opacity: 0.5; background-size: cover; }
  .app-content { width: 100%; height: 100%; overflow-x: hidden; overflow-y: scroll; font-size: 30px; position: relative;
    .mobile-tip { padding: 5px; float: right; background: #fff; color: @c-red; font-size: 30px; }

    .trade-mark { width: 600px;
      .icon-piano { transform: scale(1); }
      .trade-mark-txt { font-size: 50px;
        .trade-mark-txt--en { font-size: 40px; }
      }
    }
    .menu { display: none; }
    .component-random-lyric { padding: 15px 0 15px;
      #randomLyric { font-size: 35px; }
    }
    .piano-wrap { width: 220%; margin-top: 20px;
      .piano-band { height: 55px; line-height: 55px; background-size: 260px 70px;
        .piano-tip { display: none; }
      }
      .piano-key-wrap { height: 400px !important;
        .bkey { height: calc(400px * 0.65) !important; border-radius: 0 0 10px 10px; }
        .wkey { border-radius: 0 0 12px 12px; }
      }
      .keytip { font-size: 30px; }
    }
    #share-section { left: 0;
      .social-share {
        .social-share-icon { transform: scale(1.5); }
        a { margin: 4px 13px; }
      }
    }

    .score-section { width: 100%; margin-top: 30px; padding: 0px; display: flex; align-items: center; justify-content: space-around;
      .score-container { width: 720px; height: 850px; padding: 20px; font-size: 30px;
        .component-title { font-size: 40px; margin: 10px 0 20px 10px;
          .join { display: none; }
          .degree { right: 40px; }
        }
        .list-item { margin: 10px 0;
          .num { font-size: 22px; }
        }
        .content-wrap { font-size: 35px; line-height: 40px;
          .info { margin: 15px auto; }
          .score-item-content { font-size: 35px; line-height: 40px; }
          .score-item-lyrics { line-height: 40px; }
        }
      }
    }
  }
  .component-page-footer { height: 75px; line-height: 75px; position: static;
    .left-section { display: none; }
    a { font-size: 35px; }
  }
}
</style>

<template>
  <div id="page-mobile" class="page-mobile">
    <div class="app-bg" :style="appBgStyle"></div>
    <div class="app-content">
      <h2 class="mobile-tip">请在电脑上用Chrome浏览器访问：www.autopiano.cn</h2>
      <PageHeader></PageHeader>
      <RandomLyric></RandomLyric>
      <Piano></Piano>
      <div class="score-section">
        <ManualPlayScoreList></ManualPlayScoreList>
        <AutoPlayScoreList></AutoPlayScoreList>
      </div>
      <div class="blank" style="height: 100px;"></div>
      <PageFooter></PageFooter>
    </div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/Footer'
import RandomLyric from '@/components/RandomLyric'
import Piano from '@/components/Piano'
import ManualPlayScoreList from '@/components/ManualPlayScoreList'
import AutoPlayScoreList from '@/components/AutoPlayScoreList'

export default {
  name: 'AutoPianoMobile',
  components: {
    PageHeader,
    PageFooter,
    RandomLyric,
    Piano,
    ManualPlayScoreList,
    AutoPlayScoreList
  },
  data() {
    return {
      appBgStyle: ''
    }
  },
  beforeMount() {
    this.setWallPaper()
    if (window.isMobile) {
      // alert('为了您更好的浏览体验，请在电脑端浏览器访问: \n www.autopiano.cn')
      this.horizontalScreen('body')
    }
  },
  mounted() {
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

