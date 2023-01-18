import { 
  Flex,
  Text,
  VStack
} from '@chakra-ui/react'
import ColorModeSwitcher from './ColorModeSwitcher';
import ConnectionStatus from './ConnectionStatus'

function LayoutHeading(){
  return (
    <Flex py={2} px={4} justify="space-between">
      <ConnectionStatus />
      <ColorModeSwitcher />
    </Flex>
  )
}

function LayoutFooter(){
  return (
      <Flex py={6} px={4} align="center" justify="center">
        <Text>Footer</Text>
      </Flex>
  )
}

export default function Layout({children}){
  return (
    <VStack h="100vh" align="stretch">
      <LayoutHeading />
      <Flex px={4} grow={1}>
        {children}
      </Flex>
      <LayoutFooter />
    </VStack>
  )
}
