import React from 'react'
import Error from 'next/error'
import articles from 'articles/files'
import { i18n } from 'translation/i18n'
import moment from 'moment'
import ArticleList from 'components/ArticleList'
import Article from 'components/Article'

class ArticleSystem extends React.Component {
  static async getInitialProps ({ query }) {
    return { ...this.props, url: { query } }
  }

  render() {
    const articleId = this.props.url.query.articleId
    const lng = i18n.language

    if (!articleId) return (<ArticleList />)
    if (!articles[articleId]) return (<Error statusCode={404} />)
    else return (<Article article={articles[articleId][lng]} />)
  }
}

export default ArticleSystem
