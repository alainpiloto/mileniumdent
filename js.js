$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 600 ){
			$('nav').addClass('cabeceraNavsBackground');
		} else {
			$('nav').removeClass('cabeceraNavsBackground');
		}
	});

});

document.getElementById('formulario').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    console.log(123);
}
