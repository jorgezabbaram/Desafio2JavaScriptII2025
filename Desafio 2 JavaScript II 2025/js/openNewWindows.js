function openNewWindow(event){
    window.open("./login.html", "", `width=${screen.width/2}, height=${screen.availHeight/2}`);
    event.stopPropagation();
}