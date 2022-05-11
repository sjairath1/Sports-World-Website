/**
 * Your Job:
 * 1. Display all of the matching restaurants to the screen (any way you want).
 * 2. Make the search honor the location.
 * 3. Make the search honor the cuisine chosen.
 */
const showMatchingRestaurants = ev => {
    const location = document.querySelector('#location').value;
    const cuisine = document.querySelector('#cuisine').value;
    let url = `https://www.apitutor.org/yelp/simple/v3/businesses/search?location=${location}&term=${cuisine}&limit=10`;
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(restaurants => {
            // all of our code today will go in this block:
            document.querySelector('.restaurants').innerHTML = '';
            for (const rest of restaurants) {
                // 2 minutes:
                // How do you output each restaurant name here:
                // <div class="restaurants"></div>
                console.log(rest.name);
                document.querySelector('.restaurants').innerHTML += `
                    <div>
                        ${rest.name}<br>
                        <img src="${rest.image_url}" />
                    </div>`;
            }
        });
};


document.querySelector('#search').addEventListener('click', showMatchingRestaurants);