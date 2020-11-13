var _window = $(window),
    _headTtl = $('.head_ttl'),
    _headNav = $('.head_nav'),
    headBottom;

_window.on('scroll', function() {
  headBottom = $('.head').height();
  if(_window.scrollTop() > headBottom) {
    _headTtl.addClass('transform'),
    _headNav.addClass('transform');
  } else {
    _headTtl.removeClass('transform'),
    _headNav.removeClass('transform');
  }
});

_window.trigger('scroll');