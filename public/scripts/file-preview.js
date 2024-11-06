const filePickerElement = document.getElementById("image");
const imagePreview = document.getElementById("image-preview");

function showImage() {
  const files = filePickerElement.files;
  if (!files || files.length === 0) {
    imagePreview.style.display = "none";
    return;
  }

  const pickedFile = files[0];

  imagePreview.src = URL.createObjectURL(pickedFile);
  imagePreview.style.display = "block";
}

filePickerElement.addEventListener("change", showImage);
