import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import styles from './layout.module.css'

const coverImgs = {
    '/': '/images/IMG_8479.jpeg',
}

const Layout = ({ children, pagetype })=> {
    const router = useRouter()
    return (
        <div className={styles.container}>
            <Head>
                <title>Cathelijne de Man</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header
                pagetype={pagetype}
                imageUrl={coverImgs[router.asPath] ?? '/images/IMG_8479.jpeg'}
            />
            <main>
                {children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout