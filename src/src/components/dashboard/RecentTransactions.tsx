const RecentTransactions = () => {
  const transactions = [
    { id: 1, description: 'Grocery Shopping', amount: -85.50, category: 'Food' },
    { id: 2, description: 'Salary Deposit', amount: 3000, category: 'Income' },
    { id: 3, description: 'Netflix Subscription', amount: -15.99, category: 'Entertainment' }
  ]

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map(transaction => (
          <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="font-medium">{transaction.description}</p>
              <p className="text-sm text-gray-500">{transaction.category}</p>
            </div>
            <span className={`font-semibold ${transaction.amount > 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${Math.abs(transaction.amount).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentTransactions
