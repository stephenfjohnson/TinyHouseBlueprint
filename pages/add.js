import App from '../components/App'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Submit from '../components/Submit'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Head>
      <title>Add 🏠</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <main>
      <Submit />
    </main>
    <Footer />
  </App>
))
