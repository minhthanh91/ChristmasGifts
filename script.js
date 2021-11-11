$(document).ready(function () {
  // magnific-popup
  $('.parent-container').magnificPopup({
    // the containers for all your galleries
    delegate: 'a', // the selector for gallery item
    type: 'image',
    gallery: {
      enabled: true,
    },
  });

  // back-to-top icon
  $(document).scroll(function () {
    let pos = $(this).scrollTop();
    if (pos > 717) {
      $('#back-to-top').addClass('scrollTop');
    } else {
      $('#back-to-top').removeClass('scrollTop');
    }
  });
});
