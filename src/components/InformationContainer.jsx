import styles from '../styles/components/infromationContainer.module.sass'
import * as InforIcons from 'react-icons/ai'

const information = [
    {
        name: 'phoneIcon',
        icon: <InforIcons.AiFillPhone className={styles.phoneIcon} />,
        infor: '(22)99986-2084',
        description: 'Telefone'
    },
    {
        name: 'emailIcon',
        icon: <InforIcons.AiOutlineMail className={styles.emailIcon} />,
        infor: 'pabloliverfe@gmail.com',
        description: 'E-mail'
    },
    {
        name: 'pinIcon',
        icon: <InforIcons.AiFillEnvironment className={styles.pinIcon} />,
        infor: 'Itaperuna, Rio de Janeiro,Brasil',
        description: 'Localização'
    }
]
const InformationContainer = () => {
    return (
        <section id={styles.informationContainer}>
            {information.map((info) => (
                <div key={info.name} id={styles.infoCard}>
                    {info.icon}
                    <div>
                        <h3>{info.description}</h3>
                        <p>{info.infor}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default InformationContainer
