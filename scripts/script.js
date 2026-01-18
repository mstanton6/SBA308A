const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', submitrequest);

getBreeds();  // load up the breeds

function submitrequest(event) {
    /**This is the event handler function for the submitbtn button.
    *  The submitbtn button is for "Submit"
    */
    event.preventDefault();

    // console.log('breed: ' + breedSelect.value);

    getImages();
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

async function getImages() {

    // console.log('breed: ' + breedSelect.value);
    let thebreed = breedSelect.value;

    const URL = `https://api.thedogapi.com/v1/images/search?limit=10&breed_id=${thebreed}`; // images,  &breed_id
    console.log('url: ' + URL);
    // const URL = 'https://api.thedogapi.com/v1/breeds/search?limit=100'; // // breeds

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

        response.forEach((img) => {
           // let thisitem = Carousel.createCarouselItem(img.url, "Dog Anything", img.id);
            //Carousel.appendCarousel(thisitem);
            console.log(img.url);
        });

        // let allimages;
        //   allimages 
        displayImages(response);

    } catch (err) {
        console.error(err);
    }
}

async function putData() {

    //let thebreed = breedSelect.value;  
    const URL = `https://api.thedogapi.com/v1/images/upload`; // images,  &breed_id
    console.log('url: ' + URL);
    // const URL = 'https://api.thedogapi.com/v1/breeds/search?limit=100'; // // breeds

    const API_KEY = "live_wTOy3uULk02VbHBNCc9woslHPDaPeFot92A8gm98zQcztpWbWM7Bwd1Ba9HotVVc";


    try {
        // makes request to URL for data
        let response = await fetch(URL, {
            method: "POST",
            headers: {
                "x-api-key": API_KEY,
            
            },
        });
        // body: formData

        // parse the incoming data into JSON so we can use it
        response = await response.json();
        //let breeds = response;

        console.log(response);

    } catch (err) {
        console.error(err);
    }
}


function displayImages(image) {
    
    let imgcontainer = document.getElementById("imageContainer");
    imgcontainer.innerHTML = ""

    image.forEach((img ) => {
        const imgageElement = document.createElement("img");

        imgageElement.src = img.url
        imgageElement.width = 250

        imgcontainer.appendChild(imgageElement);
        });

}

