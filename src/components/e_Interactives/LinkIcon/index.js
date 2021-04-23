// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

import SLinkIcon, { vLinkIcon } from './SLinkIcon';

const LinkIcon = ({ path, columnStart, children }) => (
  <SLinkIcon
    href={path}
    target="_blank"
    rel="noreferrer"
    s={{ columnStart }}
    variants={vLinkIcon}
    initial="initial"
    animate="animate"
    exit="exit"
    whileHover="whileHover"
  >
    {children}
  </SLinkIcon>
);

LinkIcon.propTypes = {
  path: PropTypes.string.isRequired,
  columnStart: PropTypes.number.isRequired,
};

// == Export
export default LinkIcon;
