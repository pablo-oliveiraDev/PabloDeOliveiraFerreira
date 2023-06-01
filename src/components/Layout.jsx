import Sidebar from './Sidebar';
import MainContent from './MainContent';
import styles from '../styles/app.module.sass'
import Head from 'next/head';

import React from 'react'

const Layout = ({ children }) => {
    return (
        <div id={styles.portfolio} >
            <Head>
               
                <meta name='description' content='Site com o conteudo e informações profissionais
                de Pablo de Oliveira Ferreira
                 na função de desenvolvedor !' />
            </Head>
            <h1>Pablo de Oliveira Ferreira</h1>
            <Sidebar />
            {children}


        </div>
    )
}

export default Layout
