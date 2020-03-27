import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './styles.scss';

const Header = () => {
  return (
    <header>
      <div className="title-section">
        <h1>
          <strong>Sales</strong>Loft
        </h1>
        <h2>
          Fullstack Evaluation
        </h2>
      </div>
      <div className="author-section">
        <h6>
          by Ricardo Sánchez
        </h6>
      </div>
      <div className="links-section">
        <span>
          <a
            href="https://www.linkedin.com/in/ricardosanchezs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </span>
        <span>
          <a
            href="https://github.com/Ricsasa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </span>
      </div>
    </header>
  );
};

export default Header;