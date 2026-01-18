export async function putData(event) {

    event.preventDefault();

    //let thebreed = breedSelect.value;  
    const URL = `https://api.thedogapi.com/v1/images/upload`; // images,  &breed_id
   // console.log('url: ' + URL);
    // const URL = 'https://api.thedogapi.com/v1/breeds/search?limit=100'; // // breeds
    const API_KEY = "live_wTOy3uULk02VbHBNCc9woslHPDaPeFot92A8gm98zQcztpWbWM7Bwd1Ba9HotVVc";

    const fileInput = document.getElementById("userInput");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    if (!file) {
        alert("Please select a file before uploading");
        return;
    }

   // console.log(file);

    try {
        // POST the photo to URL 
        let response = await fetch(URL, {
            method: "POST",
            headers: {
                "x-api-key": API_KEY
            },
            body: formData
        }

        );

        if (response.status == 200) {
            alert("You file was uploaded");
        }
        else if (response.status == 400) {
            alert("Monthly upload quota to the dogapi was reached")
        }


        // parse the incoming data into JSON so we can use it
        response = await response.json();

       // console.log(response);

    } catch (err) {
        console.error(err);
    }
}