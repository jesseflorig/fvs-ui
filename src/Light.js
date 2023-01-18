import {
  FaLightbulb,
  FaRegLightbulb
} from 'react-icons/fa'
import PublishButton from './PublishButton'
import useMqttSubscription from './useMqttSubscription'

export default function Light({label, topic}){
  const { message } = useMqttSubscription(topic)
  
  const on = message?.payload.on
  const scheme = on ? "yellow" : null
  const toggleValue = on ? 0 : 1
  const lightIcon = on ? <FaLightbulb /> : <FaRegLightbulb />

  return (
    <PublishButton leftIcon={lightIcon} label={label} colorScheme={scheme} topic={topic} message={{on: toggleValue}} />
  )
}
