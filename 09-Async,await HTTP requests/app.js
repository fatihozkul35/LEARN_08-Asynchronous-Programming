class Request {
  async get(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url)
    //     .then((responsive) => responsive.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url); //taking response
    const data = await response.json();
    return data;
  }

  async post(url, Data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(Data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const postData = await response.json();
    return postData;
  }
  async put(url, data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "PUT",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json; charset=UTF-8",
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((data) => resolve(data))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const putData = await response.json();
    return putData;
  }
  async delete(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "DELETE",
    //   })
    //     .then((response) => resolve("successfull"))
    //     .catch((err) => reject(err));
    // });
    const response = await fetch(url, {
      method: "DELETE",
    });
    return "deleted successfully";
  }
}

const request = new Request();
let albums;
request
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((albums) => {
    console.log(albums);
  })
  .catch((err) => console.log(err));

request
  .post("https://jsonplaceholder.typicode.com/albums", {
    userId: 1,
    title: "Thriller",
  })
  .then((newAlbum) => console.log(newAlbum))
  .catch((err) => console.log(err));

request
  .put("https://jsonplaceholder.typicode.com/albums/10", {
    userId: 10,
    title: "Tarkan Karma",
  })
  .then((Album) => console.log(Album))
  .catch((err) => console.log(err));

request
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((message) => console.log(message))
  .catch((err) => console.log(err));
