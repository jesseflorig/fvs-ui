import { HStack } from '@chakra-ui/react'
import Light from './Light'

export default function OfficeSensors(){
  return (
    <HStack>
      <Light label="Overhead" topic="fleet1/interior/hall/overheadLight" />
      <Light label="Counter" topic="fleet1/interior/hall/counterLight" />
      <Light label="Toekick" topic="fleet1/interior/hall/toeLight" />
    </HStack>
  )
}
