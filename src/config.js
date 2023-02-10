import OfficeSensors from './OfficeSensors'
import HallSensors from './HallSensors'

export const rooms = [
  {
    name:"office",
    children: <OfficeSensors />
  }, 
  {
    name:"kitchen",
    children: null
  }, 
  {
    name:"hall",
    children: <HallSensors />
  }, 
  {
    name:"bathroom",
    children: null
  }, 
  {
    name:"bedroom",
    children: null
  }, 
  {
    name:"utility closet",
    children: null
  }, 
  {
    name:"garage",
    children: null
  }, 
  {
    name: "deck",
    children: null
  }
]
