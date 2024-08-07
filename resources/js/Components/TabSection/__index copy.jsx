import "./TabsSection.scss";
import { arrow_green, arrow_red } from "@/images";
import { useEffect, useMemo, useState } from "react";
import { tabs_data, tabs_data_2 } from "./TabSection.config";
import axios from "axios";
import { Link } from "@inertiajs/react";
const TabsSection = () => {
    const [Gold, setGold] = useState([]);
    const [error, setError] = useState("");
    // const [activeTab, setAciveTab] = useState("active1");

    // const ActiveTabs = (tab) => {
    //     tab.forEach((val)=>{
    //       active{val}
    //     });
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.metalpriceapi.com/v1/latest",
                    {
                        params: {
                            api_key: "9f521c77991aa6f8df41930d77d4a802",
                            base: "TRY",
                        },
                    }
                );
                console.log('ABC: ', response.data.rates);
                setGold(response.data.rates);
            } catch (error) {
                setError(error);
            }
        };

        fetchData();

        const links = document.querySelectorAll(".tabs-links a");
        const tabs = document.querySelectorAll(".stock-tabs .col-12");

        links.forEach((link, index) => {
            if (index != 7) {
                link.addEventListener("click", function (event) {
                    event.preventDefault();

                    const id = this.getAttribute("data-id");

                    tabs.forEach((tab, tabIndex) => {
                        if (tabIndex === index) {
                            tab.classList.remove("d-none");
                        } else {
                            tab.classList.add("d-none");
                        }
                    });

                    links.forEach((link) => {
                        link.classList.remove("active");
                    });
                    this.classList.add("active");
                });
            }
        });
    }, []);
    
    // const show_itmes = tabs_data.map((value, index) => {
    //     return (
    //         <div
    //             key={index}
    //             className="item d-flex align-items-center justify-content-center"
    //         >
    //             <div className="content d-flex flex-column gap-2">
    //                 <span className="title">{value.title}</span>
    //                 <span className="value">{value.rates}</span>
    //                 <div
    //                     className={`ratio__ ${
    //                         value.status == "up" ? "green" : "red"
    //                     } d-flex align-items-center gap-2`}
    //                 >
    //                     <img
    //                         src={value.status == "up" ? arrow_green : arrow_red}
    //                         alt={"arrow-" + value.status}
    //                     />
    //                     <span className="percent__">{value.percent}</span>
    //                     <span className="number__">{value.number}</span>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // });

    const show_items = (Object.entries(Gold).slice(0,7)?.map(([key, value]) => {
        return(
            <div
                        key={key}
                        className="item d-flex align-items-center justify-content-center"
                    >
                        <div className="content d-flex flex-column gap-2">
                            <span className="title">{key}</span>
                            <span className="value">{value.toFixed(4)}</span>
                            <div
                                className={`ratio__ ${
                                    value.status == "up" ? "green" : "red"
                                } d-flex align-items-center gap-2`}
                            >
                                <img
                                    src={value.status == "up" ? arrow_green : arrow_red}
                                    alt={"arrow-" + value.status}
                                />
                                <span className="percent__">{value.percent ?? "%1,27"}</span>
                                <span className="number__">{value.number ?? "11,25"}</span>
                            </div>
                        </div>
                    </div>  
        )
    }))
    
    const show_itmes_2 = tabs_data_2.map((value, index) => {
        return (
            <div
                key={index}
                className="item d-flex align-items-center justify-content-center"
            >
                <div className="content d-flex flex-column gap-2">
                    <span className="title">{value.title}</span>
                    <span className="value">{value.rates}</span>
                    <div
                        className={`ratio__ ${
                            value.status == "up" ? "green" : "red"
                        } d-flex align-items-center gap-2`}
                    >
                        <img
                            src={value.status == "up" ? arrow_green : arrow_red}
                            alt={"arrow-" + value.status}
                        />
                        <span className="percent__">{value.percent}</span>
                        <span className="number__">{value.number}</span>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className="tabs-wrapper bg-custom-dark py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="tabs-links d-flex gap-5 pb-2">
                                <a data-id="1" href="#!" className="active">
                                    Ana sayfa
                                </a>
                                <a data-id="2" href="#!">
                                    Altin fiyatlari
                                </a>
                                <a data-id="3" href="#!">
                                    Altin cevirici
                                </a>
                                <a data-id="4" href="#!">
                                    Haberler
                                </a>
                                <a data-id="5" href="#!">
                                    Doviz
                                </a>
                                <a data-id="6" href="#!">
                                    Uzman yorumlari
                                </a>
                                <a data-id="7" href="#!">
                                    Community
                                </a>
                                {/* <a href={route('showArticles')}> */}
                                <Link href="/showArticles">Articles</Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 stock-tabs">
                        <div className="col-12">
                            <div className="tabs-content d-grid gap-5">
                                {/* items start */}
                                {show_items}
                                {/* items end */}
                            </div>
                        </div>
                        <div className="col-12 d-none">
                            <div className="tabs-content d-grid gap-5">
                                {/* items start */}
                                {show_itmes_2}
                                {/* items end */}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="left-info d-flex align-items-center gap-5">
                                <h5 className="info-title">SON HABERLER</h5>
                                <p>JPMorgan gelirlerini yüzde 9 artirdi</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right-info">
                            <a href="#!" className="all-news">
                                Tüm Haberler
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TabsSection;
