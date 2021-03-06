import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
// import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Parth Patel">
      <meta name="description" content="Programming blog featuring articles about Laravel, PHP, Javascript, Python and more development" />
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
