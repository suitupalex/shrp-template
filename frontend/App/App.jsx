import React from 'react'

import {web as log} from 'log'

import './app.sass'

class App extends React.Component {
  constructor(props) {
    super(props)

    window.app = this

    log('Application started.')
  }

  render() {
    return (
      <div>
        <h1>Sass, Hapi, React, Pug (SHRP) Template</h1>
        <p>
          Boilerplate template for a Sass, Hapi, React, &amp; Pug frontend
          stack.
        </p>
      </div>
    )
  }
}

export default App
