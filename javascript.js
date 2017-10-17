
var main = function() {
  // initially show only the about page
  $('.projects').hide();
  $('.contact').hide();
  
  // when any link is clicked, show that page and hide the others
  $('#projects').click(function(){
    $('.projects').show();
    $('.about').hide();
    $('.contact').hide();
  })

  $('#contact').click(function(){
    $('.contact').show();
    $('.about').hide();
    $('.projects').hide();
  })

    $('#about').click(function(){
    $('.about').show();
    $('.projects').hide();
    $('.contact').hide();
  })
};

$(document).ready(main);