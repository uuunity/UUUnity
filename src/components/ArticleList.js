import css from 'styles/basic/components.less'
import articles from 'articles/files'
import tags from 'articles/tags'
import { i18n } from 'translation/i18n'

const ArticleList = () => {
  const lng = i18n.language
  return Object.values(tags)
    .reduce((array, tag) => {
      const articleTagIsTag = articleTag => articleTag.id === tag.id
      const articleHasTag = article => article.meta.tags.find(articleTagIsTag) !== undefined

      const topicItem = (<h6 className={css.topicItem} key={`tag_${tag.id}`}>{tag[lng]}</h6>)
      const articleItems = Object.values(articles)
        .map(article => article[lng])
        .filter(articleHasTag)
        .map(article => (<a className={css.articleItem} key={`${tag.id}_${article.meta.id}`} href={`/p/${article.meta.id}`}>{article.meta.title}</a>))

      return array.concat([topicItem, ...articleItems])
    }, [])
}

export default ArticleList
