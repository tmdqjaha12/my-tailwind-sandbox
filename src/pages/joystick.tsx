import Link from "next/link";
import { useEffect } from "react";

const Joystick = () => {
  useEffect(() => {
    const joy: any = document.getElementById("joy");
    joy.width = 200;
    joy.height = 200;

    let startX: any, startY: any, moveX: any, moveY: any;
    const joyPos = joy.getBoundingClientRect();
    let onTouch = false;
    const down = (event: any) => {
      try {
        startX = Math.round(event.touches[0].clientX - joyPos.left);
        startY = Math.round(event.touches[0].clientY - joyPos.Top);
      } catch {
        startX = Math.round(event.clientX - joyPos.left);
        startY = Math.round(event.clientY - joyPos.top);
      }
      onTouch = true;
    };

    let moveMax = 40;
    let msgPrev = "s";
    let msg = "s";
    const move = (event: any) => {
      if (onTouch) {
        try {
          moveX = Math.round(event.touches[0].clientX - joyPos.left) - startX;
          moveY = Math.round(event.touches[0].clientY - joyPos.top) - startY;
        } catch {
          moveX = Math.round(event.clientX - joyPos.left) - startX;
          moveY = Math.round(event.clientY - joyPos.top) - startY;
        }

        if (moveX > moveMax) moveX = moveMax;
        else if (moveX < -moveMax) moveX = -moveMax;
        if (moveY > moveMax) moveY = moveMax;
        else if (moveY < -moveMax) moveY = -moveMax;

        clearBackground();
        drawCircle(100 + moveX, 100 + moveY, 50, "rgb(255,000,051)");

        if (moveX >= 40) msg = "d";
        else if (moveX <= -40) msg = "a";
        else if (moveY <= -40) msg = "w";
        else if (moveY >= 40) msg = "x";

        if (msg != msgPrev) {
          send(msg);
          msgPrev = msg;
        }
      }
    };

    const up = () => {
      clearBackground();
      drawCircle(100, 100, 50, "rgb(255,000,051)");
      msg = "s";
      msgPrev = "s";
      onTouch = false;
      send(msg);
    };

    const send = (msg: any) => {
      console.log(msg);
    };

    const clearBackground = () => {
      ctx.clearRect(0, 0, joy.width, joy.height);
      ctx.beginPath();
      ctx.strokeStyle = "rgb(153,000,051)";
      ctx.arc(100, 100, 90, 0, 2 * Math.PI);
      ctx.stroke();
    };

    const drawCircle = (x: any, y: any, r: any, c: any) => {
      ctx.beginPath();
      ctx.fillStyle = c;
      ctx.arc(x, y, r, 0, 2 * Math.PI);
      ctx.fill();
    };

    joy.addEventListener("touchstart", down);
    joy.addEventListener("touchmove", move);
    joy.addEventListener("touchend", up);
    joy.addEventListener("mousedown", down);
    joy.addEventListener("mousemove", move);
    joy.addEventListener("mouseup", up);
    const ctx = joy.getContext("2d");
    ctx.lineWidth = 10;
    clearBackground();
    drawCircle(100, 100, 50, "rgb(255, 000, 051");
  }, []);

  return (
    <>
      <div>
        <Link href={"/"}>
          <a className="text-white">뒤로가기</a>
        </Link>
        <canvas
          id="joy"
          className="border-4 border-gray-300 border-dashed"
        ></canvas>
      </div>
    </>
  );
};

export default Joystick;
