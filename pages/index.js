import Head from "next/head"
import styles from "@/styles/Home.module.css"
import Header from "../components/Header.js"
import Main from "../components/Main.js"

export default function Home() {
    return (
        <section className={styles.main}>
            <Head>
                <title>Beans Staking</title>
            </Head>
            <Header />
            <Main />
        </section>
    )
}
