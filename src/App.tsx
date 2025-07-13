import React from 'react'
import Layout from './components/Layout'
import ChartContainer from './components/ChartContainer'
import BarChart from './components/charts/BarChart'
import StatCard from './components/StatCard'

const App: React.FC = () => {
  return (
    <Layout>
      <div className="text-gray-800">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>

        <div class="grid grid-cols-3 grid-rows-3 gap-1">
          <StatCard title="Conversion Rate" value="23%" delta="+1.8%" />
          <StatCard title="Churn Rate" value="6%" delta="-0.7%" />
          <StatCard title="MRR Growth" value="12.3%" delta="+2.1%" />
        </div>
        <ChartContainer>
          <BarChart />
        </ChartContainer>
      </div>
    </Layout>
  )
}

export default App
