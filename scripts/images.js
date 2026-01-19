export async function getImages() {

    // console.log('breed: ' + breedSelect.value);
    let thebreed = breedSelect.value; // this is the breed id that the user selected

    const URL = `https://api.thedogapi.com/v1/images/search?limit=10&breed_id=${thebreed}`; // set the  &breed_id
    //  console.log('url: ' + URL);
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

        // console.log(response);

        // response.forEach((img) => {
        //     console.log(img.url);
        // });

        displayImages(response);

    } catch (err) {
        console.error(err);
    }
}

function displayImages(image) {

    let imgcontainer = document.getElementById("imageContainer");
    imgcontainer.innerHTML = ""

    image.forEach((img) => {
        const imgageElement = document.createElement("img");

        imgageElement.src = img.url
        imgageElement.width = 250

        imgcontainer.appendChild(imgageElement);
    });

}