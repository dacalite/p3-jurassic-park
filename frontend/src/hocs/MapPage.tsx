import { useEffect, useState } from 'react'
import axios from 'axios'

function OccupancyCircle({ percentage }: { percentage: number }) {
  const isLowOccupancy = percentage < 30

  return (
    <div
      className={`relative w-20 h-20 flex items-center justify-center rounded-full border-4 
      ${
        isLowOccupancy
          ? 'border-red-500 bg-red-100 text-red-800'
          : 'border-blue-500 bg-blue-100 text-blue-800'
      } 
      font-bold text-lg`}
    >
      <span>{percentage}%</span>
    </div>
  )
}

function MapPage() {
  const [occupancy, setOccupancy] = useState<number[]>([0, 0, 0])

  /* useEffect(() => {
    const fetchOccupancy = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/public/parque/ocupacion'
        )
        setOccupancy(response.data)
      } catch (error) {
        console.error('Error fetching occupancy:', error)
      }
    }

    // Fetch data initially and then every second
    fetchOccupancy()
    const interval = setInterval(fetchOccupancy, 1000)

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, []) */

  return (
    <div className='z-10 w-full h-full flex justify-center items-center relative'>
      {/* Componentes de ocupación */}
      <div className='absolute flex flex-col gap-44 left-28'>
        <OccupancyCircle percentage={occupancy[0]} />

        <OccupancyCircle percentage={occupancy[1]} />

        <OccupancyCircle percentage={occupancy[2]} />
      </div>
    </div>
  )
}

export default MapPage
