// const langs = ["Python", "Java", "C++"];

// langs.forEach(function (lang) {
//   console.log(lang);
// });

// function process1(callback) {
//   setTimeout(function () {
//     console.log("process1");
//     callback();
//   }, 3000);
// }
// function process2() {
//   setTimeout(function () {
//     console.log("process2");
//   }, 2000);
// }

// process1();
// process2();
// console.log("Naber");

// process1(process2);

const langs = ["Python", "Java", "C++"];

function addLang(lang, callback) {
  setTimeout(function () {
    langs.push(lang);
    console.log("Eklendi");
    callback();
  }, 3000);
}

function getAllLangs() {
  setTimeout(function () {
    langs.forEach(function (lang) {
      console.log(lang);
    });
  }, 2000);
}

addLang("Javascript", getAllLangs);
