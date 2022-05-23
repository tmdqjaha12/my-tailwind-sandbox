import Link from "next/link";
import { useEffect } from "react";

const HideTopbar = () => {
  useEffect(() => {
    let lastScrollTop: any; // This Varibale will store the top position

    let navbar: any = document.getElementById("navbar"); // Get The NavBar

    window.addEventListener("scroll", function () {
      //on every scroll this funtion will be called

      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      //This line will get the location on scroll

      if (scrollTop > lastScrollTop) {
        //if it will be greater than the previous
        navbar.style.top = "-80px";
        //set the value to the negetive of height of navbar
      } else {
        navbar.style.top = "0";
      }

      lastScrollTop = scrollTop; //New Position Stored
    });
  }, []);

  return (
    <>
      <div className="container">
        <nav id="navbar">
          <h1>NAVBAR</h1>
        </nav>
      </div>
      <footer>
        <h3>End of the Page</h3>
        <div>
          <Link href={"/"}>
            <a>뒤로가기</a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default HideTopbar;
