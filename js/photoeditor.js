;(function () {

    const IMAGE_LOADER = document.querySelectorAll('input[type=file]')[0];
    const IMAGE = document.getElementsByTagName('img')[0];
    const BLUR = document.getElementById("Blur");
    const GRAYSCALE = document.getElementById("Grayscale");
    const SEPIA = document.getElementById("Sepia");
    const BRIGHTNESS = document.getElementById("Brightness");
    const CONTRAST = document.getElementById("Contrast");
    const HUE = document.getElementById("Hue");
    const INVERT = document.getElementById("Invert");
    const SATURATION = document.getElementById("Saturate");
    IMAGE_LOADER.addEventListener("change",function (e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (e) {
            IMAGE.src = e.target.result;
        };

    });
    let FILTERS = {};
    BLUR.addEventListener("input",function(e){
        FILTERS['blur'] = "blur("+e.target.value+"px)";
        render();
    });
    GRAYSCALE.addEventListener("input",function(e){
        FILTERS['grayscale'] = "grayscale("+e.target.value+"%)";
        render();
    });
    SEPIA.addEventListener("input",function(e){
        console.log(e);
        FILTERS['sepia'] = "sepia("+e.target.value+"%)";
        render();
    });
    BRIGHTNESS.addEventListener("input",function(e){
        console.log(e);
        FILTERS['brightness'] = "brightness("+e.target.value+")";
        render();
    });
    CONTRAST.addEventListener("input",function(e){
        console.log(e);
        FILTERS['contrast'] = "contrast("+e.target.value+"%)";
        render();
    });
    HUE.addEventListener("input",function(e){
        console.log(e);
        FILTERS['hue-rotate'] = "hue-rotate("+e.target.value+"deg)";
        render();
    });
    INVERT.addEventListener("input",function(e){
        console.log(e);
        FILTERS['invert'] = "invert("+e.target.value+"%)";
        render();
    });
    SATURATION.addEventListener("input",function(e){
        console.log(e);
        FILTERS['saturate'] = "saturate("+e.target.value+"%)";
        render();
    });

    function render(){
        let val = getFilters();
        console.log(val);
        IMAGE.style.filter = val;
    }

    function getFilters(){
        let arr = [];
        Object.keys(FILTERS).sort().forEach((key,i) =>{
            arr.push(FILTERS[key]);
        });
        return arr.join(' ');
    }

}());