import * as InforIcons from 'react-icons/ai';
import styles from '../styles/components/infromationContainer.module.sass';

export const Information = [
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