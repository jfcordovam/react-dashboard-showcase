// ChartContainer.tsx
import React from 'react'

const ChartContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto">
      {children}
    </div>
  )
}

export default ChartContainer
