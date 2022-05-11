//Hint 1:

// create event handler:
const showImage = (ev) => {
    const elem = ev.currentTarget;
    console.log(elem.style.backgroundImage);

    // your job: set the .featured_image's backgroundImage to the
    // element that was just clicked.
};


// attach event handler to all of the image tags 
// (after initScreen() has been invoked).

// first get all of the image elements from the DOM:
const imageElements = document.querySelectorAll('.image');

// then loop through each one and attach an event handler
// to each element's click event:
for (const elem of imageElements) {
    elem.onclick = showImage;
}