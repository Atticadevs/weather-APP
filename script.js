async function getData(name)
{ 
    
    // let name='multan'
    const urlApi=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=0effba0acf23a347de5cff8b64169565&units=metric`;
    const response=await fetch(urlApi);
    let data=await response.json();
   updateData(data);
   updateweather(data);
}

let cityInput=document.querySelector('.cityInput');
let searchbtn=document.querySelector('.searchbtn');
searchbtn.addEventListener('click',()=>{
    let cityName=cityInput.value;
     getData(cityName)
})
function updateData(data)
{
    document.querySelector('.cityname').innerText=data.name;
    document.querySelector('.temp').innerText=`${data.main.temp}°C`;
    document.querySelector('.wind-speed').innerText=`${data.wind.speed}m/s`;
    document.querySelector('.humidity').innerText=`${data.main.humidity}%`;
    saveToStorage(data);
}
function updateweather(data)
{
    let weatherCondition = data.weather[0].main.toLowerCase();
    document.querySelector('.weather-icon').src = `images/${weatherCondition}.png`;
}

