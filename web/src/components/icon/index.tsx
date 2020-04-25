import React from 'react';

import HamburgerIcon from './hamburger';

type IconProps = {
  symbol: any;
};

function Icon({ symbol }: IconProps) {
  switch (symbol) {
    case 'hamburger':
      return <HamburgerIcon />;
    default:
      return <span>Unknown icon: {symbol}</span>;
  }
}

export default Icon;
