function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    let size = 30;    
    let positionY = 50;
    let gap = 5;
    let r = 255;
    let g = 79;
    let b = 120;

    for (row = 0; row < 6; row++) {        
        
        let positionX = 125;

        for (column = 0; column < 6; column++) {
            
            context.fillStyle = `rgb(${r},${g},${b})`;
            context.fillRect(positionX, positionY, size, size);
            r -= 7;
            positionX += size + gap;
        }  

        b += 15;  
        positionY += size + gap;  
    }
     
}

window.addEventListener("load", pageLoaded);