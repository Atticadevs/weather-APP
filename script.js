let weatherintervalID=null;
async function getData(name)
{ 
    try{
    const urlApi=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=0effba0acf23a347de5cff8b64169565&units=metric`;
    const response=await fetch(urlApi);
    if(!response.ok)
    {
         document.querySelector('.Error').style.display="none"; 
         weatherintervalID=setTimeout(()=>{
              document.querySelector('.Error').style.display="block"; 
        },10)
        return;
    }
    clearInterval(weatherintervalID);
    document.querySelector('.Error').style.display="none"; 
        let data=await response.json();
        updateData(data);
        updateweather(data);
}catch(error)
{
    console.log(error)
    alert("something went wrong please check your internet connection");
}

}

const cityInput=document.querySelector('.cityInput');
const searchbtn=document.querySelector('.searchbtn');
searchbtn.addEventListener('click',()=>{
    let cityName=cityInput.value;
    cityName.trim();
     getData(cityName)
})
function updateData(data)
{
    document.querySelector('.cityname').innerText=data.name;
    document.querySelector('.temp').innerText=`${Math.round(data.main.temp)}°C`;
    document.querySelector('.wind-speed').innerText=`${data.wind.speed}m/s`;
    document.querySelector('.humidity').innerText=`${data.main.humidity}%`;
}
function updateweather(data)
{
    let weatherCondition = data.weather[0].main.toLowerCase();
    document.querySelector('.weather-icon').src = `images/${weatherCondition}.png`;
}

