import React from "react"

import Profile from './profile'

const Layout = ({ children }) => {
  return (
    <div>
      <main>
        <aside>
          <Profile />
        </aside>
        {children}
      </main>
    </div>
  )
}

export default Layout
