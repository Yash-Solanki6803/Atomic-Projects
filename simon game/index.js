var buttonColours=["red","blue","green","yellow"];

var gamePattern=[];

var userClickedPattern = [];

var level = 0;

var started = false;

$(document).keypress(function(){
    if(started===false){
        $("#level-title").text("Level: "+level);
        nextSequence();
        started=true;
    }
});

$(".starter").click(function(){
    if(started===false){
        $("#level-title").text("Level: "+level);
        nextSequence();
        started=true;
    }
});



$(".btn").click(function(){
    
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length)-1);
});


function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    playPattern(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(() => {
                
                nextSequence();
            }, 1000);
        }
        
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game over Press any key to Restart");

        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

function playPattern(colour){
    main();
    // playSound(colour);
}

function flash(btn){
    return new Promise((resolve,reject)=>{
        console.log(btn);
        $("."+btn).addClass("pressed");
        playSound(btn);
        setTimeout(() => {
            $("."+btn).removeClass("pressed");
            setTimeout(() => {
                resolve(); 
            }, 250);
            
        }, 750);
    });
};

const main = async()=>{
    for(const btn of gamePattern){
        await flash(btn);
    }
};
