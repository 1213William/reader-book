/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondaizhifu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1187 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M681.984 399.36h352.256c45.056 0 81.92 36.864 81.92 81.92v108.544c0 45.056-36.864 81.92-81.92 81.92H681.984c-45.056 0-81.92-36.864-81.92-81.92v-108.544c0-45.056 36.864-81.92 81.92-81.92z"
        fill={getIconColor(color, 0, '#C3E8F8')}
      />
      <path
        d="M1034.24 702.464H681.984c-61.44 0-112.64-51.2-112.64-112.64v-108.544c0-61.44 51.2-112.64 112.64-112.64h352.256c61.44 0 112.64 51.2 112.64 112.64v108.544c0 61.44-51.2 112.64-112.64 112.64zM681.984 430.08c-28.672 0-51.2 22.528-51.2 51.2v108.544c0 28.672 22.528 51.2 51.2 51.2h352.256c28.672 0 51.2-22.528 51.2-51.2v-108.544c0-28.672-22.528-51.2-51.2-51.2H681.984z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M968.704 976.896h-798.72c-53.248 0-98.304-43.008-98.304-98.304V169.984c0-53.248 43.008-98.304 98.304-98.304h800.768c53.248 0 98.304 43.008 98.304 98.304v106.496c0 16.384-14.336 30.72-30.72 30.72s-30.72-14.336-30.72-30.72V169.984c0-20.48-16.384-36.864-36.864-36.864H169.984c-20.48 0-36.864 16.384-36.864 36.864V880.64c0 20.48 16.384 36.864 36.864 36.864h800.768c20.48 0 36.864-16.384 36.864-36.864v-96.256c0-16.384 14.336-30.72 30.72-30.72s30.72 14.336 30.72 30.72V880.64c-2.048 53.248-47.104 96.256-100.352 96.256z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <path
        d="M735.232 536.576m-55.296 0a55.296 55.296 0 1 0 110.592 0 55.296 55.296 0 1 0-110.592 0Z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </svg>
  );
};

Icondaizhifu.defaultProps = {
  size: 18,
};

export default Icondaizhifu;
