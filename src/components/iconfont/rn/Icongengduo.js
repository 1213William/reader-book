/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icongengduo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M384 774.4c-9.6 0-22.4-3.2-28.8-12.8-12.8-16-12.8-41.6 3.2-54.4l214.4-179.2c3.2 0 3.2-3.2 6.4-6.4 6.4-9.6 9.6-19.2 9.6-28.8s-6.4-22.4-16-28.8L358.4 288c-16-12.8-19.2-38.4-6.4-54.4 12.8-16 38.4-19.2 54.4-6.4l214.4 176c25.6 19.2 41.6 48 41.6 80 3.2 32-6.4 64-25.6 86.4-3.2 6.4-9.6 9.6-16 16l-214.4 179.2c-3.2 6.4-12.8 9.6-22.4 9.6z"
        fill={getIconColor(color, 1, '#228DF3')}
      />
    </Svg>
  );
};

Icongengduo.defaultProps = {
  size: 18,
};

export default Icongengduo;
