/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IcongengduoIcon3X = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 921.6m102.4 0a102.4 102.4 0 1 0-204.8 0 102.4 102.4 0 1 0 204.8 0Z"
        fill={getIconColor(color, 0, '#CCCCCC')}
      />
      <Path
        d="M512 512m102.4 0a102.4 102.4 0 1 0-204.8 0 102.4 102.4 0 1 0 204.8 0Z"
        fill={getIconColor(color, 1, '#CCCCCC')}
      />
      <Path
        d="M512 102.4m102.4 0a102.4 102.4 0 1 0-204.8 0 102.4 102.4 0 1 0 204.8 0Z"
        fill={getIconColor(color, 2, '#CCCCCC')}
      />
    </Svg>
  );
};

IcongengduoIcon3X.defaultProps = {
  size: 18,
};

export default IcongengduoIcon3X;
