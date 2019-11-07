function checkCashRegister(price, cash, cid) {
  // Initial values
  let changeAmount = cash - price;
  const change = [];
  let cidAmount = ((x) => {
    let amount = 0;
    for (const coin of x) {
      amount += Number(coin[1])
    }
    return Number(amount.toFixed(2));
  })(cid)

  // Simple cases
  if (cidAmount == changeAmount) {
    return {
      'status': 'CLOSED',
      'change': cid
    };
  }

  if (cidAmount < changeAmount) {
    return {
      'status': 'INSUFFICIENT_FUNDS',
      'change': []
    };
  }

  // Setup for elaborate cases
  const values = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1.0,
    "FIVE": 5.0,
    "TEN": 10.0,
    "TWENTY": 20.0,
    "ONE HUNDRED": 100.0
  };

  while (changeAmount > 0 && cidAmount > 0) {

    for (const currency of cid.reverse()) {
      const currencyDigit = values[currency[0]];                                      // The numeric value, e.g. a QUARTER is 0.25.
      const maxNumberOfCurrency = Math.floor(changeAmount / currencyDigit);           // How many times the numeric value fits into the amount of change due.
      const amountInCurrency = currency[1];                                           // How much money there is in the currency.
      const limitNumberOfCurrency = amountInCurrency / currencyDigit;                 // How many coins/bills there are of the currency.
      const numberOfCurrency = Math.min(maxNumberOfCurrency, limitNumberOfCurrency);  // How many coins/bills to give of a currency.
      debugger

      if (numberOfCurrency > 0) {
        const valueOfCurrency = currencyDigit * numberOfCurrency;
        change.push([currency[0], valueOfCurrency])
        changeAmount -= valueOfCurrency;
        changeAmount = changeAmount.toFixed(2);
//        currency[1] -= valueOfCurrency;
        cidAmount -= valueOfCurrency;
        debugger
      }
      debugger
      // Change has been met and still cash in drawer
      if (changeAmount == 0 && cidAmount > 0) {
        return {
          'status': 'OPEN',
          'change': change
        };
      }

      // Still change to be handed back, but can't be given exactly. Cash in drawer can be == 0 or > 0.
      if (changeAmount > 0 && currency[0] == "PENNY") {
        return {
          'status': 'INSUFFICIENT_FUNDS',
          'change': []
        };
      }
    }
  }
}
