(function($){
	
 
  $.fn.mcVideo = function(setting) {
  	var option = $.extend({
  		'line': '.mcVideoSliderLine',
		'slide' : '.mcVideoSlide-item',
		'nav': '#video-nav',
		'start': 1,
		'navitem': '.nav-item'
	}, setting);


	var slider = $(this), width, data = [], curent = '';
	option.start = option.start - 1;
	var methods = {
		init : function() {
			
			
			width = slider.width();

			$(window).resize(function(){
				width = slider.width();
			});

			var slide_list = slider.find(option.slide);
			
			for(i=0;i<slide_list.length;i++){
				$(slide_list[i]).css({
					'width':width,
					'height': slider.height()
				});

				data.push({
					'data_id': $(slide_list[i]).attr('data-id'),
					'slide': $(slide_list[i]),
					'data_link': $(option.nav).find(option.navitem+'[data-lk='+$(slide_list[i]).attr('data-id')+']')
				});


			}

			slider.find(option.line).css({
				'width': width * slide_list.length,
				'height': slider.height()
			});

			$(option.nav).find(option.navitem).bind('click', function(){
				if(curent != $(this).attr('data-lk')){
					methods.start($(this).attr('data-lk'))
				}
			});

			methods.start(data[option.start].data_id);


		},
		start: function(slideHash){
			curent = slideHash;
			for(i=0;i<data.length;i++){
				if(data[i].data_id == slideHash){
					methods.animate(i);
					break;
				}
			}
		},
		animate: function(index){
			left = index == 0 ? 0 : (index * width);
			left = left - (left * 2);
			$(option.line).animate({
				'left': left
			},{
				duration: 500,
				complete: function(){
					$(option.nav).find(option.navitem+'.active').removeClass('active');
					$(option.nav).find(option.navitem+'[data-lk='+curent+']').addClass('active');
				}
			})
		}
	};
	methods.init()
 
  };
 
})( jQuery );
