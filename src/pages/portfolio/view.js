import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import Layout from './../../components/Layout'

export class view extends Component {
  render() {
    const passedData = this.props.location.state || {
      title: 'default title',
      description: 'default description',
      image: 'https://via.placeholder.com/350',
      website: 'https://via.placeholder.com',
      github: 'https://github.com'
    }
    const { title, description, image, website, github } = passedData
    return (
      <Layout>
        <Helmet>
          <title>{`${title} | Arham Humayun`}</title>
        </Helmet>
        <Link to="/portfolio">&larr; back</Link>
        <h2>{title}</h2>
        <img src={image} />
        <div>
          {description}
          <br /> <br />
          {website && (
            <div>
              Website:{' '}
              <a href={website} target="_new">
                {website}
              </a>
            </div>
          )}
          {github && (
            <div>
              Github:{' '}
              <a href={github} target="_new">
                {github}
              </a>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

export default view
