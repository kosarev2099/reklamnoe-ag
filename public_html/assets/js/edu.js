$(document).ready(function(){


	$('input[name="phone"]').mask('+7-999-999-99-99');

	$('.edu-submit').on('click', function(e){
    	e.preventDefault();
    	var $t = $(this);
    	var $f = $t.closest('form');
    	if($f.hasClass('submiting')) return;

  		var error = 0;
  		var $phone = $f.find('input[name="phone"]');
  		$phone.removeClass('error');

    	if($phone.val().length != 16) {
    	   error = 1;
    	   $phone.addClass('error');
    	}

    	if(error) return;

    	 data = $f.serialize();

    	$.ajax({
    	    url: $f.attr('action'),
    	    cache: false,
    	    type: "POST",
    	    dataType: "text",
    	    data: data, 
    	    beforeSend: function(){
    	      $f.addClass('submiting');
    	    },
    	    success: function(t){
    	    	console.log(t);
    	      $f.removeClass('submiting');
    	      $t.parent().append('<div class="edu-form-submitted">Ваше заявка отправленна.</div>');
    	      console.log('submitted');
    	    },
    	    fail: function(){
    	      console.log('error');
    	    }
    	});  

   });

});