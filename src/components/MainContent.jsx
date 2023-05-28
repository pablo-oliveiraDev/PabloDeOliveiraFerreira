import styles from '../styles/components/maincontent.module.sass';
import Link from 'next/link';
import * as IconsApp from 'react-icons/fa';


const btnApp = [
  {
    name: 'Home',
    icon: <IconsApp.FaHome />,
    url: '/',   
  },
  {
    name: 'Tecnologias',
    icon: <IconsApp.FaHome />,
    url: '/technologies',   
  },
  {
    name: 'Home',
    icon: <IconsApp.FaHome />,
    url: '/',   
  },
]

const mainContent = ({ children }) => {
  return (
    <main id={styles.mainContent}>
      {btnApp.map((btn) =>
        <Link href={btn.url} className={styles.btn}>
          {btn.icon}<span>{btn.name}</span>
        </Link>
      )}
      {children}
    </main>
  )
}

export default mainContent


