import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";
import { Box, Typography } from "@mui/material";
import { style } from "./style";

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
    videoElement.muted = true;
    videoElement.setAttribute("crossOrigin", "anonymous");

    videoElement.addEventListener("loadeddata", () => {
      const canvas = new fabric.Canvas(canvasRef.current, {
        height: 650,
        width: 800,
        backgroundColor: "#fffce8",
      });
      const fabricVideo = new fabric.Image(videoElement, {
        left: 100,
        top: 40,
        width: 500,
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

  return (
    <Box style={style.main}>
      <Box style={style.headingBox}>
        <Typography variant="h3" style={style.heading}>
          Drag & Drop
        </Typography>
      </Box>
      <Box style={style.mycanvas}>
        <canvas id="canvas" ref={canvasRef} />
      </Box>
    </Box>
  );
};

export default MyCanvasComponent;
