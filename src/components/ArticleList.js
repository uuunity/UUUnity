import { useState } from 'react'
import { useDebounce } from 'react-use'
import css from 'styles/basic/components.less'
import articles from 'articles/files'
import tags from 'articles/tags'
import { i18n } from 'translation/i18n'
import { useTranslation } from 'translation/hook'

const ArticleList = () => {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  useDebounce(() => setDebouncedSearch(search), 300, [search])
  const t = useTranslation()
  const lng = i18n.language
  const topicItems = Object.values(tags)
    .filter(tag => search === '' || tag[lng].toLowerCase().indexOf(debouncedSearch) >= 0)
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

  return (
    <div className={css.article_list}>
      <input className={css.article_list_search} autoComplete="off" placeholder={t('search_placeholder')} onChange={(e) => setSearch(e.target.value.toLowerCase())} />
      {topicItems}
    </div>
  )
}

export default ArticleList
