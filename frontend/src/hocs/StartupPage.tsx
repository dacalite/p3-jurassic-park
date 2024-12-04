import { useRive } from '@rive-app/react-canvas'
import Tutorial from './Tutorial'
import { useState } from 'react'
import { IslandType } from '@/lib/types'
import Isla from '@/components/Isla'

const tutorialSteps = [
  {
    src: 'tut1.riv',
    stateMachine: 'State Machine 1',
    inputName: 'close',
    positionClass: 'bottom-0 right-0',
  },
  {
    src: 'tut2.riv',
    stateMachine: 'State Machine 1',
    inputName: 'close',
    positionClass: 'top-0 left-0',
  },
]

export default function StartupPage({
  start,
}: {
  start: ({ islandTypes }: { islandTypes: (IslandType | undefined)[] }) => void
}) {
  const [islandTypes, setIslandTypes] = useState<(IslandType | undefined)[]>([
    undefined,
    undefined,
    undefined,
  ])

  const handleTypeSelection = (index: number, type: IslandType) => {
    const updatedTypes = [...islandTypes]
    updatedTypes[index] = type
    setIslandTypes(updatedTypes)
  }

  const { RiveComponent: CentroCrianza } = useRive({
    src: 'isla_crianza.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  return (
    <>
      <div className='z-10 w-full h-full flex flex-col justify-between items-center p-12 mr-44 relative'>
        <CentroCrianza className='base-canvas-size w-[250px] h-[250px]' />
        {islandTypes.some((type) => type !== undefined) && (
          <button
            className='start-button'
            onClick={() => start({ islandTypes })}
          >
            Start
          </button>
        )}
        <div className='w-full flex justify-around '>
          {islandTypes.map((_, index) => (
            <Isla
              key={index}
              changeType={(type) => handleTypeSelection(index, type)}
              currentType={islandTypes[index]}
            />
          ))}
        </div>
      </div>
      <Tutorial steps={tutorialSteps} />
    </>
  )
}
