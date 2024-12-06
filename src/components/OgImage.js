import React, { useState, useEffect } from "react";

const OgImage = ({ url, alt }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchOgImage = async () => {
      try {
        console.log("Fetching OG Image for URL:", url);

        // Fetch metadata from the API
        const response = await fetch(
          `https://api.microlink.io?url=${encodeURIComponent(url)}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data);

        // Extract the OpenGraph image URL
        if (data.status === "success" && data.data.image?.url) {
          setImageUrl(data.data.image.url);
        } else {
          console.warn("No valid OG image found.");
        }
      } catch (error) {
        console.error("Error fetching OG image:", error);
      }
    };

    fetchOgImage();
  }, [url]);

  if (!imageUrl) {
    return (
      <div className="bg-gray-200 h-48 w-full animate-pulse rounded-t-lg"></div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className="h-48 w-full object-cover rounded-t-lg"
    />
  );
};

export default OgImage;
