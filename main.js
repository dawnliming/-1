window.onload = function (){
    document.body.addEventListener('touchmove',function (event){
        event.preventDefault()
    },{passive: false})
}