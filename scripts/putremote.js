export async function putData(event) {

    event.preventDefault();

    const URL = `https://api.thedogapi.com/v1/images/upload`; // images,  &breed_id

   const API_KEY = "live_EEsIc8mTmBoGlUyOjOcgeakuW3ZZTdSDc1L083sC6DfwIMbGBOM3oMkOxdxm4Pxa";  // J gmail api

    const fileInput = document.getElementById("userInput");
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append("file", file);

    if (!file) {
        alert("Please select a file before uploading");
        return;
    }

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

        console.log(response);

        if (response.status == 200 || response.status == 201 || response.status == 202) {
            alert("Your file was uploaded");
        }
        else if (response.status == 400) {
            alert("Monthly upload quota to the dogapi was reached")
        }

        // parse the incoming data into JSON so we can use it
        response = await response.json();

    } catch (err) {
        console.error(err);
    }
}