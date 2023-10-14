window.onload = async function () {

    const {Place} = await google.maps.importLibrary("places");

    // Replace with your Google Maps API Key
    const apiKey = "AIzaSyAEzbRp3mqa1X5D_2_zkV9LgSGLKWwNeBA";

    // Replace with the Place ID of the business
    const placeId = "ChIJZYL77wezxokRydiONE5IIjw";

    // The maximum number of photos to retrieve
    var maxPhotos = 10;

    // Initialize the Google Places Service
    var service = new google.maps.places.PlacesService(document.createElement('div'));

    // Retrieve photos for the specified place
    service.getDetails(
        { placeId: placeId, fields: ['photos'] },
        function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK && place.photos) {
                // Get the container where you want to display the photos (assuming a div with id 'photo-gallery')
                var galleryContainer = document.querySelector(".image-grid");
      
                // Loop through the photos and create gallery items
                place.photos.forEach(function (photo, index) {
                    var imgSrc = photo.getUrl({ maxWidth: 500, maxHeight: 500 });

                    // No date parameter for Place Photos class
                    //var date = new Date(photo.creationTime).toDateString();
                    var date = "";
            
                    // Create a new gallery item
                    var galleryItem = document.createElement('div');
                    galleryItem.classList.add('grid-item');
            
                    // Create the image element
                    var imgElement = document.createElement('img');
                    imgElement.src = imgSrc;
            
                    // Create the description elements
                    var description = document.createElement('div');
                    description.classList.add('description');
                    description.innerHTML = '<b>' + date + '</b>';
            
                    var descriptionClickable = document.createElement('div');
                    descriptionClickable.classList.add('description-clickable');
                    descriptionClickable.innerHTML = 'Click to open';
            
                    // Add an event listener to open the popup when the description is clicked
                    descriptionClickable.addEventListener('click', function () {
                        openPopup(imgSrc, date);
                    });
            
                    // Append elements to the gallery item
                    galleryItem.appendChild(imgElement);
                    galleryItem.appendChild(description);
                    galleryItem.appendChild(descriptionClickable);
            
                    // Append the gallery item to the gallery container
                    galleryContainer.appendChild(galleryItem);
                });
            }
        }
    );
}