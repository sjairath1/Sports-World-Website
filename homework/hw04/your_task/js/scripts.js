const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

// Note: AudioPlayer is defined in audio-player.js
const audioFile = 'https://p.scdn.co/mp3-preview/bfead324ff26bdd67bb793114f7ad3a7b328a48e?cid=9697a3a271d24deea38f8b7fbfa0e13c';
const audioPlayer = AudioPlayer('.player', audioFile);

const search = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

const getTracks = (term) => {
    document.querySelector("#tracks").innerHTML = "";

    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);

        fetch(baseURL + "?type=track&limit=5&q=" + term)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks)

        if(tracks.length == 0){ 
                document.querySelector("#tracks").innerHTML = "No tracks found.";
        }
        for (const track of tracks) {
            document.querySelector("#tracks").innerHTML += `
        `;
        document.querySelector("#tracks").innerHTML += `
        <button class="track-item preview" data-preview-track="${track.preview_url}" onclick="handleTrackClick(event);">
            <img src="${track.album.image_url}" alt="track image">
            <i class="fas play-track fa-play" aria-hidden="true"></i>
            <div class="label">
                <h2>${track.name}</h2>
            <p>
                ${track.artist.name}
            </p>
        </div> 
    </button>
  `;
   
            
            //console.log()
        }
    })
};
    


        


        

const getAlbums = (term) => {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
        document.querySelector("#albums").innerHTML = "";

        fetch(baseURL + "?type=album&q=" + term)
        .then(response => response.json())
        .then(albums => {
            console.log(albums)

        if(albums.length == 0){ 
                document.querySelector("#albums").innerHTML = "No albums found.";
        }
        for (const album of albums) {
            document.querySelector("#albums").innerHTML += `
         
        `;
        document.querySelector("#albums").innerHTML += `
        <section class="album-card" id="${album.id}">
    <div>
        <img src="${album.image_url}" alt="album image">
        <h2>${album.name}</h2>
        <div class="footer">
            <a href="${album.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>
  `;
            //console.log()
        }
    })
    
};


/* line 80   /* <p>${album.name}</p> /* 
    line 37             <p>${track.name}</p>

*/

const getArtistHTML = (artist) => {
    if (!artist.image_url){
        artist.image_url = "https://wallpaperaccess.com/full/27713.png"
    }

    return `<section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
    <div>
        <img src="${artist.image_url}" alt="artist image">
        <h2>${artist.name}</h2>
        <div class="footer">
            <a href="${artist.spotify_url}" target="_blank">
                view on spotify
            </a>
        </div>
    </div>
</section>`
}

const getArtist = (term) => {
    console.log(`
        get artists from spotify based on the search term
        "${term}" and load the first artist into the #artist section 
        of the DOM...`);

        document.querySelector("#artist").innerHTML = "";
        fetch(baseURL + "?type=artist&q=" + term)
        .then(response => response.json())
        .then((data) => {
            console.log(data)
            if (data.length > 0){
                const firstArtist = data[0];
                console.log(firstArtist)
                document.querySelector("#artist").innerHTML += getArtistHTML(firstArtist);
            }
            
            else{
                document.querySelector("#artist").innerHTML = "No artists found.";
            }
        })
};


const handleTrackClick = (ev) => {
    const previewUrl = ev.currentTarget.getAttribute('data-preview-track');
    console.log(previewUrl);

    document.querySelector("#current-track").innerHTML=ev.currentTarget.innerHTML; 


    audioPlayer.setAudioFile(previewUrl);
    audioPlayer.play();
}

document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}
        
