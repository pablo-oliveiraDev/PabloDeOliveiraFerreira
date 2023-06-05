import styles from '../styles/components/maincontent.module.sass';
import Link from 'next/link';
import * as IconsApp from 'react-icons/fa';
import { useRouter } from 'next/router';


const btnApp = [
  {
    name: 'Home',
    icon: <IconsApp.FaHome />,
    url: '/',
  },
  {
    name: 'Tecnologias',
    icon: <IconsApp.FaLaptopCode />,
    url: '/technologies',
  },
  {
    name: 'Portfólio',
    icon: <IconsApp.FaFileCode />,
    url: '/projects',
  },
]
//create selection button on link page = name button


const mainContent = ({ children }) => {
  const pageName = '';
  const router = useRouter();
  const currentUrl = router.asPath;
  function getPageName(link) {
    const url = new URL(link);
    const pathname = url.pathname;
    const pageName = pathname.split('/').pop();
    return pageName;
  }
  
  return (
    <main id={styles.mainContent}>

      {btnApp.map((item, index) => 
      <Link key={index} href={item.url} className={styles.btn}>
          
        {item.icon}<span >{item.name}</span>
      </Link>
      )}

      {children}
    </main>
  )
}

export default mainContent