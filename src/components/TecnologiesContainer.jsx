import * as techIcons from 'react-icons/di'
import { SiBootstrap, SiTypescript } from 'react-icons/si'
import styles from '../styles/components/tecnologies.module.sass'

const technologies = [
  { id: 'html', name: 'HTML5', icon: <techIcons.DiHtml5 className={styles.html} /> },
  { id: 'css', name: 'CSS3', icon: <techIcons.DiCss3 className={styles.css} /> },
  { id: 'js', name: 'JavaScript', icon: <techIcons.DiJsBadge className={styles.javaScript} /> },
  { id: 'node', name: 'Node.Js', icon: <techIcons.DiNodejsSmall className={styles.node} /> },
  { id: 'react', name: 'React', icon: <techIcons.DiReact className={styles.react} /> },
  { id: 'sass', name: 'Sass', icon: <techIcons.DiSass className={styles.sass} /> },
  { id: 'mysql', name: 'MySQL', icon: <techIcons.DiMysql className={styles.mysql} /> },
  { id: 'sql', name: 'SQL', icon: <techIcons.DiSqllite className={styles.sql} /> },
  { id: 'typeScript', name: 'TypeScript', icon: <SiTypescript className={styles.typeScript} /> },
  { id: 'bootstrap', name: 'Bootstrap', icon: <SiBootstrap className={styles.bootstrap} /> },
];

const tools = [
  { id: 'firebase', name: 'Firebase', icon: <techIcons.DiFirebase className={styles.firebase} /> },
  { id: 'mongoDb', name: 'MongoDb', icon: <techIcons.DiMongodb className={styles.mongoDb} /> },
  { id: 'postgres', name: 'Postgres', icon: <techIcons.DiPostgresql className={styles.postgres} /> },
  { id: 'docker', name: 'Postgres', icon: <techIcons.DiDocker className={styles.docker} /> },
]
const TecnologiesContainer = () => {
  return (
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
              <p>description of the technology</p>
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
              <p>description of the technology</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}

export default TecnologiesContainer
