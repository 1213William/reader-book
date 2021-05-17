/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconbofang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-504.242424 0a504.242424 504.242424 0 1 0 1008.484848 0 504.242424 504.242424 0 1 0-1008.484848 0Z"
        fill={getIconColor(color, 0, '#333333')}
        opacity=".7"
      />
      <path
        d="M512 1024C229.624242 1024 0 794.375758 0 512S229.624242 0 512 0s512 229.624242 512 512-229.624242 512-512 512z m0-1008.484848C238.933333 15.515152 15.515152 238.933333 15.515152 512s223.418182 496.484848 496.484848 496.484848 496.484848-223.418182 496.484848-496.484848S785.066667 15.515152 512 15.515152z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <path
        d="M671.806061 552.339394L465.454545 678.012121c-21.721212 13.963636-51.2 6.206061-63.612121-15.515151-4.654545-7.757576-6.206061-15.515152-6.20606-24.824243V386.327273c0-26.375758 20.169697-46.545455 46.545454-46.545455 9.309091 0 17.066667 3.10303 24.824243 6.206061l206.351515 125.672727c21.721212 13.963636 29.478788 41.890909 15.515151 63.612121-4.654545 7.757576-10.860606 12.412121-17.066666 17.066667z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </svg>
  );
};

Iconbofang.defaultProps = {
  size: 18,
};

export default Iconbofang;
