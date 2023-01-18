import {
  HStack
} from '@chakra-ui/react';
import PublishButton from './PublishButton'

import useMqttSubscription from './useMqttSubscription'

export default function Doors() {
  const { message } = useMqttSubscription('door/')

  const open = message?.payload.open
  const toggleValue = open ? 0 : 1
  const label = `Door: ${open ? "Open" : "Closed"}`

  return (
    <HStack>
      <PublishButton label={label} topic="door/" message={{open: toggleValue}} />
    </HStack>
  );
}
