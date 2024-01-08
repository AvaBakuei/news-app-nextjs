import Layout from "../../components/Layout";
import { handler } from "../api";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Section.module.css";

export default function Index({ results, title }){
    return (
        <Layout>
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>{title}</h1>
                <ul className={styles.list}>
                    {results?.map((result)=>(
                        <li key={result.section} className={styles.card}>
                            <Link className={styles.link} href={`sections/${result.section}`}>
                                <a target="_blank" rel="noreferrer">{result.display_name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </Layout>
    )
}

const API_KEY = "j3u9U25DsFmcMkA6GLXEZGH7SvAbBF5w";
export async function getStaticProps() {

    return {
        props: {
            results: await handler(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`),
            title: "Sections"
        }
    }
}