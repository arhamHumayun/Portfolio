import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Hemlet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'


class SiteIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Hemlet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Hemlet>
        <p>
          Hi, I'm Arham Humayun. I'm a 3rd year Computer Science student who loves to learn new technologies and to build applications from 0 to 100.
          If you would like to see what I have made so far, please take a look at one of my <Link to={'/portfolio'}>projects</Link>.
        </p>
        <p>
          I have made projects in:
          <ul>
            <li>Javascript/NodeJS</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>HTML, CSS, PHP, MySQLi</li>
          </ul>
          Here are some frameworks and other technologies I have worked in:
          <ul>
            <li>React, React-bootstrap, Chartjs</li>
            <li>Gatsby</li>
            <li>Bokeh, Pandas, NumPy</li>
            <li>Pygame</li>
            <li>Apache</li>
            <li>Github, gh-pages</li>
            <li>npm, git bash, pip</li>
          </ul>
        </p>
      </Layout>
    )
  }
}

export default SiteIndex

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
