lightGallery(document.getElementById('gallery-image'), {
  autoplayFirstVideo: false,
  pager: false,
  galleryId: 'nature',
  plugins: [lgZoom, lgThumbnail, lgAutoplay],
  mobileSettings: {
    controls: false,
    showCloseIcon: false,
    download: false,
    rotate: false,
  },
});
