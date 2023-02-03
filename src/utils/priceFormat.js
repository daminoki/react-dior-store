const defaultOptions = {
  style: 'currency',
  currency: 'RUB',
  trailingZeroDisplay: 'stripIfInteger'
};

export default (price, options = defaultOptions) =>
  new Intl.NumberFormat('ru-RU', options).format(price);
