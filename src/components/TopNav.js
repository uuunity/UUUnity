import css from 'styles/basic/components.less'
import { useTranslation } from 'translation/hook'

const TopNav = () => {
  const t = useTranslation()
  return (
    <div className={css.top_nav}>
      <a href="/p" className={css.top_nav_item}>{t('title_article_list')}</a>
      <a href="/about" className={css.top_nav_item}>{t('title_about_us')}</a>
    </div>
  )
}

export default TopNav
