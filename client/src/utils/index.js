export const totalPriceCountIngredient = (arr) => {
  const totalPrice = arr.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  return totalPrice;
};
