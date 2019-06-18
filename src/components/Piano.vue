<style lang="less">
@import url('../assets/style/variable.less');

.component-autopiano { width: 100%;  position: relative; color: #000;
  .trade-mark { display: block; width: 350px; height: 60px; line-height: 60px; margin-left: 5%; margin-top:10px;
    .icon-piano { display: inline-block; transform: scale(0.7); transform-origin: 50% 30%; }
    .trade-mark-txt { display: inline-block; font-size: 28px; font-weight: 500; color: #000;
      .trade-mark-txt--en { font-style: italic; font-size: 20px; color: #777; margin-left: 7px; }
    }
  }
  #audioEffectCanvas { display: none; }
  .piano-wrap { width: 90%; margin: 20px auto; box-shadow: 2px 2px 10px 2px #acacac; position: relative;
    .piano-band { width: 100%; height: 35px; line-height: 35px; background: url('../../static/imgs/band2.png') no-repeat @black; background-size: 130px 35px; background-position: center center; position: relative;
      .piano-tip { position: absolute; top: 50%; right: 20px; transform: translateY(-50%); color: #fff; font-size: 14px; font-style: italic; }
    }
    .piano-key-wrap { width: 100%; background: @dark; overflow: hidden; position: relative;
      .piano-key {
        &:hover { cursor: pointer; }
      }
      .auto-key-active { background: #f5deb3 !important; }
      .wkey { display: inline-block; width: 2.775%; height: 100%; margin: 0 auto;
        background: linear-gradient(white 10%, rgb(251, 251, 251) 92%, rgb(220, 220, 220) 93%,white 97%);
        border: solid 1px @dark; border-radius: 0 0 5px 5px; position: relative;
        &:active { background: linear-gradient(#eee 10%, #ddd 60%, #bbb 93%, #ccc 97%); }
        .keytip { width: 100%; color: @dark; text-align: center; font-size: 14px; position: absolute; bottom: 5%;
          .keyname { margin-bottom: 5px; }
          .notename { color: @pblue; font-weight: bold; }
        }
      }
      .wkey-active { background: linear-gradient(#eee 10%, #ddd 60%, #bbb 93%, #ccc 97%); }
      .bkey-wrap { width: 20%; height: 0; position: absolute; top: 0; }
      .bkey-wrap1 { left: 0; }
      .bkey-wrap2 { left: 19.5%; }
      .bkey-wrap3 { left: 39%; }
      .bkey-wrap4 { left: 58.3%; }
      .bkey-wrap5 { left: 77.7%; }
      .bkey { display: inline-block; width: 10%; height: 70%; background: linear-gradient(#000 10%, rgb(86, 86, 86) 85%, #000 90%); border-radius: 0 0 3px 3px; position: absolute; top: 0; overflow: hidden;
        &:active { background: linear-gradient(rgb(86, 86, 86) 10%, #000 90%, #222 100%); }
        .keytip { width: 100%; color: #fff; position: absolute; left: 0; bottom: 5%; font-size: 14px; overflow: hidden;
          .keyname { width: 100%; text-align: center; }
        }
      }
      .bkey-active { background: linear-gradient(rgb(86, 86, 86) 10%, #000 90%, #222 100%); }
      .bkey:nth-child(1) { left: 9%; }
      .bkey:nth-child(2) { left: 23%; }
      .bkey:nth-child(3) { left: 50%; }
      .bkey:nth-child(4) { left: 65%; }
      .bkey:nth-child(5) { left: 79%; }
    }
  }

  .piano-options { width: 90%; height: 50px; margin: 10px auto 15px; padding: 0; display: flex; justify-content: center; align-items: center; position: relative;
    .option-item { height: 50px; line-height: 50px; margin: 0 10px;
      input, label { display: inline-block; vertical-align: middle; margin: 0 3px; cursor: pointer; }
    }
  }
}

</style>

<template>
  <div class="component-autopiano">
    <a target="_blank" href="/" class="trade-mark">
      <i class="icon-piano"></i>
      <div class="trade-mark-txt">自由钢琴<span class="trade-mark-txt--en">Auto Piano</span></div>
    </a>
    <RandomLyric></RandomLyric>
    <div class="piano-wrap" >
      <div class="piano-band">
        <div class="piano-tip">⇧ 代表 shift 键</div>
      </div>
      <div class="piano-key-wrap">
        <div class="piano-key wkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode" :data-name="note.name" v-if="note.type=='white'" @click="clickPianoKey($event, note.keyCode)">
          <div class="keytip">
            <div class="keyname" v-show="showKeyName">{{note.key}}</div>
            <div class="notename" v-show="showNoteName">{{note.name}}</div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap1">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode" :data-name="note.name" v-if="note.type=='black' && note.id >= 36 && note.id <= 40" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap2">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode" :data-name="note.name" v-if="note.type=='black' && note.id >= 41 && note.id <= 45" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap3">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode" :data-name="note.name" v-if="note.type=='black' && note.id >= 46 && note.id <= 50" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap4">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode" :data-name="note.name" v-if="note.type=='black' && note.id >= 51 && note.id <= 55" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap5">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode="note.keyCode" :data-name="note.name" v-if="note.type=='black' && note.id >= 56 && note.id <= 60" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="piano-options" id="piano-options">
      <VueShare />
      <div class="option-item">
        <input type="checkbox" id="keyname" v-model="showKeyName">
        <label for="keyname">显示按键提示</label>
      </div>

      <div class="option-item">
        <input type="checkbox" id="notename" v-model="showNoteName">
        <label for="notename">显示音名</label>
      </div>
    </div>

    <canvas id="audioEffectCanvas" ref="audioEffectCanvas">您的浏览器不支持<pre>Canvas</pre>。请升级到最新版的chrome、firefox、edge等浏览器。</canvas>

  </div>
</template>

<script>
import Vue from 'vue'
import Tone from 'tone'
import Observe from 'observe'

import { Notes, OBEvent } from 'config'
import SmapleLibrary from '@/lib/Tonejs-Instruments'
import { debounce } from '@/lib/wutils'

import pianoAutoPlayMixin from '@/mixins/pianoAutoPlayMixin'
import xmlAutoPlayMixin from '@/mixins/xmlAutoPlayMixin'

import RandomLyric from '@/components/RandomLyric'
import VueShare from '@/components/VueShare'

export default {
  name: 'Piano',
  mixins: [pianoAutoPlayMixin, xmlAutoPlayMixin],
  components: {
    RandomLyric,
    VueShare
  },
  data() {
    return {
      DEV: false,
      enableBlackKey: false, // 启用黑色按键
      showKeyName: true, // 显示键名
      showNoteName: false, // 显示音符名
      Notes: Notes,
      synth: null,
      keydownTimer: null,
      keyLock: false,
      lastKeyCode: '',
      lastKeyTime: 0
    }
  },
  mounted() {
    this.initPiano()
  },
  beforeDestroy() {
    this.keydownTimer = null
  },
  methods: {
    // 钢琴初始化
    async initPiano() {
      setTimeout(() => {
        this.computeEleSize()
      }, 300)
      this.bindKeyBoradEvent()
      this.setListener()

      this.synth = SmapleLibrary.load({
        instruments: "piano"
      }).toMaster()

      // this.synth = new Tone.PolySynth( 10 ).toMaster()
    },
    computeEleSize() {
      let wkey_width = $('.piano-key-wrap').width() / 36;
      let wkey_height = wkey_width * 7;
      let bkey_height = wkey_height * 0.7;
      $('.piano-key-wrap').height(wkey_height);
      $('.bkey').height(bkey_height);
    },
    setListener() {
      window.onresize = this.computeEleSize
      window.onorientationchange = this.computeEleSize

      // 数字简谱自动播放
      Observe.$on(OBEvent.AUTO_PLAY_NUM_SCORE, (scorename) => {
        this.playScoreByName(scorename)
      })
      // XML乐谱自动播放
      Observe.$on(OBEvent.AUTO_PLAY_XML_SCORE, (musicScore) => {
        this.addToPlayQueue(musicScore)
        // try {
        //   this.playXMLScore(musicScore)
        // } catch (e) {
        //   console.log(e)
        // }
      })
      // 暂停自动播放
      Observe.$on(OBEvent.PAUSE_AUTO_PLAY, (scoreItem) => {
        this.pauseAutoPlay(scoreItem)
        this.pauseXMLPlay()
      })
      Observe.$on(OBEvent.PAUSE_XML_AUTO_PLAY, (scoreItem) => {
        this.pauseXMLPlay()
      })
    },
    getNoteByKeyCode(keyCode) {
      // 改为更高性能的写法
      let target
      let len = this.Notes.length || 0
      for (let i = 0; i < len; i++) {
        let note = this.Notes[i]
        if (note.keyCode == keyCode) {
          target = note
          break
        }
      }
      return target
    },
    getNoteByName(name = 'C4') {
      // 改为更高性能的写法
      let target
      let len = this.Notes.length || 0
      for (let i = 0; i < len; i++) {
        let note = this.Notes[i]
        if (note.name == name) {
          target = note
          break
        }
      }
      return target
    },
    // 键盘操作 核心代码
    bindKeyBoradEvent() {
      const ShiftKeyCode = 16
      document.addEventListener('keydown', (e) => {
        let keyCode = e.keyCode;
        if (this.DEV) console.log('keydown', keyCode);
        // 按住Shfit键，则启用黑色按键
        if (keyCode == ShiftKeyCode) {
          this.enableBlackKey = true
        }
        if (this.enableBlackKey) keyCode = 'b' + keyCode

        if (keyCode == this.lastKeyCode) {
          // 连续触发同一个键时，应节流 + 延音
          if (!this.keyLock) {
            this.playNoteByKeyCode(keyCode)
            // 这里应该延音，解决中...
            this.lastKeyCode = keyCode
            this.keyLock = true
          }
          if (this.keydownTimer) {
            clearTimeout(this.keydownTimer)
            this.keydownTimer = null
          }
          this.keydownTimer = setTimeout(() => {
            this.keyLock = false
          }, 120)
        } else {
          this.playNoteByKeyCode(keyCode)
          this.lastKeyCode = keyCode
        }
      }, false)
      // document.addEventListener('keydown', debounce((e) => {
      //   let keyCode = e.keyCode;
      //   let time = +new Date()
      //   if (this.DEV) console.log('keydown', keyCode);
      //   // 按住Shfit键，则启用黑色按键
      //   if (keyCode == ShiftKeyCode) {
      //     this.enableBlackKey = true
      //   }
      //   if (this.enableBlackKey) keyCode = 'b' + keyCode
      //   this.playNoteByKeyCode(keyCode)
      //   this.lastKeyCode = keyCode
      //   this.lastKeyTime = +new Date()
      // }, 100, { leading: true, trailing: false }), false)

      document.addEventListener('keyup', (e) => {
        // console.log('keyup');
        let keyCode = e.keyCode;
        // 松开Shfit键，则禁用黑色按键
        if (keyCode == ShiftKeyCode) {
          this.enableBlackKey = false;
        }
        $(`.wkey`).removeClass('wkey-active')
        $(`.bkey`).removeClass('bkey-active')
      }, false)
    },
    // 鼠标操作，点击按键播放
    clickPianoKey(e, keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
      }
    },

    // 根据键值播放音符
    playNoteByKeyCode(keyCode) {
      let pressedNote = this.getNoteByKeyCode(keyCode)
      if (pressedNote) {
        this.playNote(pressedNote.name)
        let keyType = pressedNote.type;
        if (keyType == 'white') {
          $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('wkey-active');
        } else if (keyType == 'black') {
          $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('bkey-active');
        }
      }
    },
    // 触发单个音符播放
    playNote(notename = 'C4', duration = '1n') {
      if (!this.synth) return
      this.synth.triggerAttackRelease(notename, duration);
    }
  }
}
</script>
