;(function () {

    const IMAGE_LOADER = document.querySelectorAll('input[type=file]')[0];
    const IMAGE = document.getElementsByTagName('img')[0];
    const BLUR = document.getElementById("Blur");
    IMAGE_LOADER.addEventListener("change",function (e) {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function (e) {
            IMAGE.src = e.target.result;
        };

    });
    BLUR.addEventListener("input",function(e){
        console.log(e);
        IMAGE.style.filter = "blur("+e.target.value+"px)";
    });


}());