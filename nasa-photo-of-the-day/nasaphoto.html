'use strict';
const NASA_SEARCH_URL = `https://images-api.nasa.gov/search?`;

function watchNASASubmit() {
  $('.NASA-search').submit(event => {
    event.preventDefault();
  const query = $('#NASA-search-box').val();
  // clear out the input (setter)
  $('#NASA-search-box').val("");
  // clear out previous search results
  clearResults();
  if (query == 0) {
    $('#error').html(`<div class="error">Give us something to search!</div>`);
                }
  else {getNASADataFromApi(query, validateResults);
  console.log("get NASA Data from API " + getNASADataFromApi);
}
});
};

function getNASADataFromApi(searchTerm, callback) {
  const query = { 
    q: `${searchTerm}`,
  }

  $.getJSON(NASA_SEARCH_URL, query, callback);
    console.log('It is done!', query);
}  

function validateResults(receivedApiData) {

  console.log("This is received API Data " , receivedApiData.collection);
  if (receivedApiData.collection.items.length === 0) {
    console.log("error");
    $('#error').html(`<div class="error">Sorry, your search did not yield results!</div>`);
 }

   else {
    $('#error').html(''); 
    displayNASASearchData(receivedApiData.collection.items);
            }
};

function clearResults(){
  $('#js-count-results, #js-videos-results,#js-images-results').html('');
};

function renderImagesResults(images) {
 console.log('result=' + 'images ' + images.length);
  let imagesHTML = "";
  for (let i =0; i<images.length; i++){
    const imageThumbURL = images[i].links[0].href; //pulls thumbnails
    const imageCollectionHref = images[i].href;
    const imageDescrip = images[i].data[0].description;
    const imageTitle = images[i].data[0].title;
    getCollectionJSON(imageCollectionHref).then(function (imageArray){
      const origImageURL = imageArray[0];
      // console.log("This is the original image " + origImageURL);
      imagesHTML += `<div id="display-images" class="row"><div class="col-3"><h3 class="title-display">Image Title: ${imageTitle}</h3><a href="${origImageURL}" + "' target='_blank' class="view-hover-effect"><button type="button" class="fullsize-image">View Full Size<STYLE>A {text-decoration: none;}</STYLE></button></a>
    <img src="${imageThumbURL}" alt="${imageDescrip}">
    <p class="descript-styles">${imageDescrip}
    </p></div>
    </div>`;
    $('#js-images-results').html(
      imagesHTML
        );
    $('#back-to-top-button').html(    
    `<a href="#header-content-container"><button>Back to top</button></a>`
    )
    });
    };
  }
  function renderVideosResults(videos) {
    console.log('videos ' + videos.length);
  let videosHTML = "";
  for (let i=0; i<videos.length; i++){
    const videoJSON = videos[i].href;
    const videoURL = getVideoURL(videoJSON);
    const largeVideoURL = getLgVideoURL(videoJSON);
    const videoDescrip = videos[i].data[0].description;
    let videoTitle = videos[i].data[0].title;
    //removing hyphens and dashes from Video Titles and replacing them with spaces
    videoTitle= videoTitle.replace(/[_-]/g, " ");
    console.log("video JSON " + videoJSON);
    console.log("video description " + videoDescrip);
    videosHTML += `<div id="display-videos" class="row"> <div class="col-3"> <h3 class="title-display">Video Title: ${videoTitle}</h3><div class="display-box"><video src="${videoURL}" controls></video><p class="dont-break-out">${videoDescrip}</p></div></div></div>`
  };

 $('#js-videos-results').html(
  videosHTML
    );
}
function getCollectionJSON(imageCollectionHref) {
  return $.getJSON(imageCollectionHref);
}

function renderResultsCount(imagesCount, videosCount){
    let countHTML = "";
    countHTML += `<div id="display-results-count"><p class="display-results-heading">Your Search Found ${imagesCount} images and ${videosCount} videos</p></div>` + `<div>
    <nav><a href="#display-videos"><button>Videos</button></a>   <a href="#display-images"><button>Images</button></a></nav>
    </div>`;
    $('#js-count-results').html(
      countHTML
)}  


function getVideoURL(videoJSON) {
  // replace space with %20 in URL
  videoJSON = videoJSON.replace(/\s/g, '%20');
  // split URL at slashes to find video path
  const splitURL = videoJSON.split('/');
  // console.log('this is a split URL' + splitURL);
  const videoPath = splitURL[4];
  // replace collection.json with video path
  // stretch goal: choose video sizes based on screen resolution 
  const videoURL = videoJSON.replace('collection.json', `${videoPath}~small.mp4`);
  console.log('videoURL', videoURL);
  return videoURL;
}

function getLgVideoURL(videoJSON) {
  // replace space with %20 in URL
  videoJSON = videoJSON.replace(/\s/g, '%20');
  // split URL at slashes to find video path
  const splitURL = videoJSON.split('/');
  // console.log('this is a split URL' + splitURL);
  const videoPath = splitURL[4];
  // replace collection.json with video path
  // stretch goal: choose video sizes based on screen resolution 
  const lgVideoURL = videoJSON.replace('collection.json', `${videoPath}~orig.mp4`);
  return lgVideoURL;
}

function grabByType(item) {
  //the object passed to the filter callback is reference using this
  return (item.data[0].media_type == this.type);
}


function displayNASASearchData(searchData) {
  // debugger;
    console.log("This is Search Data: " + JSON.stringify(searchData)); 
    const imageResults = searchData.filter(grabByType,{type: "image"});
    const videoResults = searchData.filter(grabByType,{type: "video"});
  renderImagesResults(imageResults);
  renderVideosResults(videoResults);
  renderResultsCount(imageResults.length, videoResults.length);
}

 function init () {
  watchNASASubmit();
 }
 $(init);
