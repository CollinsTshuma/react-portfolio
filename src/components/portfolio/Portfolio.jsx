import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
// import IMG3 from "../../assets/project3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MyReads',
    github: "https://github.com/CollinsTshuma/reactnd-myreads",
    demo: "https://github.com/CollinsTshuma/reactnd-myreads",
  },
  {
    id: 2,
    image: IMG2,
    title: 'Would You Rather',
    github: "https://github.com/CollinsTshuma/reactnd-would-you-rather",
    demo: "https://github.com/CollinsTshuma/reactnd-would-you-rather",
  },
  {
    id: 3,
    image: IMG2,
    title: 'Crypto Currency Dashboard',
    github: "https://github.com",
    demo: "https://dribble.com/shots/16673715-Crypo-currency-dashboards-and-financial-data-visualization",
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
