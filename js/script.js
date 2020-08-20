
// レスポンシブ　ナビ表示
$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());
$(function(){
  $('.btn-trigger').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());

// ナビゲーションレスポンシブ　ボタン変化
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

// トップページ　診療案内フェードイン
  $('.guide').waypoint(function(){
    if($('.guide').css('visibility') == 'visible') {
    }
    else {
      $('.guide').css('visibility','visible');
      $('.guide').toggleClass('animated fadeIn');
    }
  },{offset: '60%'}
  );

 // トップページ　クリニックフェードイン
    $('.clinic').waypoint(function(){
      if($('.clinic').css('visibility') == 'visible') {
      }
      else {
        $('.clinic').css('visibility','visible');
        $('.clinic').toggleClass('animated fadeIn');
      }
    },{offset: '60%'}
    );

  // トップページ　アクセスフェードイン
     $('.access').waypoint(function(){
      if($('.access').css('visibility') == 'visible') {
      }
      else {
        $('.access').css('visibility','visible');
        $('.access').toggleClass('animated fadeIn');
      }
    },{offset: '40%'}
    );

   /* TOP-Pageボタン制御 */
   $('.page-top').hide();  // TOP-Pageボタン非表示

   $(window).scroll(function () {
       if ($(this).scrollTop() > 100) {    // スクロールが100に達したらボタン表示
         $('.page-top').fadeIn();
       } else {
         $('.page-top').fadeOut();
       }
   });
 
   $('.page-top').click(function () {      // TOP-Pageボタンクリックされた時
       $('body,html').animate({scrollTop: 0}, 500);  // TOPへスクロール
       return false;
   });

 // about.html　先生フェードイン
 $('.teacher').waypoint(function(){
  if($('.teacher').css('visibility') == 'visible') {
  }
  else {
    $('.teacher').css('visibility','visible');
    $('.teacher').toggleClass('animated fadeIn');
  }
},{offset: '40%'}
);

 // about.html　 スタッフフェードイン
 $('.staff').waypoint(function(){
  if($('.staff').css('visibility') == 'visible') {
  }
  else {
    $('.staff').css('visibility','visible');
    $('.staff').toggleClass('animated fadeIn');
  }
},{offset: '40%'}
);

 // facility.html　 院内施設フェードイン
 $('.facility').waypoint(function(){
  if($('.facility').css('visibility') == 'visible') {
  }
  else {
    $('.facility').css('visibility','visible');
    $('.facility').toggleClass('animated fadeIn');
  }
},{offset: '40%'}
);

// news.html　 お知らせフェードイン
$('.news').waypoint(function(){
  if($('.news').css('visibility') == 'visible') {
  }
  else {
    $('.news').css('visibility','visible');
    $('.news').toggleClass('animated fadeIn');
  }
},{offset: '40%'}
);

// hotel.html　 ホテルフェードイン
$('.hotel').waypoint(function(){
  if($('.hotel').css('visibility') == 'visible') {
  }
  else {
    $('.hotel').css('visibility','visible');
    $('.hotel').toggleClass('animated fadeIn');
  }
},{offset: '40%'}
);
