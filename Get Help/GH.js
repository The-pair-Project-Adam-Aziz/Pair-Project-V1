$(".inscri").hide();
$(".city").hide();
$(".card1").hide();
$(".card2").hide();
$(".card3").hide();
$('#btn1').on('click', function (){
	$(".inscri").show(1200);
	   $('#introduction').hide();
    $('#btn1').hide();
})
$('#btn2').on('click', function (){
$(".city").show(1200);
$('.inscri').hide();

})
$('#btn3').on('click', function (){
$(".city").show(1200);
$('.inscri').hide();
})
$('#sousse').on('click', function (){
$(".card1").show(1200)
})
$('#tunis').on('click', function (){
$(".card2").show(1200)
})
$('#djerba').on('click', function (){
$(".card3").show(1200)
})