

var menuBtn = document.getElementsByClassName('menu-btn');
var mobileMenu = document.getElementsByClassName('mobile-menu');

var clickedBtn = function() {
    mobileMenu[0].classList.toggle('active')
}

menuBtn[0].addEventListener('click', clickedBtn)
console.log(menuBtn[0]);

// Click SMOOTH SCROLL

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 800);
});


// Scroll To Top

$(document).ready(function() {
  // show hide button on scroll
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.scrollToTop').fadeIn();
      } else {
          $('.scrollToTop').fadeOut();
      }
  });

  // smooth scrolling to top
  $('.scrollToTop').click(function() {
      $('html,body').animate({
          scrollTop: 0
      })
  })
});


// Scrolling Effect
$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
});


