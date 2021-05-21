



$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 100 ){
			$('#navbar').addClass('cabeceraNavsBackground');
		} else {
			$('#navbar').removeClass('cabeceraNavsBackground');
		}
	});

});




	$(window).scroll(function(){
		if( $(this).scrollTop() > 150 ){
			$('#whatsAppFlotante').removeClass('hideWhatsappIcon') && $('#whatsAppFlotante').addClass('showWhatsappIcon') ;
		} else {
			 $('#whatsAppFlotante').addClass('hideWhatsappIcon') && $('#whatsAppFlotante').removeClass('showWhatsappIcon') ;
		}
	});









