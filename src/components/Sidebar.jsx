import avatar from '../../public/image/perfilFundo.png';
import Image from 'next/image';
import SocialNetWorks from './SocialNetWorks';
import InformationContainer from './InformationContainer';
import styles from '../styles/components/sidebar.module.sass';
import Link from 'next/link';



function Sidebar() {


    return (
        <aside id={styles.sidebar}>
            <Image
                src={avatar}
                alt='img perfil'

            />
            <p className={styles.title}>Desenvolvedor fullstack</p>
            <SocialNetWorks />
            <InformationContainer />
            <Link href='/curriculo/curriculo2024.pdf'
                target='_blank'
               
                className={styles.btn}
                passHref>
                Download Currículo
            </Link>

        </aside>
    )
}

export default Sidebar
