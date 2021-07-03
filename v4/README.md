# ADC - firmware - websockets

Background: [https://youtu.be/dobBPW-nH1M](https://youtu.be/dobBPW-nH1M)

## Setup

### Microcontroller


Flash a microcontroller with the Arduino example 'Basics>AnalogReadSerial' -- best to modify the 'delay()' in the loop of that example to 20 ms or greater, rather than the default 1 ms.

The server code (index.js) assumes that the micro appears on /dev/ttyACM0; this can be changed by modifying index.js.

### NodeJS

You'll need version 11 or great of NodeJS.  It's convenient to use 'nvm' to accomplish this; follow the instructions here:

[https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

## Install the websocket server

```
npm install 
```

## Run the server

```
npm start
```

## Display the graph 

Navigate browswer to localhost:3000


