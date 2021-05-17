/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconqingkong = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M15.515152 496.484848c0 273.066667 223.418182 496.484848 496.484848 496.484849s496.484848-223.418182 496.484848-496.484849S785.066667 0 512 0 15.515152 223.418182 15.515152 496.484848z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
      <path
        d="M716.8 735.418182c-9.309091 0-15.515152-3.10303-21.721212-9.309091l-372.363636-372.363636c-12.412121-12.412121-12.412121-31.030303 0-43.442425s31.030303-12.412121 43.442424 0l372.363636 372.363637c12.412121 12.412121 12.412121 31.030303 0 43.442424-6.206061 6.206061-12.412121 9.309091-21.721212 9.309091z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <path
        d="M338.230303 735.418182c-9.309091 0-15.515152-3.10303-21.721212-9.309091-12.412121-12.412121-12.412121-31.030303 0-43.442424l372.363636-372.363637c12.412121-12.412121 31.030303-12.412121 43.442425 0s12.412121 31.030303 0 43.442425l-372.363637 372.363636c-6.206061 6.206061-15.515152 9.309091-21.721212 9.309091z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </svg>
  );
};

Iconqingkong.defaultProps = {
  size: 18,
};

export default Iconqingkong;
