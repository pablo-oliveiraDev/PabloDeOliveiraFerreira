import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import styles from '../styles/app.module.sass'
import Head from 'next/head';



export default function Home() {
  return (
    <div id={styles.portfolio} >
      <Head>
        <title>Pablo de Oliveira Ferreira</title>
        <meta name='description' content='Site com o conteudo e informações porfissionais
           de Pablo de Oliveira Ferreira
            na função de desenvolvedor !' />
      </Head>
      <h1>Pablo de Oliveira Ferreira</h1>
      <Sidebar />
      <MainContent />


    </div>
  )
}
