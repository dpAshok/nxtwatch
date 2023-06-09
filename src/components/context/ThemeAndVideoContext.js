import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheam: false,
  savedVideos: [],
  addVideos: () => {},
})

export default ThemeAndVideoContext
