$(document).ready(function(){
  
  // header
  $('.header').hover(function(){
    $(this).toggleClass('on');
  });

  $(window).scroll(function(){
    if($(document).scrollTop() > 0){
      $('.header').addClass('scroll');
    }else{
      $('.header').removeClass('scroll');
    }
  });

  $('.menuArea li').hover(function(){
    //$(this).toggleClass('on')
    $(this).find('.submenuArea').slideToggle('fast');
  });

  //notice tab
  $('.section02 .tabArea button').click(function(){
    $('.section02 .tabArea button').removeClass('on');
    $('.section02 .listArea').css('display','none');
    $(this).addClass('on');

    var tabid = $(this).attr('data-tab');
    $('#'+tabid).css('display','block');

  });

  //footer swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".my-next",
          prevEl: ".my-prev",
        },
      });

      //footer family box 12
      $('.footer .family button').click(function(){
        $(this).next('.site').slideToggle('fast')
        $(this).toggleClass('on');
      });

});