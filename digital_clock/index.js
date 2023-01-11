var hourE1= document.querySelector("#hour");
var minuteE1=document.getElementById("minute");
var secondE1=document.getElementById("second");
var ampmE1=document.getElementById("ampm");


let time = new Date().getHours();

    if(time>=5 && time<12)
    {
        document.body.style.backgroundImage="url('images/sunrise.jpg')";
        document.querySelector("h2").style.color="white";
        document.querySelector(".clock #ampm").style.backgroundColor = "rgba(31, 84, 111, 0.839)";
        for(var i=0;i<3;i++)
        {
            document.querySelectorAll(".clock .bg")[i].style.backgroundColor="rgb(67, 130, 148)";
            document.querySelectorAll(".clock #text")[i].style.backgroundColor="rgba(31, 84, 111, 0.839)";
            
        }
    }

    else if(time>=12 && time<18)
    {
        document.body.style.backgroundImage="url('images/afternoon.jpg')";
        document.querySelector("h2").style.color="black";
        document.querySelector(".clock #ampm").style.backgroundColor = "rgba(28, 85, 121, 0.839)";
        for(var i=0;i<3;i++)
        {
            document.querySelectorAll(".clock .bg")[i].style.backgroundColor="rgb(42, 119, 171)";
            document.querySelectorAll(".clock #text")[i].style.backgroundColor="rgba(28, 85, 121, 0.839)";
            
        }
         
        
    }

    else if(time>=18 && time<20)
    {
        document.body.style.backgroundImage="url('images/evening.jpg')";
        document.querySelector("h2").style.color="black";
        document.querySelector(".clock #ampm").style.backgroundColor = "rgba(111, 31, 46, 0.839)";
        for(var i=0;i<3;i++)
        {
            document.querySelectorAll(".clock .bg")[i].style.backgroundColor="rgb(148, 67, 76)";
            document.querySelectorAll(".clock #text")[i].style.backgroundColor="rgba(111, 31, 46, 0.839)";
            
        }
    }

    else if((time>=20 && time<24) || (time>=0 && time<5))
    {
        document.body.style.backgroundImage="url('images/night.jpg')";
        document.querySelector("h2").style.color="white";
        document.querySelector(".clock #ampm").style.backgroundColor="rgba(111, 31, 96, 0.839)";
        for(var i=0;i<3;i++)
        {
            document.querySelectorAll(".clock .bg")[i].style.backgroundColor="rgb(148, 67, 116)";
            document.querySelectorAll(".clock #text")[i].style.backgroundColor="rgba(111, 31, 96, 0.839)";
            
        }
    }



function updateClock(){
    const d = new Date();
    
    
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm="AM";
    

    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }

    if(h<10)
    {
        h= "0"+h;
    }
    if(m<10)
    {
        m= "0"+m;
    }
    if(s<10)
    {
        s= "0"+s;
    }

    hourE1.textContent=h;
    minuteE1.textContent=m;
    secondE1.textContent=s;
    ampmE1.textContent=ampm;
    setTimeout(() => {
        updateClock()
    }, 1000);
}

updateClock();

