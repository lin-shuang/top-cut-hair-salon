const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-content");

function openPopup(imageSrc, description) {
  const popupImage = document.getElementById("popup-image");
  const popupDescription = document.getElementById("popup-description");

  popup.style.display = "block"; // Show the popup
  popupImage.src = imageSrc; // Set the image source
  popupDescription.textContent = description; // Set the description
}

function closePopup() {
  popup.style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside the content
popup.addEventListener("click", function (e) {
  if (e.target === popup) {
    closePopup();
  }
});
