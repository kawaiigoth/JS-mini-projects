;(function () {

    const CANVAS = document.querySelector('#Canvas');
    const ctx = CANVAS.getContext('2d');
    ctx.lineJoin = 'square';
    ctx.lineCap = 'square';
    ctx.lineWidth = 5;
    let draw = false;
    let hue = 0;
    let posX = 0, posY = 0;
    CANVAS.addEventListener('mousemove', function (e) {
        if(draw){
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            ctx.moveTo(posX,posY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            [posX,posY] = [e.offsetX, e.offsetY];
            if(hue >= 360){
                hue = 0;
            }
            hue++;
        }
    });
    CANVAS.addEventListener('mousedown', function (e) {
        draw = true;
        [posX,posY] = [e.offsetX, e.offsetY];
    });
    CANVAS.addEventListener('mouseup', function (e) {
        draw = false;
    });
    CANVAS.addEventListener('mouseout', function (e) {
        draw = false;
    })
}());