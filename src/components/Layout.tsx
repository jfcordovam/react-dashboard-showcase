import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full min-h-screen bg-gray-100">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}

export default Layout
