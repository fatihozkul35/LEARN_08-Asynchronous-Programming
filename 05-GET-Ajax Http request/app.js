// Ajax, callback, http request

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  //Get Request

  get(url, callback) {
    this.xhr.open("GET", url);
    const temp = this;

    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("There is a error", null);
      }
    };

    this.xhr.send();
  }
}

const request = new Request();

const albums = request.get(
  "https://jsonplaceholdersdsfssdfsdf.typicode.com/albums",
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
