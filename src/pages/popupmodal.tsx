import Link from "next/link";
import { useEffect } from "react";

const Popupmodal = () => {
  useEffect(() => {
    const click: any = document.getElementById("click");
    const close: any = document.getElementById("close");
    const modal1: any = document.getElementById("modal-1");
    // Get Elements

    click.addEventListener("click", () => {
      modal1.style.display = "block";
      click.style.display = "none";
    });

    close.addEventListener("click", () => {
      modal1.style.display = "none";
      click.style.display = "block";
    });
  }, []);

  return (
    <>
      <div id="popupmodal">
        <button id="click">Click Me</button>
        <div>
          <Link href={"/"}>
            <a className="text-white">뒤로가기</a>
          </Link>
        </div>
        <div id="modal-1">
          <h3>This is a Modal</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque hic
            eligendi, in, ipsa numquam enim expedita excepturi atque maiores
            optio possimus libero voluptate quibusdam dolore!
          </p>
          <button id="close">Close</button>
        </div>
      </div>
    </>
  );
};

export default Popupmodal;
