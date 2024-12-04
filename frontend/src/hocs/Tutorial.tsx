import { useState } from 'react'
import { useRive, useStateMachineInput } from '@rive-app/react-canvas'

interface TutorialStep {
  src: string // Ruta del archivo .riv
  stateMachine: string // Nombre de la máquina de estado
  inputName: string // Nombre del input para cerrar
  positionClass?: string // Posición personalizada para el componente
}

interface TutorialProps {
  steps: TutorialStep[]
  onComplete?: () => void // Callback cuando el tutorial termina
}

export default function Tutorial({ steps, onComplete }: TutorialProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isTutorialActive, setIsTutorialActive] = useState(true)

  const step = steps[currentStep]
  const { rive, RiveComponent } = useRive({
    src: step?.src || '', // Manejo de seguridad si no hay pasos
    stateMachines: step?.stateMachine || '',
    autoplay: true,
  })
  const closeInput = useStateMachineInput(
    rive,
    step?.stateMachine || '',
    step?.inputName || ''
  )

  const nextStep = () => {
    closeInput?.fire()
    setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        // Completar el tutorial
        setIsTutorialActive(false)
        setTimeout(() => onComplete?.(), 300) // Espera a que termine el fade-out
      }
    }, 1300)
  }

  return (
    <>
      {/* Layout negro con transición */}
      <div
        className={`fixed inset-0 bg-black z-20 transition-opacity ${
          isTutorialActive ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={nextStep}
      ></div>
      {isTutorialActive && step && (
        <RiveComponent
          key={currentStep} // Esta clave fuerza el reinicio al cambiar de paso
          className={`base-canvas-size w-[600px] h-[500px] absolute z-30 ${
            step.positionClass || ''
          }`}
        />
      )}
    </>
  )
}
