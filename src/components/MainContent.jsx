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
    icon: <IconsApp.FaLaptopCode />,
    url: '/technologies',   
  },
  {
    name: 'Projetos / portifólio',
    icon: <IconsApp.FaFileCode />,
    url: '/projects',    
  },
]

const mainContent = ({ children }) => {
  return (
    <main id={styles.mainContent}>
      {btnApp.map((btn,index) =>
        <Link key={index} href={btn.url} className={styles.btn}>
          {btn.icon}<span>{btn.name}</span>
        </Link>
      )}
      {children}
    </main>
  )
}

export default mainContent


