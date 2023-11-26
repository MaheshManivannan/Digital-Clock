function displayTime(){
    setInterval(interval,1000)
    function interval(){
    let a = new Date();
    let b = a.toLocaleTimeString();
    document.getElementById("demo").innerHTML = b;

}
}