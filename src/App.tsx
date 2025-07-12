import React from 'react'
import Layout from './components/Layout'
import ChartContainer from './components/ChartContainer'
import BarChart from './components/charts/BarChart'

const App: React.FC = () => {
  return (
    <Layout>
      <div className="text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
      </div>
    </Layout>
  )
}

export default App
