jQuery(function($){

  $(function(){
    $('.menu-button').click(function () {
      $(this).toggleClass('add-active');
      $('.right').toggleClass('add-active');
    });


  });


    $( function() {
      // スムーススクロール(絶対パス対応)
      $(function () {
        $(function(){
        $('a[href*="#"]').click(function () {

          var buffer = 100; //ヘッダーの高さ等
          if (window.matchMedia('(max-width: 1024px)').matches) {
            var buffer = 60;
          } ;
          var speed = 400;
          var href= $(this).attr("href");
          var target = $(this.hash === '#' || '' ? 'html' : this.hash);
          var position = target.offset().top - buffer;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });

      });

      });

    });

    $(function(){

      $('.right a').click(function () {
        $('.menu-button').removeClass('add-active');
        $('.right').removeClass('add-active');
      });
    });

    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween:40,

      // ページネーションが必要なら追加
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      // ナビボタンが必要なら追加
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        // 768px以上の場合
        768: {
          slidesPerView: 1,
        },
        // 980px以上の場合
        980: {
          slidesPerView: 2,
        },
        // 1200px以上の場合
        1100: {
          slidesPerView: 3,
        }
      }
    });
  });