<style lang="less">
@import url('../assets/style/variable.less');
.score-container.component-auto-list { width: 40%; min-width: 500px; padding-bottom: 50%; font-size: 14px; overflow: hidden; background: rgba(255, 255, 255, .6); border-radius: 5px; border: solid 1px #ddd; position: relative;

  .list-view { width: 100%; height: 100%; position: absolute; top: 0; left: 0; padding: 20px 15px; overflow-y: scroll;  }
  .component-title { margin: 0 0 10px 0; font-size: 18px; font-weight: bold; line-height: 26px; position: relative;
    .music-img { display: inline-block; width: 26px; vertical-align: middle; }
    .title { vertical-align: middle; margin-left: 5px; }
    .degree { width: 150px; float: right; text-align: left; }
  }
  .list { width: 100%; padding-left: 25px; padding-bottom: 10px; line-height: 32px;
    .list-item {  height: 32px; line-height: 32px;  list-style: none;
      a { display: inline-block; min-width: 120px; cursor: pointer; }
      .icon-pause { display: inline-block; transform: scale(0.6); cursor: pointer;
        &:hover { opacity: 0.8; }
      }

      a:hover { color: @c-blue; text-decoration: underline; }
      .num { float:left; width: 35px; height: 32px; font-size: 16px; margin-left: -35px; text-align: center; color: @c-red; }
      .difficulty-degree { width: 150px; float: right; text-align: left;
        .icon-heartbeat { display: inline-block; transform: scale(.7); margin-left: -6px; }
      }
    }
  }

  .player-view { font-size: 16px; width: 100%; height: 100%; position: absolute; top: 0; left: 0; padding: 20px 15px; overflow-y: scroll;
    .top-bar {
      .return-btn { cursor: pointer; width: 80px; height: 32px; line-height: 32px; font-size: 14px; color: @c-blue-d;
        &:hover { text-decoration: underline; color: @c-blue; }
      }
      h2 { font-size: 18px; }
    }
    // .cd-box { width: 350px; margin: 30px auto 10px; padding: 10px; background: #eee; border-radius: 15px; box-shadow: 5px 5px 20px 1px #aaa; }
    .cd { width: 220px; height: 220px; margin: 0 auto; border-radius: 50%; border: solid 5px #ddd; background: linear-gradient(to right, #000, #555, #000); position: relative; animation: spin 7s linear infinite;
      .cd-inner { width: 70px; height: 70px; line-height: 70px; border-radius: 50%; border: solid 3px #aaa;  background: #CD3F11; position: absolute; top: 0; left: 0; bottom: 0; right: 0; margin:auto; text-align: center; color: #fff; font-size: 12px;
        // &::after { content: ''; width: 10px; height: 10px; border-radius: 50%; background: #aaa; position: absolute; top: 0; left: 0; bottom: 0; right: 0; margin:auto; }
      }
    }
    .music-name { text-align: center; padding: 15px 0; font-weight: normal; }
    .control-bar { width: 100%; text-align: center; padding: 15px 0;
      .stop-btn { display: inline-block; width: 70px; height: 35px; line-height: 35px; background: @c-red; color: #fff; cursor: pointer; }
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>

<template>
  <div class="score-container component-auto-list">
    <div class="list-view" v-show="currentView=='LIST'">
      <p class="component-title">
        <img src="../assets/images/music_cd.png" alt="" class="music-img">
        <span class="title">演奏示例</span>
        <span class="degree">热度</span>
      </p>

      <ol class="list score-list">
        <li class="list-item score-item" v-for="(item, index) in ScoreNum" :key="index">
          <span class="num">{{ index + 1 }}</span>
          <a href="javascript:;" @click="clickScoreItem(item)">
            {{ item.name }}
          </a>
          <i class="pause icon-pause" v-show="item.playing" @click="pauseAutoPlay(item)" />
          <span class="difficulty-degree">
            <i class="icon-heartbeat" v-for="(star, sindex) in new Array(item.degree)" :key="sindex"></i>
          </span>
        </li>
      </ol>

      <!-- <p class="component-title">
        <img src="../assets/images/lab.png" alt="" class="music-img">
        <span class="title">MusicXML实验室<span style="font-size: 12px;">&nbsp;beta</span></span>
      </p>

      <ol class="list score-list">
        <li class="list-item score-item" v-for="(item, index) in ScoreXml" :key="index">
          <span class="num">{{ index + 1 }}</span>
          <a href="javascript:;" @click="clickXMLScoreItem(item)">
            {{ item.name }}
          </a>
          <i class="pause icon-pause" v-show="item.playing" @click="pauseAutoPlay(item)" />
          <span class="difficulty-degree">
            <i class="icon-heartbeat" v-for="(star, sindex) in new Array(item.degree)" :key="sindex"></i>
          </span>
        </li>
      </ol> -->
    </div>

    <div class="player-view" v-show="currentView=='PLAYER'">
      <div class="top-bar">
        <!-- <a class="return-btn">&lt;&lt;&nbsp;返回列表</a> -->
        <h2>AutoPlayer正在播放</h2>
      </div>
      <div class="cd-box">
        <div class="cd">
          <div class="cd-inner">AutoPiano</div>
        </div>
      </div>

      <h2 class="music-name">{{ playingItem.name }}</h2>
      <div class="control-bar">
        <a class="stop-btn" @click.stop="pauseAutoPlay()">停止</a>
      </div>
    </div>
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
      playingItem: {
        name: ''
      },
      currentView: 'LIST'
    }
  },
  mounted() {},
  methods: {
    clickScoreItem(item) {
      if (!item || !item.name) return
      if (item == this.playingItem) return
      if (this.playingItem) {
        this.pauseAutoPlay(this.playingItem)
      }
      item.playing = true
      this.playingItem = item
      // this.currentView = 'PLAYER'
      setTimeout(() => {
        Observe.$emit(OBEvent.AUTO_PLAY_NUM_SCORE, item.name)
      }, 200)
    },
    clickXMLScoreItem(item) {
      let vm = this
      if (!item || !item.url) return
      if (item == this.playingItem) return
      if (this.playingItem) {
        this.pauseAutoPlay(this.playingItem)
      }
      // FIX ME
      item.playing = true
      this.playingItem = item
      $.ajax({
        type: 'GET',
        url: item.url || '',
        success: (res) => {
          // console.log('fetch score', res)
          if (res) {
            let score = res
            if (score && typeof score == 'object') {
              // this.currentView = 'PLAYER'
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
      item = item || this.playingItem
      item.playing = false
      this.currentView = 'LIST'
      Observe.$emit(OBEvent.PAUSE_AUTO_PLAY, item)
      this.playingItem = {
        name: ''
      }
    }
  }
}
</script>
