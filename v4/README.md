# ADC - firmware - websockets

Background: [https://youtu.be/dobBPW-nH1M](https://youtu.be/dobBPW-nH1M)

## Setup

### Microcontroller

Assumes that a microcontroller is running Arduino:  Examples>Basics>AnalogReadSerial 

(but modify the 'delay' to about 20 ms)

and plugged into /dev/ttyACM0

### NodeJS

You'll need version 11 or great of NodeJS.  It's convenient to use 'nvm' to accomplish this; follow the instructions here:

[https://github.com/nvm-sh/nvm#installing-and-updating](https://github.com/nvm-sh/nvm#installing-and-updating)

## Install

```
npm install 
```

## Run

```
npm start
```

## Use

Navigate browswer to localhost:3000


