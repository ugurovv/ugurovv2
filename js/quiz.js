var score = 0; //Set score to 0
var total = 10; //Total number of questions
var point = 1; //Points per correct answer
var highest = total * point;

//Initializer
function init(){
	//set correct answers
	sessionStorage.setItem('a1','c');
	sessionStorage.setItem('a2','a');
	sessionStorage.setItem('a3','b');
	sessionStorage.setItem('a4','e');
	sessionStorage.setItem('a5','a');
	sessionStorage.setItem('a6','e');
	sessionStorage.setItem('a7','b');
	sessionStorage.setItem('a8','e');
	sessionStorage.setItem('a9','c');
	sessionStorage.setItem('a10','d');
}

$(document).ready(function(){
	//Hide all questions
	$('.questionForm').hide();
	
	//Show first question
	$('#q1').show();
	
	$('.questionForm #submit').click(function(){
		//Get data attributes
		current = $(this).parents('form:first').data('question');
		next = $(this).parents('form:first').data('question')+1;
		//Hide all questions
		$('.questionForm').hide();
		//Show next question
		$('#q'+next+'').fadeIn(300);
		process(''+current+'');
		return false;
	});
});

//Process the answers
function process(n){
	//Get input value
	var submitted = $('input[name=q'+n+']:checked').val();
	if(submitted == sessionStorage.getItem('a'+n+'')){
			score = score + point;
	}
		
	if(n == total){	
		$('#results').html('<h3>Your final score is: '+score+' out of '+highest+'</h3><a href="index.html">Take Quiz Again</a>');
	}
	return false;
}

//Add event listener
window.addEventListener('load',init,false);