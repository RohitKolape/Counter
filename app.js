// const display = () =>{
//    const dt =  document.querySelector('#dat');
//     const value = dt.value.split('-');
//     console.log( value[2]);
    
// }

// const dt =  document.querySelector('#dat');
// const value1 = dt.value.split('-');

const countdown = () => {

    const dt =  document.querySelector('#dat');
    const tim =  document.querySelector('#tim');
    const value1 = dt.value.split('-');
    const tim1 = tim.value.split(':');
    // console.log(tim1[1]);
    // console.log(value1);
    // getTime give you time in miliseconds 

    
    const countdate = new Date();
    // const time = countdate.value.split(' ');
    // console.log(countdate);
    countdate.setFullYear(value1[0]);
    countdate.setMonth(value1[1]-1);
    countdate.setDate(value1[2]);
    countdate.setHours(tim1[0]);
    countdate.setMinutes(tim1[1]);
    countdate.setSeconds(00);
    const given = countdate.getTime();

    const now = new Date().getTime();
    const gap = given - now
    
    console.log(gap);



    const second = 1000; //miliseconds
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const tday = Math.floor(gap / day);
    const thour = Math.floor((gap % day) / hour);
    const tminute = Math.floor((gap % hour) / minute);
    const tsecond = Math.floor((gap % minute) / second);
    const d = document.querySelector('.container-day');
    const p = document.querySelector('.page');
    const tnk = document.querySelector('.thankyou');
    const happy = document.querySelector('.happy');

    if (tday == 0) {
       
        d.classList.add("hidden");
    }
    else{
        d.classList.remove("hidden");
    }

    if(tday == NaN){
        document.querySelector('.day').innerHTML = "-";
    }

    if(tday == 0 && thour == 0 && tminute == 0 && tsecond == 0){
        p.classList.add("hidden");
        tnk.classList.remove("hidden");
        happy.classList.remove("hidden");
    }

    document.querySelector('.second').innerHTML = tsecond;
    document.querySelector('.minute').innerHTML = tminute;
    document.querySelector('.hour').innerHTML = thour;
    document.querySelector('.day').innerHTML = tday;


//     console.log(gap);



    
}

countdown();


setInterval(countdown, 1000);