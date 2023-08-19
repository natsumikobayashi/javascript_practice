$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

$(function() {
  $('#sp-menu').on('click', function(event) {
    $(this).fadeToggle();
    $('.menu-trigger').removeClass('active');
  });
})