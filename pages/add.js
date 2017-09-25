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
    </Head>
    <Header />
    <main>
      <Submit />
    </main>
    <Footer />
  </App>
))
