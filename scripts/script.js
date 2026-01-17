const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', submitrequest);

getBreeds();  // load up the breeds

function submitrequest(event) {
    /**This is the event handler function for the submitbtn button.
    *  The submitbtn button is for "Submit"
    */
    event.preventDefault();

    getData();
}
async function getBreeds() {

    // The Dog API
    // const URL = 'https://api.thedogapi.com/v1/images/search?limit=10'; // images &breed_ids=121
    const URL = 'https://api.thedogapi.com/v1/breeds/search?limit=100'; // // breeds

    const API_KEY = "live_wTOy3uULk02VbHBNCc9woslHPDaPeFot92A8gm98zQcztpWbWM7Bwd1Ba9HotVVc";

    try {
        // makes request to URL for data
        let response = await fetch(URL, {
            headers: {
                "x-api-key": API_KEY,
            },
        });

        // parse the incoming data into JSON so we can use it
        response = await response.json();
        //let breeds = response;

        console.log(response);

        // load the breeds into a dropdown

        let breeds = response;

        breeds.forEach((breed) => {
            const option = document.createElement("option");
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });

    } catch (err) {
        console.error(err);
    }
}

async function getData() {

    // cat key & url 
    //const API_KEY = "live_l6K0Ng9umniilHFGbpsCigtzIp34ujnsJMKveGnWY3vHe9JRad4j4zJWJrKBmPYZ";
    // const URL = "https://api.thecatapi.com/v1/breeds/?apikey=${API_KEY}";

    // openweathermap.org
    // const API_KEY = "07314651b0da5d10af46e598b6c17473";
    // const URL = `https://api.openweathermap.org/geo/1.0/direct?q=plymouth,MI,US&limit=2&appid=${API_KEY}`

    // The Dog API
    const URL = 'https://api.thedogapi.com/v1/images/search?limit=10'; // images &breed_ids=121
    // const URL = 'https://api.thedogapi.com/v1/breeds/search?limit=100'; // // breeds

    const API_KEY = "live_wTOy3uULk02VbHBNCc9woslHPDaPeFot92A8gm98zQcztpWbWM7Bwd1Ba9HotVVc";


    try {
        // makes request to URL for data
        let response = await fetch(URL, {
            headers: {
                "x-api-key": API_KEY,
            },
        });

        //let response = await fetch(URL);

        // parse the incoming data into JSON so we can use it
        response = await response.json();
        let breeds = response;

        console.log(response);

        // breeds.forEach((breed) => {
        //   const option = document.createElement("option");
        //   option.value = breed.id;
        //   option.textContent = breed.name;
        //  // breedSelect.appendChild(option);
        // });

    } catch (err) {
        console.error(err);
    }
}