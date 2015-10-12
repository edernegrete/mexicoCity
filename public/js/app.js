$(function(){
	$('#menu').on('click', function(){
		$('.Nav').slideToggle()
	})
	$('.Nav-item').on('click', function(){
 		$('.Nav').slideUp()
	})
})