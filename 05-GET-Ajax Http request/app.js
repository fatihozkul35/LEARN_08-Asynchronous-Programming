// Ajax, callback, http request

class Request {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }
  //Get Request

  // get(url, callback) {
  //   this.xhr.open("GET", url);

  //   this.xhr.onload = () => {
  //     if (this.xhr.status === 200) {
  //       callback(null, this.xhr.responseText);
  //     } else {
  //       callback("There is a GetRequest error", null);
  //     }
  //   };

  //   this.xhr.send();
  // }
  post(url, data, callback) {
    this.xhr.open("POST", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 201) {
        callback(null, this.xhr.responseText);
      } else {
        callback("There is a PostRequest error", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
  put(url, data, callback) {
    this.xhr.open("PUT", url);
    this.xhr.setRequestHeader("Content-Type", "application/json");
    this.xhr.onload = () => {
      if (this.xhr.status === 200) {
        callback(null, this.xhr.responseText);
      } else {
        callback("There is a PutRequest error", null);
      }
    };
    this.xhr.send(JSON.stringify(data));
  }
}

const request = new Request();

// const albumsGet = request.get(
//   "https://jsonplaceholder.typicode.com/albums",
//   function (err, response) {
//     if (err === null) {
//       console.log(response);
//     } else {
//       console.log(err);
//     }
//   }
// );

const albumsPost = request.put(
  "https://jsonplaceholder.typicode.com/albums/10",
  { userId: 2, title: "Thriller" },
  function (err, response) {
    if (err === null) {
      console.log(response);
    } else {
      console.log(err);
    }
  }
);
