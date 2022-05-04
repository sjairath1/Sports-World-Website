const playSong = ev => {
    // You can access anything with a "data-" prefix using the 
    // following syntax: element.dataset.thing. So for instance, 
    // if you had this tag...
    //
    //      <span data-title="news" data-day="monday"></span>
    //
    // ...you could access the values of data-title and data-day 
    // using the "dataset" property, as follows:
    //
    //      document.querySelector('span').dataset.title;
    //      document.querySelector('span').dataset.day;

    console.log(ev.currentTarget.dataset.index);
    const idx = Number(ev.currentTarget.dataset.index);
    const currentTrack = tracks[idx];
    console.log(currentTrack);

    // Now, use the currentTrack object to set the #audio-source's src attribute
    // here....
    
    // ... and then play the track:
    const audio = document.querySelector('audio');
    audio.load();
    audio.play();
};