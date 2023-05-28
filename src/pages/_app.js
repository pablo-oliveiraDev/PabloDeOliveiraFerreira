import Layout from '@/components/Layout';
import '../styles/main.sass';




export default function App({ Component, pageProps }) {
  return (
    <Layout>     
      < Component {...pageProps} />      
    </Layout>
  )
}
