import { useTranslation } from 'translation/hook'
import css from 'styles/basic/components.less'
import ArticleList from './ArticleList'

const SideBar = () => {
  const t = useTranslation()
  return (
    <div className={css.side_bar}>
      <input className={css.side_bar_search} autoComplete="off" placeholder={t('search_placeholder')} />
      <ArticleList />
    </div>
  )
}

export default SideBar
