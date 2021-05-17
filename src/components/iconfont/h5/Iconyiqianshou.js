/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconyiqianshou = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFF0CF')}
      />
      <path
        d="M673.792 245.76c24.576 0 47.104 14.336 57.344 36.864l2.048 2.048 45.056 116.736V716.8c0 34.816-26.624 61.44-59.392 63.488h-409.6c-34.816 0-61.44-26.624-63.488-59.392v-307.2c0-6.144 2.048-14.336 4.096-20.48V389.12l43.008-104.448c8.192-22.528 30.72-36.864 55.296-38.912h325.632z"
        fill={getIconColor(color, 1, '#FFAD00')}
      />
      <path
        d="M743.424 430.08H286.72v282.624c0 10.24 8.192 20.48 18.432 20.48h415.744c10.24 0 20.48-8.192 20.48-18.432V430.08h2.048z"
        fill={getIconColor(color, 2, '#FFAD00')}
      />
      <path
        d="M669.696 284.672h-307.2c-8.192 0-14.336 4.096-18.432 10.24v2.048l-32.768 81.92h409.6l-32.768-81.92c-2.048-6.144-8.192-10.24-14.336-12.288h-4.096zM487.424 657.408c-4.096 0-10.24-2.048-14.336-6.144l-77.824-73.728c-8.192-8.192-8.192-20.48 0-28.672 8.192-8.192 20.48-8.192 28.672 0l63.488 59.392 118.784-112.64c8.192-8.192 20.48-8.192 28.672 0 8.192 8.192 8.192 20.48 0 28.672l-131.072 124.928c-6.144 8.192-12.288 8.192-16.384 8.192z"
        fill={getIconColor(color, 3, '#FFF7CF')}
      />
    </svg>
  );
};

Iconyiqianshou.defaultProps = {
  size: 18,
};

export default Iconyiqianshou;
