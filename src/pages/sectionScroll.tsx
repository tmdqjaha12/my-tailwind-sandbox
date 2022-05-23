import { useEffect } from "react";

const SectionScroll = () => {
  useEffect(() => {
    const sections: any = document.querySelectorAll("section");
    const navLi: any = document.querySelectorAll("nav .container ul li");
    window.onscroll = () => {
      var current = "";

      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li: any) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
          li.classList.add("active");
        }
      });
    };
  }, []);

  return (
    <>
      <div>
        <nav>
          <div className="container">
            <ul>
              <li className="home active">
                <a href="#home">Home</a>
              </li>
              <li className="about">
                <a href="#about">About</a>
              </li>
              <li className="contact">
                <a href="#contact">Contact</a>
              </li>
              <li className="footer">
                <a href="#footer">Footer</a>
              </li>
            </ul>
          </div>
        </nav>
        <section id="home">
          <h1>This is my home page</h1>
        </section>
        <section id="about">
          <h1>You can read about me here</h1>
        </section>
        <section id="contact">
          <h1>
            Wanna Contact me just <u>click here</u>
          </h1>
        </section>
        <section id="footer">
          <h1>This page created in 2021</h1>
        </section>
      </div>
    </>
  );
};

export default SectionScroll;
