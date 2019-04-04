import React from 'react'
import ErrorPage from 'next/error'
import Frame from 'components/Frame'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <Frame>
        <ErrorPage { ...this.props } />
      </Frame>
    )
  }
}

export default Error
