#include "api.h"

void init_api(AsyncWebServer& server) {
  server.on("/api/events", HTTP_GET, api_events);
  server.on("/api/status", HTTP_GET, api_status);
}

void api_status(AsyncWebServerRequest* request) {
  JsonDocument rv;

  rv["status"] = "success";

#if defined(HW_LILYGO)
  rv["result"][0]["hardware"] = "LilyGo T-CAN485";
#elif defined(HW_STARK)
  rv["result"][0]["hardware"] = "Stark CMR Module";
#endif
  rv["result"][0]["uptime"] = uptime_formatter::getUptime();
  rv["count"] = rv["result"].size();
#ifdef FUNCTION_TIME_MEASUREMENT
  rv["result"][0]["core_task_max_us"]     = datalayer.system.status.core_task_max_us;
  rv["result"][0]["core_task_10s_max_us"] = datalayer.system.status.core_task_10s_max_us;
  rv["result"][0]["mqtt_task_10s_max_us"] = datalayer.system.status.mqtt_task_10s_max_us;
  rv["result"][0]["wifi_task_10s_max_us"] = datalayer.system.status.wifi_task_10s_max_us;
  rv["result"][0]["loop_task_10s_max_us"] = datalayer.system.status.loop_task_10s_max_us;
  rv["result"][0]["time_snap_10ms_us"]    = datalayer.system.status.time_snap_10ms_us;
  rv["result"][0]["time_snap_5s_us"]      = datalayer.system.status.time_snap_5s_us;
  rv["result"][0]["time_snap_comm_us"]    = datalayer.system.status.time_snap_comm_us;
  rv["result"][0]["time_snap_cantx_us"]   = datalayer.system.status.time_snap_cantx_us;
  rv["result"][0]["time_snap_ota_us"]     = datalayer.system.status.time_snap_ota_us;
#endif
  wl_status_t status = WiFi.status();
  rv["result"][0]["wifi"]["ssid"]  = ssid;
  rv["result"][0]["wifi"]["state"] = getConnectResultString(status);

  request->send(200, "application/json", rv.as<String>());
}

void api_events(AsyncWebServerRequest* request) {
  JsonDocument rv;
  const EVENTS_STRUCT_TYPE* event_pointer;
  unsigned long timestamp_now = get_current_event_time_secs();

  rv["status"] = "success";
  rv["result"] = JsonArray();
  for (int i = 0; i < EVENT_NOF_EVENTS; i++) {
    event_pointer = get_event_pointer((EVENTS_ENUM_TYPE)i);
    EVENTS_ENUM_TYPE event_handle = static_cast<EVENTS_ENUM_TYPE>(i);
    if (event_pointer->occurences > 0) {
      JsonDocument ev;
      ev["event_type"] = String(get_event_enum_string(event_handle));
      ev["severity"] = String(get_event_level_string(event_handle));
      ev["last_event"] = timestamp_now - event_pointer->timestamp;
      ev["count"] = event_pointer->occurences;
      ev["data"] = String(event_pointer->data);
      ev["message"] = String(get_event_message_string(event_handle));
      rv["result"].add(ev);
    }
  }
  rv["count"] = rv["result"].size();
  request->send(200, "application/json", rv.as<String>());
}
