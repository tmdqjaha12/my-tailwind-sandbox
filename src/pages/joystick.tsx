import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Script from "next/script";

interface StickData {
  xPosition: number;
  yPosition: number;
  cardinalDirection: string;
  x: number;
  y: number;
}

const Joystick = () => {
  useEffect(() => {
    var joy1IinputPosX: any = document.getElementById("joy1PosizioneX");
    var joy1InputPosY: any = document.getElementById("joy1PosizioneY");
    var joy1Direzione: any = document.getElementById("joy1Direzione");
    var joy1X: any = document.getElementById("joy1X");
    var joy1Y: any = document.getElementById("joy1Y");

    // var Joy1 = new window.JoyStick("joy1Div", {}, () => {});
    var Joy1 = new window.JoyStick("joy1Div", {}, function (
      stickData: StickData
    ) {
      joy1IinputPosX.value = stickData.xPosition;
      joy1InputPosY.value = stickData.yPosition;
      joy1Direzione.value = stickData.cardinalDirection;
      joy1X.value = stickData.x;
      joy1Y.value = stickData.y;
    });

    setInterval(function () {
      joy1IinputPosX.value = Joy1.GetPosX();
    }, 50);
    setInterval(function () {
      joy1InputPosY.value = Joy1.GetPosY();
    }, 50);
    setInterval(function () {
      joy1Direzione.value = Joy1.GetDir();
    }, 50);
    setInterval(function () {
      joy1X.value = Joy1.GetX();
    }, 50);
    setInterval(function () {
      joy1Y.value = Joy1.GetY();
    }, 50);

    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "/js/joy.js";
    // document.body.appendChild(script);
    // console.log(window.JoyStick);
  }, []);

  useEffect(() => {
    // console.log(window.JoyStick);
  });

  return (
    <>
      <Head>
        {/* <script type="text/javascript" src="/js/joy.js" async></script> */}
      </Head>

      <Script src="/js/joy.js" strategy="beforeInteractive"></Script>
      <div>
        <Link href={"/"}>
          <a className="text-white">뒤로가기</a>
        </Link>
        {/* <div>
          <canvas
            id="joy"
            className="border-4 border-dashed border-gray-300 m-auto"
          ></canvas>
        </div> */}
        <div className="columnLateral">
          <div
            id="joy1Div"
            style={{ width: "200px", height: "200px", margin: "50px" }}
          ></div>
          Posizione X:
          <input id="joy1PosizioneX" type="text" />
          <br />
          Posizione Y:
          <input id="joy1PosizioneY" type="text" />
          <br />
          Direzione:
          <input id="joy1Direzione" type="text" />
          <br />
          X :<input id="joy1X" type="text" />
          <br />
          Y :<input id="joy1Y" type="text" />
        </div>
      </div>
    </>
  );
};

export default Joystick;
