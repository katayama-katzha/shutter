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
            var buffer = 0;
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

    const swiper = new Swiper(".swiper", {
      slidesPerView: 3,
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
      }
    });
  });