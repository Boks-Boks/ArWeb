navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
.then(function(stream) {
  // Use the stream to create a video element or add it to a canvas
})
.catch(function(err) {
  console.log("Error: " + err);
});
