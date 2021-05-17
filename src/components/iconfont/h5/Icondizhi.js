/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondizhi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFF0CF')}
      />
      <path
        d="M512 204.8c158.35136 0 286.72 123.84256 286.72 276.5824C798.04416 652.02176 593.12128 860.16 512 860.16 430.87872 860.16 226.42688 664.53504 225.28 481.3824 225.28 328.64256 353.64864 204.8 512 204.8z m8.192 173.54752c-72.3968 0-131.072 56.50432-131.072 126.21824 0 69.69344 58.6752 126.19776 131.072 126.19776s131.072-56.50432 131.072-126.19776c0-69.71392-58.6752-126.21824-131.072-126.21824z"
        fill={getIconColor(color, 1, '#FF9B00')}
      />
      <path
        d="M339.968 523.12064a172.032 168.52992 0 1 0 344.064 0 172.032 168.52992 0 1 0-344.064 0Z"
        fill={getIconColor(color, 2, '#FF9B00')}
      />
      <path
        d="M512 491.52m-163.84 0a163.84 163.84 0 1 0 327.68 0 163.84 163.84 0 1 0-327.68 0Z"
        fill={getIconColor(color, 3, '#FFF7CF')}
      />
      <path
        d="M512 491.52m-81.92 0a81.92 81.92 0 1 0 163.84 0 81.92 81.92 0 1 0-163.84 0Z"
        fill={getIconColor(color, 4, '#FF9B00')}
      />
    </svg>
  );
};

Icondizhi.defaultProps = {
  size: 18,
};

export default Icondizhi;
