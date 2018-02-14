;(function () {

    const APP = document.querySelector(".checkbox");
    const INPUTS = document.querySelectorAll("input[type=checkbox]");
    const BODY = document.querySelector("body");
    const KEY = 16;

    let isKeyPressed = false;
    let last_index = 0;
    let cur_index = 0;
    BODY.addEventListener("keydown", function (e) {

        if (e.keyCode !== KEY || isKeyPressed === true) return;
        isKeyPressed = true;
    });

    BODY.addEventListener("keyup", function (e) {
        if (e.keyCode !== KEY) return;
        isKeyPressed = !isKeyPressed;
    });

    APP.addEventListener('change', function (e) {
        if (e.target.checked) {
            let inputs_arr = Array.from(INPUTS);
            last_index = cur_index;
            cur_index = inputs_arr.indexOf(e.target);

            if (isKeyPressed) {
                console.log("DO THINGS", last_index, cur_index);
                if (last_index < cur_index) {
                    for (let i = last_index; i <= cur_index; i++) {
                        inputs_arr[i].checked = true;
                    }
                }
                if (last_index > cur_index) {
                    for (let i = cur_index; i <= last_index; i++) {
                        inputs_arr[i].checked = true;
                    }
                }

            }
        }

    })

}());