export interface AuthResponse {
  status: boolean
  info: string
  token?: string
}

export interface BasePageProps {
  logoutUser: () => void
  hasHeader?: boolean
}

export type LogLevel =
  | 'MEASUREMENT'
  | 'DEATH'
  | 'REQUEST_DINOSAUR'
  | 'SEND_DINOSAUR'
  | 'ERROR'

export type Island = 'Isla 1' | 'Isla 2' | 'Isla 3' | 'Centro de Crianza'
export type IslandType = 'Carnivoro' | 'Herbivoro' | 'Aereo'

export interface AuditLog {
  id: number
  message: string
  timestamp: string
  level: LogLevel
  island: Island
}

export enum AppScreen {
  MAP,
  LOGS,
}

export type VolumeLevel = 0 | 0.33 | 0.66 | 1
