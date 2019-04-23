import Document, { Head, Main, NextScript } from "next/document"

export default class extends Document {
  render() {
    return (
      <html lang="ja" prefix="og: http://ogp.me/ns#">
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-K2QHWBR');
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
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="/static/css/bundle.css" />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-K2QHWBR"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
