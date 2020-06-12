import Vue from "vue";

Vue.filter("fee", (value, currency) => {
  try {
    const item = value.filter(item => item.currency === currency)[0];
    if (!item) return;
    const { fixedFee, feePercentage, ticketPrices } = item;
    const min = parseFloat(
      (fixedFee + ticketPrices.min) * (feePercentage / 100)
    ).toFixed(2);
    const max = parseFloat(
      (fixedFee + ticketPrices.max) * (feePercentage / 100)
    ).toFixed(2);
    return `${currency}${min}-${max}`;
  } catch (error) {
    console.warn(error);
  }
});

Vue.filter("priceRange", (value, currency) => {
  try {
    const item = value.filter(item => item.currency === currency)[0];
    if (!item) return;
    const { min, max } = item.ticketPrices;
    return `${currency}${min}-${max}`;
  } catch (error) {
    console.warn(error);
  }
});

Vue.filter("dateTime", value => {
  const addZero = number => {
    return number < 10 ? `${0}${number}` : number;
  };
  try {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${addZero(day)}/${addZero(month)}/${year} at ${hours}:${addZero(
      minutes
    )}`;
  } catch (error) {
    console.warn(error);
  }
});
