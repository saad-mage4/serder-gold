import Layout from "@/Layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function ArticleDetails({ auth, id }) {
    const [title, getTitle] = useState("");
    const [desc, getDesc] = useState("");
    const [banner, getBanner] = useState("");

    useEffect(() => {
        axios
            .get(`/get-articles-details/${id}`)
            .then((res) => {
                getTitle(res.data.title);
                getBanner(res.data.banner);
                getDesc(res.data.description);
            })
            .catch((error) => console.log(error));
    }, []);
    console.log(banner);
    return (
        <>
            <Layout user={auth.user}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center my-3">Article Detail</h1>
                        </div>
                        <div className="col-12 text-center">
                            <img
                                className="d-block mx-auto my-2"
                                src={`../${banner}`}
                                alt={title}
                            />
                            <h2 className="mb-3">{title}</h2>
                            <p>{desc}</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
