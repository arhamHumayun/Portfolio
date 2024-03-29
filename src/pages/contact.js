import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'
import contactData from './../data/contact'

export default class Contact extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`Contact | ${siteTitle}`}
        />

        <h2>Contact</h2>
        <br />

        {Object.keys(contactData).map(key => {
          if (contactData[key]) {
            return (
              <p>
                <b>{key}: </b> {contactData[key]}
              </p>
            )
          }
        })}
      </Layout>
    )
  }
}

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
