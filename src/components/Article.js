import { Fragment } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import SEO, { ArticleJsonLd } from 'next-seo'
import { i18n } from 'translation/i18n'
import pkg from '../../package.json'

const Article = (props) => {
  const { article } = props
  const { default: Content, meta } = article
  const url = `${pkg.homepage}/p/${meta.id}`
  const imageUrl = `${pkg.homepage}/static/images/logo.png`
  const lng = i18n.language

  const seo = {
    title: meta.title,
    description: meta.description,
    canonical: url,
    openGraph: {
      url,
      title: meta.title,
      description: meta.description,
      type: 'article',
      article: {
        publishedTime: meta.createdTime,
        modifiedTime: meta.updatedTime,
        section: meta.id,
        authors: meta.authors.map(author => author.website),
        tags: meta.tags.map(tag => tag[lng])
      },
      images: [
        {
          url: imageUrl,
          width: 300,
          height: 300,
          alt: 'UUUnity'
        }
      ],
      site_name: 'UUUnity'
    }
  }

  const jsonLd = {
    url,
    title: meta.title,
    images: [imageUrl],
    datePublished: moment(meta.createdTime).format(),
    dateModified: moment(meta.updatedTime).format(),
    authorName: meta.authors[0].name,
    publisherName: meta.authors[0].name,
    publisherLogo: imageUrl,
    description: meta.description
  }

  return (
    <Fragment>
      <SEO config={seo} />
      <article>
        <ArticleJsonLd {...jsonLd} />
        <Content />
      </article>
    </Fragment>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired
}

export default Article
