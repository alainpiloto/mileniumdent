

$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 600 ){
			$('#navbar').addClass('cabeceraNavsBackground');
		} else {
			$('#navbar').removeClass('cabeceraNavsBackground');
		}
	});

});



	$(window).scroll(function(){
		if( $(this).scrollTop() > 200 ){
			$('#whatsAppFlotante').addClass('showWhatsappIcon') && $('#whatsAppFlotante').removeClass('hideWhatsappIcon');
		} else {
			$('#whatsAppFlotante').removeClass('showWhatsappIcon') && $('#whatsAppFlotante').addClass('hideWhatsappIcon');
		}
	});



