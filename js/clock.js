;(function () {
    const SEGMENT = 6;
    const SECONDS_ARROW = document.getElementById("Seconds");
    const MINUTES_ARROW = document.getElementById("Minutes");
    const HOURS_ARROW = document.getElementById("Hours");
    const BODY = document.getElementsByTagName("body")[0];
    const CLOCK = document.getElementById("Clock");
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
        let posX = e.clientX, posY = e.clientY;
        let wid= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            hi= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ;
        clockShadow(posX,posY,wid,hi)
    });
    function clockShadow(posX,posY,wid,hi){
        let [centerX,centerY] = [wid/2,hi/2];
        let [centerPosX, centerPosY] = [posX - centerX, posY - centerY];
        let half_width = centerX;
        let half_height = centerY;
        let max_offset = 25; //From border size;
        let offset_segment = half_width/max_offset;
        let coeficentX = max_offset/half_width;
        let coeficentY = max_offset/half_height;
        let shadowX = Math.floor(-centerPosX*coeficentX);
        let shadowY = Math.floor(-  centerPosY*coeficentY);
        console.log(shadowX, shadowY);
        CLOCK.style.filter = "drop-shadow(" +shadowX+"px "+ shadowY +"px 20px red)";

        CLOCK.style.transform = "rotateY("+  shadowX + "deg) rotateX(" + shadowY + "deg)";

    }
}());