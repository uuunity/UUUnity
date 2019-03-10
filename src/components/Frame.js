import { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styles/basic/components.less'
import { useTranslation } from 'hooks/translation'
import { GithubAlt } from 'styled-icons/fa-brands/GithubAlt'
import TopNav from './TopNav'

const Frame = (props) => {
  const t = useTranslation()
  const { children } = props
  return (
    <Fragment>
      <div className={css.app_bar}>
        <a href="/" className={css.icon_link}>
          <img src="/static/images/logo.png" className={css.app_bar_icon} />
        </a>
        <h4 className={css.app_bar_title}>{t('app_title')}</h4>
        <TopNav />
        <div className={css.space_grow} />
        <a href="https://github.com/goro19980502/UUUnity" target="_blank" className={css.icon_link}>
          <GithubAlt className={css.app_bar_icon} />
        </a>
      </div>
      {children}
    </Fragment>
  )
}

Frame.propTypes = {
  children: PropTypes.element.isRequired
}

export default Frame
