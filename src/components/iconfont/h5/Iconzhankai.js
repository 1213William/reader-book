/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconzhankai = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1828 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M921.6 1016.685714c-65.828571 0-131.657143-21.942857-182.857143-65.828571l-21.942857-21.942857L43.885714 168.228571C7.314286 131.657143 14.628571 73.142857 51.2 43.885714 87.771429 7.314286 146.285714 14.628571 175.542857 51.2L848.457143 804.571429l7.314286 7.314285c21.942857 14.628571 43.885714 21.942857 65.828571 21.942857 21.942857 0 51.2-14.628571 65.828571-29.257142l658.285715-753.371429c29.257143-36.571429 87.771429-43.885714 124.342857-7.314286 36.571429 29.257143 43.885714 87.771429 7.314286 124.342857l-658.285715 753.371429c-51.2 58.514286-117.028571 87.771429-190.171428 95.085714h-7.314286z"
        fill={getIconColor(color, 0, '#2CA5FF')}
      />
    </svg>
  );
};

Iconzhankai.defaultProps = {
  size: 18,
};

export default Iconzhankai;
