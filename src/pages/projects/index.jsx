import MainContent from '@/components/MainContent';
import Caroussel from '@/components/Caroussel';
import Link from 'next/link';
import styles from '@/styles/components/projects.module.sass';
import Image from 'next/image';
import { Portifolio} from '@/data/projects';
import Head from 'next/head';

export default function Projects() {

    return (
        <MainContent>
            <Head>
                <title>Portfólio / Projetos</title>
            </Head>
            <h2>Portfólio</h2>
            <section className={styles.projectsContainer} >

                <div className={styles.projectsGrid} >
                    {Object.values(Portifolio).map((item, index) => (
                        <div className={styles.projectsCard}
                            key={index}
                        >
                            <Caroussel images={item.imgProject} />
                            <div className={styles.btnContainer}>
                                    <button className={styles.btnPreview}
                                        disabled={true}
                                    >
                                        <Link href={item.preview}
                                            target='_blank'

                                        >Preview</Link>
                                    </button>
                                    <button className={styles.btnPreview}
                                        disabled={true}
                                    >
                                        <Link href={item.repoFrontUrl || ''}
                                            target='_blank'

                                        >Frontend</Link>
                                    </button>
                                    {
                                        item.repoBacktUrl !== '' && <button className={styles.btnPreview}
                                            disabled={true}
                                        >
                                            <Link href={item.repoBacktUrl || ''}
                                                target='_blank'

                                            >Backend</Link>
                                        </button>
                                    }
                                </div>
                            
                            <div className={styles.projectsInfo}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <span>Status <p>{item.status}</p></span>
                                <span>Tecnologias usadas <p>{item.techUsed}</p></span>

                               
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </MainContent>
    )
}