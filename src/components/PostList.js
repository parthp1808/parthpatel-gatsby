import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section pt-12">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          <div className="post-list">
            {posts.map(({ node: post }) => (
                <Link className="no-link" to={post.slug}>
                    <div className="each each-big">
                        <div className="gatsby-image-wrapper hidden sm:inline-block" style={{position: "relative", overflow: "hidden",  width: "140px", height: "100px"}}>
                            <img aria-hidden="true" src={(post.featured_media)?post.featured_media.localFile.url:'https://www.taniarascia.com/static/987371fab3463c3496c5a6447b32553f/4148e/redux.png'} alt="" style={{position:"absolute",top:0,left:0,opacity:1,width:(post.featured_media)?"100%":"75%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>
                        </div>
                        
                        <div className="each-list-item">
                            <h3 className="my-1">{post.title}</h3>
                            <div className="text-sm text-gray-600">{post.date}</div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: post.excerpt.replace(/<p class="link-more.*/, ''),
                              }}
                            />
                        </div>
                    </div>
                </Link>
            ))}
          </div>
          
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      
    }
    featured_media {
      localFile {
        url
      }
    }
    date(formatString: "MMMM DD, YYYY")
    slug
  }
`
