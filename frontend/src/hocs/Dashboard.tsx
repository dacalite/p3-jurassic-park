import { useState, useEffect, useRef } from 'react'
import MapPage from '@/hocs/MapPage'
import LogsPage from '@/hocs/LogsPage'
import { AppScreen, AuditLog, BasePageProps, VolumeLevel } from '@/lib/types'
import { fetchLogs } from '@/lib/logs'
import bso from '@/components/assets/bso.mp3'
import backgroundImg from '@/components/assets/background.webp'
import NavBar from '@/components/NavBar'
import StartupPage from './StartupPage'
import { initParkIslands } from '@/lib/park'

function Dashboard({ logoutUser }: BasePageProps) {
  const [activeScreen, setActiveScreen] = useState<AppScreen>(AppScreen.MAP)
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([])
  const [volumeLevel, setVolumeLevel] = useState<VolumeLevel>(1)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [startupCompleted, setStartupCompleted] = useState<boolean>(false)

  useEffect(() => {
    // Montar el audio solo una vez
    audioRef.current = new Audio(bso)
    if (audioRef.current) {
      audioRef.current.loop = true
      audioRef.current.volume = volumeLevel
      audioRef.current.play().catch((err) => console.error('Audio error:', err))

      const handleMouseMove = () => {
        if (audioRef.current && audioRef.current.paused) {
          audioRef.current
            .play()
            .catch((err) => console.error('Audio error:', err))
          window.removeEventListener('mousemove', handleMouseMove)
        }
      }

      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      // Limpieza al desmontar el componente
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const increaseVolumeLevel = () => {
    const levels: VolumeLevel[] = [0, 0.33, 0.66, 1]
    const currentIndex = levels.indexOf(volumeLevel)
    if (currentIndex < levels.length - 1) {
      const newVolume = levels[currentIndex + 1]
      setVolumeLevel(newVolume)
      if (audioRef.current) {
        audioRef.current.volume = newVolume
      }
    }
  }

  const decreaseVolumeLevel = () => {
    const levels: VolumeLevel[] = [0, 0.33, 0.66, 1]
    const currentIndex = levels.indexOf(volumeLevel)
    if (currentIndex > 0) {
      const newVolume = levels[currentIndex - 1]
      setVolumeLevel(newVolume)
      if (audioRef.current) {
        audioRef.current.volume = newVolume
      }
    }
  }

  const screens = {
    [AppScreen.MAP]: startupCompleted ? (
      <MapPage />
    ) : (
      <StartupPage
        start={({ islandTypes }) => {
          initParkIslands({ islands: islandTypes }).then((value: boolean) =>
            value
              ? setStartupCompleted(true)
              : alert('No se ha podido construir el parque')
          )
        }}
      />
    ),
    [AppScreen.LOGS]: (
      <LogsPage
        auditLogs={auditLogs}
        fetchLogs={() => fetchLogs({ updateValue: setAuditLogs })}
      />
    ),
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <img
        className='absolute top-0 left-0 w-screen h-screen'
        src={backgroundImg}
      />
      <NavBar
        activeScreen={activeScreen}
        changeScreen={setActiveScreen}
        decreaseVolumeLevel={decreaseVolumeLevel}
        increaseVolumeLevel={increaseVolumeLevel}
        logoutUser={logoutUser}
      />
      {screens[activeScreen]}
    </div>
  )
}

export default Dashboard
