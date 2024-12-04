import {
  CircleMenu,
  CircleMenuItem,
  TooltipPlacement,
} from 'react-circular-menu'
import { MeatIcon } from './assets/MeatIcon'
import { GrassIcon } from './assets/GrassIcon'
import { WingIcon } from './assets/WingIcon'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { IslandType } from '@/lib/types'

function Isla({
  changeType,
  currentType,
}: {
  changeType: (type: IslandType) => void
  currentType: IslandType | undefined
}) {
  const { RiveComponent: IslaVacia } = useRive({
    src: 'isla_vacia.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })
  const { rive, RiveComponent: Isla } = useRive({
    src: 'isla.riv',
    stateMachines: 'State Machine 1',
    autoplay: true,
  })

  const onSelectCarnivoro = useStateMachineInput(
    rive,
    'State Machine 1',
    'Carnivoro'
  )

  const onSelectHerbivoro = useStateMachineInput(
    rive,
    'State Machine 1',
    'Herbivoro'
  )

  const onSelectAereo = useStateMachineInput(rive, 'State Machine 1', 'Aereo')

  const handleTypeChange = (type: IslandType) => {
    changeType(type)
    switch (type) {
      case 'Carnivoro':
        onSelectCarnivoro?.fire()
        break
      case 'Herbivoro':
        onSelectHerbivoro?.fire()
        break
      case 'Aereo':
        onSelectAereo?.fire()
        break
      default:
        break
    }
  }

  return (
    <div className='w-[250px] h-[250px] relative'>
      {currentType ? (
        <Isla className='base-canvas-size w-[250px] h-[250px]' />
      ) : (
        <>
          <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-6'>
            <CircleMenu
              startAngle={-90}
              rotationAngle={360}
              itemSize={3}
              radius={6}
              rotationAngleInclusive={false}
            >
              <CircleMenuItem
                onClick={() => handleTypeChange('Carnivoro')}
                tooltip='Carnivoro'
                tooltipPlacement={TooltipPlacement.Top}
              >
                <MeatIcon />
              </CircleMenuItem>
              <CircleMenuItem
                onClick={() => handleTypeChange('Herbivoro')}
                tooltip='Herbivoro'
                tooltipPlacement={TooltipPlacement.Right}
              >
                <GrassIcon />
              </CircleMenuItem>
              <CircleMenuItem
                onClick={() => handleTypeChange('Aereo')}
                tooltip='Aereo'
                tooltipPlacement={TooltipPlacement.Left}
              >
                <WingIcon />
              </CircleMenuItem>
            </CircleMenu>
          </div>
          <IslaVacia className='base-canvas-size w-[250px] h-[250px]' />
        </>
      )}
    </div>
  )
}

export default Isla
