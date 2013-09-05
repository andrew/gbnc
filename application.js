jQuery(document).ready(function ($) {
  var changeHeading = function(section){
    $('nav a').removeClass('active')
    $('nav a[href="#'+section.attr('id')+'"]').addClass('active')
  }

  $('div')
    .waypoint(function(direction) {
      if (direction === 'down') { changeHeading($(this)) }
    }, { offset: 92 })
    .waypoint(function(direction) {
      if (direction === 'up') { changeHeading($(this)) }
    }, { offset: -1 });

    $(window).scroll(function () {
      if ($(window).scrollTop() == 0) { changeHeading($('#intro')) }
    });

  $('nav a').click(function (e) {
    link = $(this)
    e.preventDefault();
    $('html,body').animate({scrollTop: $(link.attr('href')).offset().top - $('nav').height() + 10}, 400);
  });
});
