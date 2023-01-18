import React from 'react'
import { matches } from 'mqtt-pattern'
import MqttContext from './MqttContext'

export default function useMqttSubscription(topic, opts = {}){
  const { client, status, parserMethod } = React.useContext(MqttContext)
  const [message, setMessage ] = React.useState(undefined)

  const subscribe = React.useCallback(async () =>{
    client?.subscribe(topic, opts)
  }, [client, topic, opts])

  const messageCallback = React.useCallback((rxTopic, rxPayload) => {
    if ([topic].flat().some(topicItem => matches(topicItem, rxTopic))){
      setMessage({
        topic: rxTopic,
        payload: parserMethod?.(rxPayload) || JSON.parse(rxPayload.toString())
      })
    }
  }, [parserMethod, topic])

  React.useEffect(() => {
    if(client?.connected){
      subscribe()
      client.addListener('message', messageCallback)
    }

    return () => {
      client?.removeListener('message', messageCallback)
      client?.unsubscribe(topic)
    }
  }, [messageCallback, client, subscribe, topic])

  return { client, topic, message, status }
}
