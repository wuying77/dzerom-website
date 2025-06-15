import { useState } from 'react';

export function useTextZoom(initialSize = 16) {
  const [zoomLevel, setZoomLevel] = useState(initialSize);

  return {
    zoomLevel,
    setZoomLevel
  };
}
