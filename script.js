const btn = document.getElementById('btn');
const rating = document.getElementsByClassName('circle');
const firstPage = document.getElementById('firstPage');
const secondPage = document.getElementById('secondPage');
const print = document.getElementById('print');

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', () => {
        for (let j = 0; j < rating.length; j++) {
            if (j === i) {
                rating[j].classList.add('active');
            } else {
                rating[j].classList.remove('active');
            }
        }
        selectedRating = i; // Update the selected rating index
        btn.addEventListener('click', buttonClickHandler); // Enable button click event listener
    });
}
function buttonClickHandler() {
    if (selectedRating !== -1) {
        firstPage.style.display = 'none';
        secondPage.style.display = 'flex';
        print.innerText = `You selected ${selectedRating + 1} out of 5`;
    } else {
        console.log('Please select a rating before clicking the button.');
    }
}