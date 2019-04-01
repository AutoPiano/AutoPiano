// Mixin 说明：按照自定义简谱格式，触发piano组件的自动播放
// 简谱英文 numbered musical notation
import { NumScore } from 'config'

export default {
  data () {
    return {
      NumScore,
      playTimers: [],
      // 目前只有C调和 D调，待完善调整
      StepMap: {
        'C': {  '1>>': 'C2','2>>': 'D2','3>>': 'E2','4>>': 'F2','5>>': 'G2','6>>': 'A2','7>>': 'B2',
                '1>': 'C3','2>': 'D3','3>': 'E3','4>': 'F3','5>': 'G3','6>': 'A3','7>': 'B3',
                '1': 'C4','2': 'D4','3': 'E4','4': 'F4','5': 'G4','6': 'A4','7': 'B4',
                '1<': 'C5', '2<': 'D5', '3<': 'E5', '4<': 'F5', '5<': 'G5', '6<': 'A5', '7<': 'B5',
                '1<<': 'C6', '2<<': 'D6', '3<<': 'E56', '4<<': 'F6', '5<<': 'G6', '6<<': 'A6', '7<<': 'B6'
              },
        'D': {  '1>>':'D2','2>>':'E2','3>>':'F#2','4>>':'G2','5>>':'A2','6>>':'B2','7>>':'C#3',
                '1>':'D3','2>':'E3','3>':'F#3','4>':'G3','5>':'A3','6>':'B3','7>':'C#4',
                '1':'D4','2':'E4','3':'F#4','4':'G4','5':'A4','6':'B4','7':'C#5',
                '1<':'D5','2<':'E5','3<':'F#5','4<':'G5','5<':'A5','6<':'B5','7<':'C#6',
                '1<<':'D6','2<<':'E6','3<<':'F#6','4<<':'G6','5<<':'A6','6<<':'B6','7<<':'C#7'
              },
      },
    }
  },
  methods: {
    // 将简谱numNotation映射为notename
    mapNum2NoteName(stepname = '', numNotation = '') {
      let pitch = numNotation.match(/[#b]*[0-7][\<\>]*/g)[0]

      if (pitch && stepname && this.StepMap[stepname])  {
        let curStep = this.StepMap[stepname]
        if (curStep && curStep[pitch]) {
          let notename = curStep[pitch]
          return notename
        }
      }
      return ''
    },
    // 获取音符持续时长
    getNoteDuration(numNotation, timeUnit) {
      var factor = 1
      if ( numNotation.match(/\([0-9.]*\)/g) ) {
        factor = numNotation.match(/\([0-9.]*\)/g)[0].replace(/[\)\(]/g, '')
      }
      return timeUnit * (+factor)
    },
    // 自动播放简谱
    autoPlayNumberScore (step = 'C', musicScore, speed = 75) {
      $('.piano-key').removeClass('auto-key-active')
      let timeUnit = (60 * 1000) / speed
      let startStmp = new Date()
      let i = 0
      let playedTime = 0
      let pressedNote

      let loop = () => {
        let curStmp = new Date()
        let deltaTime = curStmp - startStmp
        if (deltaTime > playedTime) {
          // 播放下一个音符
          if (pressedNote) {
            $(`[data-keyCode=${pressedNote.keyCode}]`).removeClass('auto-key-active');
          }
          let numNotation = musicScore[i]
          let notename = this.mapNum2NoteName(step, numNotation)
          pressedNote = this.getNoteByName(notename)
          if (pressedNote) $(`[data-keyCode=${pressedNote.keyCode}]`).addClass('auto-key-active')
          this.playNote(notename)
          playedTime += this.getNoteDuration(numNotation, timeUnit)
          i++
          if (i >= musicScore.length) {
            setTimeout(() => {
              $(`.piano-key`).removeClass('auto-key-active')
            }, 1000)
            clearInterval(loopTimer)
            return
          }
        }
      }
      let loopTimer = setInterval(() => {
        loop()
      }, 20)

      this.playTimers.push(loopTimer)
    },
    // 点击简谱列表播放音乐
    playScoreByName(name = '天空之城') {
      let targetScore
      for (let k in this.NumScore) {
        let score = this.NumScore[k]
        if (score.name == name) {
          targetScore = score
          break
        }
      }
      if (targetScore) {
        this.playTimers.forEach((timer) => {
          clearInterval(timer)
          timer = null
        })
        this.playTimers.splice(0)
        let step = targetScore.step
        let speed = targetScore.speed
        if (this.StepMap[step]) {
          this.autoPlayNumberScore(step, targetScore.mainTrack, speed)
          if (targetScore.backingTrack) {
            this.autoPlayNumberScore(step, targetScore.backingTrack, speed)
          }
        }
      }
    }
  }
}
