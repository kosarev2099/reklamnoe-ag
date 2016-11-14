var $carusel_clients;
var timer_resize;

$(document).ready(function(){

  $carusel_clients = $('#seo-clients-carusel');

  $carusel_otz = $('#seo-otz-carusel');

  // $('input[name="phone"]').mask('+7-999-999-99-99');

  var indicators_html = '';
  $carusel_otz.find('.carousel-inner > .item').each(function(i,e){
    var active = ''
    if(i == 0) active = ' class="active"';
    indicators_html += '<li data-target="#seo-otz-carusel" data-slide-to="'+i+'"'+active+'></li>';
  });
  $carusel_otz.find('.carousel-indicators').html(indicators_html);

  $(window).on('resize', function(){

      clearTimeout(timer_resize);
      timer_resize = setTimeout(function(){
        var ww = $(window).width();

        $carusel_clients.find('.item.new').detach();

        if(ww <= 991){
          
          $carusel_clients.find('.item').each(function(i,e){
            if(ww <= 767) {
              var $last_col = $(this).find('[class^="col-"]').eq(1).clone();
              $carusel_clients.find('.carousel-inner').append('<div class="item new"></div>').find('.item:last').append($last_col);

              var $last_col = $(this).find('[class^="col-"]').eq(2).clone();
              $carusel_clients.find('.carousel-inner').append('<div class="item new"></div>').find('.item:last').append($last_col);
            }
            else{
              var $last_col = $(this).find('[class^="col-"]:last').clone();
              if(i % 2 == 0) $carusel_clients.find('.carousel-inner').append('<div class="item new"></div>').find('.item:last').append($last_col);
              else $carusel_clients.find('.item:last').append($last_col);
            }
          });

        }

      }, 300);
      
  }).trigger('resize');


  // $('.seo-form-btn').on('click', function(e){
  //   e.preventDefault();
  //   var $t = $(this);
  //   var $f = $t.closest('form');
  //   if($f.hasClass('submiting')) return;

  //   var error = 0;
  //   var $phone = $f.find('input[name="phone"]');
  //   $phone.removeClass('error');

  //   if($phone.val().length != 16) {
  //     error = 1;
  //     $phone.addClass('error');
  //   }

  //   if(error) return;

  //   var data = $f.serialize();

  //   $.ajax({
  //       url: $f.attr('action'),
  //       cache: false,
  //       type: "POST",
  //       dataType: "text",
  //       data: data, 
  //       beforeSend: function(){
  //         $f.addClass('submiting');
  //       },
  //       success: function(t){
  //         $f.removeClass('submiting');
  //         $t.parent().append('<div class="seo-form-submitted">Ваше заявка получена.</div>');
  //         console.log('submitted');
  //       },
  //       fail: function(){
  //         console.log('error');
  //       }
  //   });  

  // });
  
});