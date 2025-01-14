import styles from '../styles/components/infromationContainer.module.sass'
import { Information } from '@/data/information';


const InformationContainer = () => {
    return (
        <section id={styles.informationContainer}>
            {Information.map((info) => (
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
