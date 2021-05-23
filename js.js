
$(window).load(function() {
	$(".loaderContainer").delay(2000).fadeOut("slow");
  $("#overlayer").delay(2000).fadeOut("slow");
})

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
		if( $(this).scrollTop() > 150 ){
			$('#whatsAppFlotante').removeClass('hideWhatsappIcon') && $('#whatsAppFlotante').addClass('showWhatsappIcon') ;
		} else {
			 $('#whatsAppFlotante').addClass('hideWhatsappIcon') && $('#whatsAppFlotante').removeClass('showWhatsappIcon') ;
		}
	});









