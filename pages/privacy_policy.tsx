import Head from "next/head"
import Link from "next/link"

export default () => (
  <div className="container l-container">
    <Head>
      <title>プライバシーポリシー | hashedhyphen.com</title>
    </Head>
    <header>
      <h1 className="p-privacy-policy-title">
        <span className="p-privacy-policy-title__content">
          プライバシーポリシー
        </span>
      </h1>
    </header>
    <main className="l-main">
      <p>
        当サイトでは、サイトの利用状況を解析するため、Google
        社のアクセス解析ツール「Google アナリティクス」を利用しています。
      </p>
      <p>
        この Google アナリティクスはトラフィックデータの収集のために Cookie
        を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
      </p>
      <p>
        Google アナリティクスでデータが収集、処理される仕組みについて、ならびに
        Google によるデータ収集を停止する方法については
        <a href="https://policies.google.com/technologies/partner-sites?hl=ja">
          こちら
        </a>
        を参照してください。
      </p>
      <Link href="/">
        <a>トップページに戻る</a>
      </Link>
    </main>
  </div>
)
