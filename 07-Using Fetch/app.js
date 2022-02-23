//** Get txt from local*/

function getTextFile() {
  fetch("example.txt")
    .then((response) => response.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// getTextFile();

//** Get Json from local*/

function getJsonFile() {
  fetch("example.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// getJsonFile();

function getExternalAPI() {
  fetch("https://sms77io.p.rapidapi.com/")
    .then((response) => response.json())
    .then((data) => console.log(data.message));
}

getExternalAPI();
