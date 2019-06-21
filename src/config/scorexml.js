/**
 * 所有的XML乐谱文件列表
 */
// const base = '/static/xmlscore/'

/** 涉及自用leancloud收费服务 故隐藏 **/
const ext = '.json'

let scorexml = [
]

scorexml.forEach(score => {
  score.playing = false
})

export default scorexml
