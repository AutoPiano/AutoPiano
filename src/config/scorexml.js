/**
 * 所有的XML乐谱文件列表
 */
// const base = '/static/xmlscore/'
const ext = '.json'

let scorexml = [
  {
    name: '后来',
    url: '//lc-sas97sjr.cn-n1.lcfile.com/bf6dae5bbe2dd01bd823.json',
    degree: 3
  },
  {
    name: '告白气球',
    url: '//lc-sas97sjr.cn-n1.lcfile.com/69cf61d81d9ef8c1874e.json',
    degree: 5
  },
  {
    name: '蒲公英的约定',
    url: '//lc-SAs97Sjr.cn-n1.lcfile.com/b0ed88bc534211093308.json',
    degree: 4
  },
  {
    name: '时间煮雨',
    url: '//lc-SAs97Sjr.cn-n1.lcfile.com/66d7ce69a0d80c07e605.json',
    degree: 3
  },
  {
    name: '海角七号 1945',
    url: '//lc-SAs97Sjr.cn-n1.lcfile.com/45f7633c6415bdea92ba.json',
    degree: 4
  },
  {
    name: '牢不可破的联盟（苏联国歌）',
    url: '//lc-SAs97Sjr.cn-n1.lcfile.com/99192d6bff255aa8e7ad.json',
    degree: 3
  },
  {
    name: 'Canon in C (C 大调卡农)',
    url: '//lc-sas97sjr.cn-n1.lcfile.com/105a89a89e7c64695741.json',
    degree: 5
  },
  {
    name: 'Songs For You',
    url: '//lc-sas97sjr.cn-n1.lcfile.com/6a1545f0ba9e13547958.json',
    degree: 3
  },
  {
    name: '七里香',
    url: '//lc-SAs97Sjr.cn-n1.lcfile.com/4e2c3fafbc37be4057c6.json',
    degree: 4
  },
]

scorexml.forEach(score => {
  score.playing = false
})

export default scorexml
