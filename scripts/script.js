function menu(){
    let openButton = event.srcElement;
    let sideMenu = openButton.parentElement;
    if(!(sideMenu.classList.contains("navOpen"))){
        sideMenu.classList.add("navOpen");
        openButton.innerHTML = "◄";
        openButton.classList.add("buttonClose");
    }
    else{
        sideMenu.classList.remove("navOpen");
        openButton.innerHTML = "►";
        openButton.classList.remove("buttonClose");
    }
}