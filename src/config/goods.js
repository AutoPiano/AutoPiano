const goods = [
  {
    esite: "jd",
    name: "简谱钢琴即兴伴奏教程",
    price: "￥26.7",
    salePerMonth: 132,
    seller: "湖南文艺出版社",
    pic: "5b3b338fNad1559cd.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    valid: true
  },

  {
    esite: "jd",
    name: "钢琴即兴弹奏流行歌曲100首（简谱版）",
    price: "￥31.10",
    salePerMonth: 57,
    seller: "化学工业出版社",
    pic: "5d4808c716acb007.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    valid: true
  },

  {
    esite: "jd",
    name: "拿起就会！流行钢琴曲超精选",
    price: "￥33.8",
    salePerMonth: 147,
    seller: "湖南文艺出版社",
    pic: "bc56ea5a17a35998.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    valid: true
  },

  {
    esite: "jd",
    name: "卡西欧(CASIO)电子琴 CTK-2500",
    price: "￥699",
    salePerMonth: 684,
    seller: "卡西欧京东自营旗舰店",
    pic: "b8b5a95542c993d2.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    valid: true
  },

  {
    esite: "jd",
    name: "卡西欧(CASIO)专业级电子琴 CT-X5000",
    price: "￥3198",
    salePerMonth: 527,
    seller: "卡西欧京东自营旗舰店",
    pic: "28026c18dc573bd5.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    valid: true
  },

  {
    esite: "jd",
    name: "卡西欧(CASIO)电钢琴 PX-160BK",
    price: "￥3268",
    salePerMonth: 535,
    seller: "卡西欧京东自营旗舰店",
    pic: "2817ecd689819de3.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    coupon:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRtcFwYUBVQcWBEyEgBSHVIUBSJDCkMFSjJLQhBaGR4cDFwNRA1CVk0YDk5ER1xOGQ1eD0kdS0IJRlVXWFYLVRxcEwsTAEJbV2F7emAhUltRdRNwIngSdRYRcCJyCXZiS39QeBNta2tkKR0tbFdgcxxOH2IAamQiGisQdmtSJ285dkBmfgNLL3ZhV3ExbAZAe0wBM3kzd2VlDxRjIm1rZXQiRSxsakJ%2BJQ9ZYBYQcmUcBxYCUFwTaT5PQlpjLmZSCwdxeTZdVxkyEzdVGloVBBEBVBtZJTISAGVZNcG%2Bgt7BlYyIlMeP9M%2FzjNeZmoGt7M2zudDuv4ywjSIGZRtfEgYQA1cZUhYBFQ9lHFscMlleC18ATVtCWQ5OayUyETdlK1sWMhE3F3VYRlERVFJIWRJQFwBQH1tBCkdSU0sIQAJGBwAbXhFXEjdXGloRCw%3D%3D",
    valid: true
  },

  {
    esite: "jd",
    name: "德国布鲁诺高端立式钢琴UP122",
    price: "￥12989",
    salePerMonth: 396,
    seller: "BRUNO布鲁诺京东自营旗舰店",
    pic: "3c59fe8440c05e15.jpg",
    link:
      "https://union-click.jd.com/jdc?e=&p=AyIGZRprFDJWWA1FBCVbV0IUWVALHFRBEwQAQB1AWQkrXlNJRE8UEgl1fXAPT1wcchxuBEtSHRkOIgRUGVsQBhYDVBtrFQMTB1MYXRQCEDdlG1olSXwGZRhaFwUWBFMSWxEyEgNcGVgXAxsCVRNZFjIVB1wrEExcVlwNQgtLWUc3ZStYJTIiB1UrWyVdVloIK1kUAxYO",
    valid: true
  }
];

export default goods;
