import React from 'react';
import '../components/Footer.css'

const Footer = ({darkMode}) => {
  return (
    <>
      <footer className={darkMode ?'dark-footer' : ''}>
        <h2>Nouhad El Hallab - 2003</h2>
      </footer>
    </>
  )
}

export default Footer
