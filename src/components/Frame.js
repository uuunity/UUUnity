import { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import css from 'styles/basic/components.less'
import AppBar from './AppBar'
import SideBar from './SideBar'

const TitleContext = createContext('')
export const useTitle = () => useContext(TitleContext)

const Frame = (props) => {
  const { title, hideSideBar, children } = props
  const cssMain = hideSideBar ? css.main_no_side_bar : css.main
  return (
    <TitleContext.Provider value={title}>
      <AppBar />
      <div className={css.app_content}>
        {!hideSideBar && (<SideBar />)}
        <main className={cssMain} role="main">
          {children}
        </main>
      </div>
    </TitleContext.Provider>
  )
}

Frame.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  hideSideBar: PropTypes.bool
}

Frame.defaultProps = {
  title: '',
  hideSideBar: false
}

export default Frame
