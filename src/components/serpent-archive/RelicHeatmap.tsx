import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const relicSites = [
  { lat: 30.3285, lng: 35.4444, name: '佩特拉古城', description: '纳巴泰文明遗迹，蛇形雕刻遍布' },
  { lat: 20.6843, lng: -88.5678, name: '奇琴伊察', description: '玛雅文明羽蛇神金字塔' },
  { lat: 13.1631, lng: 79.2167, name: '马哈巴利普兰', description: '印度蛇神那伽雕像群' },
  { lat: 29.9753, lng: 31.1376, name: '吉萨高原', description: '金字塔底蛇形通道' },
  { lat: 34.5525, lng: 69.1984, name: '巴米扬山谷', description: '佛教蛇王壁画遗址' },
  { lat: -13.1631, lng: -72.5450, name: '马丘比丘', description: '印加蛇形建筑群' },
  { lat: 35.6895, lng: 139.6917, name: '东京皇居', description: '八岐大蛇传说起源地' },
  { lat: 31.2244, lng: 121.4759, name: '上海', description: '龙蛇崇拜考古发现' },
  { lat: 51.1789, lng: -1.8262, name: '巨石阵', description: '蛇形能量线交汇点' },
  { lat: 19.4326, lng: -99.1332, name: '特奥蒂瓦坎', description: '羽蛇神神庙遗址' }
];

export default function RelicHeatmap() {
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.LayerGroup | null>(null);

  useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([20, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        className: 'relic-map-tiles'
      }).addTo(map);

      // 自定义脉冲图标
      const pulseIcon = L.divIcon({
        className: 'pulse-icon',
        html: '<div class="pulse-dot"></div>',
        iconSize: [20, 20]
      });

      const markers = L.layerGroup().addTo(map);
      relicSites.forEach(site => {
        const marker = L.marker([site.lat, site.lng], { icon: pulseIcon })
          .addTo(markers)
          .bindPopup(`<b>${site.name}</b><br>${site.description}`);
      });

      mapRef.current = map;
      markersRef.current = markers;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" className="w-full h-full bg-gray-900" />;
}
