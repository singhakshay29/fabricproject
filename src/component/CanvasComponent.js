import { fabric } from "fabric";
import React, { useEffect, useRef } from "react";
//import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const CanvasComponent = () => {
  //   const canvasRef = useRef(null);
  const videoRef = useRef(null);
  //   const inputRef = useRef(null);
  //const [canvas, setCanvas] = useState("");

  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = (event) => {
  //         const videoElement = document.createElement("video");
  //         videoElement.src = event.target.result;
  //         videoElement.crossOrigin = "anonymous";

  //         fabric.util.loadImage(event.target.result, (img) => {
  //           const fabricVideo = new fabric.Image(img, {
  //             left: 200,
  //             top: 300,
  //             angle: -15,
  //             originX: "center",
  //             originY: "center",
  //             objectCaching: false,
  //           });
  //           console.log(fabricVideo);
  //           canvasRef.add(fabricVideo);
  //         });
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   };

  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      height: 800,
      width: 800,
      backgroundColor: "pink",
    });
    const video1 = new fabric.Image.fromURL(videoRef.current, {
      left: 200,
      top: 300,
      angle: -15,
      originX: "center",
      originY: "center",
      objectCaching: false,
    });
    canvas.add(video1);
    video1.getElement().play();
  }, [videoRef]);

  return (
    // <div style={{ display: "flex", flexDirection: "row" }}>
    <>
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        muted
        controls
        poster="/images/w3html5.gif"
        alt="video"
        ref={videoRef}
      />
      <canvas id="canvas" />
    </>
  );
};

export default CanvasComponent;
