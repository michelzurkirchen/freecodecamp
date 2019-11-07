function checkCashRegister(price, cash, cid) {
  // Initial values
  let changeDue = cash - price;
  const change = [];
  let cidAmount = ((x) => {
    let amount = 0;
    for (const denomination of x) {
      amount += Number(denomination[1])
    }
    return Number(amount.toFixed(2));
  })(cid)

  // Simple cases
  if (cidAmount == changeDue) {
    return {
      'status': 'CLOSED',
      'change': cid
    };
  }

  if (cidAmount < changeDue) {
    return {
      'status': 'INSUFFICIENT_FUNDS',
      'change': []
    };
  }

  // Elaborate cases
  const denominationValues = {
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

  while (changeDue > 0 && cidAmount > 0) {

    for (const denomination of cid.reverse()) {
      const denominationVal = denominationValues[denomination[0]];  // The numeric value, e.g. a QUARTER is 0.25
      const maxDenominationReturn = Math.floor(changeDue / denominationVal);  // How many times the numeric value fits into the amount of change due
      const amountInDenomination = denomination[1]; // How much money there is in the denomination
      const limitNumberOfDenomination = amountInDenomination / denominationVal; // How many coins/bills there are of the denomination
      const returnOfDenomination = Math.min(maxDenominationReturn, limitNumberOfDenomination);  // How many coins/bills to give of a denomination

      if (returnOfDenomination > 0) {
        const valueOfDenomination = denominationVal * returnOfDenomination;
        change.push([denomination[0], valueOfDenomination])
        changeDue -= valueOfDenomination;
        changeDue = changeDue.toFixed(2);
        cidAmount -= valueOfDenomination;
      }

      // Change has been met and still cash in drawer
      if (changeDue == 0 && cidAmount > 0) {
        return {
          'status': 'OPEN',
          'change': change
        };
      }

      // Still change due, but no exact change possible
      if (changeDue > 0 && denomination[0] == "PENNY") {
        return {
          'status': 'INSUFFICIENT_FUNDS',
          'change': []
        };
      }
    }
  }
}
