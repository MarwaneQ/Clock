function clock() {
    let hours = document.getElementById('hours')
    let minute = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = 'AM'
    if (h > 12) {
        h = h - 12
        am = 'PM'
        
    }

    hours.innerHTML = h < 10 ? '0'+ h : h;
    minute.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
    ampm.innerHTML = am;

}
setInterval(clock,1000)

