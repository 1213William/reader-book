/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconsiweidaotu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M358.4 555.008v-61.44c34.816 0 59.392-8.192 73.728-22.528 24.576-26.624 22.528-75.776 20.48-118.784 0-18.432-2.048-36.864 0-53.248 4.096-45.056 32.768-104.448 149.504-120.832l8.192 61.44c-94.208 14.336-96.256 53.248-98.304 65.536v45.056c2.048 53.248 4.096 120.832-36.864 163.84-24.576 26.624-65.536 40.96-116.736 40.96z"
        fill={getIconColor(color, 0, '#F2B672')}
      />
      <path
        d="M602.112 880.64c-116.736-18.432-145.408-75.776-149.504-120.832-2.048-16.384 0-34.816 0-53.248 2.048-45.056 4.096-94.208-20.48-118.784-14.336-14.336-38.912-22.528-73.728-22.528v-61.44c51.2 0 92.16 14.336 118.784 43.008 43.008 45.056 38.912 110.592 36.864 163.84 0 16.384-2.048 32.768 0 45.056 0 12.288 4.096 51.2 98.304 65.536l-10.24 59.392z"
        fill={getIconColor(color, 1, '#F2B672')}
      />
      <path
        d="M366.592 501.76h233.472v61.44H366.592z"
        fill={getIconColor(color, 2, '#F2B672')}
      />
      <path
        d="M278.528 653.312H133.12c-51.2 0-92.16-40.96-92.16-92.16v-75.776c0-51.2 40.96-92.16 92.16-92.16h145.408c51.2 0 92.16 40.96 92.16 92.16v75.776c0 51.2-40.96 92.16-92.16 92.16z m-145.408-198.656c-16.384 0-30.72 14.336-30.72 30.72v75.776c0 16.384 14.336 30.72 30.72 30.72h145.408c16.384 0 30.72-14.336 30.72-30.72v-75.776c0-16.384-14.336-30.72-30.72-30.72H133.12zM849.92 342.016h-161.792c-51.2 0-92.16-40.96-92.16-92.16V174.08c0-51.2 40.96-92.16 92.16-92.16h161.792C901.12 81.92 942.08 122.88 942.08 174.08v75.776c0 51.2-40.96 92.16-92.16 92.16zM688.128 143.36c-16.384 0-30.72 14.336-30.72 30.72v75.776c0 16.384 14.336 30.72 30.72 30.72h161.792c16.384 0 30.72-14.336 30.72-30.72V174.08c0-16.384-14.336-30.72-30.72-30.72h-161.792zM849.92 966.656h-161.792c-51.2 0-92.16-40.96-92.16-92.16V798.72c0-51.2 40.96-92.16 92.16-92.16h161.792c51.2 0 92.16 40.96 92.16 92.16v75.776c0 51.2-40.96 92.16-92.16 92.16z m-161.792-198.656c-16.384 0-30.72 14.336-30.72 30.72v75.776c0 16.384 14.336 30.72 30.72 30.72h161.792c16.384 0 30.72-14.336 30.72-30.72V798.72c0-16.384-14.336-30.72-30.72-30.72h-161.792zM849.92 653.312h-161.792c-51.2 0-92.16-40.96-92.16-92.16v-75.776c0-51.2 40.96-92.16 92.16-92.16h161.792c51.2 0 92.16 40.96 92.16 92.16v75.776c0 51.2-40.96 92.16-92.16 92.16z m-161.792-198.656c-16.384 0-30.72 14.336-30.72 30.72v75.776c0 16.384 14.336 30.72 30.72 30.72h161.792c16.384 0 30.72-14.336 30.72-30.72v-75.776c0-16.384-14.336-30.72-30.72-30.72h-161.792z"
        fill={getIconColor(color, 3, '#212E5B')}
      />
    </svg>
  );
};

Iconsiweidaotu.defaultProps = {
  size: 18,
};

export default Iconsiweidaotu;
