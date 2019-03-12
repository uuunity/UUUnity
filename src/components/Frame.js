import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import css from 'styles/basic/components.less'
import AppBar from './AppBar'
import SideBar from './SideBar'

const TitleContext = createContext('')
export const useTitle = () => useContext(TitleContext)

const Frame = (props) => {
  const { title, children } = props
  return (
    <TitleContext.Provider value={title}>
      <AppBar />
      <div className={css.app_content}>
        <SideBar />
        <main className={css.main} role="main">
          {children}
        </main>
      </div>
    </TitleContext.Provider>
  )
}

Frame.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string
}

Frame.defaultProps = {
  title: ''
}

export default Frame
