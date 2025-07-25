/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/jonathan-kemper-MMUzS5Qzuus-unsplash.jpg";

const imageAltText = "wooden desktop with laptop showing ChatGPT";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "End-to-end E-commerce Data Pipeline",
    description:
      "An end-to-end project simulating a real-world data workflow. It covers everything from setting up a relational database in MySQL, through data cleaning and Exploratory Data Analysis (EDA) with Python/Pandas, to creating an interactive dashboard in Power BI and developing a predictive model.",
    url: "https://github.com/hiyuk1/pipeline-dados-ecommerce",
  },
  {
    title: "Full-Stack Social Media Platform (Sentimetrik) (Incoming)",
    description:
      "A comprehensive social media platform featuring user authentication, real-time messaging, post creation and interaction, sentiment analysis of posts, and data visualization dashboards. Built with modern web technologies and microservices architecture.",
    url: "",
  },
  {
    title: "Spotify Data Pipeline & Playlist Analysis (Incoming)",
    description:
      "Comprehensive analysis of Spotify listening patterns and intelligent playlist generation using data pipelines and machine learning algorithms.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" tabIndex={-1}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "3rem",
        }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
              ) : (
                <h3 style={{ flexBasis: "40px", color: "#888", cursor: "default" }}>
                  {project.title}
                </h3>
              )}
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
