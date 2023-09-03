document.addEventListener('DOMContentLoaded', fetchAircraftPhotoAndInfoOfTheDay);

async function fetchAircraftPhotoAndInfoOfTheDay() {
  try {
    const today = new Date();
    const dateString = today.toISOString().split('T')[0];

    // Fetch aircraft photo
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        query: 'aircraft',
        featured: true,
        orientation: 'portrait',
        per_page: 1,
        seed: dateString
      },
      headers: {
        Authorization: 'Client-ID Tmizc3nbr-auettNYWRezxL9ST_BU-ryiltAliLeCXo' 
      }
    });

    const photoData = response.data;

    // Fetch aircraft model info from AviationStack API
    const aircraftInfo = await fetchAircraftModelInfo();

    // Display the aircraft photo and model info
    displayPhotoAndInfo(photoData, aircraftInfo);
  } catch (error) {
    console.error('Error fetching aircraft photo and info:', error);
  }
}

async function fetchAircraftModelInfo() {
  const aviationStackApiKey = '82526154198507f05a3c277dc50de0ad';
  const aircraftRegistration = 'ABC123'; // Replace with the actual aircraft registration
  const apiUrl = `http://api.aviationstack.com/v1/aircraft_types?registration=${aircraftRegistration}&access_key=${aviationStackApiKey}`;

  try {
    const response = await axios.get(apiUrl);
    const aircraftInfo = response.data.data[0]; // Assuming you get an array of results, use the first one

    return {
      modelName: aircraftInfo.aircraft_name,
      features: aircraftInfo.description
    };
  } catch (error) {
    console.error('Error fetching aircraft model info:', error);
    return {};
  }
}

function displayPhotoAndInfo(photoData, aircraftInfo) {
  const photoContainer = document.getElementById('photoContainer');
  const aircraftInfoContainer = document.getElementById('aircraftInfo');

  const imageElement = document.createElement('img');
  imageElement.src = photoData.urls.regular;
  imageElement.alt = 'Aircraft';
  photoContainer.appendChild(imageElement);

  const modelNameElement = document.createElement('h3');
  modelNameElement.textContent = 'Model Name: ' + aircraftInfo.modelName;
  aircraftInfoContainer.appendChild(modelNameElement);

  const featuresElement = document.createElement('p');
  featuresElement.textContent = 'Features: ' + aircraftInfo.features;
  aircraftInfoContainer.appendChild(featuresElement);
}
