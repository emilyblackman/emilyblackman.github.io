//window.alert("it's working!");

var main = function() {
  $('.topNav').click(function(){
    $('.test').animate({
      display:'block'
    }, 1)
  });

  
  /*if (x.className === "topnav") {
    x.className += " responsive";
  }
  else {
    x.className = "topnav";
  } */
};

$(document).ready(main);