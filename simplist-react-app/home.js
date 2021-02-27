'use strict'

const e = React.createElement

class Home extends React.Component {

  render() {

    return (
      'Welcome home.'
    )

  }
}

const domContainer = document.querySelector('#home_container')
ReactDOM.render(e(Home), domContainer)