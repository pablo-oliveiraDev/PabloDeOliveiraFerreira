import MainContent from '@/components/MainContent';
import Caroussel from '@/components/Caroussel';
import Link from 'next/link';
import styles from '@/styles/components/projects.module.sass';
import Image from 'next/image';
import Head from 'next/head';
//images
import imgsharenergy2023 from '@/assets/image/photodProjects/appsharenergy2023.png';
import imgchamados from '@/assets/image/photodProjects/projetoChamados.png';
import imgnewmarkwting from '@/assets/image/photodProjects/projetoNewMarketing.png';
import imgxpto from '@/assets/image/photodProjects/projetoXpto.png';
import imgxpto2 from '@/assets/image/photodProjects/projet-xpto2.jpg';
import imgCo3d from '@/assets/image/photodProjects/testeLivros.png';
import co3d2 from '@/assets/image/photodProjects/co3d-2.jpg';
import co3d3 from '@/assets/image/photodProjects/co3d-3.jpg';
import co3d4 from '@/assets/image/photodProjects/co3d-4.jpg';
import co3d5 from '@/assets/image/photodProjects/co3d-5.jpg';
import imgventura from '@/assets/image/photodProjects/venturaPage.jpg';
import imgventura2 from '@/assets/image/photodProjects/venturaPage2.jpg';
import imgventura3 from '@/assets/image/photodProjects/venturaPage3.jpg';
import imgventura4 from '@/assets/image/photodProjects/venturaPage4.jpg';
import imgventura5 from '@/assets/image/photodProjects/venturaPage5.png';
import imgwcl from '@/assets/image/photodProjects/wclPage.png';
import imgwcl2 from '@/assets/image/photodProjects/wcl-2.jpg';
import imgwcl3 from '@/assets/image/photodProjects/wcl-3.jpg';
import imgwcl4 from '@/assets/image/photodProjects/wcl-4.jpg';
import blackJack1 from '@/assets/image/photodProjects/blackJack-Lose.jpg'
import blackJack2 from '@/assets/image/photodProjects/blackJack-start.jpg'


const projects =
    [
        {
            name: 'App-Sharenergy2023',
            description: 'App criado para um teste onde a era necessário conectar e exibir dados de várias apis diferentes com cadastro onde só cadastrados podem acessar o conteúdo',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/FrSharenergy2023',
            repoBacktUrl: 'https://github.com/pablo-oliveiraDev/api-sharenergy2023',
            preview: 'https://app-sharenergy2023.netlify.app/',
            techUsed: 'NodeJS, Typescript, MongoDB, Javascript, Api Rest, ReactJS, React hooks, Context, ... ',
            status: 'Terminado',
            imgProject: [
                <Image src={imgsharenergy2023} alt='img port' id={styles.imgProject} priority={true} />
            ]

        },
        {
            name: 'App Chamados',
            description: 'App criado para me ajudar no meus chamados para manutenção de computadores e impressoras, com cadastro e login de usuários .',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/sistema-chamados',
            repoBacktUrl: '',
            preview: 'https://app-chamados.netlify.app/',
            techUsed: 'Javascript, NodeJS, Firebase, Api Rest, ReactJS, React hooks, Context',
            status: 'Terminado',
            imgProject: [
                <Image src={imgchamados} alt='img port' id={styles.imgProject} priority={true} />,
            ]

        },
        {
            name: 'App New Marketing',
            description: 'Criado para melhorar o marketing digita e divulgação de links a pagina redireciona e gera uma lista de lead que tiveram interesse no produto',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/NewMarketing/tree/master',
            repoBacktUrl: '',
            preview: 'https://app-newmarketing.netlify.app/',
            techUsed: 'Javascript, NodeJS, Firebase, Api Rest, ReactJS, React hooks, Context',
            status: 'Terminado',
            imgProject: [
                <Image src={imgnewmarkwting} alt='img port' id={styles.imgProject} priority={true} />,
            ]
        },
        {
            name: 'Landing page Xpto',
            description: 'Landing page simples criado para um cliente aqui da minha região um dos meus primeiros projetos criado como freelancer',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/projeto_landing-page',
            repoBacktUrl: '',
            preview: 'https://pablo-oliveiradev.github.io/projeto_landing-page/',
            techUsed: 'Javascript, CSS',
            status: 'Terminado',
            imgProject: [
                <Image src={imgxpto} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgxpto2} alt='img port' id={styles.imgProject} priority={true} />,
            ]
        },
        {
            name: 'Landing page WCL',
            description: 'Landing page simples criado para um cliente aqui da minha região um dos meus primeiros projetos criado ajudar a divulgar a academia e local',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/wcl-fusion-page/tree/master',
            repoBacktUrl: '',
            preview: 'https://pablo-oliveiradev.github.io/wcl-fusion-page/',
            techUsed: 'Javascript, CSS',
            status: 'Terminado',
            imgProject: [
                <Image src={imgwcl} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgwcl2} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgwcl3} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgwcl4} alt='img port' id={styles.imgProject} priority={true} />,
            ]
        },
        {
            name: 'Teste Co3d',
            description: 'Um teste apresentado para uma empresa onde o intuito era cadastrar os livros e mostrar os cadastrados com pesquisa e paginação de itens e também com favoritos, consumindo uma API rest com mongoDB,node ',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/testeFrontCo3d',
            repoBacktUrl: 'https://github.com/pablo-oliveiraDev/testeApiBackEndCo3d',
            preview: 'https://app-co3d.netlify.app/',
            techUsed: 'Javascript, NodeJS, MongoDB, Api Rest, ReactJS, React hooks, Context',
            status: 'Terminado',
            imgProject: [
                <Image src={imgCo3d} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={co3d2} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={co3d3} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={co3d4} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={co3d5} alt='img port' id={styles.imgProject} priority={true} />,
            ]
        },
        {
            name: 'App Ventura',
            description: 'Projeto Criado para um cliente de refrigeração para ajudar no atendimento online com cadastro e agendamento de visita apos confirmação do proprietário, consumindo uma API em node.js',
            repoFrontUrl: 'https://github.com/pablo-oliveiraDev/venturaPage',
            repoBacktUrl: 'https://github.com/pablo-oliveiraDev/api-node-refriventura',
            preview: 'https://venturapage.netlify.app/',
            techUsed: 'Javascript, NodeJS, Firebase, Api Rest, ReactJS, React hooks, Context,Styled-Components',
            status: 'Em construção',
            imgProject: [
                <Image src={imgventura} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgventura2} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgventura3} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgventura4} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={imgventura5} alt='img port' id={styles.imgProject} priority={true} />,
            ]
        },
        {
            name: 'Black jack',
            description: 'Projeto criado para meu portfolio mudando o foco para um web game baseado em blackjack, também para não ficar parado e produzir algo diferente para o meu portfolio ',
            repoFrontUrl: '',
            repoBacktUrl: '',
            preview: '',
            techUsed: 'Javascript, NodeJS, Firebase, ReactJS, React hooks, Context,Sass module, NextJS',
            status: 'Em construção',
            imgProject: [
                <Image src={blackJack1} alt='img port' id={styles.imgProject} priority={true} />,
                <Image src={blackJack2} alt='img port' id={styles.imgProject} priority={true} />                
            ]
        },
    ];
export default function Projects() {

    return (
        <MainContent>
            <Head>
                <title>Portfólio / Projetos</title>
            </Head>
            <h2>Portfólio</h2>
            <section className={styles.projectsContainer} >

                <div className={styles.projectsGrid} >
                    {projects.map((item, index) => (
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