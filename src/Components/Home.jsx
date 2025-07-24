/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "/src/images/alex-knight-2EJCSULRwC8-unsplash.jpg";

const imageAltText = "White robot holding a screen with a tag that says 'pepper'";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative" }}>
      <img className="background" src={image} alt="" style={{ userSelect: "none" }} />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          userSelect: "none",
          height: "100%",
          background: "rgba(255, 255, 255, 0.05)", // overlay branco semitransparente
          zIndex: 1,
        }}
      />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem", zIndex: 2 }}>
        <h1
          style={{
            color: "#fff",
            margin: 0,
            cursor: "default",
            textShadow: `
              0 0 6px #000,
              0 0 12px #000,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000
            `,
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            color: "#fff",
            margin: 0,
            cursor: "default",
            textShadow: `
              0 0 6px #000,
              0 0 12px #000,
              2px 2px 0 #000,
              -2px -2px 0 #000,
              2px -2px 0 #000,
              -2px 2px 0 #000
            `,
          }}
        >
          {title}
        </h2>
      </div>
      <div
        role="button"
        tabIndex={0}
        aria-label="Scroll to about section"
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          zIndex: 2,
          cursor: "pointer", // pode deixar só esse!
          background: "none",
          border: "none",
          outline: "none",
        }}
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
      >
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
