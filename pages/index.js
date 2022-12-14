import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Talent from '../components/Talent'
import Work from '../components/Work'
import Contact from '../components/Contact'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Tushar-Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Main />
      <About />
      <Talent />
      <Work />
      <Contact />
    </div>
      
  )
}
