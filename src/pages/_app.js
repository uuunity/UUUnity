import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { TranslationContext } from 'translation/hook'
import { appWithTranslation, withNamespaces} from 'translation/i18n'

const InjectTranslation = withNamespaces('common')(({t, children}) => (<TranslationContext.Provider value={t}>{children}</TranslationContext.Provider>))

class UuunityApp extends App {
  static async getInitialProps ({ Component, router, ctx, query }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps: { ...pageProps, namespacesRequired: ['common'] } }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Uuunity</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
        </Head>
        <InjectTranslation>
          <Component {...pageProps} />
        </InjectTranslation>
      </Container>
    )
  }
}

export default appWithTranslation(UuunityApp)
