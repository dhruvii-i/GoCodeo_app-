import { Doughnut } from 'react-chartjs-2'
import RecentTransactions from './RecentTransactions'

const DashboardStats = () => {
  const chartData = {
    labels: ['Housing', 'Food', 'Transport', 'Entertainment'],
    datasets: [{
      data: [35, 25, 20, 20],
      backgroundColor: ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981']
    }]
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
          <div className="w-full h-64">
            <Doughnut data={chartData} />
          </div>
        </div>
        <RecentTransactions />
      </div>
    </div>
  )
}

export default DashboardStats
