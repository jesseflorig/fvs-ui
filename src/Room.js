import {
  Box,
  Heading,
  Stack
} from '@chakra-ui/react'

export default function Room({room}){
  const { name, children } = room

  return (
    <Stack spacing={2} pb={2}>
      <Heading size="md" textTransform="uppercase">{name}</Heading>
      <Box>
        {children}
      </Box>
    </Stack>
  )
}
