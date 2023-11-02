import React, {Fragment }  from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import { routers } from './routers'

import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {routers.map((route) =>{
            const Page = route.page
            const Layout = route.isShowHearder ? DefaultComponent : Fragment
            return(
              <Route
                key={route.path} 
                path={route.path} 
                element={
                  <Layout>
                    <Page/>
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  )
}

export default App
