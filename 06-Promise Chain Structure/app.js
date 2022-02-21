function getData(data) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      //   resolve("positive result");
      //   reject("negative result");
      if (typeof data === "string") {
        resolve("positive result");
      } else {
        reject("negative result");
      }
    }, 5000);
  });
}
//****positive result catching */

// getData("hallo").then(function (response) {
//   console.log(response);
// });

//****negative result catching */

// getData("hallo").catch(function (err) {
//   console.log(err);
// });

//****positive and negative result catching */

// getData(25)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

function getData2(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      //   resolve("positive result");
      //   reject("negative result");
      if (typeof data === "number") {
        resolve(num + 2);
      } else {
        reject(new Error("please enter a number"));
      }
    }, 5000);
  });
}

//**** we can only use one catch but more then */
getData2("hallo")
  .then((response) => {
    console.log(response);
    return response + 2;
  })
  .then((response2) => console.log(response2))
  .catch((err) => console.error(err));
