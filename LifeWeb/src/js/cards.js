const developmentButton = document.getElementById('developmentButton');
const marketingButton = document.getElementById('marketingButton');
const designButton = document.getElementById('designButton');

const developmentCards = document.getElementById('developmentCards');
const marketingCards = document.getElementById('marketingCards');
const designCards = document.getElementById('designCards');

developmentButton.addEventListener('click', function() {
    developmentButton.classList.add('active');
    marketingButton.classList.remove('active');
    designButton.classList.remove('active');

    developmentCards.style.display = 'flex';
    marketingCards.style.display = 'none';
    designCards.style.display = 'none';

    localStorage.setItem('selectedCategory', 'development');
});

marketingButton.addEventListener('click', function() {
    developmentButton.classList.remove('active');
    marketingButton.classList.add('active');
    designButton.classList.remove('active');

    developmentCards.style.display = 'none';
    marketingCards.style.display = 'flex';
    designCards.style.display = 'none';

    localStorage.setItem('selectedCategory', 'marketing');
});

designButton.addEventListener('click', function() {
    developmentButton.classList.remove('active');
    marketingButton.classList.remove('active');
    designButton.classList.add('active');

    developmentCards.style.display = 'none';
    marketingCards.style.display = 'none';
    designCards.style.display = 'flex';

    localStorage.setItem('selectedCategory', 'design');
});

const selectedCategory = localStorage.getItem('selectedCategory');
if (selectedCategory === 'development') {
    developmentButton.click();
} else if (selectedCategory === 'marketing') {
    marketingButton.click();
} else if (selectedCategory === 'design') {
    designButton.click();
} else {
    developmentButton.click();
}