// sample data for images
const images = [
    { id: 1, src: 'image1.jpg', category: 'painting' },
    { id: 2, src: 'image2.jpg', category: 'photography' },
    { id: 3, src: 'image3.jpg', category: 'painting' },
    // add more images here...
];

// function to generate image grid
function generateImageGrid() {
    const imageGrid = document.querySelector('.image-grid');
    imageGrid.innerHTML = '';
    images.forEach((image) => {
        const img = document.createElement('img');
        img.src = image.src;
        img.dataset.category = image.category;
        imageGrid.appendChild(img);
    });
}

// function to handle filter button clicks
function handleFilterButtonClick(event) {
    const filterValue = event.target.dataset.filter;
    const imagesToDisplay = images.filter((image) => {
        if (filterValue === 'all') {
            return true;
        }
        return image.category === filterValue;
    });
    generateImageGrid(imagesToDisplay);
}

// function to handle image clicks
function handleImageClick(event) {
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-img');
    modalImg.src = event.target.src;
    modal.style.display = 'block';
}

// function to handle modal close button clicks
function handleModalCloseButtonClick() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

// add event listeners
document.querySelectorAll('.filter-btn').forEach((button) => {
    button.addEventListener('click', handleFilterButtonClick);
});

document.querySelector('.image-grid').addEventListener('click', handleImageClick);

document.querySelector('.modal-close').addEventListener('click', handleModalCloseButtonClick);

// generate image grid on page load
generateImageGrid();