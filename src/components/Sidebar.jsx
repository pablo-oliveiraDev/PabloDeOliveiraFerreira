import avatar from '../../public/image/perfilFundo.png';
import Image from 'next/image';
import SocialNetWorks from './SocialNetWorks';
import InformationContainer from './InformationContainer';
import styles from '../styles/components/sidebar.module.sass';



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
            <a href='https://mega.nz/file/1UVHBaJZ#f8B2nhaYPEx_ISMtI-yWFLBoI8ORfxic0SejHa2S6zc'
            target='_blank' 
            rel='noopener noreferrer'
            className={styles.btn}
            >
                Download Currículo
            </a>
            
        </aside>
    )
}

export default Sidebar
