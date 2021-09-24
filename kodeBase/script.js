const fruits = ['Apple', 'Orange', 'Mango', 'Watermelon', 'Kiwi', 'Banana', 'Grapes'];

// first thing to do is add an event listener to the input element which I have set an id as "search" and set it to fire off a function when a user makes an input

document.getElementById('search').addEventListener('input', (e) => {
    //so first lets make an empty array 
    let fruitsArray = [];
    // quick console log to verify we are recieving the user input 
    //console.log(e.target.value);
    if(e.target.value) {
        fruitsArray = fruits.filter(fruit => fruit.toLocaleLowerCase().includes(e.target.value));
        fruitsArray = fruitsArray.map(fruit => `<li>${fruit}</li>`)
    }

    console.log(fruitsArray)
    showFruitsArray(fruitsArray);

});

function showFruitsArray(fruitsArray) {
    const html = !fruitsArray.length ? '' : fruitsArray.join('');
    document.querySelector('ul').innerHTML = html;
}

