let title = document.createElement('h4');
title.innerHTML = "YouTube Subscribe Button";
document.body.appendChild(title);
console.log(title)
let youtubeButton = document.createElement('button')
youtubeButton.innerHTML = 'Subscribe';
function subscribe() {
    if (youtubeButton.innerHTML === 'Subscribe') {
        youtubeButton.innerHTML = "Subscribed";
        youtubeButton.classList.add('active');
    } else {
        youtubeButton.innerHTML = "Subscribe";
        youtubeButton.classList.remove("active");
    }

}
youtubeButton.addEventListener('click', subscribe);
document.body.appendChild(youtubeButton);





function calculateTax() {
    let inputElement = document.querySelector(".input-box");
    let result = document.querySelector(".input-result");
    let cost = Number(inputElement.value);
        if (cost < 40) {
            cost += 10;
        } else {
            cost
        }
    result.innerHTML = `${cost}`
    document.body.appendChild(result)
    console.log(cost)
}

function calcTotal(event) {
    if (event.key === 'Enter') {
        calculateTax();
    } else {
        return null
    }
}

