import MainContent from '@/components/MainContent';
import Link from 'next/link';
import style from '@/styles/components/projects.module.sass';
import Head from 'next/head';

const projects=[
    {
        titulo:'',
        repoUrl:'',
        preview:'',
        techUsed:'',
        status:'',

    }
]
export default function Projects() {

    return (
        <MainContent>
            <Head>
                <title>Portifólio / Projetos</title>
            </Head>
            <h2>Portifólio</h2>
           
        </MainContent>
    )
}


