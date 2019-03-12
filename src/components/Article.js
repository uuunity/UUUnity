import { Fragment } from 'react'
import PropTypes from 'prop-types'
import css from 'styles/basic/components.less'
import moment from 'moment'
import SEO, { ArticleJsonLd } from 'next-seo'
import { i18n } from 'translation/i18n'
import { useTranslation } from 'translation/hook'
import MDXCode from 'components/MDXCode'
import pkg from '../../package.json'

const Article = (props) => {
  const t = useTranslation()
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
        <section className={css.content}>
          <Content components={{ code: MDXCode }} />
        </section>
        <section className={css.authors}>
          {t('author_label')}
          {meta.authors.map(author => (<a key={author.name} href={author.website} className={css.author_link}>{author.name}</a>))}
        </section>
        <section className={css.times}>
          <section className={css.time}>
            {t('created_time_label')}
            {moment(meta.createdTime).format('YYYY/MM/DD')}
          </section>
          <section className={css.time}>
            {t('updated_time_label')}
            {moment(meta.updatedTime).format('YYYY/MM/DD')}
          </section>
        </section>
        <section className={css.from}>
          {t('from_label')}
          <a href={meta.from} className={css.from_link}>{meta.from}</a>
        </section>
        <section className={css.tags}>
          {t('tag_label')}
          {meta.tags.map(tag => (<span key={tag.id} className={css.tag}>{tag[lng]}</span>))}
        </section>
      </article>
    </Fragment>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired
}

export default Article
