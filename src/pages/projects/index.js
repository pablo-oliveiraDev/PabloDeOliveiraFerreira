import MainContent from '@/components/MainContent';
import Link from 'next/link';
import style from '@/styles/components/projects.module.sass'

export default function Projects() {

    return (
        <MainContent>
            <h2>Portifólio</h2>
            <Link href='/' className={style.btn}>HOME</Link>
        </MainContent>
    )
}


