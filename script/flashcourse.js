// List of image URLs
const images = [
  'CvSU Course Picxx/1.jpg',
  'CvSU Course Picxx/2.jpg',
  'CvSU Course Picxx/3.jpg',
  'CvSU Course Picxx/4.jpg',
  'CvSU Course Picxx/5.jpg',
  'CvSU Course Picxx/6.jpg',
  'CvSU Course Picxx/7.jpg',
  'CvSU Course Picxx/8.jpg',
  'CvSU Course Picxx/9.jpg',
  'CvSU Course Picxx/10.jpg',
  'CvSU Course Picxx/11.jpg',
  'CvSU Course Picxx/12.jpg',
  'CvSU Course Picxx/13.jpg',
  'CvSU Course Picxx/14.jpg',
  'CvSU Course Picxx/15.jpg',
  'CvSU Course Picxx/16.jpg',
  'CvSU Course Picxx/17.jpg',
  'CvSU Course Picxx/18.jpg',
  'CvSU Course Picxx/19.jpg',
  'CvSU Course Picxx/20.jpg',
  'CvSU Course Picxx/21.jpg',
  'CvSU Course Picxx/22.jpg',
  'CvSU Course Picxx/23.jpg',
  'CvSU Course Picxx/24.jpg',
  'CvSU Course Picxx/25.jpg',
  'CvSU Course Picxx/26.jpg',
  'CvSU Course Picxx/27.jpg',
  'CvSU Course Picxx/28.jpg',
  'CvSU Course Picxx/29.jpg',
  'CvSU Course Picxx/30.jpg',
  'CvSU Course Picxx/31.jpg',
  'CvSU Course Picxx/32.jpg',
  'CvSU Course Picxx/33.jpg',
  'CvSU Course Picxx/34.jpg',
  'CvSU Course Picxx/35.jpg',
  'CvSU Course Picxx/36.jpg',
  'CvSU Course Picxx/37.jpg',
  'CvSU Course Picxx/38.jpg',
  'CvSU Course Picxx/39.jpg',
  'CvSU Course Picxx/40.jpg',
  'CvSU Course Picxx/41.jpg',
  'CvSU Course Picxx/42.jpg',
  'CvSU Course Picxx/43.jpg',
  'CvSU Course Picxx/44.jpg',
  'CvSU Course Picxx/45.jpg',
  'CvSU Course Picxx/46.jpg',
  'CvSU Course Picxx/47.jpg',
  'CvSU Course Picxx/48.jpg',
  'CvSU Course Picxx/49.jpg',
  'CvSU Course Picxx/50.jpg',
  'CvSU Course Picxx/51.jpg',
  'CvSU Course Picxx/52.jpg',
  'CvSU Course Picxx/53.jpg',
  'CvSU Course Picxx/54.jpg',
  'CvSU Course Picxx/55.jpg',
];

// Get the flash card and image display elements
const flashCard = document.getElementById('flashCard');
const imageDisplay = document.getElementById('imageDisplay');

// Function to update the image every 3 seconds
function updateImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  imageDisplay.src = randomImage;
}

// Initial image update
updateImage();

// Set an interval to update the image every 3 seconds
setInterval(updateImage, 3000);
