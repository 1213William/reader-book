/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondaishouhuo1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-954.181818C267.636364 69.818182 69.818182 267.636364 69.818182 512s197.818182 442.181818 442.181818 442.181818 442.181818-197.818182 442.181818-442.181818S756.363636 69.818182 512 69.818182z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <path
        d="M267.636364 523.636364m-81.454546 0a81.454545 81.454545 0 1 0 162.909091 0 81.454545 81.454545 0 1 0-162.909091 0Z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
      <path
        d="M523.636364 523.636364m-81.454546 0a81.454545 81.454545 0 1 0 162.909091 0 81.454545 81.454545 0 1 0-162.909091 0Z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
      <path
        d="M756.363636 523.636364m-81.454545 0a81.454545 81.454545 0 1 0 162.909091 0 81.454545 81.454545 0 1 0-162.909091 0Z"
        fill={getIconColor(color, 3, '#FFFFFF')}
      />
    </svg>
  );
};

Icondaishouhuo1.defaultProps = {
  size: 18,
};

export default Icondaishouhuo1;
