import styles from '../styles/components/projects.module.sass'

const ProjectsContainer = () => {
    return (
        <section className={styles.projectContaines}>
            <h2>Projetos</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quas, inventore ad! Ducimus odit
                officiis laborum deserunt. Sint facere repudiandae
                nesciunt cumque asperiores recusandae, quaerat id,
                molestias ullam quas vero sapiente?
            </p>
            <a href="#" className={styles.btn}>
                Ver projetos
            </a>
        </section>
    );
};

export default ProjectsContainer
