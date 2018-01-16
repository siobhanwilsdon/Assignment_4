console.log('connected');
$('.readmore a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideDown('slow')
  $('.readmore').hide();
  $('.readless').show();
})
$('.readless a').click(function() {
  event.preventDefault();
  $('#show-this-on-click').slideUp('slow')
  $('.readless').hide();
  $('.readmore').show()
})
$('.learnmore').click(function() {
  event.preventDefault();
  $('#learnmoretext').slideDown('slow')
  $('.learnmore').hide();
})
