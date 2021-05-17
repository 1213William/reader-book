/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconshipindaodu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M903.168 714.752c-18.432 0-36.864-6.144-51.2-14.336L751.616 634.88l32.768-51.2 98.304 63.488c8.192 4.096 16.384 6.144 26.624 4.096 10.24-2.048 16.384-8.192 22.528-16.384 4.096-6.144 6.144-12.288 6.144-18.432v-180.224c0-20.48-16.384-34.816-34.816-34.816-6.144 0-14.336 2.048-18.432 6.144L784.384 471.04l-32.768-51.2 98.304-63.488c16.384-10.24 32.768-14.336 51.2-14.336 53.248 0 96.256 43.008 96.256 96.256v180.224c0 18.432-6.144 36.864-14.336 51.2-14.336 22.528-34.816 36.864-61.44 43.008-4.096 0-12.288 2.048-18.432 2.048z"
        fill={getIconColor(color, 0, '#212E5B')}
      />
      <path
        d="M722.944 870.4H153.6C102.4 870.4 61.44 829.44 61.44 778.24V276.48C61.44 225.28 102.4 184.32 153.6 184.32h569.344c51.2 0 92.16 40.96 92.16 92.16V778.24c0 51.2-43.008 92.16-92.16 92.16zM153.6 245.76c-16.384 0-30.72 14.336-30.72 30.72V778.24c0 16.384 14.336 30.72 30.72 30.72h569.344c16.384 0 30.72-14.336 30.72-30.72V276.48c0-16.384-14.336-30.72-30.72-30.72H153.6z"
        fill={getIconColor(color, 1, '#212E5B')}
      />
      <path
        d="M366.592 688.128c-4.096 0-8.192 0-14.336-2.048-16.384-4.096-30.72-12.288-38.912-26.624-6.144-10.24-10.24-20.48-10.24-32.768V430.08c0-16.384 6.144-32.768 18.432-43.008 20.48-20.48 53.248-22.528 75.776-8.192l155.648 98.304c14.336 8.192 22.528 22.528 26.624 38.912 4.096 16.384 0 32.768-8.192 47.104-4.096 8.192-10.24 14.336-18.432 18.432l-155.648 98.304c-8.192 4.096-18.432 8.192-30.72 8.192z m0-260.096v196.608l155.648-98.304 26.624 16.384-26.624-16.384-155.648-98.304z"
        fill={getIconColor(color, 2, '#F2B672')}
      />
    </svg>
  );
};

Iconshipindaodu.defaultProps = {
  size: 18,
};

export default Iconshipindaodu;