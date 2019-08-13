import notes from './notes'
import lyrics from './lyrics'
import wallpaper from './wallpaper'
import links from './links'
import scoremanual from './scoremanual'
import scorenum from './scorenum'
import scorexml from './scorexml'
import scoremidi from './scoremidi'
import goods from './goods'
// Array
export const Notes = notes
export const Lyrics = lyrics
export const Wallpaper = wallpaper
export const Links = links
export const ScoreManual = scoremanual
export const ScoreNum = scorenum
export const ScoreXml = scorexml
export const ScoreMidi = scoremidi
export const Goods = goods
// Object
export const OBEvent = {
  SHOW_GLOBAL_LOADING: 'SHOW_GLOBAL_LOADING',
  HIDE_GLOBAL_LOADING: 'HIDE_GLOBAL_LOADING',
  CHANGE_WALLPAPER: 'CHANGE_WALLPAPER',
  INSTRUMENT_LOADED: 'INSTRUMENT_LOADED',

  AUTO_PLAY_NUM_SCORE: 'AUTO_PLAY_NUM_SCORE',
  AUTO_PLAY_XML_SCORE: 'AUTO_PLAY_XML_SCORE',
  AUTO_PLAY_MIDI: 'AUTO_PLAY_MIDI',

  START_NOTE_RAIN: 'START_NOTE_RAIN',
  PLAY_MIDI_NOTE: 'PLAY_MIDI_NOTE',

  STOP_AUTO_PLAY: 'STOP_AUTO_PLAY',
  MUSIC_END: 'MUSIC_END'
}
