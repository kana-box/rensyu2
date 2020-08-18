
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

  
