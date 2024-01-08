import Layout from "../../components/Layout";
import { handler, results } from "../api";
import Head from "next/head";
import List from "../../components/List";

export default function Section(props){
    return (
        <Layout>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <List {...props}/>
        </Layout>
    )
}
const API_KEY = "j3u9U25DsFmcMkA6GLXEZGH7SvAbBF5w";

export async function getStaticPaths() {
    const results = await handler(`https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`)
    return {
        paths: results?.map(result => {
            return { params : { section : result.section }}
        }),
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const data = await results(`https://api.nytimes.com/svc/news/v3/content/nyt/${params.section}.json?api-key=${API_KEY}`)

    return {
        props: {
            results: data,
            title: params.section
        }
    }
}