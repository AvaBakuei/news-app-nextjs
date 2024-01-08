import Layout from "../../components/Layout";
import { results } from "../api";
import Head from "next/head";
import List from "../../components/List";

export default function News(props){
    return (
        <Layout>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <List {...props} />
        </Layout>
    )
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { path: 'top-stories' } },
            { params: { path: 'popular' } },
        ],
        fallback: true
    }
}

const API_KEY = "j3u9U25DsFmcMkA6GLXEZGH7SvAbBF5w";
export async function getStaticProps({ params }) {
    const TOP_STORIES_URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
    const POPULAR_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

    switch (params.path) {
        case 'top-stories':
            return {
                props: {
                    results: await results(TOP_STORIES_URL),
                    title: 'Top Stories'
                }
            }
        case 'popular': {
            return {
                props: {
                    results: await results(POPULAR_URL),
                    title: 'Popular'
                }
            }
        }

        default:
            return {
                props: {
                    results: null
                }
            }
    }
}