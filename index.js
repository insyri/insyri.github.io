function g() {
    var Mx = 0, My = 0; //mouse pos
    var xp = 0, yp = 0; //FLWR pos
    document.onmousemove = function(p) {
        Mx = p.pageX - 7.5;
        My = p.pageY - 7.5;
        document.getElementById("MPOS").textContent = `${Mx + 7.5}, ${My + 7.5}`;
    }
    setInterval(function(){
        xp += ((Mx - xp)/6);
        yp += ((My - yp)/6);
        document.getElementById("FLWR").style.left = xp + "px";
        document.getElementById("FLWR").style.top = yp + "px";
        document.getElementById("MPOS").style.left = Mx + 7.5 + 10 + "px";
        document.getElementById("MPOS").style.top = My + 7.5 - 20 + "px";
    }, 20)
};
//update to be 60 fps
g();

/*
function favicon() {
    const f1 = document.querySelector("link#DT")
    const f2 = document.querySelector("link#LT")

    const m = window.matchMedia('(prefers-color-scheme:dark)')
    function oU() {
        if(m.matches){
            f2.remove()
            document.head.append(f1)
        } else {
            document.head.append(f2)
            f1.remove();
        }
    }
    matcher.addListener(oU); //reference error, matcher not defined
    oU();
}

favicon();
*/
//purpose: make hexagon move after 5 secs of inactivity, left to later fix
/*
//idle = no motion/ last since moved (event)
//when goes idle, start timer, if unidles, stop timer, start timer

//this is bullshit code, will fix later (why repeat window.addeventlistener)
window.addEventListener('scroll', function() {
    window.scrollTo(0, window.scrollY)
    console.log('scroll');
});
window.addEventListener('keydown', console.log('keydown'));
window.addEventListener('mousedown', console.log('mousedown'));
window.addEventListener('mousemove', console.log('mousemove'));
window.addEventListener('touchstart', console.log('touchstart'));
*/