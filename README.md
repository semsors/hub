# Hub
Semsors Hub provides simply interface to test your Semsors devices. So far it supports only HTTP gateway, but MQTT protocol will be included in one of the future releases. Graph updates instantly when new data arrives.

It requires WebSockets to work correctly. Tested in Google Chrome and Mozilla Firefox.

![Hub](https://zippy.gfycat.com/CheerfulAstonishingFantail.gif)

## Installation
Install NPM dependecies:
```bash
npm install
```
And Bower:
```
bower install
```

## HTTP gateway
To send new readings make POST request as follow:
```
POST / HTTP/1.1
Host: <HOSTNAME>:<HTTP_GATEWAY_PORT>
Content-Type: application/json

{
    "readings": [10, 20, 15]
}
```
Try with cURL:
```
curl -X POST -H "Content-Type: application/json" -d '{
    "readings": [10, 20, 15]
}' "http://localhost:8080/"
```
## Run
Production:
```
npm start
```
You can specify Hub and gateway ports:
```bash
HUB_PORT=3000 HTTP_GATEWAY_PORT=8010 npm start
```
Development (will launch Hub in nodemon and will watch for changes in js/less files):
```
gulp
```
