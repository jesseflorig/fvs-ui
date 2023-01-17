import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Circle,
  Heading,
  Text,
  VStack
} from '@chakra-ui/react'
import useMqttSubscription from './useMqttSubscription'

export default function Light(){
  const { message } = useMqttSubscription('light/')
  
  const lightColor = message?.payload.on ? "yellow.500" : "gray.500"
  const lightLabel = message?.payload.on ? "On" : "Off"

  return (
    <Card w={32}>
      <CardHeader>
        <Heading size="xs">Light</Heading>
      </CardHeader>
      <CardBody>
        <VStack justifyContent="center">
          <Circle size={12} bg={lightColor}/>
          <Text textTransform="uppercase">{lightLabel}</Text>
        </VStack>
      </CardBody>
    </Card>
  )
}
