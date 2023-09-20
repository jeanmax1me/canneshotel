"use client";

import Script from 'next/script';
import { useEffect, useRef } from 'react';

const Page = () => {
  // Reference to the script element
  const scriptRef = useRef();

  // Function to initialize the Booking.com affiliate widget
  const initializeBookingWidget = () => {
    var BookingAffiliateWidget = new Booking.AffiliateWidget({
      "iframeSettings": {
        "selector": "bookingAffiliateWidget_9c7fbbfb-9b6e-4bff-a7c9-9431da88a96d",
        "responsive": true
      },
      "widgetSettings": {
        "ss": "Cannes, Provence-Alpes-Côte d'Azur, France",
        "latitude": 43.55245,
        "longitude": 7.021873,
        "zoom": 14
      }
      // Add more initialization settings here as needed
    });
  };

  useEffect(() => {
    // Load the Booking.com affiliate SDK script
    scriptRef.current = document.createElement('script');
    scriptRef.current.src = 'https://www.booking.com/affiliate/prelanding_sdk';
    scriptRef.current.async = true;
    scriptRef.current.onload = initializeBookingWidget; // Call initialization function when the script is loaded

    // Append the script element to the document
    document.body.appendChild(scriptRef.current);

    // Clean up the script element when the component is unmounted
    return () => {
      if (scriptRef.current) {
        document.body.removeChild(scriptRef.current);
      }
    };
  }, []); // The empty dependency array ensures this effect runs once after the initial render

  return (
    <div className="h-[1400px]">
      <div id="bookingAffiliateWidget_9c7fbbfb-9b6e-4bff-a7c9-9431da88a96d">&nbsp;</div>
    </div>
  );
};

export default Page;
