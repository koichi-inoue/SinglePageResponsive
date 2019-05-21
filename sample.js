// Smooth Scrool Sample

$(function(){

  $("#MenuButton a").click( function(){
    $("#MenuList").slideToggle();
  });

  $(window).resize(function(){

    if( $(window).width() > 640){
      $("#MenuButton").hide();
      $("#MenuList").show();
      $("#MenuList").css({'flex-direcrion':'row'});
    } else {
      $("#MenuButton").show();
      $("#MenuList").hide();
    }

  });


  $('a[href^="#"]').click(function() {

    // 初期設定：移動時間(ms)と頭出し位置
    var speed = 500;
    var offset = -160;

    // アンカーを取得
    var anchor = $(this).attr("href");

    // ターゲットの位置を取得
    var target = $(anchor == "#" || anchor == "" ? 'html' : anchor);
    var position = target.offset().top + offset;

    // スクロール（アニメーション）
    $('body,html').animate({scrollTop:position}, speed, 'swing');

    return false;

   });

});
