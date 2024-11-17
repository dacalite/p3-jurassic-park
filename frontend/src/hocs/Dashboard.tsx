import { useState } from 'react'
import MapPage from '@/hocs/MapPage'
import LogsPage from '@/hocs/LogsPage'
import { AppScreen, AuditLog } from '@/lib/types'
import axios from 'axios'

function Dashboard() {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.MAP)
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([])

  const goToLogs = () => {
    setActiveScreen(AppScreen.LOGS)
  }
  const goToMap = () => {
    setActiveScreen(AppScreen.MAP)
  }

  // Función para obtener logs del servidor
  const fetchLogs = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/public/api/v1/logs'
      )
      setAuditLogs(response.data) // Actualizar estado con los logs obtenidos
    } catch (error) {
      console.error('Error fetching logs:', error)
    }
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      {activeScreen === AppScreen.MAP ? (
        <MapPage goToLogs={goToLogs} />
      ) : (
        <LogsPage
          goToMap={goToMap}
          auditLogs={auditLogs}
          fetchLogs={fetchLogs}
        />
      )}
    </div>
  )
}

export default Dashboard
