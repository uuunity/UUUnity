import React from 'react'
import Error from 'next/error'
import articles from 'articles/files'
import { i18n } from 'translation/i18n'
import moment from 'moment'
import Frame from 'components/Frame'
import ArticleList from 'components/ArticleList'
import Article from 'components/Article'

class ArticleSystem extends React.Component {
  static async getInitialProps ({ query }) {
    return { ...this.props, url: { query } }
  }

  render() {
    const articleId = this.props.url.query.articleId
    const lng = i18n.language

    if (!articleId) return (<Frame><ArticleList /></Frame>)
    if (!articles[articleId]) return (<Frame><Error statusCode={404} /></Frame>)
    else return (<Frame title={articles[articleId][lng].meta.title}><Article article={articles[articleId][lng]} /></Frame>)
  }
}

export default ArticleSystem
