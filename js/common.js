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

  // site Map Close
  $('.sitemapOpen').click(function(){
    $('.siteMap').fadeIn('fast');
  });

    $('.siteMap .close').click(function(){
      $('.siteMap').fadeOut('fast');
  });

  $('.siteMap .bg').click(function(){
    $('.siteMap').fadeOut('fast');
  });

  //사업안내 탭
  $('.section01 .area button').click(function(){
    $('.section01 .area button').removeClass('on');
    $('.section01 .right').css('on');
    $(this).addClass('on');

    var subid = $(this).attr('data-tab');
    $('#'+subid).addClass('on');

  });


  //next
  $('#sub01 .next').click(function(){
    $('.section01 .area button:nth-child(2)').click();
  });
  $('#sub02 .next').click(function(){
    $('.section01 .area button:nth-child(3)').click();
  });
  $('#sub03 .next').click(function(){
    $('.section01 .area button:nth-child(4)').click();
  });
  $('#sub04 .next').click(function(){
    $('.section01 .area button:nth-child(5)').click();
  });
  $('#sub05 .next').click(function(){
    $('.section01 .area button:nth-child(1)').click();
  });

  //Prev
  $('#sub01 .prev').click(function(){
    $('.section01 .area button:nth-child(5)').click();
  });
  $('#sub02 .prev').click(function(){
    $('.section01 .area button:nth-child(1)').click();
  });
  $('#sub03 .prev').click(function(){
    $('.section01 .area button:nth-child(2)').click();
  });
  $('#sub04 .prev').click(function(){
    $('.section01 .area button:nth-child(3)').click();
  });
  $('#sub05 .prev').click(function(){
    $('.section01 .area button:nth-child(4)').click();
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

      //top button
      $(window).scroll(function(){
        if($(document).scrollTop() > 0){
          $('.topBtn').fadeIn();
        }else{
          $('.topBtn').fadeOut();
        }
      });

      $('.topBtn').click(function(){
        $('html, body') .animate({
          scrollTop : 0
        },400);
        return false;
      });
});