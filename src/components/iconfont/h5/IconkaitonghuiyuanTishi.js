/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconkaitonghuiyuanTishi = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M521.301333 698.197333c18.645333 0 34.901333 16.256 34.901334 34.901334v23.253333a35.797333 35.797333 0 0 1-34.901334 34.901333 35.797333 35.797333 0 0 1-34.901333-34.901333v-23.253333c0-18.645333 13.952-34.901333 34.901333-34.901334zM381.653333 407.253333a31.829333 31.829333 0 0 1-32.554666-32.554666v-4.693334c0-4.608 2.304-9.258667 2.304-13.952a172.842667 172.842667 0 0 1 172.245333-146.602666h6.954667c76.8 0 144.298667 53.546667 162.944 130.346666v4.650667c16.256 74.453333-11.648 148.906667-72.149334 195.498667l-62.848 46.506666c-2.346667 2.346667-4.693333 4.693333-4.693333 9.344v23.253334a35.797333 35.797333 0 0 1-34.858667 34.901333 35.797333 35.797333 0 0 1-34.944-34.901333v-23.253334c0-25.6 11.648-51.2 32.597334-65.194666l62.848-46.506667a119.253333 119.253333 0 0 0 44.202666-123.349333v-4.693334a97.365333 97.365333 0 0 0-95.402666-76.8h-6.997334c-51.2 0-95.402667 37.248-102.4 88.448v6.997334a37.632 37.632 0 0 1-37.248 32.554666zM512 1024C228.053333 1024 0 795.946667 0 512S228.053333 0 512 0s512 228.053333 512 512-228.053333 512-512 512z m0-46.506667c256 0 465.493333-209.493333 465.493333-465.493333S768 46.506667 512 46.506667 46.506667 256 46.506667 512 256 977.493333 512 977.493333z"
        fill={getIconColor(color, 0, '#75440E')}
      />
    </svg>
  );
};

IconkaitonghuiyuanTishi.defaultProps = {
  size: 18,
};

export default IconkaitonghuiyuanTishi;