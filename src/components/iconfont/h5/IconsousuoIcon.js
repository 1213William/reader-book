/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconsousuoIcon = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M415.451429 795.794286C197.310171 795.794286 20.48 618.964114 20.48 400.822857S197.310171 5.851429 415.451429 5.851429s394.971429 176.830171 394.971428 394.971428-176.830171 394.971429-394.971428 394.971429z m0-90.814172c167.994514 0 304.157257-136.162743 304.157257-304.157257 0-167.994514-136.162743-304.157257-304.157257-304.157257-167.994514 0-304.157257 136.162743-304.157258 304.157257 0 167.994514 136.162743 304.157257 304.157258 304.157257z"
        fill={getIconColor(color, 0, '#999999')}
      />
      <path
        d="M812.617143 728.093257l132.183771 132.9152a44.412343 44.412343 0 0 1 0 62.610286l-0.058514 0.058514a44.032 44.032 0 0 1-62.434743 0l-132.183771-132.885943a44.412343 44.412343 0 0 1 0-62.610285l0.058514-0.087772a44.032 44.032 0 0 1 62.434743 0z"
        fill={getIconColor(color, 1, '#999999')}
      />
    </svg>
  );
};

IconsousuoIcon.defaultProps = {
  size: 18,
};

export default IconsousuoIcon;
