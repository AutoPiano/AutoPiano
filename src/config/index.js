import notes from './notes'
import lyrics from './lyrics'
import wallpaper from './wallpaper'

import scoremanual from './scoremanual'
import scorenum from './scorenum'
import scorexml from './scorexml'


export const Notes = notes
export const Lyrics = lyrics
export const Wallpaper = wallpaper

export const ScoreManual = scoremanual
export const ScoreNum = scorenum
export const ScoreXml = scorexml

export const OBEvent = {
  AUTO_PLAY_NUM_SCORE: 'AUTO_PLAY_NUM_SCORE',
  PAUSE_AUTO_PLAY: 'PAUSE_AUTO_PLAY',

  AUTO_PLAY_XML_SCORE: 'AUTO_PLAY_XML_SCORE',
  PAUSE_XML_AUTO_PLAY: 'PAUSE_XML_AUTO_PLAY'
}