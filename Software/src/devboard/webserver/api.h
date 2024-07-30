#pragma once

#include "webserver.h"
#include <WiFi.h>
#include "../../datalayer/datalayer.h"
#include "../utils/events.h"
#include "../../lib/bblanchon-ArduinoJson/ArduinoJson.h"

void api_status(AsyncWebServerRequest* request);
void api_events(AsyncWebServerRequest* request);
void init_api(AsyncWebServer& server);
