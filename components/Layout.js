import Link from "next/link";
import Image from "next/image";
import searchImg from '../public/search.png';
import styles from "../styles/Layout.module.css";
import {useRouter} from "next/router";
import {useState} from "react";

export default function Layout({ children }){
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "Top",
            path: "/news/top-stories"
        },
        {
            title: "Popular",
            path: "/news/popular"
        },
        {
            title: "Sections",
            path: "/sections"
        }
    ];

    const [query, setQuery] = useState();
    const router = useRouter();

    const handleOnChange = e => setQuery(e.target.value);

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        await router.push(`/search/${query}`)
    }
    return (
        <div className={styles.layout}>
            <header className={styles.header}>
                <h1>News Feed</h1>
                <nav>
                    {links.map((link)=> {
                        const className = link.path === router.asPath ? styles.active : styles.link;
                        return <Link key={link.path} href={link.path}><a className={className}>{link.title}</a></Link>
                    })}
                </nav>
                <form onSubmit={handleOnSubmit} className={styles.form}>
                    <Image src={searchImg} alt="Search Icon" width={20} height={20} />
                    <input type="text" onChange={handleOnChange} placeholder="Search..."/>
                </form>
            </header>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}