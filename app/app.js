// getting references
const ul = document.querySelector('.main-cont__outer-rate');
const btn = document.querySelector('.main-cont__outer-btn');
const respond = document.querySelector('.main-cont__respond-outer');
const rateVal = document.getElementById('updateRate');

// listening to the click event on list items
ul.addEventListener('click', e => {
    if(e.target.nodeName === 'LI') {
     e.target.style.backgroundColor = "var(--Orange)";   
     e.target.style.color = "var(--White)";   
    }
    console.log(e);
    switch(e.target.value) {
        case 1:
            rateVal.textContent = e.target.value;
            break
        case 2:
            rateVal.textContent = e.target.value;
            break
        case 3:
            rateVal.textContent = e.target.value;
            break
        case 4:
            rateVal.textContent = e.target.value;
            break
        case 5:
            rateVal.textContent = e.target.value;
            break
        default:
            console.log('invalid entry');    
    }
});

// thank you dialog window trigger part
btn.addEventListener('click', () => {
        respond.style.display = "block";
});