import "./TabsSection.scss";
import { arrow_green, arrow_red } from "@/images";
import { useEffect, useState } from "react";
import { tabs_data, tabs_data_2 } from "./TabSection.config";
import axios from "axios";
import { Link } from "@inertiajs/react";
const TabsSection = () => {
    const [Gold, setGold] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    // https://www.nosyapi.com/apiv2/service/economy/calendar
                    // "https://www.nosyapi.com/apiv2/service/economy/live-exchange-rates",
                    "https://www.nosyapi.com/apiv2/service/economy/currency/exchange-rate",
                    {
                        params: {
                            apiKey: "LFSxbMAeJFUfFCNPVFmEBebhMFmQE7Ldwu2lfCSwyvAuEboUVCKw3bzuDhCF",
                            type: "gold",
                        },
                    }
                );
                setGold(response.data);
                // console.log(response.data);
            } catch (error) {
                setError(error);
            }
        };
        const timer = setTimeout(() => {
            fetchData();
        }, 12000);

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
        return () => clearTimeout(timer);
    }, [Gold]);
    const GoldData = Gold.data?.slice(0, 7).map((item, index) => {
        let random = Math.floor(Math.random() * 5);
        const formattedNumber = new Intl.NumberFormat("tr-TR", {
            style: "decimal",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(item?.buying);
        return (
            <>
                <div
                    key={index}
                    className="item d-flex align-items-center justify-content-center"
                >
                    <div className="content d-flex flex-column gap-2">
                        <span className="title">{item?.FullName}</span>
                        <span className="value">{formattedNumber}</span>
                        <div
                            className={`ratio__ ${
                                random > 3 ? "green" : "red"
                            } d-flex align-items-center gap-2`}
                        >
                            <img
                                src={random > 3 ? arrow_green : arrow_red}
                                alt={"arrow-" + index}
                            />
                            <span className="percent__">
                                %{item?.changeRate?.toFixed(2)}
                            </span>
                            <span className="number__">
                                {(item?.selling / 100)?.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        );
    });
    // console.log(Gold);
    const show_items = tabs_data?.map((value, index) => {
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
                                {Gold?.length == 0 ? show_items : GoldData}
                                {/* {GoldData} */}
                                {/* {show_items} */}
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
