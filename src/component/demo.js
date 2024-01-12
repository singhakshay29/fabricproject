import React, { useRef, useEffect } from "react";

import { fabric } from "fabric";

const MyCanvas2 = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      // marginTop: 100,
      // height: 800,
      // width: 800,
      // backgroundColor: "pink",
    });
    addVideoToCanvas(canvas);
    // return () => {
    //   videoElement.pause();
    //   videoElement.removeAttribute("src");
    //   videoElement.load();
    //   document.body.removeChild(videoElement);
    // };
  }, []);

  const addVideoToCanvas = (canvas) => {
    // Create an HTML video element
    let videoElement = document.querySelector("video");
    let videoObject;
    if (!videoElement) {
      videoElement = document.createElement("video");
      videoElement.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace 'video.mp4' with the path to your video file
      videoElement.width = 400; // Set the width of the video element
      videoElement.height = 300; // Set the height of the video element
      videoElement.autoplay = true; // Start playing the video automatically
      videoElement.loop = true; // Loop the video
      videoElement.addEventListener("loadedmetadata", () => {
        // Create a Fabric.js image object with the video element
        videoObject = new fabric.Image(videoElement, {
          left: 0,
          top: 0,
          width: 400, // Set the width of the video element
          height: 300, // Set the height of the video element
          selectable: true,
        });
      });
      if (videoObject) {
        canvas.add(videoObject);
      }
      //   document.body.appendChild(videoElement);
    }
  };

  return <canvas ref={canvasRef} />;
};

export default MyCanvas2;
