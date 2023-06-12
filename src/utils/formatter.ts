export function dateFormatter(date: Date) {
  const formattedDate = new Intl.DateTimeFormat('pt-BR').format(date);

  return formattedDate;
}

export function priceFormatter(price: number) {
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  return formattedPrice;
}
