
// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

}

// the loop routine runs over and over again forever:
int i=0;
void loop() {
  // read the input on analog pin 0:
  //int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(i);//sensorValue);
  delay(10);        // delay in between reads for stability
  i = (i+1)%100;
}
