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
  const { asPath } = useRouter();


  return (
    <main id={styles.mainContent}>

      {btnApp.map((item, index) =>
        <Link className={asPath === item.url ? styles.active : ""} href={item.url} key={index}>
          <button className={asPath === item.url ? styles.active : styles.btn} >
            {item.icon}<span >{item.name}</span>
          </button>
        </Link>
      )}

      {children}
    </main>
  )
}

export default mainContent