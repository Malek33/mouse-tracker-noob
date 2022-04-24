var ball = document.getElementById('ball')

function mousemove() {
    console.log('slm')
    var x = event.clientX * 125 / window.innerWidth + "%";
    var y = event.clientY * 105 / window.innerHeight + "%";
    ball.style.transition = "0s";
    ball.style.left = x;
    ball.style.top = y;
}