import React from 'react'
import { navigate } from "gatsby"

export const requireLogin = (Component) => (props) => {
  if(localStorage.getItem('authenticated')) {
    return <Component {...props} />
  }
  navigate("/login")
  return null
}