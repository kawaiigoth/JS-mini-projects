;(function () {

    const WIDTH = document.querySelector('#Width');
    const FORM = document.querySelector('#Form');
    const COLOR = document.querySelector('#Color');
    const CANVAS = document.querySelector('#Canvas');
    const ctx = CANVAS.getContext('2d');

    let width = 10;
    let color = '#000';
    let form = 'round';

    ctx.lineJoin = form;
    ctx.lineCap = form;
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    let draw = false;
    let hue = 0;
    let posX = 0, posY = 0;
    CANVAS.addEventListener('mousemove', function (e) {
        if(draw){

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
    });

    FORM.addEventListener('change', function (e) { //TODO поменять функцию для создания кистей
        ctx.lineJoin = e.target.value;
        ctx.lineCap = e.target.value;
    });
    COLOR.addEventListener('change', function (e) {
        ctx.strokeStyle = e.target.value;
    });
    WIDTH.addEventListener('change', function (e) {
        ctx.lineWidth = e.target.value;
    });
}());