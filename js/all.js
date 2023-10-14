 $(document).ready(function() {
      $('.header').click(function(event) {
        $('body').toggleClass('open');
      });
      $('.menu1').click(function (e) { 
         e.preventDefault();
         $(this).addClass('active');
      });
      $(".btn").click(function (e) { 
         e.preventDefault();
     $(this).parent().toggleClass('active');
      });
      $('.card').click(function (e) { 
         $(this).find('h2').addClass('active')
      });

      $('.qu h2').click(function(){
         //h2點擊狀態
         $(this).toggleClass('active');
         //打開答案
         $(this).parent().find('p').slideToggle();

         //點擊其他questions收起非選擇項之外已打開答案
      $(this).parent().siblings().find('p').slideUp();
         // 移除非選擇項之外點擊問題的樣式
      $(this).parent().siblings().find('h2').removeClass('active');
      });

      $('.cart > li > a').click(function(e){
         (e).preventDefault;
         $(this).addClass('active')
         $(this).parent().find('ul').slideToggle();
         $(this).parent().siblings().find('ul').slideUp();
      });
      $('.box h1').text('yoyoyo');


      $('.remove').click(function(e){
         $(this).parent().parent().remove();
      });
   
    });

