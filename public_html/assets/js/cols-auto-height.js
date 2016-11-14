var cols_auto_height_timer = [];
var carousel_inner_timer = [];

$(document).ready(function(){

  $(window).on('resize', function(){
      
      $('.cols-auto-height').each(function(i,e){
        clearTimeout(cols_auto_height_timer[i]);
        var $cols = $(this).children('[class^="col-"]:visible');//.css({ 'opacity': 0.2 });
        cols_auto_height_timer[i] = setTimeout(function(){ cols_auto_height($cols); }, 400);
      });

      $('.carousel-inner').each(function(i,e){
        clearTimeout(carousel_inner_timer[i]);
        var $items = $(this).children('.item');
        carousel_inner_timer[i] = setTimeout(function(){ carousel_inner_height($items); }, 400);
      });

    }).trigger('resize');

});

function cols_auto_height($cols){
    var max_h = 0;
    
    $cols.children(':first-child').css({'height' : 'auto'});

    if($(window).width() <= 767) return;

    $cols.each(function(){
      var h = $(this).children(':first-child').outerHeight();
      if(h > max_h) max_h = h;
    });
    /*$cols.css({'opacity' : 1})*/$cols.children(':first-child').css({'height' : max_h});
}

function carousel_inner_height($items){
    var max_h = 0;
    
    $items.parent().css({'height' : 'auto'});

    $items.each(function(){
      var h = $(this).outerHeight();
      if(h > max_h) max_h = h;
    });
    $items.parent().css({'height' : max_h});
}