const getweather = async(cityname)=>{
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityname}&appid=a72616c529dabc0fcc3990ab1005da92&units=metric`)

    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
   


document.getElementById("btn").addEventListener("click",()=>{
let cityname=document.getElementById("city").value;
getweather(cityname);


})