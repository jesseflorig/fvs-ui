# [WIP] FVS UI

The user interface library for Fleet Van Systems. The library consists of Dashboard UI components for a variety of "smart van" sensor types and utility hooks for interacting with MQTT brokers.

## Setup
```
git clone
cd fvs-ui
cp .env.example .env
```
Modify the `.env` file to match your MQTT broker username and password. You may also need to change the websocket port for your MQTT broker (default `9001`).
You may also need to update the environment vairable being set on the `start` script in `package.json`:
```
"//": "Replace 'en0' with your default interface - usually eth0",
"start": "REACT_APP_LOCAL_IP=$(ifconfig en0 | grep -i mask | awk '{print $2}') react-scripts start",
                                        ^^^
```
The application could be setup to use `localhost` if you're MQTT broker is running locally, however this still breaks if you want to test your UI on other devices on the network.
