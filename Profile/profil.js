
function uploadFile(image) {
// https://stackoverflow.com/questions/36067767/how-do-i-upload-a-file-with-the-js-fetch-api
fetch('https://api.imgbb.com/1/upload?expiration=600&key=21e75b819f13d41e4a37e97519e42546', 'image'{
  method: 'POST',
  body: loadFile
})
}

function convertToBinary(file) {
  console.log({ file })
  var reader = new FileReader();
  reader.onloadend = function () {
    // console.log('Encoded Base 64 File String:', reader.result);\
    const base64 = reader.result;
    if (base64) {
      uploadFile(base64)
    }
  }
  reader.readAsDataURL(file);
}

var loadFile = function (event) {
  const file = event.target.files[0];
  var output = document.getElementById('output');
  var gambar = URL.createObjectURL(file);
  output.src = gambar;
  convertToBinary(file)

};