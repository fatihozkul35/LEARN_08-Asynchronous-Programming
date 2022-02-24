class Currency {
  constructor(firstCurrency, secondCurrency) {
    this.firstCurrency = firstCurrency;
    this.secondCurrency = secondCurrency;
    this.url =
      "https://freecurrencyapi.net/api/v2/latest?apikey=YOUR-APIKEY&base_currency=";
    this.amount = null;
  }
  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.firstCurrency)
        .then((response) => response.json())
        .then((data) => {
          const parity = data.data[this.secondCurrency];
          const amount2 = +this.amount;

          let total = parity * amount2;
          resolve(total);
        })
        .catch((err) => reject(err));
    });
  }

  changeAmount(amount) {
    this.amount = amount;
  }
  changeFirstCurrency(newFirstCurrency) {
    this.firstCurrency = newFirstCurrency;
  }
  changeSecondCurrency(newSecondCurrency) {
    this.secondCurrency = newSecondCurrency;
  }
}
