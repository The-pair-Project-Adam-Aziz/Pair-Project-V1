
$(".note").hide();
$("#btn1").hide();
$(".aziz").hide();
$(".adam").hide();
function check() {
	var i = 0;
	var question1= document.quiz.q1.value;
	var question2= document.quiz.q2.value;
	var question3= document.quiz.q3.value;
	var question4= document.quiz.q4.value;
	var question5= document.quiz.q5.value;
	var question6= document.quiz.q6.value;
	var question7= document.quiz.q7.value;
	var question8= document.quiz.q8.value;
	var result = document.getElementById('result');

	//question 1 if statements
	if (question1==="v1") {i+=4};
	    if (question1==="v2") {i=i+3};
	    if (question1==="v3") {i=i+2};
	if (question1==="v4") {i=i+1};
		//question 2 if statements
	if (question2==="v5") {i=i+4};
	    if (question2==="v6") {i=i+3};
	    if (question2==="v7") {i=i+2};
	if (question2==="v8") {i=i+1};
		//question 3 if statements
	if (question3==="vv1") {i=i+4};
	    if (question3==="vv2") {i=i+3};
	    if (question3==="vv3") {i=i+2};
	if (question3==="vv4") {i=i+1};
		//question 4 if statements
	if (question4==="v1v") {i=i+4};
	if (question4==="v2v") {i=i+3};
	if (question4==="v3v") {i=i+2};
	if (question4==="v4v") {i=i+1};
        //question 5 if statements
	if (question5==="vv1") {i=i+4};
	if (question5==="vv2") {i=i+3};
	if (question5==="vv3") {i=i+2};
	if (question5==="vv4") {i=i+1};
	    //question 6 if statements
	if (question6==="v5v") {i=i+4};
	if (question6==="v6v") {i=i+3};
	if (question6==="v7v") {i=i+2};
	if (question6==="v8v") {i=i+1};
	    //question 7 if statements
	if (question7==="vv1v") {i=i+4};
	if (question7==="vv2v") {i=i+3};
	if (question7==="vv3v") {i=i+2};
	if (question7==="vv4v") {i=i+1};
	    //question 6 if statements
	if (question8==="vv5v") {i=i+4};
	if (question8==="vv6v") {i=i+3};
	if (question8==="vv7v") {i=i+2};
	if (question8==="vv8v") {i=i+1};
	if (i<8) {
$("#btn1").show(1200);
result.textContent = 'your score is '+ i +' talk to a doctor ASAP'
}	if (17>i&&i>8) {
result.textContent = 'your score is '+ i +" don't be hard on yourself"
}	
    if (i>17) {
result.textContent = 'your score is '+ i +' stay the way you are :D'
}
$("#quiz").hide(600);
$(".note").show(1200);
$("#btn").hide(600);

 





}
$('#btn1').on('click', function (){
	$(".adam").show(1200);
	$(".aziz").show(1200);
	$("#btn1").hide();
	$('#input').hide();
	$('#send').hide();
	$('#input1').hide();
	$('#send1').hide();

})
$('#btnsend').on('click', function (){
$('#input').show(1200);
$('#send').show(1200);
})
$('#btnsend1').on('click', function (){
$('#input1').show(1200);
$('#send1').show(1200);
})
$('#send').on('click', function (){
	alert("your message was received we will contact you ASAP")
})
$('#send1').on('click', function (){
	alert("your message was received we will contact you ASAP")
})