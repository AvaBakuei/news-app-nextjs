import Layout from "../../components/Layout";
import { search } from "../api";
import List from "../../components/List";

export default function News(props) {

    return(
        <Layout>
            <List {...props} />
        </Layout>
    )
}


const API_KEY = "j3u9U25DsFmcMkA6GLXEZGH7SvAbBF5w";
export async function getServerSideProps({ params }) {
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
    const results = await search(URL);
    return {
        props: { results }
    }
}