//create object camera
var video = document.getElementById("camera");

//access camera for chrome by default
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    });
}

//create object picture
var canvas = document.getElementById("picture");
var context = canvas.getContext("2d");
var video = document.getElementById("camera");

//draw picture to canvas
document.getElementById("btnSnap").addEventListener("click", () => {
  context.drawImage(video, 0, 0, 640, 480);
});

//download picture
document.getElementById("download").addEventListener("click", () => {
  document.getElementById("download").download = "untitled.png";
  document.getElementById("download").href = canvas
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
});
