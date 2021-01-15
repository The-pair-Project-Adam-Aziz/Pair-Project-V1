$(".donate").hide();
$(".vol").hide();
$('#btn1').on('click', function (){
	$(".donate").show(1200);
	$(".vol").hide();
});
$('#btn2').on('click', function (){
    $(".vol").show(1200);
    $(".donate").hide();
});
$('#done').on('click', function (){
	alert("thank you for time !")
});