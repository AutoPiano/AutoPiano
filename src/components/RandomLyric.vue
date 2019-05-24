<style lang="less">
@import url('../assets/style/variable.less');
.component-random-lyric { width: 100%; padding: 5px 0; margin: 0 auto; text-align: center;
  .lyric { display: inline; font-size: 18px; font-style: italic; line-height: 30px; color: @pblue-d; cursor: pointer;
    &:hover { color: @pblue; }
  }
}
</style>

<template>
  <div class="component-random-lyric">
    <div class="lyric" id="randomLyric" @click="searchLyric">{{ randomLyric }}</div>
  </div>
</template>

<script>
import { Lyrics } from 'config/'
export default {
  name: 'RandomLyric',
  components: {},
  mixins: [],
  props: [],
  data() {
    return {
      randomLyric: '', // 随机歌词显示
      randomIndex: 0,
      lyricTimer: null
    }
  },
  computed: {},
  mounted() {
    this.setRandomLyric()
  },
  beforeDestroy() {
    this.lyricTimer = null
  },
  watch: {},
  methods: {
    setRandomLyric() {
      this.randomIndex = Math.floor(Math.random() * Lyrics.length)
      let set = () => {
        $('#randomLyric').hide()
        if (this.randomIndex < Lyrics.length - 1) {
          ++this.randomIndex
        } else {
          this.randomIndex = 0
        }
        this.randomLyric = '"' + Lyrics[this.randomIndex] + '"'
        $('#randomLyric').fadeIn(1000)
      }
      set()
      this.lyricTimer = setInterval(() => {
        set()
      }, 7e3)
    },
    // 歌词搜索、查询
    searchLyric() {
      let music163 = 'https://music.163.com/#/search/m/?s='
      let searchUrl = music163 + encodeURIComponent(Lyrics[this.randomIndex])
      window.open(searchUrl, '_blank')
    }
  }
}
</script>
