<style lang="less">
@import url('../assets/style/variable.less');
.easyscore-container { width: 500px; height: 430px; font-size: 14px; padding: 20px 15px; overflow-y: scroll; overflow-x: hidden; background: rgba(255, 255, 255, .6); border-radius: 5px; border: solid 1px #ddd;
  .component-title { margin: 0 0 10px 0; font-size: 18px; font-weight: bold; }
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
   .content-wrap { width: 100%;
      .info { font-size: 14px; margin: 5px 0; height: 28px; line-height: 28px; text-align: center; background: @pblue; color: #fff; border-radius: 2px; }
      .return-btn { cursor: pointer; width: 80px; height: 32px; line-height: 32px; color: @pblue-d;
        &:hover { text-decoration: underline; color: @pblue; }
      }
     .score-item-content { word-wrap: break-word; font-size: 16px; letter-spacing: 0; line-height: 26px; }
     .score-item-lyrics { word-wrap: break-word; font-style: italic; margin-top: 20px; line-height: 26px; }
   }
}
</style>

<template>
  <div class="easyscore-container">
    <p class="component-title">{{ sectionTitle }}</p>

    <ol class="list score-list" v-show="listShow">
      <li class="list-item score-item" v-for="(item, index) in scores" :key="index">
        <span class="num">{{ index + 1 }}</span>
        <a href="javascript:;" @click="clickScoreItem(item)">{{ item.name }}</a>
        <span class="difficulty-degree">
          <i class="icon-star" v-for="(star, sindex) in new Array(item.degree)" :key="sindex"></i>
        </span>
      </li>
    </ol>
    <div class="content-wrap" v-show="!listShow">
      <div class="return-btn"  @click="toggleListShow()">&lt;&lt;&nbsp;返回列表</div>
      <p class="info">在键盘上依次按以下键进行演奏，注意控制节奏。</p>
      <div class="score-item-content" v-html="content"></div>
      <div class="score-item-lyrics"  v-html="lyrics"></div>
    </div>
  </div>
</template>

<script>
import { EasyScore } from 'config'

const defaultTitle = '快速入门'
export default {
  data() {
    return {
      scores: EasyScore,
      sectionTitle: defaultTitle,
      content: '',
      lyrics: '',
      listShow: true
    }
  },
  methods: {
    clickScoreItem(item) {
      if (!item) return
      this.toggleListShow()
      this.content = item.content.toUpperCase()
      this.lyrics = item.lyrics
      this.sectionTitle = item.name || defaultTitle
    },
    toggleListShow() {
      this.listShow = !this.listShow
      if (this.listShow) {
        this.sectionTitle = defaultTitle
      }
    }
  }
}
</script>
