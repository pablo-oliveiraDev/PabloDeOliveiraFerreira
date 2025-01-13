import MainContent from '../components/MainContent';
import AboutContainer from '../components/AboutContainer';
import Head from 'next/head';


export default function Home() {
  return (

    <MainContent >
      <Head>
        <title>Pablo de Oliveira Ferreira</title>
      </Head>
      <AboutContainer />
    </MainContent>

  )
}
