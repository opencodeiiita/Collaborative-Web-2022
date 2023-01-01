let days=document.getElementById('days');
let hours=document.getElementById('hours');
let minutes=document.getElementById('minutes');
let seconds=document.getElementById('seconds');

let dd=document.getElementById('dd');
let hh=document.getElementById('hh');
let mm=document.getElementById('mm');
let ss=document.getElementById('ss');

let day_dot=document.querySelector('.day_dot');
let hr_dot=document.querySelector('.hr_dot');
let min_dot=document.querySelector('.min_dot');
let sec_dot=document.querySelector('.sec_dot');

let endDate='01/15/2023 00:00:00';
let x=setInterval(function(){
    let now= new Date(endDate).getTime();
    let countDown= new Date().getTime();
    let distance=now-countDown;

    let d=Math.floor(distance/(1000*60*60*24));
    let h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    let m=Math.floor((distance%(1000*60*60))/(1000*60));
    let s=Math.floor((distance%(1000*60))/(1000));

    days.innerHTML=d+"<br><span>DAYS</span>";
    hours.innerHTML=h+"<br><span>HOURS</span>";
    minutes.innerHTML=m+"<br><span>MINUTES</span>";
    seconds.innerHTML=s+"<br><span>SECONDS</span>";

    dd.style.strokeDashoffset=440-(440*d)/30;
    hh.style.strokeDashoffset=440-(440*h)/24;
    mm.style.strokeDashoffset=440-(440*m)/60;
    ss.style.strokeDashoffset=440-(440*s)/60;

    if(distance<0){
        clearInterval(x);
        document.getElementById("timer").style.display='none';
    }
    
})