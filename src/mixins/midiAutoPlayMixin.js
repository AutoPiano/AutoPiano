import Observe from 'observe'
import { isNoteNameValid } from '@/utils'
import { OBEvent } from 'config'
import { Midi } from '@tonejs/midi'

export default {
  data() {
    return {
      currentMidiData: null,
      midiNotes: [],
      midiStop: false
    }
  },
  computed: {
    shouldShowNoteRain() {
      return !window.isMobile
    }
  },
  mounted() {

    Observe.$on(OBEvent.PLAY_MIDI_NOTE, note => {
      setTimeout(() => {
        if (isNoteNameValid(note.name)) {
          this.playNote(note.name, '1n', note.velocity)
          $(`[data-name="${note.name}"]`).addClass('auto-key-active')
          setTimeout(() => {
            $(`[data-name="${note.name}"]`).removeClass('auto-key-active')
          }, note.duration * 900)
        }
      }, 0)
    })

  },
  methods: {
    loadMidiAndPlay(midi) {
      Midi.fromUrl(midi).then((data) => {
        this.currentMidiData = data
        this.midiOffset = 0
        this.playMidi()
      });
    },
    playMidi() {
      if (this.currentMidiData) {
        console.info('current midi data', this.currentMidiData);
        this.midiStop = false
        this.midiNotes = []
        this.currentMidiData.tracks.forEach((track, trackIndex) => {
          console.info('current track instrument', trackIndex, track.instrument.family, track.instrument.name)
          // 需要是钢琴乐器 FIXME
          this.midiNotes = this.midiNotes.concat(track.notes)
        })
        this.startTime = +new Date()
        this.playLoop()
        console.log(this.midiNotes.length);
        Observe.$emit(OBEvent.HIDE_GLOBAL_LOADING)
      }
    },
    playLoop() {
      if (this.midiStop) return
      let unPlayedNotes = this.midiNotes.filter(n => !n.played)
      if (unPlayedNotes.length <= 0) {
        Observe.$emit(OBEvent.MUSIC_END)
        return
      }
      let now = +new Date()
      let playedTime = now - this.startTime // 单位毫秒ms
      unPlayedNotes.forEach((note) => {
        if (playedTime >= note.time * 1000 && !note.played) {
          // 播放note
          note.played = true
          Observe.$emit(OBEvent.PLAY_MIDI_NOTE, note)
        }
      })
      setTimeout(() => {
        this.playLoop()
      }, 30)
    },
    stopMidiPlay() {
      this.midiStop = true
      this.currentMidiData = null
      this.midiNotes = []
    }
  }
}
