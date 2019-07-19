// import testScore from '../../parsexml/score_output/下一个天亮.json'

import Observe from 'observe'
export default {
  data() {
    return {
      // 上一个音符
      lastNote: {
        noteName: ''
      },
      xmlstop: false,
      xmlPlayQueue: []
    }
  },
  mounted() {
    Observe.$on('xml-music-stop', () => {
      if (this.xmlPlayQueue && this.xmlPlayQueue.length > 0) {
        this.xmlPlayQueue.shift()
        if (this.xmlPlayQueue[0]) {
          this.playXMLScore(this.xmlPlayQueue[0])
        }
      }
    })

    setTimeout(() => {
      // this.addToPlayQueue(testScore)
    }, 1e3)
  },
  methods: {
    addToPlayQueue(score) {
      if (this.xmlPlayQueue.length <= 0) {
        this.playXMLScore(score)
      }
      this.xmlPlayQueue.push(score)
    },
    initXMLPlayState() {
      this.xmlstop = false
      this.measures = []
      this.measures_len = 0
      this.lastNote = {
        noteName: ''
      }
    },
    pauseXMLPlay() {
      this.xmlstop = true
      // this.measures_len = 0
      $(`.piano-key`).removeClass('auto-key-active')
    },
    async playXMLScore(musicScore) {
      this.initXMLPlayState()
      this.measures = musicScore.measures
      this.measures_len = 0 || this.measures.length

      for (let i = 0; i < this.measures_len; i++) {
        // 按小节处理，分小节播放
        let measure = this.measures[i]
        let awaitAll = []

        for (let staff_key in measure) {
          // if (staff_key != 'staff1') continue
          let staff = measure[staff_key]

          for (let voice_key in staff) {
            let notes = staff[voice_key] || []
            // console.log(voice_key, ': ', notes);
            // 每个音轨的播放序列推入数组
            awaitAll.push(this.playNotesArr(notes))
          }
        }
        let playCurrentMeasure = Promise.all(awaitAll)
        await playCurrentMeasure
        if (this.xmlstop) {
          playCurrentMeasure = null
          Observe.$emit('xml-music-stop')
          break
        }
        if (i == this.measures_len - 1) {
          Observe.$emit('xml-music-stop')
        }
      }
    },
    playNotesArr (noteArr) {
      let vm = this
      return new Promise((resolve, reject) => {
        // 初始化
        let i = 0
        let initTime = new Date()
        let playedTime = 0
        let pressedNotes = []

        function loop() {
          // 监听到停止信号时，立即resolve
          if (vm.xmlstop) {
            clearInterval(playTimer)
            playTimer = null
            resolve()
          }
          let curTime = new Date()
          let delta = curTime - initTime
          if (delta >= playedTime) {
            // 播放下一个音符

            pressedNotes.forEach(pNote => {
              if (pNote && pNote.noteName) {
                // $(`[note=${ pNote.noteName }]`).removeClass('auto-key-active')
                $(`[data-name="${pNote.noteName}"]`).removeClass('auto-key-active')
              }
            })
            pressedNotes = []
            let playNote = noteArr[i]
            if (!playNote || !playNote.duration) {
              // console.log(playNote, i);
              return
            }
            let duration = (playNote.duration) ? playNote.duration : 0
            playedTime += duration
            // let volume = 1
            // if (noteArr[i].staff > '1') {
            //   volume = 0.8
            // }
            if (playNote.rest) {
              // 休止符
            }
            else if (playNote.tie != 'start' && playNote.noteName == vm.lastNote.noteName) {
              // 连音且同上一个音符
            }
            else if (playNote && playNote.noteName) {
              // 有音符名
              for (let j = 0; j < vm.Notes.length; j++) {
                let n = vm.Notes[j]
                if (playNote.noteName == n.name) {
                  // 音符存在，是合理的
                  vm.playNote(playNote.noteName)
                  $(`[data-name="${playNote.noteName}"]`).addClass('auto-key-active')
                  // $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('auto-key-active')
                  pressedNotes.push(playNote)
                  vm.lastNote = playNote
                  break
                }
              }
              // 循环看下个音符是否为和弦，直到找到非和弦为止
              while (noteArr[i + 1] && noteArr[i + 1].chord) {
                let chordNote = noteArr[i + 1]
                vm.playNote(chordNote.noteName)
                $(`[data-name="${chordNote.noteName}"]`).addClass('auto-key-active')
                pressedNotes.push(chordNote)
                i++
              }
            }
            // vm.lastNote[voice] = noteArr[i]
            // if (!vm.lastNote[voice].noteName) vm.lastNote[voice].noteName = ''
            // 当前voice播放完毕
            i++
            if (i >= noteArr.length) {
              clearInterval(playTimer)
              playTimer = null
              // 最后一个音符播放完，才算结束，才能resolve
              let lastNoteDuration = Math.floor(noteArr[i - 1].duration || 0)
              setTimeout(() => {
                resolve()
                pressedNotes.forEach(pNote => {
                  if (pNote && pNote.noteName) {
                    $(`[data-name="${pNote.noteName}"]`).removeClass('auto-key-active')
                  }
                })
              }, lastNoteDuration)
            }
          }
        }
        let playTimer = setInterval(() => {
          loop()
        }, 17)
      })
    }
  }
}