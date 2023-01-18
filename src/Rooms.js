import {
  Box,
} from '@chakra-ui/react'
import Room from './Room'

import { rooms } from './config'

export default function Rooms(){
  // Ignore rooms that dont have children
  return (
    <Box>
      {rooms.map(room => (
        room.children && <Room key={`${room.name}-item`} room={room} />
      ))}
    </Box>
  )
}
