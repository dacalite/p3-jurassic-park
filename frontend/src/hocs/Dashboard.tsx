import { useState } from 'react'
import MapPage from '@/hocs/MapPage'
import LogsPage from '@/hocs/LogsPage'
import { AppScreen } from '@/lib/types'

function Dashboard() {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.MAP)

  const goToLogs = () => {
    setActiveScreen(AppScreen.LOGS)
  }
  const goToMap = () => {
    setActiveScreen(AppScreen.MAP)
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {activeScreen === AppScreen.MAP ? (
        <MapPage goToLogs={goToLogs} />
      ) : (
        <LogsPage goToMap={goToMap} />
      )}
    </div>
  )
}

export default Dashboard
