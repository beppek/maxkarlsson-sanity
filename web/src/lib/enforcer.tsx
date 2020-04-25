import React from 'react';
import { navigate } from 'gatsby';

export const requireLogin = (Component: any) => (props: any) => {
  if (typeof window === 'undefined') return null;
  if (localStorage.getItem('authenticated')) {
    return <Component {...props} />;
  }
  navigate('/login');
  return null;
};
