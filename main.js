window.onload = function (){
    document.body.addEventListener('touchmove',function (event){
        event.preventDefault()
    },{passive: false})
}


    let board = document.getElementById("clear");
    let e = document.createElement("input");
    e.type = "button";
    e.value = "清除";
    let object = board.appendChild(e);
