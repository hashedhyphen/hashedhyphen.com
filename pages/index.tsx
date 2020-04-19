import Head from "next/head"
import Link from "next/link"

import GitHubCorner from "../components/GitHubCorner"

export default () => (
  <div className="container l-container">
    <Head>
      <title>hashedhyphen.com</title>
    </Head>

    <header className="row">
      <h1 className="col-12 p-page-title">
        <span className="p-page-title__content">hashedhyphen.com</span>
      </h1>

      <div className="col-12 p-avatars">
        <div className="row">
          <div className="col-4 offset-2 col-sm-3 offset-sm-3 col-md-2 offset-md-4">
            <img
              className="img-fluid rounded-circle"
              src="/static/img/logo.png"
              alt="ロゴ"
            />
          </div>
          <div className="col-4 col-sm-3 col-md-2">
            <img
              className="img-fluid rounded-circle"
              src="/static/img/photo.jpg"
              alt="近影"
            />
          </div>
        </div>
      </div>
    </header>
    <main className="row l-main">
      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <h1 className="p-category-block-title">
          <span className="p-category-block-title__content">Aliases</span>
        </h1>
        <ul className="p-category-block-list">
          <li className="p-category-block-list__item">
            <span className="p-alias-item">
              <span className="p-alias-item__first">Hash</span>
              <span className="p-alias-item__second">@hashedhyphen</span>
            </span>
          </li>
          <li className="p-category-block-list__item">
            <span className="p-alias-item">
              <span className="p-alias-item__first">加藤 諒</span>
              <span className="p-alias-item__second">KATO Ryo</span>
            </span>
          </li>
        </ul>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <h1 className="p-category-block-title">
          <span className="p-category-block-title__content">Living as</span>
        </h1>
        <ul className="p-category-block-list">
          <li className="p-category-block-list__item">
            Web developer
          </li>
        </ul>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <h1 className="p-category-block-title">
          <span className="p-category-block-title__content">Skills</span>
        </h1>
        <ul className="p-category-block-list">
          <li className="p-category-block-list__item">ECMAScript, React</li>
          <li className="p-category-block-list__item">Go</li>
          <li className="p-category-block-list__item">Kubernetes</li>
          <li className="p-category-block-list__item">Ruby, Rails</li>
        </ul>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <h1 className="p-category-block-title">
          <span className="p-category-block-title__content">Posts</span>
        </h1>
        <ul className="p-category-block-list">
          <li className="p-category-block-list__item">
            <a href="https://diary.hashedhyphen.com/">
              Hashed Diary (non-tech blog)
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="https://mozsec-jp.hatenablog.jp/">
              Mozilla Security Blog 日本語版
            </a>
          </li>
        </ul>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <h1 className="p-category-block-title">
          <span className="p-category-block-title__content">Accounts</span>
        </h1>
        <ul className="p-category-block-list">
          <li className="p-category-block-list__item">
            <a href="https://twitter.com/hashedhyphen">
              <i className="c-icon fab fa-twitter" /> Twitter
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="https://keybase.io/hashedhyphen">
              <i className="c-icon fab fa-keybase" /> Keybase
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="https://facebook.com/ryo.kato.hh">
              <i className="c-icon fab fa-facebook-square" /> Facebook
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="https://github.com/hashedhyphen">
              <i className="c-icon fab fa-github" /> GitHub
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="https://speakerdeck.com/hashedhyphen">
              <i className="c-icon fab fa-speaker-deck" /> Speaker Deck
            </a>
          </li>
        </ul>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <h1 className="p-category-block-title">
          <span className="p-category-block-title__content">Contacts</span>
        </h1>
        <ul className="p-category-block-list">
          <li className="p-category-block-list__item">
            <a href="https://twitter.com/messages/compose?recipient_id=3322540525">
              <i className="c-icon fab fa-twitter" /> Twitter DM
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="https://m.me/ryo.kato.hh">
              <i className="c-icon fab fa-facebook-messenger" /> Facebook
              Messanger
            </a>
          </li>
          <li className="p-category-block-list__item">
            <a href="mailto:me@hashedhyphen.com">
              <i className="c-icon far fa-paper-plane" /> E-mail
            </a>
          </li>
        </ul>
      </section>
    </main>

    <footer className="l-footer">
      <span>&copy; 2018 Ryo Kato</span>
      <span className="rounded-circle p-footer-separator" />
      <Link href="/privacy_policy">
        <a>Privacy Policy</a>
      </Link>
    </footer>

    <GitHubCorner />
  </div>
)
