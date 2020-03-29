import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const PagesSelector = ({ loading, metadata, changePage }) => {
  if (loading) {
    return (
      <div className="pages-selector-container">
        Loading...
      </div>
    );
  }

  const { current_page, next_page, prev_page, total_pages } = metadata;

  const clickHandler = (e) => {
    const { target } = e;
    const newPage = target.getAttribute('data-increment') === INCREMENT ? (parseInt(target.value) + 1) : (parseInt(target.value) - 1);
    changePage(newPage);
  };

  return (
    <div className="pages-selector-container">
      <button
        className={`${!prev_page ? 'disabled' : ''}`}
        data-increment={DECREMENT}
        onClick={clickHandler}
        type="button"
        value={current_page}
      >
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <span>
        Page {current_page} of {total_pages}
      </span>
      <button
        className={`${!next_page ? 'disabled' : ''}`}
        data-increment={INCREMENT}
        onClick={clickHandler}
        value={current_page}
      >
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>
    </div>
  );
};

PagesSelector.propTypes = {
  loading: PropTypes.bool,
  metadata: PropTypes.object,
  changePage: PropTypes.func,
};

export default PagesSelector;
