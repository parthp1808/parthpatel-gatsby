import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"

const BlogIndex = ({ data, location }) => {
  const siteTitle = 'Parth Patel'
  const { edges: posts } = data.allWordpressPost
  return (
    <Layout location={location} title={siteTitle}>
      <div className="container max-w-5xl mx-auto px-8 lg:px-0">
      
			<div className="flex flex-wrap justify-between pt-12 leading-tight">
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{justifyItems: 'center'}}>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-relaxed">
              Hey, I'm Parth 👨‍💻
            </h2>
            <p className="sm:text-2xl text-gray-700 leading-normal">
              I'm a full stack developer from Canada 🇨🇦 in love with <b>Laravel</b> and <b>Vue.js</b>. I write about everything I know and like to help others learn programming.
            </p>
            <div>
            <a href="https://github.com/parthp1808" target="_blank">
                  <svg className="inline-block mr-2" role="img" width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="https://twitter.com/parthp1808" target="_blank">
                  <svg className="inline-block mr-2" style={{fill:"#1DA1F2"}} role="img" width="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
              </a>
              <a href="https://dev.to/parthp1808" target="_blank">
                  <svg className="inline-block mr-2" style={{fill:"#0A0A0A"}} role="img" width="30px"  viewBox="0 0 24 24" role="img"><title>dev.to icon</title><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z"/></svg>
              </a>
            </div>
          </div>
          <div className="hidden sm:block">
          <picture>
            <source srcset="img/parthpatel.webp" type="image/webp" alt="Parth Patel" width="300px" height="300px" style={{borderRadius: "100%"}} />
            <img src="/img/parthpatel.jpeg" alt="Parth Patel" width="300px" height="300px" style={{borderRadius: "100%"}} />
          </picture>
            
          </div>
        </div>
        
        
				<div className="w-full mt-6">
					<h4>📄 Latest Articles</h4>
				</div>
      
				<div className="post-list">
				{posts.map(({ node: post }) => (
					<div key={post.id}>
                        <Link className="no-link" to={post.slug}>
                            <div className="each">
                                <div className=" gatsby-image-wrapper" style={{position: "relative", overflow: "hidden", display: "inline-block", width: "50px", height: "50px"}}>
                                    <img aria-hidden="true" src={(post.featuredImage)?post.featuredImage.sourceURL:'https://www.taniarascia.com/static/987371fab3463c3496c5a6447b32553f/4148e/redux.png'} alt="" style={{position:"absolute",top:0,left:0,opacity:1,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>
                                </div>
                                
                                <div className="each-list-item">
                                    <h6 className="my-0">{post.title}</h6>
                                    <div className="text-sm mt-1 text-gray-600">{post.date}</div>
                                </div>
                            </div>
                        </Link>
					</div>
				))}
				</div>				
				

			</div>
		
			<div className="font-sans bg-teal-100 rounded my-8 p-4 md:p-24 text-center">
				<h2 className="font-bold break-normal text-2xl md:text-4xl">Join the Newsletter</h2>
				<h3 className="font-bold break-normal font-normal text-gray-600 text-base md:text-xl">Get the latest posts delivered right to your inbox</h3>
				<div className="w-full text-center pt-4">
					<form action="#">
						<div className="max-w-xl mx-auto p-1 pr-0 flex flex-wrap items-center">
							<input type="email" placeholder="youremail@example.com" className="flex-1 appearance-none rounded shadow p-3 text-gray-600 mr-2 focus:outline-none"/>
							<button type="submit" className="flex-1 mt-4 md:mt-0 block md:inline-block appearance-none bg-teal-500 text-white text-base font-semibold tracking-wider uppercase py-4 rounded shadow hover:bg-teal-400">Subscribe</button>
						</div>
					</form>
				</div>
			</div>
	</div>
      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })} */}
    </Layout>
  )
}

export default BlogIndex

export const indexQuery = graphql`
  query IndexQuery {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: 5
    ) {
      edges {
        node {
            id
            title
            date(formatString: "MMMM DD, YYYY")
            slug
        }
      }
    }
  }
`