function clock() {
    let hours = document.getElementById('hours')
    let minute = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    if (h > 12) {
        h = h - 12
        
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    hours.innerHTML = h;
    minute.innerHTML = m;
    seconds.innerHTML = s;
}
var interval=setInterval(clock,1000)