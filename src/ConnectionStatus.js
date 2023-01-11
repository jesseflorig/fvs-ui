import useMqttState from './useMqttState'
import { 
  Circle,
  HStack, 
  Text 
} from '@chakra-ui/react'

export default function ConnectionStatus(){
  const { status} = useMqttState()

  const statusColor = () => {
    switch(status){
      case 'connected':
        return "green.500"
      case 'connecting':
      case 'reconnecting':
        return "yellow.500"
      default:
        return "red.500"
    }
  }

  return (
    <HStack>
      <Circle size={4} bg={statusColor} />
      <Text textTransform="capitalize">{`${status}`}</Text>
    </HStack>
  )
}
