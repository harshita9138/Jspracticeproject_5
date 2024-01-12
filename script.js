const apikey="312167f13c9742e316ecf4c52e3d0296";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".btn");
const weathericon=document.querySelector(".weather-icon")

async  function weathercheck(city){
   const response= await fetch(apiurl+city+`&appid=${apikey}`);
//    response.ok is a property which check if HTTP request is successful or not
   if(!response.ok){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
   }
   else{
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
 
    if(data.weather[0].main==="Clouds"){
 weathericon.src="clouds.png";
    }
    else if(data.weather[0].main==="Clear"){
     weathericon.src="clear.png";
        }
        else if(data.weather[0].main==="Dizzle"){
         weathericon.src="dizzle.png";
            }
            else if(data.weather[0].main==="Rain"){
             weathericon.src="rainpng";
                }
                else if(data.weather[0].main==="Mist"){
                 weathericon.src="mist.png";
                    }
                    document.querySelector(".weather").style.display="block";
                    document.querySelector(".error").style.display="";
 }
 
 }
 searchbtn.addEventListener("click",function(){
    weathercheck(searchbox.value);

   });
//    weathercheck();  not calling function because we want to run function only when search button is clicked
  
