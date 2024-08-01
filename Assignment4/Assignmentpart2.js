const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const fileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alternativeNames = {
    'pic1.jpg': 'Eye',
    'pic2.jpg': 'Mountains',
    'pic3.jpg': 'Flowers',
    'pic4.jpg': 'Egyptian',
    'pic5.jpg': 'Butterfly'
};

/* Looping through images */

for(const name of fileNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${name}`);
    newImage.setAttribute('alt', alternativeNames[name]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', event => {
        displayedImage.src = event.target.src;
    });

    newImage.addEventListener('click', event => {
        displayedImage.alt = event.target.alt;
    })


}


/* Wiring up the Darken/Lighten button */
