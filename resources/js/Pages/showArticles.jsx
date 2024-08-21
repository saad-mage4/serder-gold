import Layout from "@/Layouts/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

const showArticles = ({ auth }) => {
    const [articles, getArticles] = useState([]);

    useEffect(() => {
        axios
            .get("/get-articles")
            .then((res) => {
                getArticles(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const show = articles?.map((item, index) => {
        //   let len = articles.length;
        return (
            <div key={index} className="mb-3 col-12 col-md-4 col-lg-3">
                <div className="gap-3 p-2 content d-flex flex-column">
                    <div className="img">
                        <img src={item.banner} alt={`img-${index}`} />
                    </div>
                    <div className="px-2 text">
                        <a
                            className="text-black article-link text-decoration-none"
                            data-id={item.id}
                            href={`/ArticleDetails/${item.id}`}
                        >
                            <h3 className="fs-4">{item.title}</h3>
                        </a>
                        <p className="fs-5">{item.description}</p>
                    </div>
                </div>
            </div>
        );
    });

    console.log(show);

    return (
        <Layout user={auth.user}>
            <div className="container show_articles">
                <div className="row">
                    <div className="my-3 col-12">
                        <h1 className="text-center black-bg-head">Articles List</h1>
                    </div>
                    {show?.length > 0 ? show : <h3 className="text-center black-bg-head">No Record Found!</h3>}
                </div>
            </div>
        </Layout>
    );
};

export default showArticles;
