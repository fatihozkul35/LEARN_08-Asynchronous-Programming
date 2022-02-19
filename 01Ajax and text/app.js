document.getElementById("btn").addEventListener("click", function () {
  // XMLHttpReguest

  const xhr = new XMLHttpRequest();

  xhr.onprogress = function () {
    console.log("progress isleniyor...", this.readyState);
  };

  xhr.onload = function () {
    if (this.status == 200) {
      //   console.log(this.responseText);
      //   console.log(this.readyState);
      document.getElementById("ajax").textContent = this.responseText;
    }
  };

  xhr.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      //   console.log(this.responseText);
    }
  };

  xhr.open("GET", "example.txt", true);
  xhr.send();
});
