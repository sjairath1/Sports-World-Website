let results;
const serverURL = 'https://www.apitutor.org/flickr/simple/';

const getPhotos = () => {
    // this function pulls down data from a server
    // everytime it is invoked. Change the value of
    // the tag to get different data:
    fetch(serverURL + '?tags=nature')
        .then(response => {
            response.json()
        })
        .then(doSomethingWithTheData);
};

const doSomethingWithTheData = (data) => {
    // this function executes once the data has been 
    // pulled down from the server:
    results = data;
    console.log('The Flickr data is stored in a variable called "results":')
    console.log(data);
};

// invoke the function when the page initializes:
getPhotos();