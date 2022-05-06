function numberWithCommas(value) {
  if (value === undefined) return '';
  
  return value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export { numberWithCommas }