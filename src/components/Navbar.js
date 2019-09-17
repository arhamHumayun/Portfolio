import React, { Component } from 'react'
import { Link } from 'gatsby'
import { rhythm } from './../utils/typography'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 500,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Link to={'/'}>Home</Link>
          <Link to={'/portfolio'}>Projects</Link>
          <a href={'https://github.com/arhamHumayun'} target="_new">
            Github
          </a>
          <Link to={'/contact'}>Contact</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
