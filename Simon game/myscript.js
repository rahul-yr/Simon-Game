const RED    = "RED";
const YELLOW = "YELLOW";
const GREEN  = "GREEN";
const BLUE   = "BLUE";
var red      = new Audio();
var yellow   = new Audio();
var green    = new Audio();
var blue     = new Audio();
red.src      = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
green.src    = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
blue.src     = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
yellow.src   = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
var strict   = false;
function playSound ( color ) {
    color.play();
}

function doSetTimeout(i){
         (function(ind) {
             setTimeout(function() {
               if(simon.sequence[i] == "RED") {
                      playSound(red);
                 $("#red").css("background-color","red");
                 setTimeout(function(){$("#red").css("background-color","darkred");},500)
                 
                  }
                  else if(simon.sequence[i] == "YELLOW") {
                    $("#yellow").css("background-color","yellow");
                 setTimeout(function(){$("#yellow").css("background-color","goldenrod");},500)
                    playSound(yellow);             
                  } 
                  else if(simon.sequence[i] == "BLUE") { 
                    $("#blue").css("background-color","lightblue");
                 setTimeout(function(){$("#blue").css("background-color","darkblue");},500)
                    playSound(blue);              
                  }
                  else if(simon.sequence[i] == "GREEN") { 
                    $("#green").css("background-color","lightgreen");
                 setTimeout(function(){$("#green").css("background-color","darkgreen");},500)
                    playSound(green);             
                  }
             }, 1000 + (1000 * ind));
        })(i);
          
      }


var simon = {
  sendColor: function(color) {
    if(!simon.sequence.length) {
      
    } else {
      if (color === simon.sequence[simon.step]) {
        if(simon.step === simon.sequence.length - 1) {
          if (simon.sequence.length == 20){
            alert("you Win,New game");
            simon.step = 0;
            $("#HS").html("20");
            simon.sequence = [];
            simon.nextSequence();
          } else if (simon.sequence.length < 20) {
            
          simon.step = 0;
          simon.nextSequence();
          }
          
          
        } else {
          simon.step++;          
        }
      } else {
          if (strict==false) {
            alert("Wrong!! Continue");
        for(var i = 0 ;i<simon.sequence.length ;i++) {
           doSetTimeout(i);
           $("#count").text(simon.sequence.length);
        }
        simon.step = 0;
          } else {
            var newhs=parseInt($("#count").text().trim())-1;
            var curhs=parseInt($("#HS").text().trim());
            if(newhs>curhs){
              $("#HS").text(newhs);
            }
            else{
                $("#HS").text(curhs);
            }
            alert("Wrong!! NewGame");
            simon.sequence = [];
            simon.step = 0;
            simon.nextSequence();
          }
      }
    }
    
  },
  sequence: [],
  colors: [RED, BLUE, YELLOW, GREEN],
  step: 0,
  nextSequence: function(){
    var nextColor = simon.colors[Math.floor(Math.random() *4)];
   //       console.log("Seq length");
    var ll=simon.sequence.length;
  //  console.log(ll);
  //  console.log(simon.sequence);
    if(ll>0){
   simon.sequence = [];
    for(var j=0;j<ll;j++){
      nextColor1 = simon.colors[Math.floor(Math.random() *4)];
      simon.sequence.push(nextColor1);
    }
   // console.log(simon.sequence);
  }
    simon.sequence.push(nextColor);
   // console.log(simon.sequence);
  //  console.log(simon.sequence.length);
    for(var i = 0 ;i<simon.sequence.length ;i++) {
       doSetTimeout(i);
      $("#count").text(simon.sequence.length);
    }
    
  },
}

$(document).ready(function(){
  $("#HS").text("00");
  $("#red").click(function() {
    $("#red").css("background-color","red");
    setTimeout(function(){$("#red").css("background-color","darkred");},500);
    setTimeout(function(){simon.sendColor(RED);},500);
    playSound(red);
  });
  $("#blue").click(function() {
    $("#blue").css("background-color","lightblue");
    setTimeout(function(){$("#blue").css("background-color","darkblue");},500);
    setTimeout(function(){simon.sendColor(BLUE);},500);
    playSound(blue);
  });
  $("#green").click(function() {
    $("#green").css("background-color","lightgreen");
    setTimeout(function(){$("#green").css("background-color","darkgreen");},500);
    setTimeout(function(){simon.sendColor(GREEN);},500);  
    playSound(green);
  });
  $("#yellow").click(function() {
    $("#yellow").css("background-color","yellow");
    setTimeout(function(){$("#yellow").css("background-color","goldenrod");},500);
    setTimeout(function(){simon.sendColor(YELLOW);},500);
    playSound(yellow);
  });
  
  $("#start").click(function(){
    simon.sequence = [];
    simon.nextSequence();
    
  })
  
  $("input:checkbox").click(function(){
    var ischecked= $(this).is(':checked');
                    if(ischecked) {strict = true;}else strict = false;
                    
  });
  
});//document
