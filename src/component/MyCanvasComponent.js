import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";

const videoUrl =
  "https://www.shutterstock.com/shutterstock/videos/1093857189/preview/stock-footage-funny-brown-curly-dog-on-a-trip-happy-curious-mini-poodle-puppy-doggie-traveling-peeks.webm";

const MyCanvasComponent = () => {
  const canvasRef = useRef(null);

  function createVideoElementOnCanvas() {
    const videoElement = document.createElement("video");
    videoElement.src = videoUrl;
    videoElement.width = 800;
    videoElement.height = 600;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.setAttribute("crossOrigin", "anonymous");

    videoElement.addEventListener("loadeddata", () => {
      const canvas = new fabric.Canvas(canvasRef.current, {
        height: 800,
        width: 800,
        backgroundColor: "#fffce8",
      });

      const fabricVideo = new fabric.Image(videoElement, {
        left: 100,
        top: 40,
        width: 400,
        height: 300,
        selectable: true,
      });

      canvas.add(fabricVideo);
      canvas.renderAll();
      videoElement.play();
    });
  }

  useEffect(() => {
    createVideoElementOnCanvas();
  }, []);

  return <canvas id="canvas" ref={canvasRef} />;
};

export default MyCanvasComponent;
