const submitbtn = document.querySelector('#submit');

submitbtn.addEventListener('click', submitrequest);

function submitrequest(event) {
    /**This is the event handler function for the submitbtn button.
    *  The submitbtn button is for "Submit"
    */
    event.preventDefault();

    getweather();
}


async function getweather() {

  const API_KEY = "live_l6K0Ng9umniilHFGbpsCigtzIp34ujnsJMKveGnWY3vHe9JRad4j4zJWJrKBmPYZ";
  const URL = "https://api.thecatapi.com/v1/breeds/?apikey=${API_KEY}";

  try {
    // makes request to URL for data
    let response = await fetch(URL);

    // parse the incoming data into JSON so we can use it
    response = await response.json();
    let breeds = response;

    console.log(response);

    breeds.forEach((breed) => {
      const option = document.createElement("option");
      option.value = breed.id;
      option.textContent = breed.name;
     // breedSelect.appendChild(option);
    });

  } catch (err) {
    console.error(err);
  }
}