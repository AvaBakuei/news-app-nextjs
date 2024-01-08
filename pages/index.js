import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ImageNews from '../public/news.jpg';
import ImagePopular from '../public/popular.jpg';
import ImageSections from '../public/sections.jpg';
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";


export default function Home() {
    const links = [
        {
            title: "Top Stories",
            desc: "Get articles currently on a section front or the home page.",
            path: '/news/top-stories',
            img: ImageNews,
        },
        {
            title: "Popular",
            desc: "Popular articles on NYTimes.com.",
            path: '/news/popular',
            img: ImagePopular,
        },
        {
            title: "Sections",
            desc: "Real-time feed of NYT article publishes.",
            path: '/sections',
            img: ImageSections,
        }
    ]

    return (
    <div className={styles.container}>
        <Head>
            <title>News App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
            <main className={styles.main}>
                <div className={styles.grid}>
                    {links.map((link)=>(
                        <Link key={link.path} href={link.path}>
                            <a className={styles.card}>
                                <h2 className={styles.title}>{link.title}</h2>
                                <p className={styles.desc}>{link.desc}</p>
                                <Image className={styles.image} width="450" height="250" src={link.img} alt="background"/>
                            </a>
                        </Link>
                    ))}
                </div>
            </main>
        </Layout>

    </div>
  )
}