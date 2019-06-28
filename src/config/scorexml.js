/**
 * 所有的XML乐谱文件列表
 */
// const base = '/static/xmlscore/'
const ext = '.json'

let scorexml = [
  {}
]

scorexml.forEach(score => {
  score.playing = false
})

export default scorexml
