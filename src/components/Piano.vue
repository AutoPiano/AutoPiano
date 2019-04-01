<template>
  <div class="onepiano-app-wrap">
    <div class="trade-mark">
      <i class="icon-piano"></i>
      <div class="trade-mark-txt">自由钢琴<span class="trade-mark-txt--en">Auto Piano</span></div>
    </div>
    <div class="random-lyric" id="randomLyric">{{ randomLyric }}</div>
    <div class="piano-wrap" >
      <div class="piano-band"></div>
      <div class="piano-key-wrap">
        <div class="piano-key wkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='white'" @click="clickPianoKey($event, note.keyCode)">
          <div class="keytip">
            <div class="keyname" v-show="showKeyName">{{note.key}}</div>
            <div class="notename" v-show="showNoteName">{{note.name}}</div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap1">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='black' && note.id >= 36 && note.id <= 40" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap2">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='black' && note.id >= 41 && note.id <= 45" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap3">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='black' && note.id >= 46 && note.id <= 50" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap4">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='black' && note.id >= 51 && note.id <= 55" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
        <div class="bkey-wrap bkey-wrap5">
          <div class="piano-key bkey" v-for="note in Notes" :key="note.keyCode" :data-keyCode = "note.keyCode" v-if="note.type=='black' && note.id >= 56 && note.id <= 60" @click="clickPianoKey($event, note.keyCode)">
            <div class="keytip">
              <div class="keyname" v-html="note.key" v-show="showKeyName"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="piano-options">
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
    <div class="audios-wrap" id="audios-wrap">
      <audio src="" id="preloadAudio" ref="preloadAudio"></audio>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Tone from 'tone'
import Observe from 'observe'

import { Lyrics, Notes, OBEvent } from 'config/'
import SmapleLibrary from '@/lib/Tonejs-Instruments.js'

import pianoAutoPlayMixin from '@/mixins/pianoAutoPlayMixin.js'

export default {
  name: 'Piano',
  mixins: [pianoAutoPlayMixin],
  data() {
    var vm = this;
    return {
      DEV: false,
      enableBlackKey: false, // 启用黑色按键
      showKeyName: true, // 显示键名
      showNoteName: false, // 显示音符名

      randomLyric: '', // 随机歌词显示
      Notes: Notes,
      synth: null
    }
  },
  mounted() {
    var vm = this
    vm.initPiano()
  },
  beforeDestroy() {
    this.lyricTimer = null
  },
  methods: {
    // 钢琴初始化
    async initPiano() {
      setTimeout(() => {
        this.computeEleSize()
      }, 300)
      this.bindKeyBoradEvent()
      this.setRandomLyric()

      this.synth = SmapleLibrary.load({
        instruments: "piano"
      }).toMaster()

      // this.synth = new Tone.PolySynth( 10 ).toMaster()

      window.onresize = this.computeEleSize
      window.onorientationchange = this.computeEleSize

      // 监听乐谱自动播放
      Observe.$on(OBEvent.AUTO_PLAY_SCORE, (scorename) => {
        this.playScoreByName(scorename)
      })
    },
    setRandomLyric() {
      let set = () => {
        $('#randomLyric').hide()
        let lyricIndex = Math.floor(Math.random() * Lyrics.length);
        this.randomLyric = '"' + Lyrics[lyricIndex] + '"';
        $('#randomLyric').fadeIn(1000)
      }
      set()
      this.lyricTimer = setInterval(() => {
        set()
      }, 7e3)
    },
    computeEleSize() {
      var wkey_width = $('.piano-key-wrap').width() / 36;
      var wkey_height = wkey_width * 7;
      var bkey_height = wkey_height * 0.7;
      $('.piano-key-wrap').height(wkey_height);
      $('.bkey').height(bkey_height);
    },
    getNoteByKeyCode(keyCode) {
      let filternotes = this.Notes.filter((note) => {
        return note.keyCode == keyCode
      })
      if (filternotes.length > 0) {
        return filternotes[0]
      } else {
        return undefined
      }
    },
    getNoteByName(name = 'C4') {
      let filternotes = this.Notes.filter((note) => {
        return note.name == name
      })
      if (filternotes.length > 0) {
        return filternotes[0]
      } else {
        return undefined
      }
    },
    bindKeyBoradEvent() {
      var vm = this
      document.addEventListener('keydown', (e) => {
        var keyCode = e.keyCode;
        if (vm.DEV) console.log('keydown-keycode', keyCode);
        // 按住空格键，则启用黑色按键
        if (keyCode == 32) {
          vm.enableBlackKey = true
        }
        if (vm.enableBlackKey) {
          keyCode = 'b' + keyCode
        }
          let pressedNote = this.getNoteByKeyCode(keyCode)
          if (pressedNote) {
            vm.DEV && console.log('keydown-notename', pressedNote.name);
            let keyType = pressedNote.type;
            if (keyType == 'white') {
              $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('wkey-active');
            } else if (keyType == 'black') {
              $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('bkey-active');
            }
            vm.playNote(pressedNote.name)
          }
      }, false)
      document.addEventListener('keyup', (e) => {
        var keyCode = e.keyCode;
        // 松开空格键，则禁用黑色按键
        if (keyCode == 32) {
          vm.enableBlackKey = false;
        }
        $(`.wkey`).removeClass('wkey-active');
        $(`.bkey`).removeClass('bkey-active');
      }, false)
    },
    // 点击按键播放
    clickPianoKey(e, keyCode) {
      var vm = this;
      vm.DEV && console.log(e.target);

      var filternotes = vm.Notes.filter((note) => {
        return note.keyCode == keyCode;
      })
      if (filternotes.length > 0) {
        var pressedNote = filternotes[0];
        vm.playNote(pressedNote.name);
      }
    },
    playNote(notename = 'C4', duration = '2n') {
      if (!this.synth) return
      this.synth.triggerAttackRelease(notename, duration);
    }
  }
}
</script>

