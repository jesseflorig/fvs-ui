import React from 'react';
import {
  ChakraProvider,
  Stack,
  theme,
} from '@chakra-ui/react';
import Layout from './Layout'
import MqttProvider from './MqttProvider'
import Doors from './Doors'
import Rooms from './Rooms'

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
        <Layout>
          <Stack>
          <Doors />
          <Rooms />
          </Stack>
        </Layout>
      </MqttProvider>
    </ChakraProvider>
  );
}

export default App;
