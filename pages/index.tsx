import Head from 'next/head'

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>啊我死了.啦</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">AWSL.LA</h1>
    </main>

    <footer>
      <div>
        啊<span>à</span>我<span>wǒ</span>死<span>sǐ</span>了<span>le</span>
      </div>
    </footer>

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer span {
        color: #9d9d9d;
        font-size: 0.8rem;
        padding: 0 0.2rem;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
        letter-spacing: 2rem;
      }

      .title {
        text-align: center;
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        color: #6c6c6c;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
