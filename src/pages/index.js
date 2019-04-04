import css from 'styles/basic/components.less'
import Frame from 'components/Frame'
import ArticleList from 'components/ArticleList'

const Home = () => {
  return (
    <Frame hideSideBar>
      <div className={css.home_content}>
        <div className={css.home_side_space} />
        <div className={css.home_main}>
          <ArticleList />
        </div>
        <div className={css.home_side_space} />
      </div>
    </Frame>
  )
}

export default Home
