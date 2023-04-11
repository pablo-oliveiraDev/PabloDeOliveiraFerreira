import * as SocialIcons from 'react-icons/fa'
import styles from '../styles/components/socilanetworks.module.sass'

const socialNetworks = [
    {
        name: "linkedin",
        icon: <SocialIcons.FaLinkedinIn className={styles.linkedin}
        />, link: 'https://www.linkedin.com/in/pabloliver-dev/'
    },
    {
        name: "GitHub",
        icon: <SocialIcons.FaGithub className={styles.GitHub}
        />, link: 'https://github.com/pablo-oliveiraDev'
    },
    {
        name: "Instagram",
        icon: <SocialIcons.FaInstagram className={styles.Instagram}
        />, link: 'https://www.instagram.com/pablo_oliver.fer/'
    },
    {
        name: "Whatsapp",
        icon: <SocialIcons.FaWhatsapp className={styles.Whatsapp}
        />, link: 'https://wa.link/qefe4u'
    }
];
const SocialNetWorks = () => {
    return (
        <section id={styles.socialNetworks}>
            {socialNetworks.map((network) => (
                <a href={network.link}
                    className={styles.socialBtn}
                    id={network.name}
                    key={network.name}
                    target='_blank'
                >
                    {network.icon}
                </a>
            ))}

        </section>
    )
}

export default SocialNetWorks
