import { Buffer } from 'buffer'
import useMqttState from './useMqttState'
import { Button } from '@chakra-ui/react'

export default function PublishButton({label, topic, message, ...props}){
  const { client } = useMqttState()

  function handleClick() {
    const buffer = Buffer.from(JSON.stringify(message))
    return client.publish(topic, buffer)
  }

  return (
    <Button onClick={handleClick} {...props}>{label}</Button>
  )
}
