var globalPswpOptions = {
  history: false,
  closeOnScroll: false,
  focus: true,
  showAnimationDuration: 0,
  hideAnimationDuration: 0
};

var images = {
  autolean: [
    {src: '../images/visualdesign/autolean-1.jpg', w: 0, h: 0},
    {src: '../images/visualdesign/autolean-2.jpg', w: 0, h: 0},
    {src: '../images/visualdesign/autolean-3.jpg', w: 0, h: 0},
    {src: '../images/visualdesign/autolean-4.jpg', w: 0, h: 0}
  ],
  logos: [
    { src: '../images/visualdesign/logo-1.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-9.png', w: 0, h: 0},
    { src: '../images/visualdesign/logo-2.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-3.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-4.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-5.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-6.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-7.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/logo-8.jpg', w: 0, h: 0},
  ],
  abstract: [
    { src: '../images/visualdesign/abstract-1.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/abstract-2.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/abstract-3.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/abstract-4.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/abstract-5.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/abstract-6.jpg', w: 0, h: 0},
    { src: '../images/visualdesign/abstract-7.jpg', w: 0, h: 0}
  ],
};


var galleryLinks = document.querySelectorAll('.gallery-link');
for(var i = 0; i < galleryLinks.length; i++) {
  galleryLinks[i].addEventListener('click', handleGallery);
}

function handleGallery(e) {
  e.preventDefault();
  var galleryToOpen = e.target.getAttribute('data-gallery');

  openPhotoSwipe(galleryToOpen)
}

function openPhotoSwipe(galleryType) {
  var pswpElement = document.querySelectorAll('.pswp')[0];
  var items = images[ galleryType.toString() ];

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, globalPswpOptions);
  
  gallery.listen('gettingData', function(index, item) {
    if (item.w < 1 || item.h < 1) {
      var img = new Image(); 
      img.onload = function() {
        item.w = this.width;
        item.h = this.height;
        gallery.invalidateCurrItems();
        gallery.updateSize(true);
      }
      img.src = item.src;
    }
  });

  gallery.init();
};