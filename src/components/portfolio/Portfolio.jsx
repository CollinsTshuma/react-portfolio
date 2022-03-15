import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/project2.png";
import IMG3 from "../../assets/project3.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'MyReads',
    github: "https://github.com/CollinsTshuma/reactnd-myreads",
    demo: "https://collins-myreads.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: 'Would You Rather',
    github: "https://github.com/CollinsTshuma/reactnd-would-you-rather",
    demo: "https://collins-would-you-rather.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: 'EthSwap',
    github: "https://github.com/CollinsTshuma/eth___swap",
    demo: "https://eth-swap1.netlify.app/",
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
