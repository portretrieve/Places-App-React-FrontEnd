import React, { useRef, useEffect } from "react";

import "./Map.css";

function Map(props) {
  const mapRef = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: props.center,
      zoom: props.zoom
    });

    new window.google.maps.Marker({ position: props.center, map: map });
  }, []);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
}

export default Map;
