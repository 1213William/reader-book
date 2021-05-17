/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyiwancheng = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-954.181818C267.636364 69.818182 69.818182 267.636364 69.818182 512s197.818182 442.181818 442.181818 442.181818 442.181818-197.818182 442.181818-442.181818S756.363636 69.818182 512 69.818182z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <path
        d="M463.127273 723.781818c-2.327273 0-2.327273 0 0 0-9.309091 0-18.618182-4.654545-25.6-11.636363L256 509.672727c-11.636364-13.963636-11.636364-37.236364 2.327273-48.872727s37.236364-11.636364 48.872727 2.327273l153.6 174.545454L744.727273 342.109091c13.963636-13.963636 34.909091-13.963636 48.872727 0 13.963636 13.963636 13.963636 34.909091 0 48.872727L486.4 714.472727c-4.654545 6.981818-13.963636 9.309091-23.272727 9.309091z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Iconyiwancheng.defaultProps = {
  size: 18,
};

export default Iconyiwancheng;
