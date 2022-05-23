import Link from "next/link";
import { useEffect } from "react";

const MouseTracking = () => {
  useEffect(() => {
    let eyeBall: any = document.querySelector("#eyeBall");
    let container: any = document.querySelector("#container");

    container.onmousemove = (event: any) => {
      let x =
        ((event.clientX - container.offsetLeft) * 100) / container.offsetWidth +
        "%";
      let y =
        ((event.clientY - container.offsetTop) * 100) / container.offsetHeight +
        "%";
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
      <div className="container">
        <div id="eye">
          <div id="eyeBall"></div>
        </div>
      </div>
    </>
  );
};

export default MouseTracking;
