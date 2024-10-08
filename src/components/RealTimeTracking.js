import React, { useEffect } from "react";
import "./RealTimeTracking.css";
import Contact from "./Contact";

const RealTimeTracking = () => {
  useEffect(() => {
    // Load the Google Maps API script
    const loadGoogleMapsApi = () => {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    // Initialize the map
    const initializeMap = () => {
      const mapOptions = {
        center: { lat: -1.2921, lng: 36.8219 },
        zoom: 12,
      };
      // Initialize the map without storing it in state
      new window.google.maps.Map(document.getElementById("map"), mapOptions);
    };

    loadGoogleMapsApi();
  }, []);

  return (
    <div className="container">
      <div className="map-container">
        <h2>Real-Time Issue Tracking</h2>
        <div id="map" className="map"></div>
      </div>
      <Contact />
    </div>
  );
};

export default RealTimeTracking;
