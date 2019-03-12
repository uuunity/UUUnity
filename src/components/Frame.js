import { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styles/basic/components.less'
import AppBar from './AppBar'
import SideBar from './SideBar'

const Frame = (props) => {
  const { children } = props
  return (
    <Fragment>
      <AppBar />
      <div className={css.app_content}>
        <SideBar />
        <main className={css.main} role="main">
          {children}
        </main>
      </div>
    </Fragment>
  )
}

Frame.propTypes = {
  children: PropTypes.element.isRequired
}

export default Frame
