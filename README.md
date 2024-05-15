# [WIP] FVS UI

The user interface framework for Fleet Van Systems. The framework consists of Dashboard UI components for a variety of "smart van" sensor types and utility hooks for interacting with MQTT brokers.

## Setup
Clone the repo and create a `.env.local` based on `.env.example`
```
git clone git@github.com:jesseflorig/fvs-ui.git
cd fvs-ui
cp .env.example .env.local
```
Modify `.env.local` file to match your MQTT broker username and password. You may also need to change the websocket port for your MQTT broker (default `9001`).
You may also need to update the environment vairable being set on the `start` script in `package.json`:
```
"start": "REACT_APP_LOCAL_IP=$(ifconfig en0 | grep -i mask | awk '{print $2}') ...",
                                        ^^^
```
Replace `en0` with your machine's default interface (usually `eth0`). The application could be setup to use `localhost` if you're MQTT broker is running locally, however this still breaks if you want to test your UI on other devices on the network.

## Roadmap

### Components
- [x] MqttContext - _React createContext wrapper_
- [x] MqttProvider - _Context provider for MqttContext_

#### Controls
- [ ] LightControl
- [ ] RgbLightControl
- [ ] DoorControl

### Utility Hooks
- [x] useMqttState - _React useContext wrapper_
- [x] useMqttSubscription - _mqtt subscription hook_
