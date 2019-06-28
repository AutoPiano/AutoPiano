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
        }
        let playTimer = setInterval(() => {
          loop()
        }, 17)
      })
    }
  }
}