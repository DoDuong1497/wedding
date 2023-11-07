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

setTimeout(() => {
  const audio = document.querySelector('audio');
  audio.volume = 0.5;
  audio.play();
}, '100');