<style lang="less">
@import url('../assets/style/variable.less');

.onepiano-app-wrap { width: 100%; min-height: 100%; position: relative; color: #000;
    .trade-mark { width: 350px; height: 60px; line-height: 60px; margin-left: 5%; margin-top: 10px;
      .icon-piano { display: inline-block; transform: scale(0.7); transform-origin: 50% 30%; }
      .trade-mark-txt {
        display: inline-block;
        font-size: 25px;
        font-weight: 500;
        color: #000;;
        .trade-mark-txt--en { font-style: italic; font-size: 20px; color: #777; }
      }
    }
    .random-lyric {
      width: 80%;
      padding: 5px 0;
      margin: 0 auto;
      font-size: 18px;
      font-style: italic;
      line-height: 30px;
      text-align: center;
      color: @pblue-d;
    }
    #audioEffectCanvas { display: none; }
    .piano-wrap { width: 90%; margin: 20px auto;
      .piano-band {
        width: 100%;
        height: 35px;
        background: url('../../static/imgs/band2.png') no-repeat @black;
        background-size: 130px 35px;
        background-position: center center;
      }
      .piano-key-wrap {
        width: 100%;
        background: @dark;
        varter-spacing: -10px;
        -webkit-varter-spacing: -10px;
        overflow: hidden;
        position: relative;
        .piano-key {
          &:hover {
            cursor: pointer;
          }
        }
        .auto-key-active { background: #f5deb3 !important; }
        .wkey {
          display: inline-block;
          varter-spacing: normal;
          -webkit-varter-spacing: -10px;
          width: 2.775%;
          height: 100%;
          margin: 0 auto;
          background: linear-gradient(white 10%, rgb(251, 251, 251) 92%, rgb(220, 220, 220) 93%, white 97%);
          border: solid 1px @dark;
          border-radius: 0 0 5px 5px;
          position: relative;

          &:active {
            background: linear-gradient(#eee 10%, #ddd 60%, #bbb 93%, #ccc 97%);
          }
          .keytip {
            width: 100%;
            color: @dark;
            text-align: center;
            position: absolute;
            font-size: 14px;
            bottom: 5%;
            .keyname {
              margin-bottom: 5px;
            }
            .notename {
              color: @pblue;
            }
          }
        }
        .wkey-active {
          background: linear-gradient(#eee 10%, #ddd 60%, #bbb 93%, #ccc 97%);
        }

        .bkey-wrap {
          width: 20%;
          height: 0;
          position: absolute;
          top: 0;
        }
        .bkey-wrap1 {left: 0;}
        .bkey-wrap2 {left: 19.5%;}
        .bkey-wrap3 {left: 39%;}
        .bkey-wrap4 {left: 58.3%;}
        .bkey-wrap5 {left: 77.7%;}
        .bkey {
          display: inline-block;
          width: 10%;
          height: 70%;
          background: linear-gradient(#000 10%, rgb(86, 86, 86) 85%, #000 90%);
          border-radius: 0 0 3px 3px;
          position: absolute;
          top: 0;
          overflow: hidden;
          &:active {
            background: linear-gradient(rgb(86, 86, 86) 10%, #000 90%, #222 100%);
          }
          .keytip {
            width: 100%;
            color: white;
            position: absolute;
            left: 0;
            bottom: 5%;
            font-size: 14px;
            overflow: hidden;
            .keyname {
              width: 100%;
              text-align: center;
            }
          }
        }
        .bkey-active {
          background: linear-gradient(rgb(86, 86, 86) 10%, #000 90%, #222 100%);
        }
        .bkey:nth-child(1) {left: 9%;}
        .bkey:nth-child(2) {left: 23%;}
        .bkey:nth-child(3) {left: 50%;}
        .bkey:nth-child(4) {left: 65%;}
        .bkey:nth-child(5) {left: 79%;}
      }
    }

    .piano-options {
      width: 90%;
      margin: 10px auto;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .option-item {
        height: 33px;
        line-height: 33px;
        margin: 0 10px;
        input, label {
          display: inline-block;
          vertical-align: middle;
          margin: 0 3px;
          cursor: pointer;
        }
      }
    }
}

</style>