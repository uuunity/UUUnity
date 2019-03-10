import Document, { Html, Head, Main, NextScript } from 'next/document'
import css from 'styles/basic/components.less'

class UuunityDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className={css.no_margin}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default UuunityDocument
