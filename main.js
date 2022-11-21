const monthlyExpenses = [ 201.43, 189.22, 132.09,  238.85, 195.41 ]
let totalExpense = 0

for (const month of monthlyExpenses) {
	// Add the current monthly cost to the value of totalExpense
    totalExpense += month
}

// Calculate your average monthly food costs
const averageExpense = totalExpense / monthlyExpenses.length

// Make sure you use backticks for multi-line string output
console.log(`The average monthly grocery expenses are $${averageExpense}. I have spent $${totalExpense} in the last 5 months!`)

