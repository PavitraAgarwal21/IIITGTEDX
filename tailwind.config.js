module.exports = {
  content: ['public/index.html',
  'public/speaker.html',
  'public/upcoming.html',         
  'public/why.html'],
  theme: {
    extend: {
      backgroundImage: {
        'stage': "url('public/img/stage.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}
