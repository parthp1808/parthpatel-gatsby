import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const data = useStaticQuery(graphql`
  query {
    allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
  `);

  return (
      <nav className="bg-gray-900  py-4 mt-0 w-full">
          <div className="container max-w-5xl mx-auto flex items-center px-8 lg:px-0 flex items-center justify-between flex-wrap">
            <div className="flex items-center flex-no-shrink text-white mr-6">
              <Link className="flex text-white text-base no-underline hover:text-white hover:no-underline" to="/"> 
                <img src="https://i0.wp.com/www.parthpatel.net/wp-content/uploads/2017/05/18716774_723752251141877_1841702510_n.png?fit=264%2C248&ssl=1" alt="Parth Patel Logo" style={{maxHeight: "50px"}}/>
              </Link>
            </div>
            <div className="block lg:hidden">
              <button onClick={() => setNavbarOpen(!navbarOpen)} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div className={"w-full flex-grow lg:items-center lg:w-auto  lg:block pt-6 lg:pt-0" +
                    (navbarOpen ? "  lg:flex" : " hidden")}>
              <ul className="list-reset lg:flex justify-end flex-1 items-center list-none">
              <li className="mr-2">
                  <Link
                    className="inline-block text-white no-underline hover:border-b-2 hover:text-underline py-2 px-2"
                    to={`/blog`}
                    key={`blog`}
                  >
                  Blog
                  </Link>
                </li>
              {data.allWordpressPage.edges.map(edge => (
                <li className="mr-2">
                  <Link
                    className="inline-block text-white no-underline hover:border-b-2 hover:text-underline py-2 px-2"
                    to={`/${edge.node.slug}`}
                    key={edge.node.slug}
                  >
                    {edge.node.title}
                  </Link>
                </li>
                
              ))}
              </ul>
            </div>
          </div>
      </nav>
     
    )}
              

export default Navbar
