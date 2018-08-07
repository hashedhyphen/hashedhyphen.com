import Document, { Head, Main, NextScript } from "next/document"

export default class extends Document {
  render() {
    return (
      <html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          <title>hashedhyphen.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="hashedhyphen.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hashedhyphen.com" />
          <meta
            property="og:image"
            content="https://hashedhyphen.com/static/logo.png"
          />
          <link rel="stylesheet" href="/static/bundle.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
