function fetchCatImage() {
  let image = document.getElementById("random-cat-image");
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((resp) => resp.json())
    .then((json) => (image.src = json[0].url));
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCatImage();
  let button = document.getElementById("another-cat-button");
  button.addEventListener("click", fetchCatImage);
});
