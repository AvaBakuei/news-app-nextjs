import Image from "next/image";
import {useRouter} from "next/router";
import gif from '../public/not-found.gif';
import Layout from "../components/Layout";

export default function NotFound() {
    const router = useRouter();
    const goBack = () => {
        router.back()
    }
    return (
        <Layout>
            <div>
                <a href="#" onClick={goBack}>Back</a>
            </div>
            <div className="container">
                <h1>Sorry we could not find what you are looking for!</h1>
                <Image src={gif} alt="Not Found"/>
                <style jsx>
                    {`
                        .container {
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                        }
                    `}
                </style>
            </div>
        </Layout>
    )
}