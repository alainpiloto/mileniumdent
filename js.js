


$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 100 ){
			$('#whatsAppFlotante').addClass('showWhatsappIcon') && $('#whatsAppFlotante').removeClass('hideWhatsappIcon');
		} else {
			$('#whatsAppFlotante').removeClass('showWhatsappIcon') && $('#whatsAppFlotante').addClass('hideWhatsappIcon');
		}
	});

});

$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 400 ){
			$('#navbar').addClass('cabeceraNavsBackground');
		} else {
			$('#navbar').removeClass('cabeceraNavsBackground');
		}
	});

});









