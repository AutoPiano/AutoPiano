let wallpaper = [
  'bg_default.jpg',
  'bg_eiffel.jpg',
  'bg_girl.jpg'
]

wallpaper = wallpaper.map(item => {
  return 'https://cdn.jsdelivr.net/gh/warpprism/cdn@latest/autopiano/static/images/' + item
})

export default wallpaper
