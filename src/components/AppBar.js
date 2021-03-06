import css from 'styles/basic/components.less'
import { useTitle } from 'components/Frame'
import { useTranslation } from 'translation/hook'
import { GithubAlt } from 'styled-icons/fa-brands/GithubAlt'
import TopNav from './TopNav'
import ChooseLng from './ChooseLng'

const AppBar = () => {
  const t = useTranslation()
  const titleContent = useTitle()
  const title = titleContent !== '' ? `${t('app_title')} - ${titleContent}` : t('app_title')
  return (
    <div className={css.app_bar}>
      <a href="/" className={css.icon_link}>
        <img src="/static/images/logo.png" className={css.app_bar_icon} alt={t('title_home')} />
      </a>
      <h4 className={css.app_bar_title}>{title}</h4>
      <TopNav />
      <div className={css.space_grow} />
      <ChooseLng />
      <a href="https://github.com/uuunity/UUUnity" target="_blank" className={css.icon_link}>
        <GithubAlt className={css.app_bar_icon} />
      </a>
    </div>
  )
}

export default AppBar
