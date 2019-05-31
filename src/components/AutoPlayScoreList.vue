<style lang="less">
@import url('../assets/style/variable.less');
.score-container.component-auto-list { width: 500px; height: 500px; font-size: 14px; padding: 20px 15px;  overflow-y: scroll; overflow-x: hidden; background: rgba(255, 255, 255, .6); border-radius: 5px; border: solid 1px #ddd;
  .component-title { margin: 0 0 10px 0; font-size: 18px; font-weight: bold; line-height: 26px; position: relative;
    .music-img { display: inline-block; width: 26px; vertical-align: middle; }
    .title { vertical-align: middle; margin-left: 5px; }
    .degree { position: absolute; top: 0; right: 95px; font-weight: normal; }
  }
  .list { width: 100%; padding-left: 25px; padding-bottom: 10px; line-height: 32px;
    .list-item {  height: 32px; line-height: 32px;  list-style: none;
      a { display: inline-block; min-width: 120px; cursor: pointer; }
      .icon-pause { display: inline-block; transform: scale(0.6); cursor: pointer;
        &:hover { opacity: 0.8; }
      }

      a:hover { color: @pblue; text-decoration: underline; }
      .num { float:left; width: 35px; height: 32px; font-size: 16px; margin-left: -35px; text-align: center; color: @pred; }
      .difficulty-degree { width: 150px; float: right; text-align: left;
        .icon-star { display: inline-block; transform: scale(.7); margin-left: -6px; }
      }
    }
   }
}
</style>

<template>
  <div class="score-container component-auto-list">

    <p class="component-title">
      <img src="/static/imgs/music_cd.png" alt="" class="music-img">
      <span class="title">演奏示例</span>
      <span class="degree">困难度</span>
    </p>

    <ol class="list score-list">
      <li class="list-item score-item" v-for="(item, index) in ScoreNum" :key="index">
        <span class="num">{{ index + 1 }}</span>
        <a href="javascript:;" @click="clickScoreItem(item)">
          {{ item.name }}
        </a>
        <i class="pause icon-pause" v-show="item.playing" @click="pauseAutoPlay(item)" />
        <span class="difficulty-degree">
          <i class="icon-star" v-for="(star, sindex) in new Array(item.degree)" :key="sindex"></i>
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
import Observe from 'observe'
import { ScoreNum, ScoreXml, OBEvent } from 'config'

export default {
  name: 'AutoPlayScoreList',
  data() {
    return {
      ScoreNum,
      ScoreXml,
      lastPlayingItem: null
    }
  },
  mounted() {},
  methods: {
    clickScoreItem(item) {
      if (!item || !item.name) return
      if (item == this.lastPlayingItem) return
      if (this.lastPlayingItem) {
        this.pauseAutoPlay(this.lastPlayingItem)
      }
      item.playing = true
      this.lastPlayingItem = item
      setTimeout(() => {
        Observe.$emit(OBEvent.AUTO_PLAY_NUM_SCORE, item.name)
      }, 200)
    },
    clickXMLScoreItem(item) {
      let vm = this
      if (!item || !item.url) return
      if (item == this.lastPlayingItem) return
      if (this.lastPlayingItem) {
        this.pauseAutoPlay(this.lastPlayingItem)
      }
      // FIX ME
      item.playing = true
      this.lastPlayingItem = item
      $.ajax({
        type: 'GET',
        url: item.url || '',
        success: (res) => {
          // console.log('fetch score', res)
          if (res) {
            let score = res
            if (score && typeof score == 'object') {
              setTimeout(() => {
                Observe.$emit(OBEvent.AUTO_PLAY_XML_SCORE, score)
              }, 200)
            }
          }
        },
        fail: () => {
          alert('加载乐谱出错，请检查网络')
        }
      })
    },
    pauseAutoPlay(item) {
      this.lastPlayingItem = null
      item.playing = false
      Observe.$emit(OBEvent.PAUSE_AUTO_PLAY, item)
    }
  }
}
</script>
