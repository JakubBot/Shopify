export function totalPricesProducts(products) {
  let totalPrices = products.reduce((acc, product) => {
    const { price, quantity } = product;
    return acc + price * quantity;
  }, 0);

  return totalPrices.toFixed(2);
}
