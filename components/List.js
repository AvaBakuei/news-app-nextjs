import Image from "next/image";
import moment from 'moment';
import styles from "../styles/List.module.css";
import arrowImg from '../public/arrow-right.png';
import {useState} from "react";
import Pagination from "./Pagination";
import paginate from "./Paginate";

export default function List({ results, title}) {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;
    const onPageChange = (page) => {
        setCurrentPage(page);
    }
    const paginatedNews = paginate(results, currentPage, pageSize);
    return(
        <main className={styles.main}>
            <h1>{title}</h1>
            <ul className={styles.list}>
                {paginatedNews?.map(({title, url, uri, img, subsection, published_date, byline, abstract})=>(
                    <li key={uri} className={styles.card}>
                        <div className={styles.header}>
                            {subsection && <span className={styles.subsection}>{subsection}</span>}
                            <Image className={styles.img} src={img} alt={title} width="450" height="300"/>
                        </div>
                        <div className={styles.body}>
                            <div className={styles.detail}>
                                <span className={styles.date}>{moment(published_date).subtract(10, 'days').calendar()}</span>
                                <span>{byline}</span>
                            </div>
                            <div className={styles.content}>
                                <h2>{title}</h2>
                                <p> {abstract}</p>
                            </div>
                        </div>
                        <a className={styles.link} href={url} rel="noreferrer nofollower">
                            <span>Read More</span>
                            <Image src={arrowImg} alt="Arrow Icon" width={20} height={20} />
                        </a>
                    </li>
                ))}
            </ul>
            <Pagination
                items={results.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
            />
        </main>
    )
}
