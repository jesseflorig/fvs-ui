import { useContext } from 'react'
import MqttContext from './MqttContext'

export default function useMqttState(){
  const { status, client, parserMethod } = useContext(MqttContext)

  return {
    status,
    client,
    parserMethod
  }
}
