import React from 'react'
import { connect } from 'mqtt/dist/mqtt'
import MqttContext from './MqttContext'

export default function MqttProvider({
  children,
  url,
  opts = { keepAlive: 0},
  parserMethod
}){
  const clientValid = React.useRef(false)
  const [status, setStatus] = React.useState('offline')
  const [client, setClient] = React.useState(null)

  React.useEffect(() => {
    if(!client && !clientValid.current){
      clientValid.current = true
      setStatus('connecting')
      
      const mqtt = connect(url, opts)

      mqtt.on('connect', () => {
        setStatus('connected')
        setClient(mqtt) 
      })

      mqtt.on('reconnect', () => {
        setStatus('reconnecting')
      })

      mqtt.on('error', (err) => {
        setStatus('error')
        console.error(`Connection error: ${err.message}`)
      })

      mqtt.on('offline', () => {
        setStatus('offline')
      })

      mqtt.on('end', () => {
        setStatus('offline')
      })
    }

    // Unmount
    return () => {
      if(client){
        client.end(true)
        setClient(null)
        clientValid.current = false
      }
    }
  }, [client, clientValid, url, opts])

  const value = React.useMemo(() => ({
    status,
    client,
    parserMethod
  }), [status, client, parserMethod])
  
  return <MqttContext.Provider value={value}>{children}</MqttContext.Provider>
}
