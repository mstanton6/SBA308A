import { putData as putData2 } from './putremote.js';
window.putData2 = putData2;
import {getImages as getImages2} from './images.js';

const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', submitrequest);

getBreeds();  // load up the breeds into a drop down list first thing

function submitrequest(event) {
    /**This is the event handler function for the submitbtn button.
    *  The submitbtn button is for "Submit"
    */
    event.preventDefault();

    getImages2();
}
async function getBreeds() {

    // The Dog API
    const URL = 'https://api.thedogapi.com/v1/breeds/search?limit=100'; // get the breeds, 100 was the max I was able to get from this site

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

        // console.log(response);

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