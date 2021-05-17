/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconzhengzailushang = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFF0CF')}
      />
      <Path
        d="M673.792 245.76c24.576 0 47.104 14.336 57.344 36.864l2.048 2.048 47.104 114.688v315.392c0 34.816-26.624 61.44-59.392 63.488H309.248c-34.816 0-61.44-26.624-63.488-59.392V413.696c0-6.144 2.048-14.336 4.096-20.48l2.048-4.096 43.008-104.448c10.24-22.528 30.72-38.912 55.296-38.912H673.792z"
        fill={getIconColor(color, 1, '#FFAD00')}
      />
      <Path
        d="M743.424 430.08H286.72v282.624c0 10.24 8.192 20.48 18.432 20.48h415.744c10.24 0 20.48-8.192 20.48-18.432V430.08h2.048z"
        fill={getIconColor(color, 2, '#FFAD00')}
      />
      <Path
        d="M669.696 284.672h-307.2c-8.192 0-14.336 4.096-18.432 10.24v2.048l-32.768 81.92h409.6l-32.768-81.92c-2.048-6.144-8.192-10.24-14.336-12.288h-4.096z"
        fill={getIconColor(color, 3, '#FFF7CF')}
      />
      <Path
        d="M512 573.44m-122.88 0a122.88 122.88 0 1 0 245.76 0 122.88 122.88 0 1 0-245.76 0Z"
        fill={getIconColor(color, 4, '#FFF7CF')}
      />
      <Path
        d="M593.92 593.92h-81.92c-6.144 0-10.24-2.048-14.336-6.144s-6.144-10.24-6.144-14.336l2.048-81.92c0-12.288 10.24-20.48 20.48-20.48 12.288 0 20.48 10.24 20.48 20.48l-2.048 61.44h61.44c12.288 0 20.48 8.192 20.48 20.48s-8.192 20.48-20.48 20.48z"
        fill={getIconColor(color, 5, '#FFAD00')}
      />
    </Svg>
  );
};

Iconzhengzailushang.defaultProps = {
  size: 18,
};

export default Iconzhengzailushang;
