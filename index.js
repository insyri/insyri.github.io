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