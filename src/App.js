import React from 'react';
//import { connect } from 'mqtt/dist/mqtt'
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import MqttProvider from './MqttProvider'
import ConnectionStatus from './ConnectionStatus'
import PublishButton from './PublishButton'
import Light from './Light'

function App() {
  const {
    REACT_APP_LOCAL_IP: LOCAL_IP,
    REACT_APP_MQTT_USERNAME: MQTT_USERNAME,
    REACT_APP_MQTT_PASSWORD: MQTT_PASSWORD,
    REACT_APP_WS_PORT: WS_PORT
  } = process.env
  const opts = { username: MQTT_USERNAME, password: MQTT_PASSWORD }
  
  return (
    <ChakraProvider theme={theme}>
      <MqttProvider url={`ws://${LOCAL_IP}:${WS_PORT}`} opts={opts}>
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <ColorModeSwitcher justifySelf="flex-end" />
            <VStack spacing={2}>
              <ConnectionStatus />
              <PublishButton label="Open Door" topic="door" message={{state: "open"}} />
              <PublishButton label="Close Door" topic="door" message={{state: "closed"}} />
              <Light />
            </VStack>
          </Grid>
        </Box>
      </MqttProvider>
    </ChakraProvider>
  );
}

export default App;
