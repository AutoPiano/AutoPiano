<style lang="less">
@import url('../assets/style/variable.less');
.demoscore-container { width: 500px; height: 430px; font-size: 14px; padding: 20px 15px;  overflow-y: scroll; overflow-x: hidden; background: rgba(255, 255, 255, .6); border-radius: 5px; border: solid 1px #ddd;
  .component-title { margin: 0 0 10px 0; font-size: 18px; font-weight: bold;
    .music-img { display: inline-block; width: 30px; vertical-align: middle; }
    .txt { vertical-align: middle; margin-left: 5px; }
  }
  .list { width: 100%; padding-left: 25px; padding-bottom: 10px; line-height: 32px;
    .list-item {  height: 32px; line-height: 32px; cursor: pointer; list-style: none;
      a { display: inline-block; min-width: 120px; }
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
  <div class="demoscore-container">
    
    <p class="component-title">
      <img src="static/imgs/music_cd.png" alt="" class="music-img">
      <span class="txt">演奏示例</span>
    </p>

    <ol class="list score-list" v-show="listShow">
      <li class="list-item score-item" v-for="(item, index) in scores" :key="index">
        <span class="num">{{ index + 1 }}</span>
        <a href="javascript:;" @click="clickScoreItem(item)">{{ item.name }}</a>
        <span class="difficulty-degree">
          <i class="icon-star" v-for="(star, sindex) in new Array(item.degree)" :key="sindex"></i>
        </span>
      </li>
    </ol>
  </div>
</template>

<script>
import Observe from 'observe'
import { NumScore, OBEvent } from 'config'
export default {
  data() {
    return {
      scores: NumScore,
      content: '',
      listShow: true
    }
  },
  methods: {
    clickScoreItem(item) {
      if (!item || !item.name) return
      Observe.$emit(OBEvent.AUTO_PLAY_SCORE, item.name)
    }
  }
}
</script>

