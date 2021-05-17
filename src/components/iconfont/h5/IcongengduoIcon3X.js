/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IcongengduoIcon3X = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 921.6m102.4 0a102.4 102.4 0 1 0-204.8 0 102.4 102.4 0 1 0 204.8 0Z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
      <path
        d="M512 512m102.4 0a102.4 102.4 0 1 0-204.8 0 102.4 102.4 0 1 0 204.8 0Z"
        fill={getIconColor(color, 1, '#CCCCCC')}
      />
      <path
        d="M512 102.4m102.4 0a102.4 102.4 0 1 0-204.8 0 102.4 102.4 0 1 0 204.8 0Z"
        fill={getIconColor(color, 2, '#CCCCCC')}
      />
    </svg>
  );
};

IcongengduoIcon3X.defaultProps = {
  size: 18,
};

export default IcongengduoIcon3X;
