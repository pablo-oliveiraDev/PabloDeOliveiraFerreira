import styles from '@/styles/components/tecnologies.module.sass';
import MainContent from '@/components/MainContent';
import Head from 'next/head';
import { Technologies,Tools } from '@/data/tecnologies';


const TecnologiesContainer = () => {
    return (
        <MainContent>
            <Head>
                <title>Tecnologias utilizadas</title>
            </Head>
            <section className={styles.technologiesContainer} >
                <h2>Tecnologias</h2>
                <div className={styles.technologiesGrid} >
                    {Technologies.map((tech) => (
                        <div className={styles.technologiesCard}
                            id={tech.id}
                            key={tech.id}
                        >
                            {tech.icon}
                            <div className={styles.technologyInfo}>
                                <h3>{tech.name}</h3>
                                <p>{tech.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <h2>Ferramentas</h2>
                <div className={styles.technologiesGrid} >
                    {Tools.map((tech) => (
                        <div className={styles.technologiesCard}
                            id={tech.id}
                            key={tech.id}
                        >
                            {tech.icon}
                            <div className={styles.technologyInfo}>
                                <h3>{tech.name}</h3>
                                <p>{tech.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </MainContent>

    )
}

export default TecnologiesContainer
