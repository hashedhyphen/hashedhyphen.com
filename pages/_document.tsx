import Document, { Head, Main, NextScript } from "next/document"

export default class extends Document {
  render() {
    return (
      <html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-133672456-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-133672456-1');
          `
            }}
          />

          <title>hashedhyphen.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="hashedhyphen.com" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://hashedhyphen.com" />
          <meta
            property="og:image"
            content="https://hashedhyphen.com/static/img/logo.png"
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
