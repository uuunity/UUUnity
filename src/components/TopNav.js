import css from 'styles/basic/components.less'
import { useTranslation } from 'hooks/translation'

const TopNav = () => {
  const t = useTranslation()
  return (
    <div className={css.top_nav}>
      <a href="/" className={css.top_nav_item}>{t('title_home')}</a>
      <a href="/articles" className={css.top_nav_item}>{t('title_article_list')}</a>
      <a href="/about" className={css.top_nav_item}>{t('title_about_us')}</a>
    </div>
  )
}

export default TopNav
