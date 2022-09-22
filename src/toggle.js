const stylesheet = document.documentElement.style;  
const toggle = document.querySelector(".switch__input[data-theme-toggle]");  

toggle.addEventListener("click", () => {  
    // var dal css  
    const color1 = getComputedStyle(document.documentElement).getPropertyValue(  
        "--color-1"  
    );  
    const color2 = getComputedStyle(document.documentElement).getPropertyValue(  
        "--color-2"  
    );  
    // switch variabili  
    stylesheet.setProperty("--color-1", color2);  
    stylesheet.setProperty("--color-2", color1);  
});  
