import React from 'react'
import articles from 'articles/files'
import { i18n } from 'translation/i18n'
import moment from 'moment'
import Frame from 'components/Frame'
import ArticleList from 'components/ArticleList'
import Article from 'components/Article'
import Error from './_error'

class ArticleSystem extends React.Component {
  static async getInitialProps ({ query }) {
    return { ...this.props, url: { query } }
  }

  render() {
    const articleId = this.props.url.query.articleId
    const lng = i18n.language

    if (!articleId || !articles[articleId]) return (<Error statusCode={404} />)
    else return (<Frame title={articles[articleId][lng].meta.title}><Article article={articles[articleId][lng]} /></Frame>)
  }
}

export default ArticleSystem
