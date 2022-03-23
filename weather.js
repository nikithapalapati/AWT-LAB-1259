async function weather()
{
    let cityname =document.getElementById("test");
   let url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=841abd5ce6cde3cfb095cca470806a3d&units=metric';
   const resp = await fetch(url);
   let data = await resp.json();
   console.log(data);
   let {main: {temp,temp_min,temp_max}}=data;
   console.log("temp :"+temp);
   console.log("min_temp :"+temp_min);
   console.log("max_temp :"+temp_max);
}
