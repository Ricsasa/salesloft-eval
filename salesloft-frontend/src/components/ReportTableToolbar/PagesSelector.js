import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const PagesSelector = ({ loading, metadata }) => {
  if (loading) {
    return (
      <>
        Loading...
      </>
    );
  }

  const { current_page, next_page, prev_page, total_pages } = metadata;

  return (
    <div className="pages-selector-container">
      <button
        className={`${!prev_page ? 'disabled' : ''}`}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <span>
        Page {current_page} of {total_pages}
      </span>
      <button
        className={`${!next_page ? 'disabled' : ''}`}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </div >
  );
};

export default PagesSelector;
