// Function to embed Google Maps
function embedGoogleMaps() {
// Replace "YOUR_API_KEY" with your Google Maps API Key
const apiKey = "YOUR_API_KEY";

// Replace "PLACE_ID" with the Place ID of the business
const placeId = "PLACE_ID";

// Create the Google Maps Embed URL
const embedURL = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}`;

// Create an iframe element
const iframe = document.createElement("iframe");

// Set the attributes for the iframe
iframe.src = embedURL;
iframe.width = "100%";
iframe.height = "450";
iframe.style.border = "0"; // Optional: Remove iframe border

// Get the target div to embed the map
const targetDiv = document.getElementById("google-maps-embed");

// Append the iframe to the target div
targetDiv.appendChild(iframe);
}

// Call the function to embed Google Maps
embedGoogleMaps();
