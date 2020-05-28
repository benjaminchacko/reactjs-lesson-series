import React, { Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from './components/routes'

export const App = () => (
    <Router>
      <Routes />
    </Router>
  )
