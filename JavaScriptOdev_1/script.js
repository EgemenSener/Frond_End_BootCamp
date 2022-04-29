let response = prompt("Please enter your name!");
let resName = response ? response : 'Guest';
document.getElementById('myName').innerHTML = resName;

let days = ["Pazar","Pazartesi","Sali","Çarşamba","Perşembe","Cuma","Cumartesi"];

const showTime = () => {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let dayIndex = date.getDay();
    document.getElementById('myClock').innerHTML =
        `${hour < 10 ? '0' + hour : hour} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second} ${days[dayIndex]}`
}

setInterval(showTime, 1000);