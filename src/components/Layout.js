import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
// import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    <link rel="icon" href="https://i0.wp.com/www.parthpatel.net/wp-content/uploads/2017/04/fav-32x32.png?fit=32%2C32&#038;ssl=1" sizes="32x32" />
<link rel="icon" href="https://i0.wp.com/www.parthpatel.net/wp-content/uploads/2017/04/fav-32x32.png?fit=32%2C32&#038;ssl=1" sizes="192x192" />
<link rel="apple-touch-icon" href="https://i0.wp.com/www.parthpatel.net/wp-content/uploads/2017/04/fav-32x32.png?fit=32%2C32&#038;ssl=1" />
<meta name="msapplication-TileImage" content="https://i0.wp.com/www.parthpatel.net/wp-content/uploads/2017/04/fav-32x32.png?fit=32%2C32&#038;ssl=1" />
    </Helmet>
    <Navbar />
    <main>{children}</main>
    <footer className="bg-gray-900">	
        <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
          <div className="w-full mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white text-sm">
              Copyright 2020. All rights reserved.
            </div>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
              <ul className="list-reset flex justify-center flex-1 md:flex-none items-center list-none">
                <li>
                <a className="inline-block py-2 px-3 text-white no-underline" href="https://twitter.com/parthp1808">Twitter</a>
                </li>
                <li>
                <a className="inline-block py-2 px-3 text-white no-underline" href="https://github.com/parthp1808">Github</a>
                </li>
                <li>
                <a className="inline-block py-2 px-3 text-white no-underline" href="https://linkedin.com/in/parthp1808">Linkedin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  </div>
)

export default TemplateWrapper
