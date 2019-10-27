#include <ArduinoJson.h>
#include <Ethernet.h>
#include <SPI.h>
// Incluimos librería
#include <DHT.h>
 
// Definimos el pin digital donde se conecta el sensor
#define DHTPIN 2
// Dependiendo del tipo de sensor
#define DHTTYPE DHT11
 
// Inicializamos el sensor DHT11
DHT dht(DHTPIN, DHTTYPE);

byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
IPAddress ip(192,168,0,17);
EthernetServer server(80);

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  // Comenzamos el sensor DHT
  dht.begin();
  
  while (!Serial) continue;

  // Initialize Ethernet libary
  Ethernet.begin(mac , ip);
  // Start to listen
  server.begin();

  Serial.println(F("Server is ready."));
  Serial.print(F("Please connect to http://"));
  Serial.println(Ethernet.localIP());
}

void loop() {
  // Wait for an incomming connection
  EthernetClient client = server.available();

  // Do we have a client?
  if (!client) return;

  Serial.println(F("New client"));

  // Read the request (we ignore the content in this example)
  while (client.available()) client.read();

  // Allocate a temporary JsonDocument
  // Use arduinojson.org/v6/assistant to compute the capacity.
  StaticJsonDocument<500> doc;


  // Leemos la humedad relativa------------------------------------------------
  float h = dht.readHumidity();
  // Leemos la temperatura en grados centígrados (por defecto)
  float t = dht.readTemperature();
  // leemos la luz
  
  float l = analogRead(1);
  // leemos co2
  float c = analogRead(0);

  // Guardamos en el DOC

  doc["humedad"] = h;
  doc["temperatura"] = t;
  if( l > 500 ){
    doc["luz"] = false;
  }else{
    doc["luz"] = true;
  }
  doc["CO2"] = c;
 
  // Comprobamos si ha habido algún error en la lectura
  if (isnan(h) || isnan(t) ) {
    Serial.println("Error obteniendo los datos del sensor DHT11");
    return;
  } 
  

  Serial.print(F("Sending: "));
  serializeJson(doc, Serial);
  Serial.println();

  // Write response headers
  client.println(F("HTTP/1.0 200 OK"));
  client.println(F("Content-Type: application/json"));
  client.println(F("Connection: close"));
  client.print(F("Content-Length: "));
  client.println(measureJsonPretty(doc));
  client.println();

  // Write JSON document
  serializeJsonPretty(doc, client);

  // Disconnect
  client.stop();
}
