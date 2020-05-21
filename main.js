var questions=[
'When is the last time you experienced nostalgia?',
"What is the scariest dream you have ever had?",
'What is the weirdest thought you have ever had?',
'What made-up word would you incorporate into the English language if you could?',
'What animal would you want to be reincarnated as?',
'If you could visit one planet, which would it be?',
'What super power do you wish you had?',
'What is your very first memory?',
'If you could change careers right this second, what would you do?',
'What makes you happiest?',
'What country do you most want to travel to?'];

var randomNum=Math.floor(Math.random()*questions.length);

$('#randomquestions').text(questions[randomNum]);

$('.time-right').each(function() {
          var dt = new Date();
          var time = dt.getHours() + ":" + ('0' + dt.getMinutes()).slice(-2)+":"+('0' + dt.getSeconds()).slice(-2);
          $( "span" ).text(time);
});

$('#c1').hide();
setTimeout(function(){
	$('#c1').show();
},1500);
$('#c2').hide();
setTimeout(function(){
	$('#c2').show();
},3000);
$('#c3').hide();
setTimeout(function(){
	$('#c3').show();
},4500);
$('#c4').hide();
setTimeout(function(){
	$('#c4').show();
},6000);

var objDiv = document.getElementById("chatbox");

$('form').on('submit', function(event) {
            // Prevent the page from reloading
        event.preventDefault();
            // Set the text-output span to the value of the first input
        var $input = $(this).find('input');
        var input = $input.val();
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes()+":"+dt.getSeconds();
        $('#chatbox').append(' <div style="color:white" class="container darker"><p>'+input+'</p><span class="time-left">'+time+'</span></div>');
        $('#usermsg').val('');
        objDiv.scrollTop = objDiv.scrollHeight;
           
});


var typingTimer; 
var ranQ;               
var doneTypingInterval = 2000;  

function keyupFunction(){
  clearTimeout(typingTimer);
  typingTimer = setTimeout(function(){
 	   if(randomNum<questions.length-1){
 		   randomNum+=1;
 	   } else{
 		   randomNum=0;
 	   }
       ranQ=questions[randomNum];
 	   var dt = new Date();
       var time = dt.getHours() + ":" + dt.getMinutes()+":"+dt.getSeconds();

 	   $('#chatbox').append('<div class="container"><p>'+ranQ+'</p><span class="time-right">'+time+'</span></div>');
 	   objDiv.scrollTop = objDiv.scrollHeight;
       }, doneTypingInterval);
};

function keydownFunction(){
 clearTimeout(typingTimer);
};




