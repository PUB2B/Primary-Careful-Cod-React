import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Primary Careful Cod</title>
        <meta property="og:title" content="Primary Careful Cod" />
      </Helmet>
      <iframe
        src="https://landbot.online/v3/H-2646357-3Q9773UUXZUYB3GQ/index.html"
        allowFullScreen="true"
        className="home-iframe"
      ></iframe>
    </div>
  )
}

export default Home
