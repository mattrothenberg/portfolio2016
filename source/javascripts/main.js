//= require barba
//= require popmotion
//= require photoswipe.min
//= require photoswipe-ui-default.min
var { styler, tween, easing } = window.popmotion;
var globalPswpOptions = {
  history: false,
  closeOnScroll: false,
  focus: true,
  showAnimationDuration: 0,
  hideAnimationDuration: 0
};
var headerLinks = document.querySelectorAll('header nav a');

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
  animation: [
    { src: '../images/animation/pin.gif', w: 0, h: 0, title: '<a href="http://codepen.io/mattrothenberg/pen/xqdyWG" target="_blank">http://codepen.io/mattrothenberg/pen/xqdyWG</a>'},
    { src: '../images/animation/eclipse.gif', w: 0, h: 0, title: '<a href="http://codepen.io/mattrothenberg/pen/ZeKgqx" target="_blank">http://codepen.io/mattrothenberg/pen/ZeKgqx</a>'},
    { src: '../images/animation/gold.gif', w: 0, h: 0, title: '<a href="http://codepen.io/mattrothenberg/pen/MpwwpL" target="_blank">http://codepen.io/mattrothenberg/pen/MpwwpL</a>'},
    { src: '../images/animation/heart.gif', w: 0, h: 0, title: '<a href="http://codepen.io/mattrothenberg/pen/RpVjye" target="_blank">http://codepen.io/mattrothenberg/pen/RpVjye</a>'}
  ]
};

Barba.Pjax.Dom.wrapperId = "pjax-wrap"
Barba.Pjax.Dom.containerClass = "pjax-inner"
Barba.Pjax.start()

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    const opacityStyler = styler(this.oldContainer);
    tween({
      from: { opacity: 1 },
      to: { opacity: 0 },
      ease: easing.easeInOut,
      duration: 450
    }).start(opacityStyler.set);
  },

  fadeIn: function() {
    const opacityStyler = styler(this.newContainer);
    tween({
      from: { opacity: 0 },
      to: { opacity: 1 },
      ease: easing.easeInOut,
      duration: 450
    }).start(opacityStyler.set);

    this.done();
  }
});


Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Dispatcher.on('linkClicked', function(el) {
  for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].classList.remove('active');
  }
  el.classList.add('active');
})

Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
  var galleryLinks = document.querySelectorAll('.gallery-link');
  if (!galleryLinks) return
  for(var i = 0; i < galleryLinks.length; i++) {
    galleryLinks[i].addEventListener('click', handleGallery);
  }
});