import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow h-16 flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Welcome Back</h1>
      <div className="text-sm text-gray-500">User • Logged In</div>
    </header>
  )
}

export default Header
