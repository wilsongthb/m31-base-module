import numberFormatter from "number-formatter";

const moneyFilter = function(
  defaultCurrency,
  currencyList = { 1: { symbol: "$" } }
) {
  return function(value, currency = defaultCurrency) {
    return numberFormatter(`${currencyList[currency].symbol} #,###.00`, value);
  };
};

export default moneyFilter;
