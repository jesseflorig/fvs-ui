import { FaLock, FaUnlock } from 'react-icons/fa'
import { RiDoorFill, RiDoorOpenFill } from 'react-icons/ri'
import PublishButton from './PublishButton'

import useMqttSubscription from './useMqttSubscription'

export default function Door({label, topic}) {
  const { message } = useMqttSubscription(topic)

  const open = message?.payload.open
  const doorIcon = open ? <RiDoorOpenFill /> : <RiDoorFill />

  const locked = message?.payload.locked
  const scheme = locked ? "blue" : null
  const toggleValue = locked ? 0 : 1
  const lockIcon = locked ? <FaLock /> : <FaUnlock />

  return (
    <PublishButton leftIcon={lockIcon} rightIcon={doorIcon} label={label} colorScheme={scheme} topic={topic} message={{locked: toggleValue}} />
  );
}
