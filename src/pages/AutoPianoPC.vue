<template>
  <div class="page-home">
    <div class="app-bg" :style="appBgStyle"></div>

    <div class="app-content">
      <Piano></Piano>
      <div class="score-section">
        <ManualPlayScoreList></ManualPlayScoreList>
        <AutoPlayScoreList></AutoPlayScoreList>
      </div>
      <div class="right-drawer" :class="{'show': rightDrawerShow}">
        <div class="trigger" @click="toggleRightDrawer">歌曲列表</div>
        <div class="close" @click="hideRightDrawer">X</div>
        <ManualPlayScoreList></ManualPlayScoreList>
      </div>
      <VueLivere uid="MTAyMC80MzU0My8yMDA4Mg==" refer="http://www.autopiano.cn" />
    </div>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import Piano from '@/components/Piano'
import PageFooter from '@/components/Footer'
import ManualPlayScoreList from '@/components/ManualPlayScoreList'
import AutoPlayScoreList from '@/components/AutoPlayScoreList'
import VueLivere from '@/components/VueLivere'

import { Wallpaper } from '@/config'

export default {
  name: 'AutoPianoPC',
  components: {
    Piano,
    PageFooter,
    ManualPlayScoreList,
    AutoPlayScoreList,
    VueLivere
  },
  data() {
    return {
      percent: 0,
      appBgStyle: '',
      rightDrawerShow: false
    }
  },
  created() {
    if (window.isMobile) {
      // 跳转到mobile页面
      this.$router.replace({
        path: '/mobile'
      })
    }
  },
  mounted() {
    this.setRandomWallPaper()
  },
  methods: {
    // 随机背景壁纸
    setRandomWallPaper() {
      let len = Wallpaper.length
      let random = Math.floor(Math.random() * len)
      let src = Wallpaper[random] || 'https://i.loli.net/2019/04/28/5cc5bbb538f26.jpg'
      this.appBgStyle = `background: url(${src}) no-repeat; background-size: cover;`

      if (window['__PRERENDER_INJECTED']) {
        this.appBgStyle = `background: #eee;`
      }
    },
    toggleRightDrawer() {
      this.rightDrawerShow = !this.rightDrawerShow
    },
    hideRightDrawer() {
      this.rightDrawerShow = false
    }
  }
}
</script>

<style lang="less">
@import url('../assets/style/variable.less');
.page-home { width: 100%; min-width: 1280px; height: 100%; padding: 1px; font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; color: #2c3e50;  position: absolute; top: 0; left: 0; overflow-x: hidden;
  .app-bg { width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: -100; opacity: 0.5; background-size: cover; }
  .app-content { width: 100%; height: 100%; padding-bottom: 200px; overflow-x: hidden; overflow-y: scroll;
    .score-section { width: 100%; padding: 0px; display: flex; align-items: center; justify-content: space-around; }

    .right-drawer { width: 500px; height: 100%; position: fixed; top: 0; right: -500px; z-index: 100; border-left: solid 1px #ccc; transition: all .3s ease-in-out;
      .trigger { width: 30px; height: 86px; font-size: 16px; text-align: center; padding-top: 7px;  position: absolute; top: 50%; left: -32px; background: @pred; color: #fff; cursor: pointer; z-index: 101; }
      // .trigger::before { content: ''; width: 8px; height: 8px; background: #f00;; position: absolute; top: -2px; right: -2px; border-radius: 50%; }
      .close { width: 20px; height: 20px; line-height: 20px; text-align: center; position: absolute; top: 10px; right: 15px; background: @pred; color: #fff; cursor: pointer; z-index: 101; }
      .component-manual-list { width: 100%; height: 100%; background: rgba(255, 255, 255, .9);  border-radius: 0; border: none;
        // .list-item a { color: #fff; }
      }
    }
    .right-drawer.show { right: 0; }
  }
}
</style>
