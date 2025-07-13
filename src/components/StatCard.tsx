import React from 'react'
import { ArrowTrendingDownIcon } from '@heroicons/react/24/solid'
import { ArrowTrendingUpIcon } from '@heroicons/react/24/solid'

type StatCardProps = {
  title: string
  value: string // e.g. "73%"
  delta: string // e.g. "+3.2%" or "-1.5%"
}

export default function StatCard({ title, value, delta }: StatCardProps) {
  const isPositive = delta.startsWith('+')

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex items-center justify-between mt-2">
        <h2 className="text-3xl font-semibold text-gray-900">{value}</h2>
        <div
          className={`flex items-center text-sm font-medium ${isPositive ? 'text-green-600' : 'text-red-500'
          }`}
        >
          {isPositive ? (
            <ArrowTrendingUpIcon className="w-4 h-4 mr-1" />
          ) : (
            <ArrowTrendingDownIcon className="w-4 h-4 mr-1" />
          )}
          {delta}
        </div>
      </div>
    </div>
  )
}
