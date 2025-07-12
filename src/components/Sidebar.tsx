import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 fixed top-0 left-0">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-4">
        <a href="#" className="block hover:text-gray-300">Home</a>
        <a href="#" className="block hover:text-gray-300">Reports</a>
        <a href="#" className="block hover:text-gray-300">Settings</a>
      </nav>
    </aside>
  )
}

export default Sidebar
