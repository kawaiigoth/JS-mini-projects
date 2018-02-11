;(function () {

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    let inventors_filtered = inventors.filter((inventor)=>{
        return inventor.year >= 1500 && inventor.year < 1600;
    });
    console.table(inventors_filtered);
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    let inventors_names = inventors.map((inventor)=>{
        let {first,last} = inventor;
        return {first,last};
    });
    console.log(inventors_names);
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    let inventors_bd = inventors.sort((a,b)=>{
        return a.year - b.year;
    });
    console.log(inventors_bd);
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    let inventors_age_sum = inventors.reduce((prev,cur)=>{
        return prev += (cur.passed - cur.year);
    },0);
    console.log(inventors_age_sum);
    // 5. Sort the inventors by years lived
    let inventors_age_lived = inventors.sort((a,b)=>{
        return (a.passed - a.year) - (b.passed - b.year);
    });
    console.log(inventors_age_lived);
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    /*let DE = [].filter.call(document.querySelector(".mw-category").querySelectorAll("a"),(link)=>{return link.innerHTML.includes(" de ")}).map(link => link.textContent);
*/
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    let sorted_people = people.sort((a,b)=>{
        return a.split(", ")[0] > b.split(", ")[0]? 1: -1;
    });
    console.log(sorted_people);
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    let reduced_data = data.reduce((prev,current)=>{
        if(!prev[current]){
            prev[current] = 0;
        }
        prev[current]++;
        return prev;
    },{});
    console.log(reduced_data);


    const another_people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
    ];

    const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    let isSome = another_people.some((person)=> {
        return new Date().getFullYear() - person.year >= 19;
    });
    console.log(isSome);
    // Array.prototype.every() // is everyone 19 or older?
    let isEvery = another_people.every((person)=> {
        return new Date().getFullYear() - person.year >= 19;
    });
    console.log(isSome);

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    let target = comments.find((el)=>{
        return el.id === 823423
    });
    console.log(target);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    let target_index = comments.findIndex((el)=>{
        return el.id === 823423
    });
    comments.splice(target_index, 1);
    console.log(comments);
}());