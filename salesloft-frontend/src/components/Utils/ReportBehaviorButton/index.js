import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ActionButton, Modal } from '..';

const ReportBehaviorButton = ({ caption, children }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <>
      <div>
        <ActionButton callback={showModal}>
          {caption}
        </ActionButton>
      </div>
      {show &&
        (
          <Modal
            handleClose={hideModal}
            title={caption}
          >
            {children}
          </Modal>
        )}
    </>
  );
};

ReportBehaviorButton.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.element,
};

export default (ReportBehaviorButton);
