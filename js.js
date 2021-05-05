$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 600 ){
			$('nav').addClass('cabeceraNavsBackground');
		} else {
			$('nav').removeClass('cabeceraNavsBackground');
		}
	});

});

