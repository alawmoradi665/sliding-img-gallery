// Set all const that will be used from the html file
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// Set a variable to 0 to work with when the images slide back and forth
let activeSlide = 0;

// Set eventlistener to increment with one when clickin
// Set an if statement to go back to [0] in the array (first image), when the last image of the array is acitve - so that it starts over
rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slides.length - 1) {
        activeSlide = 0;
    }

    setBgToBody()
    setActiveSlide()
})

// Set the same eventlistener but to the left button, decrement with 1 when clicked on to go back an image in the so called array. 
// Set the if statement to activate the last image when active slide is on [0], aka the first image
leftBtn.addEventListener('click', () => {
    activeSlide--

   if(activeSlide < 0) {
        activeSlide = slides.length -1;
   }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

// Add the image of the active slide to the background 
function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

// Use a forEach loop to loop through the items to remove the active class and add the active class to the next item 
function setActiveSlide() {
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}