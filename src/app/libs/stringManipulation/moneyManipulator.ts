export function handleMoneyPresentation(value: string) {
  let valueToString = value.toString();

  let result = valueToString.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

  return result;
}
