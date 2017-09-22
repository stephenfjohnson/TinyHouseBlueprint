import Head from 'next/head'
import App from '../components/App'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Submit from '../components/Submit'
import Search from '../components/Search'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import SearchButtons from '../components/SearchButtons'
import PostList from '../components/PostList'
import withData from '../lib/withData'

export default withData((props) => (
  <App>
    <Head>
      <title>🏠 Tiny House Blueprint</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <main>
      <Hero />
      <Search />
      <SearchButtons />
      <Cards />
    </main>
    <Footer />
  </App>
))
