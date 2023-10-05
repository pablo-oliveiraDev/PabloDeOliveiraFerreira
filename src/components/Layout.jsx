import Sidebar from './Sidebar';
import styles from '../styles/app.module.sass'
import Head from 'next/head';

import React from 'react'

const Layout = ({ children }) => {
    const interact = 11
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

            <div className={styles.bolhas}>
                <span className={styles.effect1} ></span>
                <span className={styles.effect2} ></span>
                <span className={styles.effect3} ></span>
                <span className={styles.effect4} ></span>
                <span className={styles.effect5} ></span>
                <span className={styles.effect6} ></span>
                <span className={styles.effect7} ></span>
                <span className={styles.effect8} ></span>
                <span className={styles.effect9} ></span>
                <span className={styles.effect10} ></span>
                <span className={styles.effect11} ></span>
                <span className={styles.effect12} ></span>
                <span className={styles.effect13} ></span>
                <span className={styles.effect14} ></span>
                <span className={styles.effect15} ></span>
                <span className={styles.effect16} ></span>
                <span className={styles.effect17} ></span>
                <span className={styles.effect18} ></span>
                <span className={styles.effect19} ></span>
                <span className={styles.effect20} ></span>
                <span className={styles.effect21} ></span>
                <span className={styles.effect22} ></span>
                <span className={styles.effect23} ></span>
                <span className={styles.effect24} ></span>

            </div>
        </div>
    )
}

export default Layout
