/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icongengduo2 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M288 998.4c-19.2 0-32-6.4-44.8-19.2-25.6-25.6-19.2-64 6.4-89.6l358.4-320 6.4-6.4c38.4-38.4 32-102.4-6.4-134.4L249.6 115.2C224 89.6 217.6 51.2 243.2 25.6c25.6-25.6 64-32 89.6-6.4l358.4 313.6c96 83.2 102.4 224 19.2 320-6.4 0-12.8 6.4-19.2 12.8l-358.4 320c-12.8 12.8-32 12.8-44.8 12.8z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
    </svg>
  );
};

Icongengduo2.defaultProps = {
  size: 18,
};

export default Icongengduo2;
