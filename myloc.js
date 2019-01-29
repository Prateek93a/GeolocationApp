window.onload=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        document.getElementById("location").innerHTML="Your Location=>latitude:"+position.coords.latitude+" longitude:"+position.coords.longitude;
    })
}