"use strict";
$(function () {
  $('.bestsellers').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev bestsellers-prev"></button>',
    nextArrow:'<button type="button" class="slick-next bestsellers-next"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$(function () {
  $('.gallery').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev gallery-prev"></button>',
    nextArrow: '<button type="button" class="slick-next gallery-next"></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$('.button').click(function () {
  $('.overlay').fadeIn();
});

$('.close-popup').click(function () {
  $('.overlay').fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $('.popup');
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $('.overlay').fadeOut();
  }
});
