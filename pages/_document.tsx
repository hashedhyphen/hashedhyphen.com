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
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
            integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/static/css/bundle.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
