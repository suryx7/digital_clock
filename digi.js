function UpdateClock(){
    const now = new Date();
    let Hour = now.getHours();
    const meridium = Hour >= 12 ? "PM" : "AM";
    Hour = Hour % 12 || 12;
    Hour = Hour.toString().padStart(2, 0);
    const Minute = now.getMinutes().toString().padStart(2, 0);
    const Second = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${Hour}:${Minute}:${Second}${meridium}`;
    document.getElementById("clock").textContent = timeString;
}

UpdateClock();
setInterval(UpdateClock, 1000);