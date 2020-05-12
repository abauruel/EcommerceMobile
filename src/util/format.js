export const formatPrice = value => {
  const formated = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  console.tron.log(formated);
  return formated;
};
