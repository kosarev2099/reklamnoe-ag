(function($){
	
 
  $.fn.footerAccordion = function(setting) {
  	var accordion = [], el = $(this), current = false;
  	var option = $.extend({
  		'nav': false,
  		'nav_item': 'a',
  		'attr': 'data-href',
  		'box': '.footer-message',
  		'hd_duration': 300,
  		'sw_duration': 300,
  		'close_btn': '.footer-message-close'
	}, setting);



	var methods = {
		init : function() {
			
			if(option.nav){
				box = el.find(option.box)

				for(i=0;i < box.length;i++){
					accordion.push({
						'el': $(box[i]),
						'id': $(box[i]).attr('id')
					})
				};
			}


			option.nav.find(option.nav_item).bind('click', function(){

				if(current){
					methods.hide(current.attr('id'), $(this).attr(option.attr));
				}else{
					methods.show($(this).attr(option.attr))
				}
			});

			el.find(option.close_btn).bind('click', function(){
				methods.hide();
			})
		},
		show: function(id){
			for(i=0;i<accordion.length;i++){

				if(accordion[i].id == id){
					current = accordion[i].el;
					accordion[i].el.css({
						'display': 'block'
					}).animate({
						'opacity':1
					}, option.sw_duration)
				}

			}
		},
		hide: function(show, id){
			current.animate({
				'opacity':0
			}, {
				duration:option.hd_duration,
				complete: function(){
					if(show){
						methods.show(id)
					}
				}
			}).css({
				'display':'none'
			});
			if(!show){
				current = false;
			}
			
		}
	};
	methods.init()
 
  };
 
})( jQuery );
