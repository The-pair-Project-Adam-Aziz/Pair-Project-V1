//hiding elements we will show later
$(".inscri").hide();
$(".city").hide();
$(".card1").hide();
$(".card2").hide();
$(".card3").hide();
$("#e").hide();
$("#e2").hide();
$("#subbtn").hide();
$("#subbtn2").hide();
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
$(".card1").show(1200);
$(".card2").hide();
$(".card3").hide();

})
$('#tunis').on('click', function (){
$(".card2").show(1200);
$(".card1").hide();
$(".card3").hide();
})
$('#djerba').on('click', function (){
$(".card3").show(1200);
$(".card2").hide();
$(".card1").hide();
})
$('.buy').on('click', function (){
$("#e").show(1200);
$("#subbtn").show(1200);
$("#e2").hide();
$("#subbtn2").hide();
})
$('#subbtn').on('click', function (){
	alert("we received your email and we will contact you soon!")
})
$('.cart_btn').on('click', function (){
	$("#e2").show(1200);
	$("#subbtn2").show(1200);
	$("#e").hide();
$("#subbtn").hide();
});

$('#subbtn2').on('click', function (){
	alert("we will contact your friend soon")
})
