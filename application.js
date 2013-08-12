jQuery(document).ready(function ($) {
  var changeHeading = function(section){
    $('nav a').removeClass('active')
    $('nav a[href="#'+section.attr('id')+'"]').addClass('active')
  }

  $('div')
    .waypoint(function(direction) {
      if (direction === 'down') { changeHeading($(this)) }
    }, { offset: 91 })
    .waypoint(function(direction) {
      if (direction === 'up') { changeHeading($(this)) }
    }, { offset: -1 });

    $(window).scroll(function () {
      if ($(window).scrollTop() == 0) { changeHeading($('#intro')) }
    });

  $('nav a').click(function (e) {
    link = $(this)
    e.preventDefault();
    $('body').animate({scrollTop: $(link.attr('href')).offset().top}, 500);
  });
});