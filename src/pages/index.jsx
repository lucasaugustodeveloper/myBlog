import React from 'react'
import { Link } from 'gatsby'

const HomePage = () => (
  <div>
    <h1>Home Page</h1>

    <ul>
      <li>
        <Link to='about'>About</Link>
      </li>
    </ul>
  </div>
)

export default HomePage
