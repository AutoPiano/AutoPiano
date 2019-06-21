<style lang="less">
@import url('../assets/style/variable.less');
.component-page-header { width: 100%; height: 60px; line-height: 60px; margin: 10px auto; padding: 0 5%;
  .trade-mark { display: block; width: 350px; position: relative; display: flex; justify-content: flex-start; align-items: center; float: left;
    .icon-piano { display: block; transform: scale(0.7); transform-origin: 50% 30%; }
    .trade-mark-txt { font-size: 28px; font-weight: 500; color: #000; margin: 0 0 0 10px;
      .trade-mark-txt--en { font-style: italic; font-size: 20px; color: #666; margin-left: 7px; }
    }
  }
  .menu { float: right; height: 45px; line-height: 45px; margin-top: 5px;
    .menu-item { display: inline-block; width: 80px; margin: 0 7px; text-align: center; position: relative; cursor: pointer;
      &::before { content: ''; width: 100%; height: 1px; position: absolute; left: 0; bottom: 0; transform: scaleX(1); transition: 0.3s; background: #ccc; }
      &::after { content: ''; width: 100%; height: 5px; position: absolute; left: 0; bottom: 0; transform: scaleX(0); transition: 0.3s; background: @c-blue; }
    }
    .menu-item-active::after { transform: scaleX(1); }
    .menu-item:hover::after { transform: scaleX(1); }
  }
}
</style>

<template>
  <div class="component-page-header clearfix" ref="PageHeaderComponent">
    <a class="trade-mark" target="_blank" href="/" >
      <i class="icon-piano"></i>
      <h1 class="trade-mark-txt">自由钢琴<span class="trade-mark-txt--en">AutoPiano.cn</span></h1>
    </a>
    <div class="menu">
      <router-link class="menu-item" :to="{ path: '/' }" active-class="menu-item-active" exact>首页</router-link>
      <router-link class="menu-item" :to="{ path: '/links' }" active-class="menu-item-active" exact>友情链接</router-link>
      <a class="menu-item" @click.stop="emitChangeWallPaper">更换壁纸</a>
      <!--<a class="menu-item" >钢琴基础教学</a>-->
    </div>
  </div>
</template>

<script>
import Observe from 'observe'
import { mapActions } from 'vuex'
import { OBEvent, Wallpaper } from '@/config'

export default {
  name: 'PageHeader',
  components: {},
  mixins: [],
  props: [],
  data() {
    return {
      wallpaperLoading: false
    }
  },
  computed: {},
  mounted() {
    Observe.$on(OBEvent.CHANGE_WALLPAPER, () => {
      this.setRandomWallPaper();
    })
  },
  watch: {},
  methods: {
    ...mapActions([
			'$setWallpaper'
		]),
    emitChangeWallPaper() {
      if (this.wallpaperLoading) return
      Observe.$emit(OBEvent.CHANGE_WALLPAPER)
    },
    // 随机背景壁纸
    setRandomWallPaper() {
      this.wallpaperLoading = true
      let len = Wallpaper.length
      let src = ''
      do {
        let random = Math.floor(Math.random() * len)
        src = Wallpaper[random]
      } while (!src || src == this.$currentWallpaper)

      let img = new Image();
      img.src = src
      img.onload = () => {
        this.wallpaperLoading = false
        this.$setWallpaper(src)
        img = null
      }
    },
  }
}
</script>
