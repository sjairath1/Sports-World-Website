// --------------------------------------------------------------------
// Approach 1: use the list's built-in "forEach" function.
// The forEach function applies a function to every item of the list
//   * The first parameter of the function is the individual list item
//   * The second item of the array is the item's position:
// --------------------------------------------------------------------
tracks.forEach((track, idx) => {
    const template = `
        <div data-index="${i}" onclick="playSong(event);">
            <img src="${track.image_url}" />
            <h2>${track.name}</h2>
        </div>`;
    document.querySelector('main').innerHTML += template;
});

// --------------------------------------------------------------------
// Approach 2: Use a "for...of loop" (from class):
// If you go this route, you'll have to make a counter
// --------------------------------------------------------------------
let i = 0;
for (const track of tracks) {
    const template = `
        <div data-index="${i}" onclick="playSong(event);">
            <img src="${track.image_url}" />
            <h2>${track.name}</h2>
        </div>`;
    document.querySelector('main').innerHTML += template;
    i += 1;
}

// --------------------------------------------------------------------
// Approach 3: You could also use a traditional for loop:
// If you have experience working in other languages, this technique of
// specifying a loop is always a nice choice also!
// --------------------------------------------------------------------
for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];
    const template = `
        <div data-index="${i}" onclick="playSong(event);">
            <img src="${track.image_url}" />
            <h2>${track.name}</h2>
        </div>`;
    document.querySelector('main').innerHTML += template;
}