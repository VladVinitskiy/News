function readImage (inputId, imgId){
    const input = document.getElementById(inputId);
    const image = document.getElementById(imgId);
    const reader = new FileReader();

    if (input.files && input.files[0]) {
        reader.onload = (e) => image.src = e.target.result;
        reader.readAsDataURL(input.files[0]);
    }
}

export default readImage;