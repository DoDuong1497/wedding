lightGallery(document.getElementById('gallery-image'), {
  autoplayFirstVideo: false,
  pager: false,
  galleryId: 'nature',
  plugins: [lgZoom, lgThumbnail],
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false,
    rotate: false,
  },
});

let wedding = document.querySelector('#music-wedding');
let audio = document.querySelector('audio');

wedding.addEventListener('click', (e) => {
  let _this = e.currentTarget;
  let iconMusic = wedding.querySelector('img');

  _this.classList.toggle('active');

  if (_this.className === 'active') {
    audio.volume = 0.5;
    audio.play();
    audio.loop = true;

    iconMusic.src = './image/volume-mute.png';
    iconMusic.setAttribute('title', 'Tắt nhạc');
  } else {
    audio.pause();

    iconMusic.src = './image/music-player.png';
    iconMusic.setAttribute('title', 'Bật nhạc');
  }
});
