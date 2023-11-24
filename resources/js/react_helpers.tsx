import React from 'react'
import { createRoot } from 'react-dom/client'

export const renderApp = (element: React.ReactElement): void => {
  const appNode = document.getElementById('app')
  if (appNode instanceof HTMLElement) {
    const root = createRoot(appNode)

    root.render(element)
  } else {
    throw Error('No element found with the id #app')
  }
}
