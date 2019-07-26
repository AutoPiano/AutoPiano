let wallpaper = [
  'bg_default.jpg',
  'bg_eiffel.jpg',
  'bg_girl.jpg'
]

wallpaper = wallpaper.map(item => {
  return '/static/images/' + item
})

export default wallpaper
