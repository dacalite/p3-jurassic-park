import { SetStateAction, useEffect, useState } from 'react'
import Tutorial from './Tutorial'
import axios from 'axios'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Isla from '@/components/Isla'
import { IslandType } from '@/lib/types'
import { WingIcon } from '@/components/assets/WingIcon'
import { MeatIcon } from '@/components/assets/MeatIcon'
import { GrassIcon } from '@/components/assets/GrassIcon'

const tutorialSteps = [
  {
    src: 'tut3.riv',
    stateMachine: 'State Machine 1',
    inputName: 'close',
    positionClass: 'bottom-0 left-0',
  },
]

function MapPage({
  tutorialCompleted,
  setTutorialCompleted,
  islandTypes,
}: {
  tutorialCompleted: boolean
  setTutorialCompleted: (value: SetStateAction<boolean>) => void
  islandTypes: (IslandType | undefined)[]
}) {
  const [occupancy, setOccupancy] = useState<number[]>([])

  useEffect(() => {
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
  }, [])

  return (
    <>
      <div className='z-10 w-full h-full flex justify-center items-center relative'>
        <div className='absolute flex gap-44 left-28 w-3/4 h-4/5'>
          {occupancy.map((percentage, index) => {
            if (percentage === null || percentage === undefined) return null

            const islandName = `Isla ${index + 1}`
            const islandType = islandTypes[index]
            const renderIcon = () => {
              switch (islandType) {
                case 'Aereo':
                  return <WingIcon />
                case 'Carnivoro':
                  return <MeatIcon />
                case 'Herbivoro':
                  return <GrassIcon />
                default:
                  return null
              }
            }

            return (
              <div
                key={index}
                className='bg-white rounded-xl w-1/4 h-full p-12 bg-opacity-95 flex flex-col gap-24 items-center'
              >
                <div className='flex w-full justify-center items-center gap-6'>
                  <h1 className='text-4xl'>{islandName}</h1>
                  {renderIcon()}
                </div>
                <Isla currentType={islandType} />
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
            )
          })}
        </div>
      </div>
      {!tutorialCompleted && (
        <Tutorial
          steps={tutorialSteps}
          onComplete={() => {
            setTutorialCompleted(true)
          }}
        />
      )}
    </>
  )
}

export default MapPage
