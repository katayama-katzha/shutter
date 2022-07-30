jQuery(function($){

    $( function() {
      

      // スムーススクロール(絶対パス対応)
      $(function () {
        $(function(){
        $('a[href*="#"]').click(function () {

          var buffer = 178; //ヘッダーの高さ等
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
  });