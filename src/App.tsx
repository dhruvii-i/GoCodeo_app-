import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import DashboardStats from './components/dashboard/DashboardStats'
import BudgetForm from './components/budget/BudgetForm'
import ChallengeList from './components/challenges/ChallengeList'
import Leaderboard from './components/gamification/Leaderboard'
import SocialFeed from './components/social/SocialFeed'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<DashboardStats />} />
              <Route path="/budget" element={<BudgetForm />} />
              <Route path="/challenges" element={<ChallengeList />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/social" element={<SocialFeed />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
