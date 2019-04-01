<style lang="less">
.easyscore-container { width: 500px; height: 350px; font-size: 14px; padding: 20px 15px;  overflow-y: scroll; overflow-x: hidden; background: rgba(255, 255, 255, .6); border-radius: 5px; border: solid 1px #ddd;
  .component-title { margin: 0 0 10px 0; font-size: 18px; font-weight: bold;  }
  .list { width: 100%; padding-left: 25px; line-height: 32px;
    .list-item {  height: 32px; line-height: 32px; cursor: pointer; list-style: none;
      &:hover { text-decoration: underline; }
      .num { float:left; width: 35px; height: 32px; font-size: 16px; margin-left: -35px; text-align: center; color: #666;}
    }
   }
}
</style>

<template>
  <div class="easyscore-container">
    <p class="component-title">演奏示例</p>

    <ol class="list score-list" v-show="listShow">
      <li class="list-item score-item" v-for="(item, index) in scores" :key="index" @click="clickScoreItem(item)">
        <span class="num">{{ index + 1 }}</span>
        <a href="javascript:;">{{ item.name }}</a>
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

