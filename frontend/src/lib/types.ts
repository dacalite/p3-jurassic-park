export interface AuthResponse {
  status: boolean
  info: string
  token?: string
}

export interface BasePageProps {
  logoutUser: () => void
}

export type LogLevel =
  | 'MEASUREMENT'
  | 'DEATH'
  | 'REQUEST_DINOSAUR'
  | 'SEND_DINOSAUR'
  | 'ERROR'

export type Island = 'Isla 1' | 'Isla 2' | 'Isla 3' | "Centro de Crianza"

export interface AuditLog {
  id: number
  message: string
  timestamp: string
  level: LogLevel
  island: Island
}
