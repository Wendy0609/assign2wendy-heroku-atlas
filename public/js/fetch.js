// Since the execution of this `app.js` script will be long finished by the time the following `fetch()` call returns data, we need to put our loop inside the second .then(). Check out this CSS Tricks article for the details about what's going on here. 
// https://css-tricks.com/using-fetch/
fetch('https://assign2wendy-heroku-atlas.herokuapp.com/api/Wendy')
  .then(function(response){
    return response.json();
  })
  // .then(function(destinations){
  .then(function(Wendy){
  // const imgList = destinations;
  const imgList = Wendy;
  // Variable where we will store our img tags

let imgTemplate = ''; 

// Flex container for images
const gallery = document.querySelector('.array-gallery'); 
 
imgList.forEach(function(item){
  console.log(item);
  imgTemplate += 
  `<figure>
  <a href="${item.url}">
  <img src="${item.fileName}" alt="${item.title}" title="${item.title}">
  </a>
  <figcaption>${item.title}</figcaption>
        </figure>`;
});

 gallery.innerHTML = imgTemplate ;
});