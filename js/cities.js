;(function () {

    const SEARCH = document.querySelector('.search');
    const RESULT = document.querySelector('.result');
    const SOURCE = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    let cache = null;

    function _ajax(source) {
        return new Promise((resolve, reject) => {
            let XHR = new XMLHttpRequest();
            XHR.open('GET', source, true);
            XHR.send();
            XHR.onload = () => {
                if (XHR.status !== 200) {
                    let error = new Error(XHR.statusText);
                    error.code = XHR.status;
                    reject(error);
                } else {
                    resolve(JSON.parse(XHR.responseText));
                }
            };
        })
    }

    function getData() {
        return new Promise((resolve, reject) => {
            if (!cache) {
                _ajax(SOURCE).then(result => {
                    cache = result;
                    resolve(cache);
                }, err => {
                    reject(err);
                });
            } else {
                console.log('CACHE');
                resolve(cache);
            }

        })
    }

    SEARCH.addEventListener('input', function (e) {
        let word = e.target.value;
        while(RESULT.firstChild){
            RESULT.removeChild(RESULT.firstChild);
        }
        console.log(RESULT.children);
        getData().then(
            result => {
                let filtered = result.filter(item => {
                    if (item.city.includes(word) || item.state.includes(word)) {
                        return item;
                    }
                });
                return filtered;
            },
            err => {
                console.log(err);
            }).then(
            result => {
                result.sort().forEach(item => {
                    let elem = document.createElement('li');
                    let bg = document.createElement('div');
                    let title = document.createElement('p');
                    let popul = document.createElement('p');
                    elem.className = "result__item";
                    title.className = "result__title";
                    popul.className = "result__population";
                    bg.className = "result__bg";

                    title.innerHTML = item.city + ' ' + item.state;
                    popul.innerHTML = item.population;

                    elem.appendChild(bg);
                    elem.appendChild(title);
                    elem.appendChild(popul);
                    RESULT.appendChild(elem);
                });

            }
        );

    })


}());