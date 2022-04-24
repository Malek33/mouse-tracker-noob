var eyeBall = document.querySelector('#eyeBall');
var eyeBall2 = document.querySelector('#eyeBall2')

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    eyeBall.style.transition = "0s";
    eyeBall.style.left = x;
    eyeBall.style.top = y;
    eyeBall2.style.transition = "0s";
    eyeBall2.style.left = x;
    eyeBall2.style.top = y;
}

document.onmouseout = (event) => {
    eyeBall.style.transition = "0.7s";
    eyeBall.style.left = "50%";
    eyeBall.style.top = "50%";
    eyeBall2.style.transition = "0.7s";
    eyeBall2.style.left = "50%";
    eyeBall2.style.top = "50%";
}