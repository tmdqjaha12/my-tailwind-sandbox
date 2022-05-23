import Link from "next/link";
import { useEffect } from "react";

const MouseTracking = () => {
  useEffect(() => {
    let eyeBall: any = document.querySelector("#eyeBall");

    document.onmousemove = (event) => {
      let x = (event.clientX * 100) / window.innerWidth + "%";
      let y = (event.clientY * 100) / window.innerHeight + "%";

      eyeBall.style.transition = "0s";
      eyeBall.style.left = x;
      eyeBall.style.top = y;
    };

    document.onmouseout = (event) => {
      eyeBall.style.transition = "0.7s";
      eyeBall.style.left = "50%";
      eyeBall.style.top = "50%";
    };
  }, []);

  return (
    <>
      <div>
        <Link href="/">
          <a>뒤로가기</a>
        </Link>
      </div>
      <h1>Mouse Tracker</h1>
      <br />
      <h2>
        출처:
        https://dev.to/areeburrub/mouse-tracker-in-just-10-lines-of-javascript-36d9
      </h2>
      <div id="eye">
        <div id="eyeBall"></div>
      </div>
    </>
  );
};

export default MouseTracking;
