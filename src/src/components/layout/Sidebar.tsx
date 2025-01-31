import { Home, PieChart, Trophy, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200">
      <nav className="mt-8 px-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-purple-50">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link to="/budget" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-purple-50">
            <PieChart className="w-5 h-5" />
            <span>Budget</span>
          </Link>
          <Link to="/challenges" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-purple-50">
            <Target className="w-5 h-5" />
            <span>Challenges</span>
          </Link>
          <Link to="/leaderboard" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-purple-50">
            <Trophy className="w-5 h-5" />
            <span>Leaderboard</span>
          </Link>
          <Link to="/social" className="flex items-center space-x-3 text-gray-700 p-2 rounded-lg hover:bg-purple-50">
            <Users className="w-5 h-5" />
            <span>Social</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
