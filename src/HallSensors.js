import { HStack } from '@chakra-ui/react'
import Light from './Light'

export default function OfficeSensors(){
  return (
    <HStack>
      <Light label="Pico" topic="fleet1/pico/light/" />
      <Light label="LED" topic="fleet1/pico/light2/" />
    </HStack>
  )
}
