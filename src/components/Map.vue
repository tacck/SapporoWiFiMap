<template>
  <div id="map"></div>
</template>

<script>
import wifiData from "../assets/sapporo-wifi.json";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  mounted() {
    // 地図作成 札幌駅
    const map = L.map("map")
      .setView([43.0680165, 141.3519007], 15)
      .addLayer(
        L.tileLayer("https://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            'Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a>'
        })
      );

    // 現在位置へ
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          map.setView([position.coords.latitude, position.coords.longitude], 15)
        }
      );
    } else {
      console.log("Not Geo");
    }

    // WiFiの情報をピンに
    wifiData.forEach(item => {
      L.marker([item.latitude, item.longitude])
        .bindPopup(
          `<b>SSID: ${item.ssid}</b><br>info: <a href="${item.url}">${item.url}</a>`
        )
        .addTo(map);
    });
  }
};
</script>
