import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html lang="en">
        <Head>
          <meta charSet='utf-8' />
          <meta name="viewport" content="width=device-width, minimum-scale = 1.0, initial-scale = 1.0, maximum-scale = 5.0, user-scalable=yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="Tiny House Blueprint" />
          <link rel="manifest" href="../static/manifest.json" />
          <link rel="icon" href="../static/favicon/favicon.ico" />
          <meta name="theme-color" content="#269" />
          {this.props.head}
          {styleTags}
        </Head>

        <body>
          <div className="root">
            {main}
          </div>

          <NextScript />
        </body>
      </html>
    )
  }
}
