# ADC - firmware - websockets

Background: [https://youtu.be/dobBPW-nH1M](https://youtu.be/dobBPW-nH1M)

## Setup

### Microcontroller


Flash a microcontroller with the Arduino example 'Basics>AnalogReadSerial' -- best to modify the 'delay()' in the loop of that example to 20 ms or greater, rather than the default 1 ms.

The server code (index.js) assumes that the micro appears on /dev/ttyACM0; this can be changed by modifying index.js.

### NodeJS

You'll need version 11 or great of NodeJS.  It's convenient to use 'nvm' to manage your NodeJS installation. 

To install nvm, follow the instructions here:

[https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

Then install the latest stable version of node:

```
nvm install node
```

## Install the websocket server

Now you can install the server code and modules using:

```
npm install 
```

## Run the server

After installing the server, you can run it with:

```
npm start
```

## Display the graph 

Now the server should be listening to the serial port, taking in values, and displaying them in a graph via websockets -- you can see it by navigating to:

```
localhost:3000
```


