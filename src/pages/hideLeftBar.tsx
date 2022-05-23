import Link from "next/link";
import { useEffect } from "react";

const HideLeftBar = () => {
  useEffect(() => {
    const open: any = document.getElementById("open");
    const close: any = document.getElementById("close");
    const sidebar: any = document.getElementById("sidebar");

    open.onclick = () => {
      sidebar.style.left = 0;
      open.style.display = "none";
      close.style.display = "block";
    };
    close.onclick = () => {
      sidebar.style.left = "-206px";
      close.style.display = "none";
      open.style.display = "block";
    };
  }, []);
  return (
    <>
      <div id="left-bar">
        <div>
          <Link href={"/"}>
            <a className="text-white">뒤로가기</a>
          </Link>
        </div>
        <div id="sidebar">
          <ul>
            <li>Home</li>
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
          </ul>
        </div>
        <div>
          <button id="close">close</button>
          <button id="open">open</button>
        </div>
      </div>
    </>
  );
};

export default HideLeftBar;
