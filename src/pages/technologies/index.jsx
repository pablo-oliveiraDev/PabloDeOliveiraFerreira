import * as techIcons from 'react-icons/di';
import { SiBootstrap, SiTypescript, SiVercel } from 'react-icons/si';
import { TbBrandVercel } from 'react-icons/tb';
import styles from '@/styles/components/tecnologies.module.sass';
import MainContent from '@/components/MainContent';
import Head from 'next/head';


const technologies = [
    {
        id: 'html',
        name: 'HTML5',
        icon: <techIcons.DiHtml5 className={styles.html} />,
        description: '(Linguagem de Marcação de Hipertexto) é o código que você usa para estruturar uma página web e seu conteúdo'
    },
    {
        id: 'css',
        name: 'CSS3',
        icon: <techIcons.DiCss3 className={styles.css} />,
        description: 'Cascading Style Sheets, ou seja, Folhas de Estilo em Cascatas. É uma maneira de dar estilo ao código'
    },
    {
        id: 'js',
        name: 'JavaScript',
        icon: <techIcons.DiJsBadge className={styles.javaScript} />,
        description: 'é uma linguagem de programação que permite a você implementar itens complexos em páginas web'
    },
    {
        id: 'node',
        name: 'Node.Js',
        icon: <techIcons.DiNodejsSmall className={styles.node} />,
        description: 'um ambiente de execução do código JavaScript do lado servidor (server side)'
    },
    {
        id: 'react',
        name: 'React.Js',
        icon: <techIcons.DiReact className={styles.react} />,
    description: 'é uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis'
    },
    {
        id: 'sass',
        name: 'Sass',
        icon: <techIcons.DiSass className={styles.sass} />,
        description: 'uma ferramenta poderosa que ajuda a tornar o processo de escrita de estilos mais eficiente e produtivo.'
    },
    {
        id: 'mysql',
        name: 'MySQL',
        icon: <techIcons.DiMysql className={styles.mysql} />,
    description: 'um Sistema de gerenciamento de banco de dados, que usa a linguagem SQL como interface'
    },
    {
        id: 'sql',
        name: 'SQL',
        icon: <techIcons.DiSqllite className={styles.sql} />,
    description: '(Struct Query Language) é uma linguagem padrão para a manipulação de dados dentro de um SGBD desenvolvida pela IBM'
    },
    {
        id: 'typeScript',
        name: 'TypeScript',
        icon: <SiTypescript className={styles.typeScript} />,
    description: 'uma linguagem de programação de código aberto desenvolvida pela Microsoft que é uma extensão do JavaScript'
    },
    {
        id: 'next',
        name: 'Next.Js',
        icon: <TbBrandVercel className={styles.next} />,
    description: 'é um framework usado com a biblioteca React.js,Ele atribui várias funcionalidades à React'
    },
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        icon: <SiBootstrap className={styles.bootstrap} />,
    description: 'é um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.'
    },
];

const tools = [
    {
        id: 'firebase',
        name: 'Firebase',
        icon: <techIcons.DiFirebase className={styles.firebase} />,
   description: 'é uma plataforma digital da Google utilizada para facilitar o desenvolvimento de aplicativos web ou mobile de maneira ágil e simples.'
    },
    {
        id: 'mongoDb',
        name: 'MongoDb',
        icon: <techIcons.DiMongodb className={styles.mongoDb} />,
    description: ' um banco de dados opensource, de alta performance e flexível, sendo considerado o principal banco de dados NoSQL.'
    },
    {
        id: 'postgres',
        name: 'Postgres',
        icon: <techIcons.DiPostgresql className={styles.postgres} />,
    description: 'consiste em um processo de servidor que lê e grava os arquivos de banco de dados reais, utilizando o Psql e sql para consultas.'
    },
    {
        id: 'docker',
        name: 'Postgres',
        icon: <techIcons.DiDocker className={styles.docker} />,
        description: 'facilita a criação e administração de ambientes isolados. Ele possibilita o empacotamento de uma aplicação em containers.'
    },
]
const TecnologiesContainer = () => {
    return (
        <MainContent>
            <Head>
                <title>Tecnologias utilizadas</title>
            </Head>
            <section className={styles.technologiesContainer} >
                <h2>Tecnologias</h2>
                <div className={styles.technologiesGrid} >
                    {technologies.map((tech) => (
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
                    {tools.map((tech) => (
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
