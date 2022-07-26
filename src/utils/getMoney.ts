export default function getMoney(money : number) {
  if (money === 0) {
    return "-"
  } else {
    return `$${money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}`
  };
};