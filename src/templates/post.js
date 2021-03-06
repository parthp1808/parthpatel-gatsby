import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
//import the Prism package
import Prism from "prismjs"
import { DiscussionEmbed } from "disqus-react"

export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  slug,
}) => {
  useEffect(() => {
    // call the highlightAll() function to style our code blocks
    Prism.highlightAll()
  })
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug, title },
  }
 
  return (
    <section className="section pt-12">
      
      <div className="container content leading-relaxed">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            {categories && categories.length ? (
              <div>
              {categories.map(category => (
                <Link to={`/categories/${category.slug}/`} className='mr-2'>
                  <span class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm py-2 px-4 rounded">{category.name}</span>
                </Link>
              ))}
              </div>
                
              ) : null}
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light leading-tight">
              {title}
            </h1>
            <p class="text-sm text-gray-600 mt-0" style={{color: 'rgba(0,0,0,.6)'}}><Link to={`/author/${author.slug}`}>{author.name}</Link> on {date}</p>
            <div className="py-4" dangerouslySetInnerHTML={{ __html: content }} />
            <DiscussionEmbed {...disqusConfig} />
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data
  function getDescription() {
    let description = post.yoast_meta.find( ({ name }) => name === 'description' );
    if(!description){
      description = post.yoast_meta.find( ({ property }) => property === 'og:description' );
    }
    return description.content
  }
  return (
    <Layout>
      <div className="container max-w-5xl mx-auto px-8 lg:px-0">
			    {/* <div className="flex flex-wrap justify-between pt-12"> */}
            {/* <Helmet title={`${post.title} | Blog`} /> */}
            <Helmet title={post.yoast_title}>
              <meta name="description" content={getDescription()} />
              <meta property="og:type" content="article" />
              <meta property="og:title" content={post.yoast_title} />
              <meta property="og:description" content={post.yoast_meta.find( ({ property }) => property === 'og:description' ).content} />
            </Helmet>
            <BlogPostTemplate
              content={post.content}
              categories={post.categories}
              tags={post.tags}
              title={post.title}
              date={post.date}
              author={post.author}
            />
          {/* </div> */}
      </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      author {
        name
        slug
      }
      yoast_title
      yoast_meta {
        name
        content
        property
      }
    }
  }
`
