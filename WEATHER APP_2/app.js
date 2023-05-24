
const apiKey = "a96ff0727460f8c593ba8f652bcc24a8";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const icon = document.querySelector('.weather-icon');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = "block"

    }else{
        var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "Km/h";
   


    if(data.weather[0].main == "Clouds"){
        icon.src = "/image/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "/image/clear.png"
    }

    else if(data.weather[0].main == "Rain"){
        icon.src = "/image/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "/image/drizzle.png"
    }

    else if(data.weather[0].main == "Mist"){
        icon.src = "/image/mist.png"
    }

    document.querySelector('.error').style.display = "none"

    }

}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);

})

searchBox.addEventListener('keyup', (event)=>{
    if(event.keyCode === 13){
        checkWeather(searchBox.value);
    }
})

// searchBox.addEventListener('keyup', ()=>{
//     checkWeather(searchBox.value);
   
// })

//time table for weather

function showTime(){
        
    let  d = new Date();
    let  h = d.getHours();
    let  m = d.getMinutes();
    let  s = d.getSeconds();
    let  session = "AM"
    
    if (h >12){
        h = h -12
    }

    if (h <= 12){
        session = "PM"
    }
    

    h = h < 10 ? "0"+h :h;
    m = m < 10 ? "0"+m :m;        //Ternari Operator
    s = s < 10 ? "0"+s :s;


    let time = h+ " : " + m + " : " + s + "  "+session;
    document.getElementsByTagName('span')[0].innerText = time
    setTimeout(showTime,1000)

 }

//calendar

const monthName = document.getElementById('monthName');
const weekDay = document.getElementById('weekDay');
const dt = document.getElementById('date');
const year = document.getElementById('year');


const date = new Date();
const month= date.getMonth()
monthName.innerText = date.toLocaleString("english", {
    month:"long"
})

weekDay.innerText = date.toLocaleString("english",{
    weekday: "long"
})

dt.innerText = date.getDate();

year.innerText = date.getFullYear();
 
 
