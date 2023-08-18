function toggle_animation(elementID, animationName) {
    const element = document.getElementById(elementID);
    
    if (animationName === "fadeout") {
        element.style.animationName = "fadeout";
        element.style.animationDuration = "1s";
        element.style.visibility = "hidden";
    } else if (animationName === "fadein") {
        element.style.animationName = "fadein";
        element.style.animationDuration = "1s";
        element.style.visibility = "visible";
        if (element.nodeName === "DIALOG") {
            element.setAttribute("open", "open");
        }
    }
} 