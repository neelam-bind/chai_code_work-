let timeElement = document.getElementById('timings')
let dateElement = document.getElementById('date')


function current_time(){
    let now=new Date();
    let hours=now.getHours() %12 || 12 ;
    let minutes=now.getMinutes().toString().padStart(2,'0');
    let seconds=now.getSeconds().toString().padStart(2,'0');
    let ampm=now.getHours() < 12 ? 'AM' : 'PM' ;
    timeElement.textContent= `${hours}:${minutes}:${seconds} ${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      
    let today=now.toLocaleDateString(undefined,options)
    dateElement.textContent= today;
}
setInterval(current_time,1000);

