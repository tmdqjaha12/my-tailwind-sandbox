import Link from "next/link";
import { useEffect } from "react";

const WebCam = () => {
  useEffect(() => {
    const video: any = document.getElementById("video");
    const cameraRoll: any = document.getElementById("cameraRoll");
    const snapBtn: any = document.getElementById("snap");

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.play();
      });
    }

    snapBtn.onclick = () => {
      const canvas: any = document.createElement("canvas");
      const context: any = canvas.getContext("2d");
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      cameraRoll.prepend(canvas);
    };
  }, []);

  return (
    <>
      <div id="#webcam">
        <div className="cameraContainer">
          <video id="video" autoPlay></video>
          <button id="snap">Snap a Photo</button>
        </div>

        <div id="cameraRoll"></div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Link href={"/"}>
          <a className="text-white">뒤로가기</a>
        </Link>
      </div>
    </>
  );
};

export default WebCam;
