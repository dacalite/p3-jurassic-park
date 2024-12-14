import axios from 'axios'
import { IslandType } from './types'

export const initParkIslands = async ({
  islands,
}: {
  islands: (IslandType | undefined)[]
}) => {
  try {
    const filteredIslands = islands.filter(
      (e): e is IslandType => e !== undefined
    )

    const requestBody = filteredIslands.map((type, index) => ({
      name: `Isla ${index + 1}`,
      type: type.toUpperCase(),
      dinosaurs: 10,
      bufferSize: 20,
    }))

    await axios.post('http://localhost:8080/startup/initialize', requestBody)

    console.log('Initialization successful')
    return true
  } catch (error) {
    console.error('Error initializing park islands')
    return false
  }
}
