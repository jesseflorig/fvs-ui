import {
  HStack
} from '@chakra-ui/react';
import Door from './Door'

export default function Doors() {
  return (
    <HStack>
      <Door label="Sliding Door" topic="door/" />
    </HStack>
  );
}
