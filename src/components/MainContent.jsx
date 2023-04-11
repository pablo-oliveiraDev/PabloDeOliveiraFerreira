import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TecnologiesContainer'
import styles from '../styles/components/maincontent.module.sass'

const mainContent = () => {
  return (
    <main id={styles.mainContent}>
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default mainContent


