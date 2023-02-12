

function takeScreenshot(element) {
  let video = document.createElement('video');
  let canvas = document.createElement('canvas');
  let canvas2 = document.createElement('canvas');
  let streaming = false;

  navigator.mediaDevices.getDisplayMedia({ video: { cursor: "never" }, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch(function(err) {
      console.log("An error occurred: " + err);
    });

  // wait for stream to start
  video.addEventListener('canplay', (evt) => {
    if (!streaming) {
      let width = video.videoWidth;
      let height = video.videoHeight;
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);

      streaming = true;

      const bcr = element.getBoundingClientRect();
      const sX = bcr.left;
      const sY = (height - window.innerHeight) + bcr.top;
      const sW = bcr.width;
      const sH = bcr.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, width, height);

      canvas2.width = bcr.width;
      canvas2.height = bcr.height;
      const ctx2 = canvas2.getContext('2d');
      ctx2.drawImage(canvas, sX, sY, sW, sH, 0, 0, bcr.width, bcr.height);

      // create a link and click to download it
      const a = document.createElement('a');
      a.download = "screenshot.png";
      a.href = canvas2.toDataURL('image/png');
      a.click();

      // stop share
      video.srcObject.getTracks().forEach(t => t.stop());
      video.srcObject = null;
    }
  });
}
