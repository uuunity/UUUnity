import css from 'styles/basic/components.less'
import ArticleList from './ArticleList'

const SideBar = () => {
  return (
    <div className={css.side_bar}>
      <ArticleList />
    </div>
  )
}

export default SideBar
