import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Northfield is a great place to ski!" />
        <p className="description">
          Make more changes by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
