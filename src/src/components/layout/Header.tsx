import { Bell, Settings } from 'lucide-react'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-purple-600">Gamified Budget</h1>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
          <div className="w-8 h-8 rounded-full bg-purple-500" />
        </div>
      </div>
    </header>
  )
}

export default Header
