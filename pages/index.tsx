const LAUNCHED_YEAR = 2018

const copyrightYearRangeLabel: () => string = () => {
  const thisYear = new Date().getFullYear()
  return thisYear === LAUNCHED_YEAR
    ? `${LAUNCHED_YEAR}`
    : `${LAUNCHED_YEAR}-${thisYear}`
}

export default () => (
  <div className="container">
    <header className="row header">
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
    <main className="row main">
      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <div className="row">
          <h1 className="col-12 p-category-block-title">
            <span className="p-category-block-title__content">Aliases</span>
          </h1>
          <ul className="col-12 p-category-block-list">
            <li className="p-category-block-list__item">
              Hash (@hashedhyphen)
            </li>
            <li className="p-category-block-list__item">加藤 諒 (KATO Ryo)</li>
          </ul>
        </div>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <div className="row">
          <h1 className="col-12 p-category-block-title">
            <span className="p-category-block-title__content">Living as</span>
          </h1>
          <ul className="col-12 p-category-block-list">
            <li className="p-category-block-list__item">
              Freelance web developer
            </li>
          </ul>
        </div>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <div className="row">
          <h1 className="col-12 p-category-block-title">
            <span className="p-category-block-title__content">Skills</span>
          </h1>
          <ul className="col-12 p-category-block-list">
            <li className="p-category-block-list__item">ECMAScript</li>
            <li className="p-category-block-list__item">React</li>
            <li className="p-category-block-list__item">Ruby</li>
            <li className="p-category-block-list__item">Rails</li>
          </ul>
        </div>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <div className="row">
          <h1 className="col-12 p-category-block-title">
            <span className="p-category-block-title__content">Posts</span>
          </h1>
          <ul className="col-12 p-category-block-list">
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
        </div>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <div className="row">
          <h1 className="col-12 p-category-block-title">
            <span className="p-category-block-title__content">Accounts</span>
          </h1>
          <ul className="col-12 p-category-block-list">
            <li className="p-category-block-list__item">
              <a href="https://twitter.com/hashedhyphen">
                <i className="fab fa-twitter" /> Twitter
              </a>
            </li>
            <li className="p-category-block-list__item">
              <a href="https://facebook.com/ryo.kato.hh">
                <i className="fab fa-facebook-square" /> Facebook
              </a>
            </li>
            <li className="p-category-block-list__item">
              <a href="https://github.com/hashedhyphen">
                <i className="fab fa-github" /> GitHub
              </a>
            </li>
            <li className="p-category-block-list__item">
              <a href="https://speakerdeck.com/hashedhyphen">Speaker Deck</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="col-12 col-ms-12 col-md-6 col-lg-4 p-category-block">
        <div className="row">
          <h1 className="col-12 p-category-block-title">
            <span className="p-category-block-title__content">Contacts</span>
          </h1>
          <ul className="col-12 p-category-block-list">
            <li className="p-category-block-list__item">Twitter DM</li>
            <li className="p-category-block-list__item">Facebook Messanger</li>
            <li className="p-category-block-list__item">
              <a href="mail:ryo_kato@hashedhyphen.com">E-mail</a>
            </li>
          </ul>
        </div>
      </section>
    </main>

    <hr />

    <footer className="footer">
      <div>Copyright &copy; {copyrightYearRangeLabel()} Ryo Kato</div>
      <div>
        <a href="https://github.com/hashedhyphen/hashedhyphen.com">
          GitHub repository for this site
        </a>
      </div>
    </footer>
  </div>
)
