import React, { useState, createContext } from 'react'

const defaultContext = {
  showAbout: false
}

const Context = createContext(defaultContext)

const Provider = ({ children }) => {
  const [showAbout, setShowAbout] = useState(defaultContext.showAbout)

  const toggleShowAbout = () => setShowAbout(prevState => !prevState)

  return (
    <Context.Provider
      values={{
        ...defaultContext,
        showAbout,
        toggleShowAbout
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
