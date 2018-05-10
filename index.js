$('.js-btn').eq(0).click(function () {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(0).offset().top
    }, 300);
});

$('.js-btn').eq(1).click(function () {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(0).offset().top
    }, 300);
});

$('.js-btn').eq(2).click(function () {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(1).offset().top
    }, 300);
});

$('.js-btn').eq(3).click(function () {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(2).offset().top
    }, 300);
});

$('.js-btn').eq(4).click(function () {
    $('html, body').animate({
        scrollTop: $('.js-section').eq(3).offset().top
    }, 300);
});

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(4);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
});