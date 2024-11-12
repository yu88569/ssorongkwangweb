import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const MainLayout = ({ childen }) => {
  return (
    <div>
        <Header />
        {childen}
        <Footer />
    </div>
  )
}
