;(function (){

    const PANELS = document.querySelector('#Panels');
    const PANELS_ARRAY = Array.from(PANELS.children);
    PANELS.addEventListener('click',function (e) {
       let selected = e.target;
       let others = remove(PANELS_ARRAY,selected);
       console.log(others);
       if(selected.tagName === "LI"){
           if(!selected.classList.contains('panels__panel--opened')){
               selected.classList.add('panels__panel--opened');
           } else {
               selected.classList.remove('panels__panel--opened')
           }

            others.forEach((cur,i,arr)=>{
                cur.classList.add('panels__panel--squeezed');
            })
       }
    });

    function remove(array, element) {
        return array.filter(e => e !== element);
    }
}());