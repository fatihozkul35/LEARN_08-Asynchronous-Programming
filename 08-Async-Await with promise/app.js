// async function test(data) {
//   // Async return everytime a promise
//   //   return data;
//   //   return new Promise(function (resolve, reject) {
//   //     resolve(data);
//   //   });
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("bu bir degerdir");
//     }, 5000);
//   });

//   let response = await promise;
//   return response;
// }
// test("merhaba").then((response) => console.log(response));

// async function testData(data) {
//   //!async function return everytime a promise
//   let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       if (typeof data === "string") {
//         resolve(data);
//       } else {
//         reject(new Error("Please enter a string"));
//       }
//     }, 5000);
//   });
//   const response = await promise;

//   return response;
// }

// testData("merhaba")
//   .then((response) => console.log(response))
//   .catch((err) => console.log(err));

async function getCurrent(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

getCurrent(
  "http://api.exchangeratesapi.io/v1/latest?access_key=e5b84fa03e453c062b235aefae8fa3a2&format=1"
).then((response) => console.log(response));
