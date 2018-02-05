;(function () {
    const SEGMENT = 6;
    const SECONDS_ARROW = document.getElementById("Seconds");
    const MINUTES_ARROW = document.getElementById("Minutes");
    const HOURS_ARROW = document.getElementById("Hours");
    const BODY = document.getElementsByTagName("body")[0];

    let timer = setTimeout(function tick() {
        let now = null;
        now = new Date();
        changeTime(now);
        timer = setTimeout(tick,100);
    },100);

    function changeTime(now){
        let seconds = now.getSeconds(), minutes = now.getMinutes(), hours = now.getHours(), ms = now.getMilliseconds();

        let ms_segments = ms * SEGMENT/1000,
            s_segments = (SEGMENT*seconds + ms_segments)-90,
            m_segments = (SEGMENT*minutes + SEGMENT*seconds/60)-90,
            h_segments = (hours*SEGMENT*5 + 5*SEGMENT*minutes/60) - 90;

        if(ms >= 0  && ms <= 200 ){
            SECONDS_ARROW.style.transition = 'none';
            MINUTES_ARROW.style.transition = 'none';
            HOURS_ARROW.style.transition = 'none';
        } else {
            SECONDS_ARROW.style.transition = '';
            MINUTES_ARROW.style.transition = '';
            HOURS_ARROW.style.transition = '';
        }
        SECONDS_ARROW.style.transform = "rotate("+s_segments+"deg)";
        MINUTES_ARROW.style.transform = "rotate("+m_segments+"deg)";
        HOURS_ARROW.style.transform = "rotate("+h_segments+"deg)";
    }


    BODY.addEventListener("mousemove", function (e) {
        console.log(e);
        let posX = e.clientX, posY = e.clientY;

    });
    function clockShadow(){}
}());