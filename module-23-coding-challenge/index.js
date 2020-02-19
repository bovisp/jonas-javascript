function calculateTip(amount) {
  if (amount > 200) {
    return amount * 0.1
  } else if (amount >= 50 && amount <= 200) {
    return amount * 0.15
  } else {
    return amount * 0.2
  }
}

function calculateTotal(bill, tip) {
  return bill + tip
}

let tips = []
let totals = []
let bills = [124, 48, 268]

tips[0] = calculateTip(bills[0])
tips[1] = calculateTip(bills[1])
tips[2] = calculateTip(bills[2])

totals[0] = calculateTotal(bills[0], tips[0])
totals[1] = calculateTotal(bills[1], tips[1])
totals[2] = calculateTotal(bills[2], tips[2])

console.log(bills, tips, totals)