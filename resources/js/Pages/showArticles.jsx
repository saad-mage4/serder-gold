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
            <div key={index} className="col-12 col-md-4 col-lg-3 mb-3">
                <div className="content d-flex gap-3 flex-column p-2">
                    <div className="img">
                        <img src={item.banner} alt={`img-${index}`} />
                    </div>
                    <div className="text px-2">
                        <a
                            className="article-link text-decoration-none text-black"
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
                    <div className="col-12 my-3">
                        <h1 className="text-center">Articles List</h1>
                    </div>
                    {show?.length == 0 ? <h3 className="text-center">No Record Found!</h3> : show}
                </div>
            </div>
        </Layout>
    );
};

export default showArticles;
