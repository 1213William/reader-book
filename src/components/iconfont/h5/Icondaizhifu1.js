/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondaizhifu1 = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-954.181818C267.636364 69.818182 69.818182 267.636364 69.818182 512s197.818182 442.181818 442.181818 442.181818 442.181818-197.818182 442.181818-442.181818S756.363636 69.818182 512 69.818182z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <path
        d="M812.218182 598.109091H512c-18.618182 0-34.909091-16.290909-34.909091-34.909091V218.763636c0-18.618182 16.290909-34.909091 34.909091-34.909091s34.909091 16.290909 34.909091 34.909091v311.854546h265.309091c18.618182 0 34.909091 16.290909 34.909091 34.909091s-16.290909 32.581818-34.909091 32.581818z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

Icondaizhifu1.defaultProps = {
  size: 18,
};

export default Icondaizhifu1;
