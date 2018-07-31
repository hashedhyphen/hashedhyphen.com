import Document, { Head, Main, NextScript } from "next/document"

export default class extends Document {
  render() {
    const lang: string = "ja"

    return (
      <html lang={lang} prefix="og: http://ogp.me/ns#">
        <Head>
          <title>hashedhyphen.com</title>
          <meta property="og:title" content="hashedhyphen.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hashedhyphen.com" />
          <meta
            property="og:image"
            content="https://hashedhyphen.com/static/logo.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
